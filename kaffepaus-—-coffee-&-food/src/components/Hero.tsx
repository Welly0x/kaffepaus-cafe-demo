import React from 'react';
import { ArrowDown, MapPin, Coffee, Utensils } from 'lucide-react';
import {
  BotanicalBranchCorner,
  BotanicalBranchInward,
  BotanicalAtmosphereCluster,
} from './BotanicalDecorations';

interface HeroProps {
  onExploreMenu: () => void;
  onFindUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onFindUs }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#F7F3EA] bg-botanical-pattern"
    >
      {/* Decorative Botanical Branch in top-right corner */}
      <BotanicalBranchCorner
        className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 text-[#5A6F54] -rotate-12 translate-x-12 -translate-y-12 pointer-events-none"
        color="#5A6F54"
        opacity={0.16}
      />

      {/* Gentle Botanical Branch extending inward from the lower left */}
      <BotanicalBranchInward
        className="hidden md:block absolute bottom-8 left-0 w-80 h-44 text-[#8B9E87] pointer-events-none"
        color="#8B9E87"
        opacity={0.14}
        side="left"
      />

      {/* Airy botanical atmosphere cluster behind center-left typography */}
      <BotanicalAtmosphereCluster
        className="hidden lg:block absolute top-20 left-1/4 w-[420px] h-[320px] text-[#A7B4A0] pointer-events-none"
        color="#A7B4A0"
        opacity={0.08}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Typography & Call to Action (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Editorial Label */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#173A2F]/80 uppercase mb-5">
              <span className="w-6 h-[1.5px] bg-[#173A2F]/40" />
              <span>COFFEE & FOOD · JVT, DUBAI</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#173A2F] font-semibold leading-[1.12] tracking-tight text-balance mb-6">
              Good Coffee.{' '}
              <span className="italic font-normal block sm:inline">Beautifully Unhurried.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-[#292A25]/85 leading-relaxed max-w-xl mb-8">
              A welcoming neighbourhood café for thoughtful coffee, fresh flavours,
              and the little moments that make your day.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#173A2F] hover:bg-[#13261F] active:scale-95 text-[#F7F3EA] text-sm font-medium tracking-wide uppercase rounded-full shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173A2F] cursor-pointer"
              >
                Explore Our Menu
              </button>
              <button
                onClick={onFindUs}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#EAE4D8]/80 hover:bg-[#EAE4D8] active:scale-95 text-[#173A2F] text-sm font-medium tracking-wide uppercase rounded-full border border-[#173A2F]/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173A2F] cursor-pointer"
              >
                Find Us
              </button>
            </div>

            {/* Quiet Unboxed Brand Trust Markers */}
            <div className="pt-6 border-t border-[#173A2F]/10 w-full flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-[#173A2F]/75 font-medium">
              <div className="flex items-center gap-1.5">
                <Coffee className="w-4 h-4 text-[#173A2F]" />
                <span>Specialty Beans by RAW Coffee Co.</span>
              </div>
              <span aria-hidden="true" className="text-[#8B9E87]">·</span>
              <div className="flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-[#173A2F]" />
                <span>French Sourdough Bloomers & Crêpes</span>
              </div>
              <span aria-hidden="true" className="text-[#8B9E87]">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#173A2F]" />
                <span>Imperial Residence, JVT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photograph Composition (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            {/* Outer Warm Frame */}
            <div className="relative rounded-3xl p-3 sm:p-4 bg-[#EAE4D8]/70 border border-[#173A2F]/10 shadow-lg">
              <div className="relative aspect-4/3 sm:aspect-4/3 rounded-2xl overflow-hidden bg-[#D8D0C3]">
                <img
                  src="src/assets/images/Café_table_with_food_and_2K_20261017224724.jpg"
                  alt="Hot milk-based coffee with latte art in dark green ceramic cup on rustic wooden table at KAFFEPAUS"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13261F]/60 via-transparent to-transparent" />
                {/* Floating Editorial Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-[#F7F3EA]">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-[#F7F3EA]/80">
                  
                  </p>
                  <p className="font-serif text-lg font-medium">
                    
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle decorative stamp in corner */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#173A2F] text-[#F7F3EA] rounded-2xl p-4 shadow-md items-center gap-3 border border-[#F7F3EA]/15">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8B9E87]" />
              <div className="text-left">
                <p className="text-[10px] tracking-wider uppercase text-[#D8D0C3]">Neighborhood Café</p>
                <p className="font-serif text-sm font-semibold">Jumeirah Village Triangle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#173A2F]/60 hover:text-[#173A2F] transition-colors"
          >
            <span>Discover the experience</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
