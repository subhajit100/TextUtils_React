import React, {useState} from "react";

export default function TextForm(props) {
    const getWordsLength = () => {
      return text.split(/\s+/).filter(element => element.length!==0).length;
    };

    const handleUpClick = () => {
        // console.log("button for uppercase clicked");
        let newText = text.toUpperCase() ;
        setText(newText);
        props.showAlert("Changed to upper case", "success");
    }

    const handleLoClick = () => {
        // console.log("button for lowercase clicked");
        let newText = text.toLowerCase() ;
        setText(newText);
        props.showAlert("Changed to lower case", "success");
    }

    const handleCapClick = () => {
        // console.log("button for Capitalised case clicked");
        let newTextArr = text.toLowerCase().split(" ");
        newTextArr.forEach((element, index) => {
            newTextArr[index] = element.charAt(0).toUpperCase() + element.slice(1);
        });
        setText(newTextArr.join(" "));
        props.showAlert("Changed to capitalized case", "success");
    }

    const handleInvClick = () => {
        // console.log("button for Inverse case clicked");
        let newTextArr = text.toUpperCase().split(" ");
        newTextArr.forEach((element, index) => {
            newTextArr[index] = element.charAt(0).toLowerCase() + element.slice(1);
        });
        setText(newTextArr.join(" "));
        props.showAlert("Changed to inverse case", "success");
    }

    const handleClearClick = () => {
        // console.log("button for Clear clicked");
        let newText = "" ;
        setText(newText);
        props.showAlert("Cleared the text", "success");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1 style={{color: props.mode === 'light'? 'black': 'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="2 " value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'? 'white': '#13466e', color: props.mode === 'light'? 'black': 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleUpClick}>Convert to UPPER CASE</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleLoClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleCapClick}>Convert to Capitalised Case</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleInvClick}>Convert to iNVERSE cASE</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleClearClick}>Clear text</button>
      </div>
      <div className="container my-4" style={{color: props.mode === 'light'? 'black': 'white'}}>
        <h2>Your submit summary</h2>
        <p><b>{getWordsLength()}</b> words, <b>{text.length}</b> characters</p>
        <p> <b>{(0.008 * getWordsLength()).toFixed(3)}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Nothing to preview"}</p>
      </div>
    </>
  );
}
