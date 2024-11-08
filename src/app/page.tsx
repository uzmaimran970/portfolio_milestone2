"use client";


import Navbar from "./components/navbar"

import Footer from "./components/Footer"
import HeroSection from "./components/heroSection";
import AboutSection from "./components/Aboutsection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";



export default function Homw(){
  return(
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </div>
    <Footer />
  </main>
  )
}