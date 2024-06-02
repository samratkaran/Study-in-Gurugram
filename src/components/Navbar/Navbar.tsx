"use client"
import React, { useState } from 'react';
import { FaSearch,  FaBars } from 'react-icons/fa';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import StudyinGurugramLogo from "@/Assets/study_in_gurugram_log.png"
import Image from 'next/image';
import "./Navbar.css"


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

   <>
      <div className="fixed md:w-full w-full  top-navbar flex justify-between pt-3 bg-white ">
     <div className="pl-4">  <Image src={StudyinGurugramLogo} alt=''  /></div>
     <div className="flex flex-col gap-1 pr-6 ">
    
      <div className="flex flex justify-center items-center gap-2 ">
      <FaPhoneSquareAlt />
      <p>00000000000</p>
      </div>

     <div className="flex justify-center items-center gap-2">
     <MdEmail />
     <p>infgo@lorem11</p>

    </div>
    </div>
    </div>

    <div className="bg-white border-b border-gray-200 fixed w-full z-50 mt-24 main-navbar">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* <Image src="/path/to/your/logo.png" alt="Logo" width={40} height={40} /> */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-900 hover:underline">Dashboard</Link>
            <Link href="/team" className="text-white hover:text-gray-900 hover:underline">Team</Link>
            <Link href="/projects" className="text-white hover:text-gray-900 hover:underline">Projects</Link>
            <Link href="/calendar" className="text-white hover:text-gray-900 hover:underline">Calendar</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 border border-gray-300 rounded-full py-2 pl-8 pr-4 focus:outline-none w-64"
            />
            <FaSearch className="absolute top-2 left-2 text-gray-500" />
          </div>
          {/* <FaBell className="text-gray-500" /> */}
          {/* <Image src={ProfilePic} alt="Profile" width={32} height={32} className="rounded-full" /> */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <Link href="/" className="text-white hover:text-gray-900 hover:underline">Dashboard</Link>
            <Link href="/team" className="text-white hover:text-gray-900 hover:underline">Team</Link>
            <Link href="/projects" className="text-white hover:text-gray-900 hover:underline">Projects</Link>
            <Link href="/calendar" className="text-white hover:text-gray-900 hover:underline">Calendar</Link>
          </nav>
        </div>
      )}
    </div>

    </>
  );
};

export default Navbar;
