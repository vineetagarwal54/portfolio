const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const resumePath = path.resolve(__dirname, '..', 'public', 'Resume1.pdf');

if (!fs.existsSync(resumePath)) {
  console.error('Resume not found at', resumePath);
  process.exit(1);
}

(async () => {
  try {
    const dataBuffer = fs.readFileSync(resumePath);
    const data = await pdf(dataBuffer);
    // Print to stdout so the caller can capture the full text
    console.log(data.text);
  } catch (err) {
    console.error('Failed to extract PDF text:', err);
    process.exit(2);
  }
})();
