import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/Images/Hero.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-earthy-brown text-primary-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Mind Vriksha Logo" className=" h-25 mb-4" />
          {/* <p className="text-sm">Mind Vriksha - From Roots To The Sky</p> */}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary-skin transition duration-200">Therapy & Counseling</a></li>
            <li><a href="#" className="hover:text-primary-skin transition duration-200">Addiction Treatment</a></li>
            <li><a href="#" className="hover:text-primary-skin transition duration-200">Mental Health Care</a></li>
            <li><a href="#" className="hover:text-primary-skin transition duration-200">Rehabilitation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#About" className="hover:text-primary-skin transition duration-200">About Us</a></li>
            <li><a href="#Service" className="hover:text-primary-skin transition duration-200">Services</a></li>
            <li><a href="#Blog" className="hover:text-primary-skin transition duration-200">Blog</a></li>
            <li><a href="/consultationform" className="hover:text-primary-skin transition duration-200">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Connect</h3>
          <p className="mb-2"><strong>Phone:</strong> +91 9310199510</p>
          <p className="mb-4"><strong>Email:</strong> info@mindvriksha.com</p>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/DrRohitGarg01/" aria-label="Facebook"><FaFacebook className="hover:text-primary-skin transition duration-200" /></a>
            <a href="https://www.instagram.com/mindvriksha/" aria-label="Instagram"><FaInstagram className="hover:text-primary-skin transition duration-200" /></a>
            <a href="https://in.linkedin.com/company/mindvriksha" aria-label="LinkedIn"><FaLinkedin className="hover:text-primary-skin transition duration-200" /></a>
          </div>
        </div>
      </div>
      <div className=" mt-8 pt-8 text-center text-sm">
        <p>© {year} Mind Vriksha. All rights reserved. | <a href="#" className="hover:text-earthy-brown">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;

//border-t border-primary-skin