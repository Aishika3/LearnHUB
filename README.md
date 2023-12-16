# LearnHub

LearnHub is a comprehensive educational multi-model chatbot designed to enhance the learning experience through various functionalities. Developed various bots and web pages, here bots were made using Streamlit, Python,leveraging Hugging Face models,various libraries . LearnHub offers a versatile set of features to cater to diverse learning needs.

# Various bots or features available:
1. Q&A Assistance:
LearnHub provides a powerful Q&A module, allowing learners to seek solutions to miscellaneous questions. The chatbot, built using Streamlit and Python, utilizes Hugging Face models to access and deliver accurate answers promptly.

2. Grammar Correction Bot:
As a writing assistant, LearnHub incorporates a Grammar Correction Bot that offers real-time suggestions for spelling, grammatical errors, and punctuation mistakes. Made by intregating the Grammarly SDK with the CKEditor Classic Editor which enhances the correction capabilities, ensuring polished written content.

3. PDF to Text Summarizer:
The PDF to Text Summarizer feature enables users to generate summaries from uploaded PDFs or text inputs. Developed with Streamlit and Python, it employs the txtai library for text summarization and PyPDF2 for efficient text extraction from PDFs.

4. Notes to PDF Generation:
LearnHub facilitates the conversion of notes provided as text in the user input area into PDF format. This feature is provide through a web page which streamlines the process of creating organized and shareable PDF documents.

5. Language Translator:
The Language Translator web page allows learners to change the language of user input. This feature fosters language exploration and facilitates understanding by providing translations across various languages.

6. Explain Code:
LearnHub aids learners in comprehending code snippets with the Explain Code feature. Utilizing Streamlit, Python, and Hugging Face models, it delivers insights into the functionality and structure of given code.

7. JavaScript to Python Conversion:
This feature enables the conversion of code from JavaScript or any other coding language to Python or other coding languages. It supports language flexibility, making it easier for learners to transition between coding languages.

8. Weather Forecasting Web Page:
Leveraging the OpenWeatherAPI, LearnHub allows users to check the weather forecast for the next 7 days or details for the entire week. The Weather Forecasting Web Page provides valuable insights for planning and learning conditions.

9. Reminder Email Creation:
LearnHub enhances learning effectiveness by enabling users to create reminder emails. Integrated into the navbar section using the emailjs library, users can schedule and receive reminder emails to stay organized.

10. Light and Dark Mode Toggling:
LearnHub prioritizes user experience with a dynamic Light and Dark Mode Toggling feature. Users can seamlessly switch between light and dark themes, enhancing visual comfort and flexibility during learning sessions. This aesthetic customization ensures a pleasant interface tailored to individual preferences.

## Installation and APIs used

# LearnHub
```bash
   npx create-react-app EducateAI
   cd EducateAI
   npm install react react-dom
   npm install html2pdf.js
   npm install react react-dom react-router-dom
   npm install openai
   npm install react-pdf
   npm install @react-pdf-viewer
   npm install file-loader
   npm install node-summary
   npm install natural
   npm install @emailjs/browser
   
   API call:-

   const doStuff = async () => {
  let object = { ...option, prompt: input };
  const response = await openai.createCompletion(object);
  setResult(response.data.choices[0].text);
};

   
```

# Q&Ans Bot

```bash
  pip install wget
  pip install streamlit
  pip install langchain
  pip install llama_index
```
# Grammar Correction

```bash
   CKEditor Classic Editor Integration:
   The CKEditor Classic Editor is included using the CDN link provided in the <script> tag.
   Grammarly Text Editor SDK Integration:

   The Grammarly Text Editor SDK is included using the provided CDN link in the <script> tag.
   Grammarly Plugin Integration:

The Grammarly Text Editor SDK is configured using the Grammarly.init().then promise.
The Grammarly plugin is added to the CKEditor instance using the addPlugin method.

``` 

# PDF Summariser


```bash
   pip install streamlit
   pip install txtai
   pip install PyPDF2

```
# Text to Pdf generator 

```bash
  No Installation required

```

# English to other Languages

```bash
   API used:-https://mymemory.translated.net/doc/spec.php(MyMemory Translation api)
```
# Explain Code

```bash
   pip install wget
  pip install streamlit
  pip install langchain
  pip install llama_index   
```
# Javascript to Python

```bash
   pip install wget
   pip install streamlit
   pip install langchain
   pip install llama_index
```

# Weather Forecasting

```bash
   API used:-OpenWeatherAPI
```

# Email Reminder Notification

```bash
   npm install styled-components
   npm install @emailjs/browser

```
## Deployment

To deploy this project run

```bash
  npm run dev
  npm run build
```
Sites which are already made and hosted used are displayed here with their respective github urls:-

1.https://text-summariser-hp2paybrmsth37ognrimtl.streamlit.app/ and https://github.com/Aishika3/Text-summariser


2.https://translatorforlanguage.netlify.app/ and https://github.com/Aishika3/Language_Translator


3.https://grammarcorrection.netlify.app/ and https://github.com/Aishika3/GrammarCorrection


4.https://weatherforecastweek.netlify.app/ and https://github.com/Aishika3/Weatherify


5.https://notes2pdfgenerator.netlify.app/ and https://github.com/Aishika3/Notes2PDF-Generator


6.https://2op9asp4kxzspdujdr8zxy.streamlit.app/ and https://github.com/Aishika3/bot



