import React, { useState } from 'react';

const TextForm = ({ showAlert, mode }) => {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Text is converted to uppercase.!!!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Text is converted to lowercase..!!!", "success");
  };

  const handleonclear = () => {
    let newText = '';
    setText(newText);
    showAlert("Text is cleared!!!", "success");
  };

  const handelundo = () => {
    // Implement undo functionality
    showAlert("Last text retrieved..!!!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("All Extra spaces are removed from the text.", "success");
  };

  const handlereplace = (findText, replaceText) => {
    let newText = text.replaceAll(findText, replaceText);
    setText(newText);
    showAlert("Text Replaced successfully.!!!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text Copied to Clipboard.!!!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    showAlert("Speaking....", "success");
  };

  const btnstyle = (mode) => {
    switch(mode) {
      case 'purple':
        return {
          backgroundColor: '#59359a',
          color: 'white'
        };
      case 'dark':
        return {
          backgroundColor: '#343a40',
          color: 'white'
        };
      default:
        return {
          backgroundColor: '#0d6efd',
          color: 'white'
        };
    }
  };

  const textstyle = (mode) => {
    switch(mode) {
      case 'purple':
        return {
          color: '#59359a'
        };
      case 'dark':
        return {
          color: 'white'
        };
      default:
        return {
          color: 'black'
        };
    }
  };

  return (
    <>
      <div className="container" style={textstyle(mode)}>
        <h1 className='mb-4'>Enter the text to analyze below</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={textstyle(mode)}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} style={btnstyle(mode)}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} style={btnstyle(mode)}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleonclear} style={btnstyle(mode)}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelundo} style={btnstyle(mode)}>
          UNDO
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} style={btnstyle(mode)}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} style={btnstyle(mode)}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak} style={btnstyle(mode)}>
          Speak
        </button>
      </div>
      <div className="container my-3" style={textstyle(mode)}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes needed</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview.!!"}</p>
      </div>
    </>
  );
};

export default TextForm;