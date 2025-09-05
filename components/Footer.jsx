
import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <div className="flex gap-5 items-center justify-center">
          <img src="/logo.svg" className='w-[50px]' />
          <h2 className="text-4xl font-bold text-white">Codarambha <span className="text-[#C12A37]">2025</span></h2>
        </div>
        <p className="my-2 mt-3 text-lg">An intra-college hackathon proudly organized by the AI Club in collaboration with fellow SSRC clubs, bringing together the brightest minds from Sunway College Kathmandu</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://instagram.com/codarambha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/codarambha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/company/codarambha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          <a
            href="mailto:codarambha@sunway.edu.np"
            className="inline-flex items-center text-xl font-semibold text-slate-200 hover:text-[#C12A37] transition-colors"
          >
            <FaEnvelope className="w-6 h-6 mr-3" />
          </a>
        </div>
        <div className="mt-8">
          <p className="text-sm">
            Designed and Developed by <a href="#" className="font-semibold text-slate-300 hover:text-[#C12A37]">AI Club</a> | SSRC
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Codarambha | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
