// FileInput.jsx
// PdfPage.jsx
// PdfPage.jsx
// PdfPage.jsx
/*import React, { useState } from 'react';
import PdfParser from './PdfParser';
import TextSummary from './TextSummary';

const PdfPage = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfText, setPdfText] = useState('');

  const handleFileChange = (file) => {
    setPdfFile(file);
  };

  const handleTextExtracted = (text) => {
    setPdfText(text);
  };

  return (
    <div className="pdf-container">
      <label className="pdf-label">Upload PDF:</label>
      <input type="file" accept=".pdf" onChange={(e) => handleFileChange(e.target.files[0])} className="pdf-input" />

      {pdfFile && (
        <div>
          <PdfParser pdfFile={pdfFile} onTextExtracted={handleTextExtracted} />
          <TextSummary pdfText={pdfText} />
        </div>
      )}
    </div>
  );
};

export default PdfPage;

*/
// PdfPage.jsx
import React, { useState } from 'react';
import './PdfPage.css'; // Import the CSS file for styling

const PdfPage = ({ onFileChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileChange(file);
  };

  return (
    <div className="pdf-container">
      <label className="pdf-label">Upload PDF:</label>
      <input type="file" accept=".pdf" onChange={handleFileChange} className="pdf-input" />
    </div>
  );
};

export default PdfPage;
/*import React, { useState } from 'react';
import pdfParse from 'pdf-parse'; // Correct import statement
import Summarizer from 'node-summarizer';
import './PdfPage.css'; // Import the CSS file for styling

const PdfPage = ({ onFileChange }) => {
  const [summary, setSummary] = useState('');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    onFileChange(file);

    const dataBuffer = await file.arrayBuffer();
    const data = await pdfParse(dataBuffer);
    const summarizer = new Summarizer(data.text);
    const summary = await summarizer.summarize();
    setSummary(summary.sentences.join(' '));
  };

  return (
    <div className="pdf-container">
      <label className="pdf-label">Upload PDF:</label>
      <input type="file" accept=".pdf" onChange={handleFileChange} className="pdf-input" />
      <p>{summary}</p>
    </div>
  );
};

export default PdfPage;
*/