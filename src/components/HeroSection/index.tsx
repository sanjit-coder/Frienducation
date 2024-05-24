"use client";

import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";

const HeroSection: React.FC = () => {
  const handleLinkClick = () => {
    if (typeof window !== undefined) {
      window.open(
        "https://www.youtube.com/live/H9QybPsEUKo?si=j6EzI1vNmMXBU-jR",
        "_blank"
      );
    }
  };
  return (
    <div className="herosection">
      <div className="herosection_leftContainer">
        <div className="herosection_leftContainer_firstPara">
          Learning today, leading tomorrow
        </div>
        <div className="herosection_leftContainer_secondPara">
          Unlock Your Mystery Box of Learning!
        </div>
        <div className="herosection_leftContainer_secondaryText">
          We are team of
          <br></br>A technologically advanced learning environment for
          programmers and developers
        </div>
        <div className="herosection_leftContainer_bottomContainer">
          <div className="learnsection">
            <div
              className="learnsection_button"
              onClick={() => handleLinkClick()}
            >
              Learn now
            </div>
          </div>
          {/* <div className="playsection">
            <Image src={playButton} alt="playbutton" />
          </div> */}
          <div className="videosection">
            <Image
              src={thumbnail}
              alt="thumbnail"
              onClick={() => handleLinkClick()}
            />
          </div>
        </div>
      </div>
      <div className="herosection_rightContainer">
        <div className="herosection_rightContainer_image">
          <Image
            src={heroSectionImage}
            alt="heroSectionImage"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
