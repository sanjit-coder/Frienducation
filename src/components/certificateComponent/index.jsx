import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import dummyCertificate from "@/assets/images/icons/coursesHeroSection/dummyCertificate.svg";
import coursesCertificateIcon from "@/assets/images/icons/coursesHeroSection/coursesCertificateIcon.svg";
import instructor from "@/assets/images/icons/coursesHeroSection/instructor.svg";
import Button from '@mui/material/Button';

const CertificateCoursesSection = ({ certificateDetails, courseName }) => {
  return (
    <div className="certificateCoursesSection">
      <div className="certificateCoursesSection_mainContainer">
        <div className="certificateCoursesSection_mainContainer_leftContainer">
          <Image
            src={dummyCertificate}
            alt="heroSectionImage"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="certificateCoursesSection_mainContainer_rightContainer">
          <div className="certificateCoursesSection_mainContainer_rightContainer_alignCenter">
            <div>
              <div className="certificateCoursesSection_mainContainer_rightContainer_firstPara">{`Certificate for ${courseName}`}</div>
              <div className="certificateCoursesSection_mainContainer_rightContainer_firstPara">{certificateDetails?.title}</div>
            </div>
            <Image style={{ marginLeft: "10px" }}
              src={coursesCertificateIcon}
              alt="heroSectionImage"
            />
          </div>
          <div className="certificateCoursesSection_mainContainer_rightContainer_secondPara">{certificateDetails?.description}</div>
          <div className="certificateCoursesSection_mainContainer_rightContainer_button">
            {/* <Button sx={{ textTransform: 'none' }} variant="contained">View Sample Certificate</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCoursesSection;
