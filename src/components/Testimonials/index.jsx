import React from "react";
import TestimonialCard from "../TestimonialCard";

const Testimonials = ({ allReviews }) => {
  if (allReviews?.length === 0 || allReviews === undefined) {
    // TODO Remove This Condition Once HomePage Integration Done
    // THIS IS FOR DUMMY RESPONSE
    return (
      <div className="testimonialSection">
        <div className="testimonialSection_lowerBorder"></div>
        <div className="testimonialSection_heading">
          What our <span>Students Say</span> about us
        </div>
        <div className="testimonialSection_cardContainer">
          <TestimonialCard
            name={"Nitish Sheoran"}
            desc={
              " Hi, I am a student of the advanced DSA batch at Frienducation. The instructors you chose for the batch are phenomenal. Their teaching style is dynamic and creates an engaging environment. They were not only knowledgeable but also patient and approachable."
            }
          />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div className="testimonialSection_lowerBorder"></div>
      </div>
    );
  }
  return (
    <div className="testimonialSection">
      <div className="testimonialSection_lowerBorder"></div>
      <div className="testimonialSection_heading">
        What our <span>Students Say</span> about us
      </div>
      <div className="testimonialSection_cardContainer">
        {allReviews?.map((ele) => {
          return <TestimonialCard items={ele} />;
        })}
        {/* <TestimonialCard />
        <TestimonialCard /> */}
      </div>
      <div className="testimonialSection_lowerBorder"></div>
    </div>
  );
};

export default Testimonials;
