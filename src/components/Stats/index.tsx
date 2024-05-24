import React from "react";
import Image from "next/image";
import student from "@/assets/images/student.svg";
import HexagonCard from "../HexagonCard";

const Stats: React.FC = () => {
  return (
    <section className="statscontainer">
      <div className="stats">
        <div className="stats_leftsection">
          <div className="stats_leftsection_image">
            <Image src={student} alt="Student" />
          </div>
          <div className="stats_leftsection_primary">
            Frienducation make your dream job come your way
          </div>
          {/* <div className="stats_leftsection_secondary">
            Frienducation Makes it Happen......
          </div> */}
        </div>

        <div className="stats_rightsection">
          <div className="stats_hexagonContainer">
            <HexagonCard count={25} text={"Internships"} />
            <HexagonCard count={20} text={"Mentors"} />
          </div>

          <div className="stats_hexagonContainerBottom">
            <HexagonCard count={10} text={"Courses"} />
            <HexagonCard count={1000} text={"Students"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
