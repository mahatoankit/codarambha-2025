
import React, { useState } from 'react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar.jsx";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#themes', label: 'Themes' },
    { href: '#timeline', label: 'Journey' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navLinks} />
          <div className="flex items-center gap-3">
            <NavbarButton variant="secondary" href="#contact" size="default">
              Contact Us
            </NavbarButton>
            <a target="_blank" href="https://forms.gle/11HMh3XUArN2qfwS9" className='rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent whitespace-nowrap relative overflow-hidden px-4 py-2 text-sm bg-[#C12A37] text-white focus:ring-[#C12A37]'>
              Register Now
            </a>
          </div>
        </NavBody>
      </div>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navLinks.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="relative text-slate-300 hover:text-white transition-colors duration-200 py-3 px-4 rounded-2xl hover:bg-slate-800/30 font-medium"
            >
              <span className="block">{item.label}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 pt-4 border-t border-slate-700/50">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full justify-center"
              href="#contact"
              size="lg"
            >
              Contact Us
            </NavbarButton>
            <a target="_blank" href="https://forms.gle/11HMh3XUArN2qfwS9" className='rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent whitespace-nowrap relative overflow-hidden px-4 py-2 text-sm bg-[#C12A37] text-white focus:ring-[#C12A37]'>
              Register Now
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
