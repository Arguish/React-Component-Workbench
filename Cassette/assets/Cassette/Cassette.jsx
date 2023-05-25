import React from "react";
import "./Cassette.css";

const Cassette = ({ label }) => {
  return (
    <div className="cas_main">
      <div className="cas_card">
        <div className="cas_ups">
          <div className="cas_screw1">+</div>
          <div className="cas_screw2">+</div>
        </div>
        <div className="cas_card1">
          <div className="cas_line1"></div>
          <div className="cas_line2"></div>
          <div className="cas_yl">
            <div className="cas_roll">
              <div className="cas_s_wheel"></div>
              <div className="cas_tape"></div>
              <div className="cas_e_wheel"></div>
            </div>
            <p className="cas_num">{label}</p>
          </div>
          <div className="cas_or">
            <p className="cas_time"></p>
          </div>
        </div>
        <div className="cas_card2_main">
          <div className="cas_card2">
            <div className="cas_c1"></div>
            <div className="cas_t1"></div>
            <div className="cas_screw5">+</div>
            <div className="cas_t2"></div>
            <div className="cas_c2"></div>
          </div>
        </div>
        <div className="cas_downs">
          <div className="cas_screw3">+</div>
          <div className="cas_screw4">+</div>
        </div>
      </div>
    </div>
  );
};

export default Cassette;
