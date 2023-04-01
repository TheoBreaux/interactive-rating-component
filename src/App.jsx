import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Scoring from "./Scoring";
import Modal from "./Modal";

function App() {
  const [hideInitial, setHideInitial] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="card">
      {!hideInitial ? (
        <div>
          <Header />
          <Scoring
            setHideInitial={setHideInitial}
            score={score}
            setScore={setScore}
          />
        </div>
      ) : (
        <Modal score={score} />
      )}
    </div>
  );
}

export default App;

//make a buttton component and pass state to each individual button
{
  /* <Button setScore={setScore} />; */
}
