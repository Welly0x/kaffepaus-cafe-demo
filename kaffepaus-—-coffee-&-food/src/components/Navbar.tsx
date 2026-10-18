import React, { useState, useEffect } from 'react';
import { KaffepausLogo } from './KaffepausLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F3EA]/95 backdrop-blur-md shadow-xs border-b border-[#173A2F]/10 py-3'
          : 'bg-[#F7F3EA]/85 backdrop-blur-xs py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Emblem Lockup */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173A2F]"
            aria-label="KAFFEPAUS Home"
          >
            <KaffepausLogo variant="horizontal" theme="light" size={40} />
          </a>

          {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#292A25]">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="hover:text-[#173A2F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#173A2F]"
            >
              Home
            </a>
            <a
              href="#story"
              onClick={(e) => handleLinkClick(e, 'story')}
              className="hover:text-[#173A2F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#173A2F]"
            >
              Our Story
            </a>
            <a
              href="#menu"
              onClick={(e) => handleLinkClick(e, 'menu')}
              className="hover:text-[#173A2F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#173A2F]"
            >
              Menu
            </a>
            <a
              href="#location"
              onClick={(e) => handleLinkClick(e, 'location')}
              className="hover:text-[#173A2F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#173A2F]"
            >
              Find Us & Hours
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="#menu"
              onClick={(e) => handleLinkClick(e, 'menu')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#F7F3EA] bg-[#173A2F] rounded-full hover:bg-[#13261F] active:scale-95 transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#173A2F] hover:bg-[#173A2F]/10 transition-colors focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F3EA] border-b border-[#173A2F]/15 px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#292A25]">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="py-2 hover:text-[#173A2F] transition-colors border-b border-[#173A2F]/10"
            >
              Home
            </a>
            <a
              href="#story"
              onClick={(e) => handleLinkClick(e, 'story')}
              className="py-2 hover:text-[#173A2F] transition-colors border-b border-[#173A2F]/10"
            >
              Our Story
            </a>
            <a
              href="#menu"
              onClick={(e) => handleLinkClick(e, 'menu')}
              className="py-2 hover:text-[#173A2F] transition-colors border-b border-[#173A2F]/10"
            >
              Menu
            </a>
            <a
              href="#location"
              onClick={(e) => handleLinkClick(e, 'location')}
              className="py-2 hover:text-[#173A2F] transition-colors border-b border-[#173A2F]/10"
            >
              Find Us & Hours
            </a>
            <div className="pt-2">
              <a
                href="#menu"
                onClick={(e) => handleLinkClick(e, 'menu')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wider uppercase text-[#F7F3EA] bg-[#173A2F] rounded-full hover:bg-[#13261F] active:scale-95 transition-all text-center cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
