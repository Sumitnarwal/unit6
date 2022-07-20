import React from "react";
import displayRazorpay from "./PaymentGateway";
function CourseCard() {
  return (
    <div>
      <br></br>
      <h1 style={{ textAlign: "center" }}>Pay Through Razorpay</h1>
      <br></br>
      <div className="divv">
        <button className="butn" onClick={displayRazorpay}>
          {" "}
          Buy Course
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
