"use client"
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Services from "@/components/services/Services";
import Benefits from "@/components/benefits/Benefits";
import FAQ from "@/components/faq/FAQ";
import Testimonials from "@/components/testimonials/Testimonials";

import ContactUs from "@/components/contact-us/ContactUs";
import { useEffect } from "react";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";


export default function Home() {

    useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "")
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }, [])
  return (
    <main className="container">
      <Hero/>
      <Benefits/>
      
      <Services/>
      <WhyChooseUs/>
    
      <FAQ/>
     
      <ContactUs/>
    </main>
  );
}
