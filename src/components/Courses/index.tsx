import React from "react";
import Image from "next/image";
import pythonIcon from "@/assets/images/icons/pythonIcon.svg";
import dsaIcon from "@/assets/images/icons/share2.svg";
import webIcon from "@/assets/images/icons/webIcon.svg";
import course1 from "@/assets/images/course1.svg";
import course2 from "@/assets/images/course2.jpg";
import course3 from "@/assets/images/course3.svg";

const Courses: React.FC = () => {
  return (
    <div className="courses">
      <div className="courses_header">
        <div className="courses_header_left">OUR COURSES</div>
        <div className="courses_header_right">
          <div className="buttonContainer">
            <div className="buttonContainer_button">Web Development</div>
            <div className="buttonContainer_button">C++ / Java</div>
            <div className="buttonContainer_button">Python</div>
            <div className="buttonContainer_button">
              Data Structure & Algorithm
            </div>
          </div>
        </div>
      </div>
      <div className="courses_cardsContainer">
        <div className="courses_cardsContainer_card">
          <div className="cardBadge">
            <div className="cardBadge_text">
              <div>
                <Image src={pythonIcon} alt="pythonIcon" />
              </div>
              <div>Python</div>
            </div>
          </div>
          <div className="headingContainer">
            <div className="headingContainer_text">
              Empowering Language with Dynamic Adaptability : Python's evolving
              Semantics for an Elevated Development Experience
            </div>
            {/* <div className="headingContainer_button">Know More</div> */}
          </div>

          <div style={{ width: "100%", overflow: "hidden" }}>
            <Image src={course1} alt="course1" style={{ width: "100%" }} />
          </div>
        </div>

        <div className="courses_cardsContainer_card courses_cardsContainer_card_center">
          <div className="cardBadge">
            <div className="cardBadge_text">
              <div>
                <Image src={dsaIcon} alt="dsaIcon" />
              </div>
              <div>Data Structures & Algorithm</div>
            </div>
          </div>

          <div className="headingContainer">
            <div className="headingContainer_text">
              Efficiency : Elevating Data Structures and Algorithms for Optimal
              problem solving
            </div>
            {/* <div className="headingContainer_button">Know More</div> */}
          </div>

          <div style={{ width: "100%", height: "260px", overflow: "hidden" }}>
            <Image
              src={course2}
              alt="course2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>

        <div className="courses_cardsContainer_card">
          <div className="cardBadge">
            <div className="cardBadge_text">
              <div>
                <Image src={webIcon} alt="webIcon" />
              </div>
              <div>Web Development</div>
            </div>
          </div>
          <div className="headingContainer">
            <div className="headingContainer_text">
              Transforming ideas into Interactive Experiences with codes
            </div>
            {/* <div className="headingContainer_button">Know More</div> */}
          </div>

          <div style={{ width: "100%", overflow: "hidden" }}>
            <Image src={course3} alt="course3" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
