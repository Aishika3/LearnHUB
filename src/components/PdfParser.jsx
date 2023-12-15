// PdfParser.jsx
// PdfParser.jsx
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfParser = ({ pdfFile, onTextExtracted }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleTextExtracted = (text) => {
    onTextExtracted(text);
  };

  return (
    <div>
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            onLoadSuccess={(page) => handleTextExtracted(page.getText())}
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfParser;