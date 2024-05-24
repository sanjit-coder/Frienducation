"use client";
import React from "react";
import Image from "next/image";
import teamMember1 from "@/assets/images/teamMember1.svg";
import facebook from "@/assets/images/icons/facebook.svg";
import instagram from "@/assets/images/icons/instagram.svg";
import linkedIn from "@/assets/images/icons/linkedIn.svg";
import { redirectLink } from "@/utils/helpers/redirectLink";

interface TeamMemberCardProps {
  name: string;
  position: string;
  imageUrl: any;
  socialIds: Array<string>;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  imageUrl,
  socialIds,
}) => {
  const handleSocialMediaClick = (link: string) => {
    redirectLink(link);
  };
  return (
    <div className="teamMemberCard">
      <div className="teamMemberCard_leftContainer">
        <div className="teamMemberCard_leftContainer_member">
          <Image
            src={imageUrl}
            alt="TeamMember1"
            style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
          />
        </div>
      </div>
      <div className="teamMemberCard_rightContainer">
        <div className="teamMemberCard_rightContainer_content">
          <div className="teamMemberCard_rightContainer_content_heading">
            {name}
          </div>
          <div className="teamMemberCard_rightContainer_content_text">
            {position}
          </div>
          <div className="teamMemberCard_rightContainer_content_icons">
            <div className="iconsParentContainer">
              <div
                className="iconsParentContainer_outline"
                onClick={() => handleSocialMediaClick(socialIds[0])}
              >
                <Image src={linkedIn} alt="LinkedInIcon" />
              </div>
              <div
                className="iconsParentContainer_outline"
                onClick={() => handleSocialMediaClick(socialIds[1])}
              >
                <Image src={instagram} alt="InstagramIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
