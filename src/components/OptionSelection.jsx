// OptionSelection.jsx
import React from "react";
import QandA from "../components/assests/img2.jpg";
import GrammerCorrection from "../components/assests/img3.jpg";
import PdfSummarise from "../components/assests/img4.jpg";
import TexttoPdfGenerator from "../components/assests/img5.jpg";
import Englishtootherlanguages from "../components/assests/img6.jpg";
import Explaincode from "../components/assests/img7.jpg";
import JavaScripttoPython from "../components/assests/img8.jpg";
import WeatherForecasting from "../components/assests/img9.jpg";
const OptionSelection = ({ arrayItems, selectOption }) => {
  const handleOptionClick = (item) => {
    if (item.id === "Pdf") {
      // Set the selected option for further processing, if needed
      window.location.href = "https://text-summariser-hp2paybrmsth37ognrimtl.streamlit.app/";
    }else if (item.id === "LanguageTrans") {
      // Set the selected option for further processing, if needed
      window.location.href = "https://translatorforlanguage.netlify.app/";
    }
    else if (item.id === "grammarcorrection") {
      // Set the selected option for further processing, if needed
      window.location.href = "https://grammarcorrection.netlify.app/";
    }  
    //https://weatherforecastweek.netlify.app/
    else if (item.id === "weather") {
      // Set the selected option for further processing, if needed
      window.location.href = "https://weatherforecastweek.netlify.app/";
    } 
    else if (item.id === "summary") {
      // Set the selected option for further processing, if needed
      window.location.href = "https://notes2pdfgenerator.netlify.app/";
    } 
    else {
      // Continue with the normal option selection
      selectOption(item);
    }
  };

  return (
    <div className="grid-main">
      {arrayItems.map((item) => (
        <div
          key={item.option}
          className="grid-child"
          onClick={() => handleOptionClick(item)}
        >
           {item.id === "q&a" && (
              <img src={QandA} alt="Image" />
            )}
            {item.id === "grammarcorrection" && (
              <img src={GrammerCorrection} alt="Image" />
            )}
            {item.id === "Pdf" && (
              <img src={PdfSummarise} alt="Image" />
            )}
            {item.id === "summary" && (
              <img src={TexttoPdfGenerator} alt="Image" />
            )}
            {item.id === "LanguageTrans" && (
              <img src={Englishtootherlanguages} alt="Image" />
            )}
            {item.id === "explainCode" && (
              <img src={Explaincode} alt="Image" />
            )}
            {item.id === "jstopy" && (
              <img src={JavaScripttoPython} alt="Image" />
            )}
            {item.id === "weather" && (
              <img src={WeatherForecasting} alt="Image" />
            )}
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default OptionSelection;