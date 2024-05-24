import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import requirment from "@/assets/images/icons/coursesHeroSection/requirment.svg";
import dot from "@/assets/images/icons/coursesHeroSection/dot.svg";

const RequirementCourses = ({ courseDetails }) => {
  console.log(courseDetails?.course, 'courseDetails?.course')
  return (
    <div className="requirementCoursesSection">
      <div className="requirementCoursesSection_leftContainer">
        <div className="requirementCoursesSection_leftContainer_firstPara">Requirements</div>
        {courseDetails?.course?.requirements?.map((ele) => {
          return (
            <div className="requirementCoursesSection_leftContainer_align">
              <Image
                src={dot}
                alt="dot"
              />
              <div className="requirementCoursesSection_leftContainer_secondPara">
                {ele}
              </div>
            </div>
          )
        })}

      </div>
      <div className="requirementCoursesSection_rightContainer">
        <div className="requirementCoursesSection_rightContainer_container">
          <div className="imageMobile">
            <Image src={requirment} alt="requrment" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="alignLeft">
            <div className="requirementCoursesSection_rightContainer_container_firstPara">KEY FEATURES OF THIS COURSES</div>
            {courseDetails?.course?.keyFeatures?.map((ele) => {
              return (
                <div className="requirementCoursesSection_rightContainer_container_align">
                  <Image
                    src={dot}
                    alt="dot"
                  />
                  <div className="requirementCoursesSection_rightContainer_container_secondPara">{ele}
                  </div>
                </div>
              )
            })}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
              <div
                className="button"
                onClick={() => { }}
              >Started Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementCourses;
