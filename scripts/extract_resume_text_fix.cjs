const fs = require('fs');
const path = require('path');

const resumePath = path.resolve(__dirname, '..', 'public', 'Resume1.pdf');

if (!fs.existsSync(resumePath)) {
  console.error('Resume not found at', resumePath);
  process.exit(1);
}

(async () => {
  try {
    // require may return a module object; handle both default and direct export
    const pdfModule = require('pdf-parse');
    const pdf = pdfModule && (pdfModule.default || pdfModule);
    const dataBuffer = fs.readFileSync(resumePath);
    const data = await pdf(dataBuffer);
    console.log(data.text);
  } catch (err) {
    console.error('Failed to extract PDF text:', err);
    process.exit(2);
  }
})();
