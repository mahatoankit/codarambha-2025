
import React from 'react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <h3 className="text-2xl font-bold text-white">Codarambha <span className="text-[#C12A37]">2025</span></h3>
        <p className="mt-2 text-lg">Sunway College Kathmandu</p>
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
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8">
          <p className="text-sm">
            © {new Date().getFullYear()} Codarambha | All Rights Reserved
          </p>
          <p className="text-sm mt-2">
            Developed by <a href="#" className="font-semibold text-slate-300 hover:text-[#C12A37]">Ankit Mahato</a> | Head of AI Club 2025 (Sunway SSR)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
