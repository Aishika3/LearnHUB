/*import React from "react";
import "./Translation.css"; // Make sure to import your styles

export default function Translation({ doStuff, setInput, result, arrayItems, selectOption }) {
  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Generate
      </button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}*/
// PdfPage.jsx
// Translation.jsx
import React from "react";
import ReactDOMServer from 'react-dom/server';
import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import "./Translation.css";

export default function Translation({ doStuff, setInput, result, item }) {
  const handleGenerate = () => {
    if (item.id === 'pdf') {
      const printElement = ReactDOMServer.renderToString(
        <>
          <h1>JSX to PDF Convert Example</h1>
          <h2>{input}</h2>
        </>
      );

      html2pdf().from(printElement).save();
    } else {
      doStuff();
    }
  };

  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={handleGenerate}>
        {item.id === 'pdf' ? 'Generate PDF' : 'Generate'}
      </button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
