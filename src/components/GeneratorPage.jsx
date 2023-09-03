import React, { useState, useRef } from 'react';

const GeneratorPage = () => {
  const [generatedContent, setGeneratedContent] = useState('Generated Output');
  const [selectedOption, setSelectedOption] = useState('Abstract');
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
  const editorRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchGeneratedContent = async (prompt, type) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/${type}/${prompt}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching generated content:', error);
      return '';
    }
  };

  const updateGeneratedContent = async () => {
    if (inputValue) {
      const generatedContent = await fetchGeneratedContent(inputValue, selectedOption.toLowerCase());
      setGeneratedContent(generatedContent);
    } else {
      setGeneratedContent('Generated Output');
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
    console.log("salma");

  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    console.log("salma");
    setIsDropdownOpen(false); // Close the dropdown when an option is selected
  };
  

  const handleCopyToClipboard = () => {
    editorRef.current.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
  };

  return (
    <>
      <div className="wrapper">
        <div className="title">Scientific Article Generator</div>
        <div className="description">
          Generate specific sections of your research paper. Start by selecting which part of the paper you want to generate using the dropdown below. For example, you can request an abstract by providing the title of your research paper, such as <i>"Can you give me an abstract for my research paper with the Title: GLA-GCN: Global-local Adaptive Graph Convolutional Network for 3D Human?"</i>
        </div>
        <div className="search_box">
          <div className="dropdown">
            <div className={`default_option ${isDropdownOpen ? 'active' : ''}`} id="selected-option" onClick={toggleDropdown}>
              {selectedOption}
            </div>
            {isDropdownOpen && (
  <ul>
    <li onClick={() => handleOptionChange('Abstract')} id="abstract-option">
      Abstract
    </li>
    <li onClick={() => handleOptionChange('Introduction')} id="introduction-option">
      Introduction
    </li>
    <li onClick={() => handleOptionChange('Conclusion')} id="conclusion-option">
      Conclusion
    </li>
    <li onClick={() => handleOptionChange('Sections')}>Sections</li>
  </ul>
)}

          </div>
          <div className="search_field">
            <input
              type="text"
              className="input"
              placeholder="Enter the title of your research paper..."
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="generate_button" onClick={updateGeneratedContent}>
          Generate
        </button>
        <div className="container">
          <div className="generated_content" id="generated-content" style={{ textAlign: 'left', fontSize: '20px', marginBottom: '10px', marginTop: '25px' }}>
            {generatedContent}
          </div>
          <div id="editparent">
            <div id="editControls">
              {/* ... (the rest of your code remains unchanged) */}
            </div>
            <div
              id="editor"
              contentEditable
              ref={editorRef}
            ></div>
            <textarea
              name="ticketDesc"
              id="editorCopy"
              required="required"
              style={{ display: 'none' }}
            ></textarea>
          </div>
        </div>

        <footer id="footer">
          <p className="text-center">This app was built by <a href="https://3dsmartfactory.csit.ma/" target="_blank" rel="noopener noreferrer">3D Smart Factory</a> interns</p>
        </footer>
      </div>
    </>
  );
};

export default GeneratorPage;