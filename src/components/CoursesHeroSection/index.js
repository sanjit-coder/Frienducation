import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import starIcon from "@/assets/images/icons/coursesHeroSection/star.svg";

const CoursesHeroSection = ({ courseDataById }) => {
  const { course } = courseDataById;

  function convertToShortFormat(number) {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'k+';
    } else {
      return number.toString();
    }
  }
  return (
    <div className="coursesherosection">
      <div className="coursesherosection_leftContainer">
        <div className="coursesherosection_leftContainer_firstPara">
          {course?.title}
        </div>
        <div className="coursesherosection_leftContainer_secondPara">
          {course?.genre}
        </div>
        <div className="coursesherosection_leftContainer_secondaryText">
          {course?.description}
        </div>
        <div className="coursesherosection_leftContainer_starClass">
          <div className="coursesherosection_leftContainer_starClass_textClass">5</div>
          <div style={{ marginLeft: "5px" }}>
            <Image src={starIcon} alt="LinkedInIcon" />
          </div>
          <div style={{ marginLeft: "3px" }}>
            <Image src={starIcon} alt="LinkedInIcon" />
          </div>
          <div style={{ marginLeft: "3px" }}>
            <Image src={starIcon} alt="LinkedInIcon" />
          </div>
          <div style={{ marginLeft: "3px" }}>
            <Image src={starIcon} alt="LinkedInIcon" />
          </div>
          <div style={{ marginLeft: "3px", }}>
            <Image src={starIcon} alt="LinkedInIcon" />
          </div>
          <div style={{ marginLeft: "10px" }} />
          <div className="coursesherosection_leftContainer_starClass_textClass">
            {`${convertToShortFormat(course?.enrolledStudents)} students`}
          </div>
        </div>
        {/* <div className="coursesherosection_leftContainer_bottomContainer">
          <div className="learnsection">
            <div className="learnsection_button">Explore now</div>
          </div>
          <div className="playsection">
            <Image src={playButton} alt="playbutton" />
          </div>
          <div className="videosection">
            <Image src={thumbnail} alt="thumbnail" />
          </div>
        </div> */}
        <div className="coursesherosection_leftContainer_enrolledContainer">
          <div className="flex">
            <div className="coursesherosection_leftContainer_enrolledContainer_text">
              <div className="coursesherosection_leftContainer_bottomContainer_enrolledClass">
                {convertToShortFormat(course?.enrolledStudents)}
              </div>
              <div className="coursesherosection_leftContainer_bottomContainer_enrolledTextClass">
                students enrolled
              </div>
            </div>
            <div className="coursesherosection_leftContainer_enrolledContainer_text_marginLeft">
              <div className="coursesherosection_leftContainer_bottomContainer_enrolledClass">
                {course?.enrolledStudents}
              </div>
              <div className="coursesherosection_leftContainer_bottomContainer_enrolledTextClass">
                Problems solved
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="coursesherosection_leftContainer_enrolledContainer_text_marginLeft">
              <div className="coursesherosection_leftContainer_bottomContainer_enrolledClass">
                {course?.totalHours}
              </div>
              <div className="coursesherosection_leftContainer_bottomContainer_enrolledTextClass">
                Hours of video lectures
              </div>
            </div>
            <div className="coursesherosection_leftContainer_enrolledContainer_text_marginLeft">
              <div className="coursesherosection_leftContainer_bottomContainer_enrolledClass">
                {course?.totalLectures}
              </div>
              <div className="coursesherosection_leftContainer_bottomContainer_enrolledTextClass">
                Total Lectures
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coursesherosection_rightContainer">
        <div className="coursesherosection_rightContainer_image">
          <Image
            src={course?.photoUrl}
            alt="heroSectionImage"
            fill
            style={{
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              objectFit: "contain",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesHeroSection;
