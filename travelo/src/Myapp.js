import React, { useEffect } from "react";

// components
import ScrollTop from "./components/ScrollTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

// animation
import scrollreveal from "scrollreveal";

export default function Myapp() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(`nav,#hero,#services,#recommend,#testimonials,footer`, {
      opacity: 0,
      interval: 300,
    });
  }, []);

  return (
    <>
      <ScrollTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonial />
      <Footer />
    </>
  );
}
