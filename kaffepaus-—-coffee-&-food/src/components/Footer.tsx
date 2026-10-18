import React from 'react';
import { KaffepausLogo } from './KaffepausLogo';
import { BotanicalBranchCorner } from './BotanicalDecorations';
import { MapPin, Phone, Navigation, ArrowUp, Clock } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#13261F] text-[#F7F3EA] pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      {/* Subtle hand-drawn botanical line-art branches in footer corners */}
      <BotanicalBranchCorner
        className="absolute top-0 right-0 w-72 h-72 text-[#8B9E87] pointer-events-none -translate-y-12 translate-x-12"
        color="#8B9E87"
        opacity={0.15}
      />
      <BotanicalBranchCorner
        className="absolute bottom-0 left-0 w-72 h-72 text-[#8B9E87] pointer-events-none translate-y-12 -translate-x-12 rotate-180"
        color="#8B9E87"
        opacity={0.12}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#F7F3EA]/12">
          {/* Brand & Statement (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <KaffepausLogo variant="horizontal" theme="dark" size={54} />
            </div>
            <p className="font-serif italic text-lg text-[#D8D0C3] mt-2 mb-4">
              {CAFE_INFO.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#D8D0C3]/80 leading-relaxed max-w-sm font-sans mb-4">
              A welcoming neighbourhood café in Jumeirah Village Triangle, Dubai.
              Serving specialty coffee, artisan sourdough bloomers, Parisian crêpes,
              and thoughtful moments to slow down.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8B9E87] font-medium pt-2">
              <Clock className="w-3.5 h-3.5 text-[#8B9E87]" />
              <span>Mon–Sat: 9:00 AM – 6:00 PM · Sun: Closed</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B9E87] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8D0C3]">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleLinkClick(e, 'hero')}
                  className="hover:text-[#F7F3EA] transition-colors py-0.5 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => handleLinkClick(e, 'story')}
                  className="hover:text-[#F7F3EA] transition-colors py-0.5 inline-block"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleLinkClick(e, 'experience')}
                  className="hover:text-[#F7F3EA] transition-colors py-0.5 inline-block"
                >
                  Culinary Showcase
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleLinkClick(e, 'menu')}
                  className="hover:text-[#F7F3EA] transition-colors py-0.5 inline-block"
                >
                  Dedicated Menu
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => handleLinkClick(e, 'location')}
                  className="hover:text-[#F7F3EA] transition-colors py-0.5 inline-block"
                >
                  Find Us & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B9E87] mb-4">
              Visit & Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#D8D0C3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8B9E87] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {CAFE_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8B9E87] shrink-0" />
                <a
                  href={CAFE_INFO.phoneTel}
                  className="font-mono text-[#F7F3EA] hover:underline"
                >
                  {CAFE_INFO.phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#13261F] bg-[#F7F3EA] hover:bg-white rounded-full transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D0C3]/60 font-sans">
          <p>© {new Date().getFullYear()} {CAFE_INFO.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#8B9E87] hover:text-[#F7F3EA] transition-colors py-1 px-3 rounded-full hover:bg-[#173A2F] cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
