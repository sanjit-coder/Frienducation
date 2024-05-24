import React from "react";
import Image from "next/image";
import closeIcon from "@/assets/images/icons/closeIcon.svg";

interface DisclaimerProps {
  onClose: () => void;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ onClose }) => {
  return (
    <div className="disclaimer">
      <div className="disclaimercontainer">
        <div className="disclaimer_text">
          Join the future of Online compiling with quick Compiler - Now in Beta
          {/* !<div className="disclaimer_button">TRY NOW</div> */}
        </div>

        <div className="disclaimer_closebutton" onClick={() => onClose()}>
          <Image
            src={closeIcon}
            alt="closeIcon"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
