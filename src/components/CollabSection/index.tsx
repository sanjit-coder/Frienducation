import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/icons/cummunityScreen/homeSection.svg";
import requirment from "@/assets/images/icons/coursesHeroSection/requirment.svg";
import dot from "@/assets/images/icons/coursesHeroSection/dot.svg";

const CollabSection: React.FC = () => {
  return (
    <div className="collabComponent">
      <div className="collabComponent_leftContainer">
        <div className="collabComponent_leftContainer_align">
          <Image src={dot} alt="dot" />
          <div className="collabComponent_leftContainer_secondPara">
            Showcase your skillset and talent at various platforms{" "}
          </div>
        </div>
        <div className="collabComponent_leftContainer_align">
          <Image src={dot} alt="dot" />
          <div className="collabComponent_leftContainer_secondPara">
            Improvement in skills like leadership, management, networking,
            relation management.
          </div>
        </div>
        <div className="collabComponent_leftContainer_align">
          <Image src={dot} alt="dot" />
          <div className="collabComponent_leftContainer_secondPara">
            Stimulates active listening and critical thinking ability
          </div>
        </div>
        <div className="collabComponent_leftContainer_align">
          <Image src={dot} alt="dot" />
          <div className="collabComponent_leftContainer_secondPara">
            Establish team building, group goals and values
          </div>
        </div>
      </div>
      <div className="collabComponent_rightContainer">
        <Image
          src={heroSectionImage}
          width={350}
          height={200}
          alt="requrment"
        />
      </div>
    </div>
  );
};

export default CollabSection;
