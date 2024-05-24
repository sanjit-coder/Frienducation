import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import owner1 from "@/assets/images/owner1.svg";
import owner2 from "@/assets/images/owner2.svg";
import logo from "@/assets/images/logo.svg";
import "../../../src/styles/scss/_main.scss";
import Testimonials from "@/components/Testimonials";
import Disclaimer from "@/components/Disclaimer";
import { reviews } from "@/utils/constants/reviews";

const AboutUs = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const closeDisclaimer = () => {
    setShowDisclaimer(false);
  };
  return (
    <>
      {showDisclaimer && <Disclaimer onClose={() => closeDisclaimer()} />}
      <Header />
      <div className="aboutUsTopContainer">
        <div className="aboutUsTopSection">
          <div className="aboutUsTopSection_heading">
            Transforming tech education for the next generation of developers
          </div>
          <div className="aboutUsTopSection_imageContainer">
            <div className="aboutUsTopSection_imageContainer_tutor1">
              <Image
                src={owner1}
                alt="owner1"
                className="image1"
                style={{ width: "100%", height: "100%" }}
              />{" "}
            </div>
            <div className="aboutUsTopSection_imageContainer_tutor2">
              <Image
                src={owner2}
                alt="owner1"
                className="image2"
                style={{ width: "100%", height: "100%" }}
              />{" "}
            </div>
          </div>
        </div>
        {/* <div className="aboutUsStatsSection">
          <ul>
            <li>
              {" "}
              <span>200K+</span> Suscribers on Youtube
            </li>
            <li>
              <span>100K+</span> Followers on Instagram
            </li>

            <li>
              <span>400K+</span> Followers on Facebook
            </li>
            <li>
              {" "}
              <span>700K+</span> Followers on Linkedin
            </li>
          </ul>
        </div> */}
        <div className="aboutUsStorySection">
          <div className="aboutUsStoryContainer">
            <h1>Our Story</h1>
            <div className="aboutUsStoryContainer_contentSection">
              Frienducation, established in 2022 by visionaries Priyansh Goel
              and Shubhangi Goel, is on a relentless mission to revolutionize
              tech education.
              <br></br>
              <br></br>
              It serves as the crucial link between academic institutions and
              the dynamic tech industry, aiming to bridge the knowledge gap.
              <br></br>
              <br></br>
              At Frienducation, we take immense pride in our dedicated faculty,
              comprising professionals who generously share their experience and
              knowledge gained from renowned companies such as Microsoft, Adobe,
              Google, Amazon, Media.net, among others.. Our cutting-edge
              learning platform is designed to provide an exceptional coding
              education experience. We offer a diverse array of courses spanning
              Foundation, Advanced, and specialized areas including Data Science
              and Algorithms, Web Development, Android, and more.
              <br></br>
              <br></br>
              Today, the Frienducation ecosystem thrives with over 1,000
              dedicated students, supported by a network of 50+ Campus
              Ambassadors and Teaching Assistants, contributing to an
              environment of collaborative learning and growth.
            </div>
          </div>
        </div>
        <div className="aboutUsInstructorSection">
          <div className="instructorContainer">
            <h1>Our Founders</h1>
            <Slider {...settings}>
              <div className="sliderContainer">
                <div className="sliderContainer_innerSection">
                  <div>
                    <div className="sliderContainer_innerSection_tutor">
                      <Image
                        src={owner1}
                        alt="owner1"
                        className="image1"
                        style={{ width: "100%", height: "100%" }}
                      />{" "}
                    </div>
                  </div>

                  <div className="sliderContainer_innerSection_rightSide">
                    <div className="nameSection">
                      <div>
                        <div className="nameSection_heading">
                          {" "}
                          Priyansh Goel
                        </div>
                        <div className="nameSection_position">
                          Co-founder, Frienducation{" "}
                        </div>
                      </div>
                      <div className="nameSection_logo">
                        <Image
                          src={logo}
                          alt="Logo"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="infoSection">
                      As an engineer with a deep understanding of the hopes and
                      dreams of aspiring tech enthusiasts, he embarked on an
                      extraordinary mission. Together with Shubhangi, they built
                      Frienducation, a platform that's not just about coding but
                      nurturing the journey from its very inception. His passion
                      lies in creating a haven for coders, a thriving community
                      where they can embrace the entire spectrum of coding
                      knowledge. With unwavering dedication, he aspires to equip
                      students with all that is needed for not just coding but
                      also in mastering interview skills, and forging a path
                      towards a prosperous and successful career. His aim is to
                      be a guiding light in the students' journey, helping them
                      grow and thrive in the tech world.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sliderContainer">
                <div className="sliderContainer_innerSection">
                  <div>
                    <div className="sliderContainer_innerSection_tutor">
                      <Image
                        src={owner2}
                        alt="owner1"
                        className="image1"
                        style={{ width: "100%", height: "100%" }}
                      />{" "}
                    </div>
                  </div>

                  <div className="sliderContainer_innerSection_rightSide">
                    <div className="nameSection">
                      <div>
                        <div className="nameSection_heading">
                          {" "}
                          Shubhangi Goel
                        </div>
                        <div className="nameSection_position">
                          Co-founder, Frienducation{" "}
                        </div>
                      </div>
                      <div className="nameSection_logo">
                        <Image
                          src={logo}
                          alt="Logo"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="infoSection">
                      She is the co-founder of Frienducation. Professionally,
                      she is a corporate lawyer associated with a tier 1 law
                      firm. Her journey, alongside Priyansh, has been nothing
                      short of inspiring. Their mission is to empower
                      individuals in their coding journey, from the very roots
                      of learning to mastering interview skills and ultimately
                      achieving success. Her zeal lies in guiding, mentoring,
                      and transforming students into proficient coders. Her
                      journey is not just about law; it's a profound commitment
                      to sharing her knowledge and shaping the future of
                      aspiring developers.
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Testimonials allReviews={reviews} />
      <Footer />
    </>
  );
};

export default AboutUs;
