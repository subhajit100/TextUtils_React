import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // whether dark mode enabled or not
  const [alert, setAlert] = useState(null); // setting the alert object msg and type based on dark or light mode

  const toggleVisibilityMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // set alert to null (i.e removing from the screen) in 1.2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  return (
    <>
      {/* <Router> */}
      <Navbar  title="MyTextUtils"
          aboutText="MyAbout"
          homeText="MyHome"
          mode={mode}
          toggleMode={toggleVisibilityMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>    */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={ */}
          <TextForm heading="Enter text for analysis here below"
                mode={mode}
                showAlert={showAlert}/>
                {/* } />    */}
        {/* </Routes> */}
      </div>
   {/* </Router> */}
    </>
  );
}

export default App;
