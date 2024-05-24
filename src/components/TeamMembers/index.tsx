import React from "react";
import TeamMemberCard from "../TeamMemberCard";
import priyansh from "@/assets/images/teamMembers/priyansh.jpeg";
import shubhangi from "@/assets/images/teamMembers/shubhangi.jpeg";
import akshay from "@/assets/images/teamMembers/akshay.jpeg";
import nikhil from "@/assets/images/teamMembers/nikhil.jpeg";

const TeamMembers: React.FC = () => {
  const teamMemberData = [
    {
      id: 1,
      name: "Priyansh Goel",
      position: "CEO and Co-founder, ex Scaler Academy",
      imageUrl: priyansh,
      socialIds: [
        "https://www.linkedin.com/in/priyansh-goel-40737217a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "https://instagram.com/priyanshgoel0120?igshid=OGQ5ZDc2ODk2ZA==",
      ],
    },
    {
      id: 2,
      name: "Shubhangi Goel",
      position: "Co-founder, Lawyer",
      imageUrl: shubhangi,
      socialIds: [
        "https://www.linkedin.com/in/shubhangi-goel-1575b417b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "https://instagram.com/shubhangi_goel06?igshid=MzRlODBiNWFlZA==",
      ],
    },
    {
      id: 3,
      name: "Akshay Upadhyay",
      position: "Incoming SDE at Media.net",
      imageUrl: akshay,
      socialIds: [
        "https://www.linkedin.com/in/akshay-upadhyay-68981a200",
        "https://instagram.com/_akshay.upadhyay_?i",
      ],
    },
    {
      id: 4,
      name: "Nikhil Sharma",
      position: "Full stack developer at Frienducation",
      imageUrl: nikhil,
      socialIds: [
        "https://www.linkedin.com/in/nikhil-sharma-5686041b8/",
        "https://instagram.com/iamlordnikhil?igshid=MzRlODBiNWFlZA==",
      ],
    },
  ];
  return (
    <div className="teamMemberSection">
      <div className="teamMemberSection_mainHeading">
        <div className="teamMemberSection_mainHeading_primary">Meet</div>
        <div className="teamMemberSection_mainHeading_secondary">
          our team
          <span className="borderWhite"></span>
        </div>
      </div>
      <div className="teamMemberSection_topContainer">
        {teamMemberData.slice(0, 2).map((item) => {
          return (
            <TeamMemberCard
              name={item?.name}
              position={item?.position}
              imageUrl={item?.imageUrl}
              socialIds={item?.socialIds}
            />
          );
        })}
      </div>
      <div className="teamMemberSection_middleContainer">
        {/* <TeamMemberCard name={"Celeste Anderson"} position={"Vice President"} /> */}
        <div className="teamMemberSection_middleContainer_heading">
          <div className="teamMemberSection_middleContainer_heading_primary">
            Meet
          </div>
          <div className="teamMemberSection_middleContainer_heading_secondary">
            our team
            <span className="borderWhite"></span>
          </div>
        </div>
        {/* <TeamMemberCard name={"Vice President"} position={"CEO,Company"} /> */}
      </div>
      <div className="teamMemberSection_bottomContainer">
        {teamMemberData.slice(-2).map((item) => {
          return (
            <TeamMemberCard
              name={item?.name}
              position={item?.position}
              imageUrl={item?.imageUrl}
              socialIds={item?.socialIds}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembers;
