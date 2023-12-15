// TextSummary.jsx
import React, { useEffect, useState } from 'react';
import SummaryTool from 'node-summary';

const TextSummary = ({ pdfText }) => {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    summarizeText(pdfText);
  }, [pdfText]);

  const summarizeText = (text) => {
    SummaryTool.summarize('', text, (err, summary) => {
      if (!err) {
        setSummary(summary);
      } else {
        console.error('Error summarizing text:', err);
      }
    });
  };

  return (
    <div>
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
};

export default TextSummary;
