import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import watch from "@/assets/images/icons/coursesHeroSection/watch.svg";
import bottomArraow from "@/assets/images/icons/coursesHeroSection/bottomArraow.svg";
import moduleIcon from "@/assets/images/icons/coursesHeroSection/moduleIcon.svg";
import moduleIcon2 from "@/assets/images/icons/coursesHeroSection/moduleIcon2.svg";

const CoursesModule = ({ items }) => {
    return (
        <div className="courseModule">
            <div className="courseModule_top">
                <div className="courseModule_top_LeftText">
                    <div className="courseModule_top_LeftText_background">
                        <div className="imageSize">
                            <Image src={moduleIcon} alt="playButton" style={{ height: '100%', width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div className="courseModule_top_LeftText_firstPara">{items?.title}</div>
                        <div className="courseModule_top_LeftText_secondPara">{items?.type}</div>
                    </div>
                </div>
                <div className="courseModule_top_rightText">
                    <Image src={watch} alt="starIcon" />
                    <div className="courseModule_top_LeftText_thirdPara">{items?.duration}</div>
                    <Image src={bottomArraow} alt="playButton" />
                </div>
            </div>
            <div className="courseModule_bottom">
                <div className="courseModule_bottom_LeftText">
                    <div className="courseModule_bottom_LeftText_background">
                        <div className="imageSize">
                            <Image src={moduleIcon2} alt="playButton" style={{ height: '100%', width: '100%' }} />
                        </div>
                    </div>
                    <div className="courseModule_bottom_LeftText_firstPara">{items?.lectures?.length > 0 ? items?.lectures[0]?.title : ''}</div>
                </div>
                <div className="courseModule_bottom_rightText">
                    <div className="courseModule_bottom_LeftText_secondPara">{`${items?.lectures?.length} Lectures`}</div>
                </div>
            </div>
        </div>
    )
};

export default CoursesModule;
