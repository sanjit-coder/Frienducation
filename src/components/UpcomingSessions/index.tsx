import React from "react";
import Image from "next/image";
import sessionCard1 from "@/assets/images/sessionCard1.jpg";
import sessionCardImage1 from "@/assets/images/sessionCardImage1.jpeg";
import sessionCardImage2 from "@/assets/images/sessionCardImage2.jpeg";
import sessionCardImage3 from "@/assets/images/sessionCardImage3.jpeg";
import youtubeLive from "@/assets/images/youtubeLive.svg";

const UpcomingSessions: React.FC = () => {
  return (
    <div className="sessions">
      <div className="sessions_headingContainer">
        <div className="sessions_headingContainer_primary">Upcoming</div>
        <div className="sessions_headingContainer_secondary">Session</div>
      </div>
      <div className="sessions_cardsContainer">
        <div className="sessions_sessionCard">
          <Image
            src={sessionCardImage1}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundPosition: "center",
            }}
            alt="sessionimage"
          />
        </div>
        <div className="sessions_sessionCard">
          <Image
            src={sessionCardImage2}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundPosition: "center",
            }}
            alt="sessionimage"
          />
        </div>
        <div className="sessions_sessionCard">
          <Image
            src={sessionCardImage3}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundPosition: "center",
            }}
            alt="sessionimage"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessions;
