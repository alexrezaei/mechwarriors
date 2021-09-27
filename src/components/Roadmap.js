import React from "react";
import "./roadmap.css";
function Roadmap() {
  return (
    <div className="roadmap-container">
      <h3>Roadmap</h3>
      <div className="roadmap-items">
        <div className="roadmap-box">
          <p className="Toptext">20%</p>
          <p className="normaltext">100 mech warriors buyback</p>
        </div>
        <div className="roadmap-box">
          <p className="Toptext">40%</p>
          <p className="normaltext">
            MArket place integration and multiple listings{" "}
          </p>
        </div>
        <div className="roadmap-box">
          <p className="Toptext">60%</p>
          <p className="normaltext">
            20 pieces of merch will be sent out to random holders. also possible
            to purchase merch with the image of your character or NFT
          </p>
        </div>
        <div className="roadmap-box">
          <p className="Toptext">80%</p>
          <p className="normaltext">
            one hundred percent of the percentages earned will be used for
            buybacks. every SOLMECH purchased will be kept at in a public wallet
          </p>
        </div>
        <div className="roadmap-box">
          <p className="Toptext">90%</p>
          <p className="normaltext">
            every SOLMECH WARRIORS holder will recieve a airdrop of a NFT
            collection based on the characters inside the suits!
          </p>
        </div>
        <div className="roadmap-box">
          <p className="Toptext">100%</p>
          <p className="normaltext">
            200 MECH WARRIORS BUYBACk. It will be done over time to keep the
            prices high for holder
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
