import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import instructor from "@/assets/images/icons/coursesHeroSection/instructor.svg";
import frineducationIcon from "@/assets/images/icons/coursesHeroSection/frineducationIcon.svg";

const InstructorCoursesSection = ({ courseDetails }) => {
  return (
    <>
      <div className="instructorCoursesSectionText">Know your Instructor</div>
      <div className="instructorCoursesSection">
        <div className="instructorCoursesSection_leftContainer">
          <Image
            src={instructor}
            alt="heroSectionImage"
            style={{ width: "60%", height: "60%" }}
          />
          {/* <Image
            // src={frineducationIcon}
            // alt="heroSectionImage"
            src={courseDetails?.course?.teachers[0]?.photoUrl}
            alt="heroSectionImage"
            fill
            style={{
              // width: "60%",
              // height: "60%",
              marginLeft: "10px",
              width: "100%",
              backgroundSize: "cover",
              objectFit: "contain",
              backgroundPosition: "center",
            }}
          /> */}
        </div>
        <div className="rightContainer">
          <div className="rightContainer_alignCenter">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="rightContainer_firstPara">{courseDetails?.course?.teachers[0]?.name}</div>
              <div className="rightContainer_secondPara">{courseDetails?.course?.teachers[0]?.role}</div>
            </div>
            <Image style={{ marginLeft: "10px" }}
              src={frineducationIcon}
              alt="heroSectionImage"
            />
          </div>
          <div className="rightContainer_thirdPara">
            {courseDetails?.course?.teachers[0]?.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCoursesSection;
