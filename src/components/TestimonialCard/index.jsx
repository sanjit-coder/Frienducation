import React from "react";
import Image from "next/image";
import student1 from "@/assets/images/student1.svg";

const TestimonialCard = ({ items }) => {
  return (
    <div className="testimonialCard">
      <div className="testimonialCard_rightCard">
        <div className="testimonialCard_rightCard_innerCircle">
          <Image
            src={items?.imageUrl}
            alt="Student1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="testimonialCard_leftCard">
        <div className="testimonialCard_leftCard_heading">{items?.title}</div>
        <div className="testimonialCard_leftCard_ratingContainer">
          <div className="name">
            {items?.name}

            <div className="rating">
              {"⭐️".repeat(items?.ratings > 5 ? 5 : items?.ratings)}
            </div>
          </div>
        </div>
      </div>
      <div className="testimonialCard_rotatedCard"></div>
      <div className="testimonialCard_text">{items?.description}</div>
    </div>
  );
};

export default TestimonialCard;
