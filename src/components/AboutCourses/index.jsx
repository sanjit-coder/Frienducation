import React from "react";
import Image from "next/image";
import starIcon from "@/assets/images/icons/coursesHeroSection/star.svg";
import audio from "@/assets/images/icons/coursesHeroSection/audio.svg";
import award from "@/assets/images/icons/coursesHeroSection/award.svg";
import bookOpen from "@/assets/images/icons/coursesHeroSection/bookOpen.svg";
import cc from "@/assets/images/icons/coursesHeroSection/cc.svg";
import clock from "@/assets/images/icons/coursesHeroSection/clock.svg";
import dot from "@/assets/images/icons/coursesHeroSection/dot.svg";
import group1 from "@/assets/images/icons/coursesHeroSection/group1.svg";
import videoPlayer from "@/assets/images/icons/coursesHeroSection/videoPlayer.svg";

const AboutCoursesSection = ({ courseDetails }) => {
  return (
    <div className="aboutCoursesSection">
      <div className="aboutCoursesSection_mobile">
        <div className="aboutCoursesSection_aboutText">
          About this courses
        </div>
        <div className="aboutCoursesSection_aboutTextSummary marginTop">
          {courseDetails?.course?.whatWillLearn?.title}
        </div>
        <div className="aboutCoursesSection_aboutCoursesSectionFlex">
          <div className="aboutCoursesSection_aboutCoursesSectionFlex_firstContainer">
            <Image src={starIcon} alt="starIcon" />
            <div className="aboutCoursesSection_aboutRating">
              {courseDetails?.course?.ratings}
            </div>
          </div>
          <div className="aboutCoursesSection_verticalDivider" />
          <div className="aboutCoursesSection_aboutCoursesSectionFlexWithMargin">
            <Image src={audio} alt="starIcon" />
            <div className="aboutCoursesSection_aboutRating">
              Audio: English
            </div>
          </div>
          <div className="aboutCoursesSection_verticalDivider" />
          <div className="aboutCoursesSection_aboutCoursesSectionFlexWithMargin">
            <Image src={cc} alt="starIcon" />
            <div className="aboutCoursesSection_aboutRating">
              Subtitle: English
            </div>
          </div>
        </div>
      </div>
      <div className="aboutCoursesSection_secondContainer">
        <div className="aboutCoursesSection_secondContainer_header">
          <div className="aboutCoursesSection_secondContainer_header_flex">
            <div className="imageWidthSmall">
              <Image src={clock} alt="starIcon" style={{ width: '100%', height: '100%' }} />
            </div>
            <div>
              <div className="aboutCoursesSection_secondContainer_header_text">Duration</div>
              <div className="aboutCoursesSection_secondContainer_header_smallText">9h9m(12modules)</div>
            </div>
          </div>
          <div className="aboutCoursesSection_secondContainer_header_flex">
            <div className="imageWidthSmall">
              <Image src={group1} alt="starIcon" style={{ width: '100%', height: '100%' }} />
            </div>
            <div>
              <div className="aboutCoursesSection_secondContainer_header_text">Challenges
              </div>
              <div className="aboutCoursesSection_secondContainer_header_smallText">7 Challenges</div>
            </div>
          </div>
          <div className="aboutCoursesSection_secondContainer_header_flex">
            <div className="imageWidthSmall">
              <Image src={bookOpen} alt="starIcon" style={{ width: '100%', height: '100%' }} />
            </div>
            <div>
              <div className="aboutCoursesSection_secondContainer_header_text">Courses Level</div>
              <div className="aboutCoursesSection_secondContainer_header_smallText">Intermediate</div>
            </div>
          </div>
          <div className="aboutCoursesSection_secondContainer_header_flex">
            <div className="imageWidthSmall">
              <Image src={award} alt="starIcon" style={{ width: '100%', height: '100%' }} />
            </div>
            <div>
              <div className="aboutCoursesSection_secondContainer_header_text">Certificate</div>
              <div className="aboutCoursesSection_secondContainer_header_smallText">Included</div>
            </div>
          </div>
        </div>
        <div className="aboutCoursesSection_secondContainer_body">
          <div className="imageWidth">
            <Image src={videoPlayer} alt="starIcon" style={{ width: '100%', height: '100%' }} />
          </div>
          <div>
            <div className="aboutCoursesSection_aboutText">What you’ll learn</div>
            <div className="aboutCoursesSection_aboutTextSummary">
              {` The skill that you would learn after taking this ${courseDetails?.course?.title} course-Master the fundamentals and beyond online Courses are:`}</div>
          </div>
        </div>
        {courseDetails?.course?.whatWillLearn?.points?.map((ele) => {
          return (
            <div className="aboutCoursesSection_secondContainer_bodyWithMargin">
              <Image src={dot} alt="starIcon" />
              <div className="aboutCoursesSection_aboutTextSummary">
                {ele}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default AboutCoursesSection;
