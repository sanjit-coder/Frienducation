import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import starIcon from "@/assets/images/icons/coursesHeroSection/star.svg";
import LeftAlignedTimeline from "../LeftTimelieComponent";

const CourseContentComponent = ({ courseContent }) => {
  return (
    <div className="courseContentComponent">
      <div className="courseContentComponent_container">
        <LeftAlignedTimeline courseContent={courseContent} />
      </div>
    </div>
  );
};

export default CourseContentComponent;
