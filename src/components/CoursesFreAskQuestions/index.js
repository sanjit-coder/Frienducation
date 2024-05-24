import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/icons/coursesHeroSection/askQuestionsIcon.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import BasicAccordion from "../basicAccordion";

const CoursesFreAskQuestions = ({ courseDetails }) => {
  return (
    <div className="coursesFreAskQuestions">
      <div className="coursesFreAskQuestions_leftContainer">
        <div className="coursesFreAskQuestions_leftContainer_image">
          <Image
            src={heroSectionImage}
            alt="heroSectionImage"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="coursesFreAskQuestions_rightContainer">
        <div className="coursesFreAskQuestions_rightContainer_text">FREQUENTLY ASKED QUESTION ?</div>
        <div className="coursesFreAskQuestions_rightContainer_accordion">
          <BasicAccordion FAQS={courseDetails?.course?.faqs} />
        </div>
      </div>
    </div>
  );
};

export default CoursesFreAskQuestions;
