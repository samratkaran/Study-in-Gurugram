"use client"
import React, { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import StudyinGurugramLogo from "@/Assets/study_in_gurugram_log.png";
import Image from 'next/image';
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed md:w-full w-full top-navbar flex justify-between pt-3 bg-white ">
        <div className="pl-4">
          <Image src={StudyinGurugramLogo} alt='' />
        </div>
        <div className="flex  gap-10 pr-6  ">
          <div className='d-flex '>
             <div className="group">
                <Link href="/about" className="text-black ">
                About Us
                </Link>
                <div className="h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>

               <div className="group">
                <Link href="/contact" className="text-black ">
                Contact Us
                </Link>
                <div className="h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
          </div>
          <div><div className="flex justify-center items-center gap-2 ">
            <FaPhoneSquareAlt />
            <p>00000000000</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <MdEmail />
            <p>infgo@lorem11</p>
          </div></div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 fixed w-full z-50 mt-24 main-navbar">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-12">
              <div className="group">
                <Link href="/" className="text-white ">
                Home
                </Link>
                <div className="h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
             
              <div className="group">
                <Link href="/universities" className="text-white ">
                Universities
                </Link>
                <div className="h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
              <div className="group">
                <Link href="/colleges" className="text-white ">
                Colleges
                </Link>
                <div className="h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>

              <div className="group">
                <Link href="/exams" className="text-white ">
                Exams
                </Link>
                <div className="h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>

              <div className="group">
                <Link href="/resources" className="text-white ">
                Resources
                </Link>
                <div className="h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>

             

              
            </nav>
          </div>
          <div className="flex items-center space-x-4">
  <div className="relative w-full md:w-auto">
    <input
      type="text"
      placeholder="Search"
      className="bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none search-bar-navbar  sm:text-sm sm:py-1"
    />
    <FaSearch className="absolute top-2.5 right-3 text-gray-500 sm:top-1.5 cursor-pointer" />
  </div>
  <button 
    className="md:hidden" 
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
    <FaBars color='white' />
  </button>
</div>

        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col space-y-4 px-4 py-2">
              <Link href="/" className="text-black  hover:underline">Dashboard</Link>
              <Link href="/team" className="text-black  hover:underline">Team</Link>
              <Link href="/projects" className="text-black  hover:underline">Projects</Link>
              <Link href="/calendar" className="text-black  hover:underline">Calendar</Link>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
