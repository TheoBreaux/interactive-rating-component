import React from "react";
import ThankYouIcon from "../images/illustration-thank-you.svg";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      <img className="thank-you-icon" src={ThankYouIcon} alt="icon" />

      <div className="review-score-container">
        <p className="review-score">You Selected {props.score} out of 5</p>
      </div>

      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating.
        <br /> If you ever need more support, don’t hesitate to <br />
        get in touch!
      </p>
    </>
  );
};

export default Modal;
