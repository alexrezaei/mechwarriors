import React from "react";
import "./informationsection.css";

function Informationsection() {
  return (
    <div className="info-section">
      <h3>INFORMATION</h3>
      <div className="container-info">
        <div className="info-box">
          <p className="toptext">TRAITS</p>
          <p className="normal-text">10 Million</p>
          <p className="normal-text">POSSIBLE</p>
          <p className="normal-text">COMBINATIONS</p>
        </div>
        <div className="info-box">
          <p className="toptext">
            TOTAL<br></br>SUppLY
          </p>
          <p className="normal-text">7500 TOTAL</p>
          <p className="normal-text">SOLMECH WARRIORS</p>
        </div>
        <div className="info-box">
          <p className="toptext">pRICE</p>
          <p className="normal-text">0.5 SOL</p>
        </div>
      </div>
    </div>
  );
}

export default Informationsection;
