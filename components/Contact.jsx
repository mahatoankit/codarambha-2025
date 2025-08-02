
import React from 'react';
import { 
  FaEnvelope, 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn 
} from 'react-icons/fa';

const socialLinks = [
  { icon: <FaInstagram className="w-7 h-7" />, href: 'https://instagram.com/codarambha', name: 'Instagram' },
  { icon: <FaFacebookF className="w-7 h-7" />, href: 'https://facebook.com/codarambha', name: 'Facebook' },
  { icon: <FaLinkedinIn className="w-7 h-7" />, href: 'https://linkedin.com/company/codarambha', name: 'LinkedIn' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Get In <span className="text-[#C12A37]">Touch</span>
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Have questions or want to partner with us? We’d love to hear from you.
        </p>
        <div className="mt-10">
          <a
            href="mailto:codarambha@sunway.edu.np"
            className="inline-flex items-center text-xl font-semibold text-slate-200 hover:text-[#C12A37] transition-colors"
          >
            <FaEnvelope className="w-6 h-6 mr-3" />
            codarambha@sunway.edu.np
          </a>
        </div>
        <div className="mt-10 flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-slate-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
