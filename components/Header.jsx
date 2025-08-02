
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#themes', label: 'Themes' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold text-white">
            Codarambha <span className="text-[#C12A37]">2025</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-slate-300 hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
             <a href="#registration" onClick={(e) => handleLinkClick(e, '#registration')} className="bg-[#C12A37] text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                Register Now
              </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
             {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-slate-300 hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <a href="#registration" onClick={(e) => handleLinkClick(e, '#registration')} className="bg-[#C12A37] text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition-all duration-300">
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
