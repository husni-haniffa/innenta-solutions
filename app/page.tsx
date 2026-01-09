"use client"
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Benefits from "@/components/benefits/Benefits";
import { useEffect } from "react";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import CTA from "@/components/cta/CTA";

export default function Home() {

  useEffect(() => {
  const handleHashChange = () => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "")
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }
      handleHashChange()
      window.addEventListener('hashchange', handleHashChange) 
      return () => {
        window.removeEventListener('hashchange', handleHashChange)
      }
    }, [])

  return (
    <>
    <Hero/>
    <Benefits/>
    <Services/>
    <WhyChooseUs/>
    <CTA/>
    </>
  );
}
