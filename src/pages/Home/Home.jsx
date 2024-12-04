import React from "react";
import Hero from "../../components/Home-Components/Hero/Hero";
import Partners from "../../components/Home-Components/Partners/Partners";
import Offer from "../../components/Home-Components/offer/Offer";
import Super from "../../components/Home-Components/superPowers/Super";
import BlogSection from "../../components/Home-Components/ourBlog/BlogSection";
import Contact from "../../components/Home-Components/ContactUs/Contact";
import NewsLetterSection from "../../components/Home-Components/newsLetter/NewsLetterSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Offer />
      <Super />
      <BlogSection />
      <Contact/>
      <NewsLetterSection/>
    </div>
  );
};

export default Home;
