"use client";
import {assets} from '../../assets/assets';
import StatItem from "./StatItem.jsx"; // adjust path if needed
import { GraduationCap, Box, Smile } from "lucide-react";

const Hero = () => {
  return (
    <section className="container flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto mt-6 px-8  py-20 gap-12 text-center md:text-left">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6 w-full self-start mb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Your Trusted Education Partner
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
          We help schools streamline their processes and deliver better learning
          experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition w-full sm:w-auto cursor-pointer">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gren-600 text-green-600 rounded-md hover:bg-blue-50 transition w-full sm:w-auto cursor-pointer">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 ">
          <StatItem icon={GraduationCap} label="1,200+ Schools" />
          <StatItem icon={Box} label="45K+ Orders" />
          <StatItem icon={Smile} label="98% Satisfaction" />
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 w-full h-full flex-1 justify-center">
        <img
          src={assets.student_uniform}
          alt="Education Illustration"
          className="lg:mt-[-300px] mt-[-250px]  max-w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
