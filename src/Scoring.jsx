import React from "react";
import "./Scoring.css";

const Scoring = (props) => {
  const scoreReviewClickHandler = (event) => {
    //set score to value of button clicked
    props.setScore(event.target.value);
  };

  const submitScoreClickHandler = () => {
    //hide initial components(Heder & Scoring)
    props.setHideInitial(true);
  };

  return (
    <main>
      <div className="review-score-row">
        <button
          onClick={scoreReviewClickHandler}
          className="review-score-btn"
          value="1">
          1
        </button>
        <button
          onClick={scoreReviewClickHandler}
          className="review-score-btn"
          value="2">
          2
        </button>
        <button
          onClick={scoreReviewClickHandler}
          className="review-score-btn"
          value="3">
          3
        </button>
        <button
          onClick={scoreReviewClickHandler}
          className="review-score-btn"
          value="4">
          4
        </button>
        <button
          onClick={scoreReviewClickHandler}
          className="review-score-btn"
          value="5">
          5
        </button>
      </div>

      <button onClick={submitScoreClickHandler} className="submit-btn">
        SUBMIT
      </button>
    </main>
  );
};

export default Scoring;
