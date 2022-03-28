import { useState } from "react";
import "./App.scss";
import { Success } from "./components";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [value, setValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="main-content">
        {isSubmitted ? (
          <Success value={value} />
        ) : (
          <>
            <div className="star">
              <img src="../images/icon-star.svg" alt="star" />
            </div>
            <div className="content">
              <h1>How did we do?</h1>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreclated to help us improve our offering!
              </p>
            </div>
            <ul className="ratings">
              <li>
                <button onClick={handleValue} value="1">
                  1
                </button>
              </li>
              <li>
                <button onClick={handleValue} value="2">
                  2
                </button>
              </li>
              <li>
                <button onClick={handleValue} value="3">
                  3
                </button>
              </li>
              <li>
                <button onClick={handleValue} value="4">
                  4
                </button>
              </li>
              <li>
                <button onClick={handleValue} value="5">
                  5
                </button>
              </li>
            </ul>
            <button className="submit" onClick={handleSubmit}>
              SUBMIT
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
