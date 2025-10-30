const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist');

// Tell pdfjs-dist where the worker scripts are
pdfjsLib.GlobalWorkerOptions.workerSrc = require.resolve('pdfjs-dist/build/pdf.worker.js');

const resumePath = path.resolve(__dirname, '..', 'public', 'Resume1.pdf');

if (!fs.existsSync(resumePath)) {
  console.error('Resume not found at', resumePath);
  process.exit(1);
}

async function getPageText(page) {
  const textContent = await page.getTextContent();
  return textContent.items
    .map(item => item.str)
    .join(' ')
    .replace(/\s+/g, ' ');
}

async function extractText() {
  try {
    const dataBuffer = fs.readFileSync(resumePath);
    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(dataBuffer) });
    const pdfDocument = await loadingTask.promise;
    
    const numPages = pdfDocument.numPages;
    const textPromises = [];
    
    for (let i = 1; i <= numPages; i++) {
      const page = await pdfDocument.getPage(i);
      textPromises.push(getPageText(page));
    }
    
    const pageTexts = await Promise.all(textPromises);
    console.log(pageTexts.join('\n\n'));
  } catch (err) {
    console.error('Failed to extract PDF text:', err);
    process.exit(2);
  }
}

extractText();