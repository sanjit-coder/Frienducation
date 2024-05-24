"use client";

import React, { useState } from "react";
import Image from "next/image";
import roadmapBackground from "@/assets/images/icons/coursesHeroSection/roadmapBackground.svg";
import Rectangle_01 from "@/assets/images/icons/Rectangle_01.svg";
import AlternateReverseTimeline from "../TimelineComponent";

const RoadMapComponent = ({ roadmap }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const isMobile = viewportWidth <= 768; // You can adjust this threshold as needed

  return (
    <div className="alternateReverseTimelineWrapper">
      <div className="alternateReverseTimelineSub">
        {isMobile ? <Image
          src={Rectangle_01}
          alt="roadmapBackground"
          style={{ width: "100%", height: "100%" }}
        /> :
          <Image
            src={roadmapBackground}
            alt="roadmapBackground"
            style={{ width: "100%", height: "100%" }}
          />}
      </div>
      <div className="alternateReverseTimelineMain" >
        <AlternateReverseTimeline roadmap={roadmap}/>
      </div>
    </div>
  );
};

export default RoadMapComponent;
