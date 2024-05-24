import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Courses from "@/components/Courses";
import ChooseUsSection from "@/components/ChooseUsSection";
import Stats from "@/components/Stats";
import Offerings from "@/components/Offerings";
import TeamMembers from "@/components/TeamMembers";
import UpcomingSessions from "@/components/UpcomingSessions";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { reviews } from "@/utils/constants/reviews";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ChooseUsSection />
      <Courses />
      <Stats />
      <Offerings />
      <TeamMembers />
      <UpcomingSessions />
      <Testimonials allReviews={reviews} />
      <Footer />
    </>
  );
};

export default LandingPage;
