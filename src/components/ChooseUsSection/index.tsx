import React from "react";
import Image from "next/image";
import ellipse from "@/assets/images/ellipse.svg";
import rightIcon1 from "@/assets/images/rightIcon1.svg";
import rightIcon2 from "@/assets/images/rightIcon2.svg";
import rightIcon3 from "@/assets/images/rightIcon3.svg";
import rightIcon4 from "@/assets/images/rightIcon4.svg";
import rightIcon5 from "@/assets/images/rightIcon5.svg";

const ChooseUsSection: React.FC = () => {
  interface featuresObject {
    id: number;
    icon: HTMLImageElement;
    heading: string;
    secondaryText: string;
  }
  const features: featuresObject[] = [
    {
      id: 1,
      icon: rightIcon1,
      heading: "Live Classes",
      secondaryText:
        "Our live sessions smoothen mentor-student interaction and facilitates real time-basis solution to students by bridging the gap formed due to the time lag between the lectures being taught and thereafter studied by students at a later point in time.",
    },
    {
      id: 2,
      icon: rightIcon2,
      heading: "Programming",
      secondaryText:
        "Competitive programming increases problem solving speed which provides an edge over other applicants.",
    },
    {
      id: 3,
      icon: rightIcon3,
      heading: "Teaching Assistants (TAs)",
      secondaryText:
        "Getting the doubts solved instantly with the help of brilliant TAs at Frienducation, who help students with their problem statements on ‘need-to’ basis.",
    },
    {
      id: 4,
      icon: rightIcon4,
      heading: "Expert Mentors",
      secondaryText:
        "Our team of mentors comprises experienced professionals with a deep understanding of data structures and algorithms.",
    },
    {
      id: 5,
      icon: rightIcon5,
      heading: "Structured Course Material",
      secondaryText:
        "Our courses material has been thoughtfully organized to provide a systematic and coherent learning experience.",
    },
  ];
  return (
    <section className="choosesection">
      <div className="choosesection_imageBackground">
        <Image
          src={ellipse}
          alt="Ellipse"
          // style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="choosesection_heading">
        {/* <div className="choosesection_heading_top">Frienducation</div> */}
        <div className="choosesection_heading_bottom">Frienducation</div>
      </div>

      <div className="choosesection_featureslist">
        {features &&
          features.length > 0 &&
          features.map((item) => (
            <div className="choosesection_featureslistitem">
              <div className="choosesection_featureslistitem_icon">
                <Image
                  src={item?.icon}
                  alt={`rightIcon${item?.id}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="choosesection_featureslistitem_separator"></div>
              <div className="choosesection_featureslistitem_text">
                <div className="heading">{item?.heading}</div>
                <div className="secondaryText">{item?.secondaryText}</div>
              </div>
            </div>
          ))}
      </div>

      <div className="choosesection_featureCircle">
        <p>
          {" "}
          The journey to learn code needs the right curriculum and pattern.We,
          at Frienducation, have designed the learner friendly curriculum which
          fits all the requirements, from basic to advanced level. Variety of
          courses, young mentors, personalised learning sessions, practical
          application.
        </p>

        <div className="choosesection_featureCircle_leftCircle">
          <p>
            <span>WHY</span>CHOOSE US
          </p>
        </div>
        <div className="choosesection_featureCircle_rightCircle1Container">
          <div>
            <Image src={rightIcon1} alt="rightIcon1" />
          </div>
          <div className="rightSectionFeatureContainer">
            <div className="rightSectionFeatureContainer_border"></div>
            <div className="rightSectionFeatureContainer_textContainer">
              <div className="rightSectionFeatureContainer_textContainer_heading">
                Live Classes
              </div>
              <div className="rightSectionFeatureContainer_textContainer_text">
                Our live sessions smoothen mentor-student interaction and
                facilitates real time-basis solution to students by bridging the
                gap formed due to the time lag between the lectures being taught
                and thereafter studied by students at a later point in time.
              </div>
            </div>
          </div>
        </div>

        <div className="choosesection_featureCircle_rightCircle2Container">
          <div>
            <Image src={rightIcon2} alt="rightIcon2" />
          </div>
          <div className="rightSectionFeatureContainer">
            <div className="rightSectionFeatureContainer_border"></div>
            <div className="rightSectionFeatureContainer_textContainer">
              <div className="rightSectionFeatureContainer_textContainer_heading">
                Programming
              </div>
              <div className="rightSectionFeatureContainer_textContainer_text">
                Competitive programming increases problem-solving speed which
                provides an edge over other applicants.
              </div>
            </div>
          </div>
        </div>

        <div className="choosesection_featureCircle_rightCircle3Container">
          <div>
            <Image src={rightIcon3} alt="rightIcon3" />
          </div>
          <div className="rightSectionFeatureContainer">
            <div className="rightSectionFeatureContainer_border"></div>
            <div className="rightSectionFeatureContainer_textContainer">
              <div className="rightSectionFeatureContainer_textContainer_heading">
                Teaching Assistants (TAs)
              </div>
              <div className="rightSectionFeatureContainer_textContainer_text">
                Getting the doubts solved instantly with the help of brilliant
                TAs at Frienducation, who help students with their problem
                statements on ‘need-to’ basis.
              </div>
            </div>
          </div>
        </div>

        <div className="choosesection_featureCircle_rightCircle4Container">
          <div>
            <Image src={rightIcon4} alt="rightIcon4" />
          </div>
          <div className="rightSectionFeatureContainer">
            <div className="rightSectionFeatureContainer_border"></div>
            <div className="rightSectionFeatureContainer_textContainer">
              <div className="rightSectionFeatureContainer_textContainer_heading">
                Expert Mentors
              </div>
              <div className="rightSectionFeatureContainer_textContainer_text">
                Our team of mentors comprises experienced professionals with a
                deep understanding of data structures and algorithms.
              </div>
            </div>
          </div>
        </div>

        <div className="choosesection_featureCircle_rightCircle5Container">
          <div>
            <Image src={rightIcon5} alt="rightIcon5" />
          </div>
          <div className="rightSectionFeatureContainer">
            <div className="rightSectionFeatureContainer_border"></div>
            <div className="rightSectionFeatureContainer_textContainer rightSectionFeatureContainer_textContainer_lastChild">
              <div className="rightSectionFeatureContainer_textContainer_heading">
                Structured Course Material
              </div>
              <div className="rightSectionFeatureContainer_textContainer_text">
                Our courses material has been thoughtfully organized to provide
                a systematic and coherent learning experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
