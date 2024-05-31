import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className=" mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <div className="text-white text-2xl mb-4">
              <Image src={require("@/Assets/sig_logo.png")} alt='' />
            </div>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300"><FaInstagram     size={30} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-300"><FaFacebook      size={30} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-300"><IoLogoWhatsapp  size={30} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-300"><FaXTwitter      size={30} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-300"><FaLinkedin      size={30} /></a>
            </div>
          </div>
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <h3 className="text-yellow-400 mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Features</a></li>
              <li><a href="#" className="hover:text-gray-300">Testimonials</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <h3 className="text-yellow-400 mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Help Centre</a></li>
              <li><a href="#" className="hover:text-gray-300">Tweet @ Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Feedback</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <h3 className="text-yellow-400 mb-4">Useful Links</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Courses</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Top Colleges</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6">
            <h3 className="text-yellow-400 mb-4">Contact Us</h3>
            <ul>
              <li className="hover:text-gray-300"><a href="tel:+918524923569">+91 85249 23569</a></li>
              <li className="hover:text-gray-300"><a href="mailto:info@mba4me.in">info@mba4me.in</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6">
            <h3 className="text-yellow-400 mb-4">Our Place</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354349102845!2d-122.08385188468182!3d37.38605197983125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c8dc7a12d%3A0x1627d8f0b6d89339!2sGoogleplex!5e0!3m2!1sen!2sin!4v1594108987556!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
            //   allowFullScreen=""
              aria-hidden="false"
            //   tabIndex="0"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <div className="flex flex-wrap justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">Programs</a>
          <a href="#" className="hover:text-gray-300">Colleges</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Entrances</a>
          <a href="#" className="hover:text-gray-300">Resources</a>
        </div>
        <p className="text-gray-500 mt-4">&copy; 2024 Study in Gurugram</p>
      </div>
    </footer>
  );
};

export default Footer;
