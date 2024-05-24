"use client";

import AboutCoursesSection from "@/components/AboutCourses";
import ChooseUsSection from "@/components/ChooseUsSection";
import Courses from "@/components/Courses";
import CoursesFreAskQuestions from "@/components/CoursesFreAskQuestions";
import CoursesHeroSection from "@/components/CoursesHeroSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InstructorCoursesSection from "@/components/InstructorCoursesSection";
import Loader from "@/components/Loader";
import Offerings from "@/components/Offerings";
import RequirementCourses from "@/components/RequirementCourses";
import RoadMapComponent from "@/components/RoadMapComponent";
import Stats from "@/components/Stats";
import TeamMembers from "@/components/TeamMembers";
import Testimonials from "@/components/Testimonials";
import UpcomingSessions from "@/components/UpcomingSessions";
import CertificateCoursesSection from "@/components/certificateComponent";
import CourseContentComponent from "@/components/courseContentComponent";
import { getCourseById } from "@/redux/features/courses/coursesSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reviews } from "@/utils/constants/reviews";

function page() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id, "router");
  const { isCourseDetailsLoading, courseDataById } = useSelector(
    (state) => state?.coursesReducer
  );

  useEffect(() => {
    dispatch(getCourseById(id));
  }, []);

  if (isCourseDetailsLoading) {
    return <Loader />;
  }
  return (
    <div style={{ background: "#0b1629" }}>
      <Header />
      <CoursesHeroSection courseDataById={courseDataById} />
      <div style={{ background: "#4B61D117", height: "10px", width: "100%" }} />
      <div style={{ marginTop: "80px" }} />
      <AboutCoursesSection courseDetails={courseDataById} />
      <div style={{ marginTop: "80px" }} />
      {courseDataById?.course?.courseContent?.length > 0 && (
        <CourseContentComponent
          courseContent={courseDataById?.course?.courseContent}
        />
      )}
      <div style={{ marginTop: "80px" }} />
      <RequirementCourses courseDetails={courseDataById} />
      <div style={{ marginTop: "80px" }} />
      {courseDataById?.course?.roadmap?.length > 0 && (
        <RoadMapComponent roadmap={courseDataById?.course?.roadmap} />
      )}
      {courseDataById?.course?.isCertificateIncluded && (
        <>
          <div style={{ marginTop: "80px" }} />
          <CertificateCoursesSection
            courseName={courseDataById?.course?.title}
            certificateDetails={courseDataById?.course?.certificate}
          />
        </>
      )}
      <div style={{ marginTop: "80px" }} />
      <InstructorCoursesSection courseDetails={courseDataById} />
      <div style={{ marginTop: "80px" }} />
      {courseDataById?.course?.reviews?.length > 0 && (
        <Testimonials allReviews={reviews} />
      )}
      <div style={{ marginTop: "80px" }} />
      <CoursesFreAskQuestions courseDetails={courseDataById} />
      <div style={{ marginTop: "120px" }} />
      <Footer />
    </div>
  );
}

export default page;
