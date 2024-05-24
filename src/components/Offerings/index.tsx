import React from "react";
import Image from "next/image";
import offeringsBackground from "@/assets/images/offeringsBackground.jpg";

const Offerings: React.FC = () => {
  return (
    <div className="offeringsSection">
      <div className="offeringsSection_heading">What we offer ?</div>
      <div className="offeringsSection_container">
        <Image
          src={offeringsBackground}
          alt="offeringsBackground"
          style={{ width: "100%", height: "100%" }}
        />
        {/* <div className="offeringsSection_container_leftSection">
          <div className="heading">No-code chatbot builder</div>
          <div className="secondaryText">
            <span>Drag and drop</span> conversation blocks to easily build your
            Stories. Choose from multiple bot response formats and actions to
            create engaging chatbot experiences.
          </div>
        </div>
        <div className="offeringsSection_container_rightSection">
          <Image
            src={offeringsBackground}
            alt="offeringsBackground"
            style={{ width: "100%", height: "100%" }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Offerings;
