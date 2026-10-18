import React from 'react';
import { KaffepausLogo } from './KaffepausLogo';
import {
  BotanicalSlenderBranch,
  BotanicalEucalyptusSprig,
  BotanicalCornerArch,
  BotanicalPetiteSprig,
} from './BotanicalDecorations';
import { Coffee, Wheat, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#EAE4D8]/50 relative overflow-hidden">
      {/* Top-left corner delicate botanical arch */}
      <BotanicalCornerArch
        className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 -translate-x-4 -translate-y-4 pointer-events-none"
        opacity={0.36}
      />

      {/* Top-right subtle petite sprig */}
      <BotanicalPetiteSprig
        className="hidden sm:block absolute top-2 right-4 w-36 sm:w-44 h-40 sm:h-48 pointer-events-none rotate-45"
        opacity={0.32}
        flip
      />

      {/* Varied Botanical Branch: Rounded Eucalyptus along far right margin */}
      <BotanicalEucalyptusSprig
        className="hidden lg:block absolute -right-6 xl:right-2 top-1/2 -translate-y-1/2 w-44 lg:w-56 h-[500px] pointer-events-none rotate-3"
        opacity={0.35}
        side="right"
      />

      {/* Varied Botanical Branch: Slender Olive along far left margin */}
      <BotanicalSlenderBranch
        className="hidden xl:block absolute -left-8 xl:left-2 top-1/4 w-44 lg:w-52 h-[480px] pointer-events-none -rotate-6"
        opacity={0.35}
        flip
        side="left"
      />

      {/* Bottom-right corner subtle sprig */}
      <BotanicalPetiteSprig
        className="hidden md:block absolute -bottom-4 right-6 w-36 sm:w-48 h-40 sm:h-52 pointer-events-none -rotate-12"
        opacity={0.32}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Emblem & Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="mb-6">
              <KaffepausLogo variant="mark" theme="light" size={72} />
            </div>

            <p className="text-xs font-semibold tracking-[0.25em] text-[#173A2F]/80 uppercase mb-3">
              OUR NEIGHBOURHOOD SANCTUARY
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173A2F] font-semibold leading-[1.18] tracking-tight mb-6">
              A little pause in your day.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#292A25]/90 leading-relaxed mb-6 font-medium">
              Your neighbourhood spot for coffee, good food, and moments worth slowing down for.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#292A25]/80 leading-relaxed mb-8">
              At KAFFEPAUS, we believe café visits should be an unhurried ritual.
              Whether you are meeting neighbours for a morning flat white, settling into a quiet booth with a fresh sourdough bloomer, or treating yourself to warm Parisian crêpes, our kitchen and espresso bar welcome you with care and generosity.
            </p>

            {/* Quiet Scandinavian Philosophy Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#173A2F]/15 w-full">
              <div>
                <div className="flex items-center gap-2 text-[#173A2F] mb-1.5 font-semibold text-sm">
                  <Coffee className="w-4 h-4 text-[#173A2F]" />
                  <span>RAW Coffee Co.</span>
                </div>
                <p className="text-xs text-[#292A25]/75 leading-relaxed">
                  Specialty beans pulled by passionate baristas.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#173A2F] mb-1.5 font-semibold text-sm">
                  <Wheat className="w-4 h-4 text-[#173A2F]" />
                  <span>Artisan Bakes</span>
                </div>
                <p className="text-xs text-[#292A25]/75 leading-relaxed">
                  French sourdough bloomers and butter croissants.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#173A2F] mb-1.5 font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4 text-[#173A2F]" />
                  <span>JVT Community</span>
                </div>
                <p className="text-xs text-[#292A25]/75 leading-relaxed">
                  Warm hospitality in the heart of Imperial Residence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Approved Shakshuka Photography & Architectural Warmth */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl p-3 sm:p-4 bg-[#F7F3EA] border border-[#173A2F]/10 shadow-md">
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-[#D8D0C3] relative">
                <img
                  src="src/assets/images/Shakshuka_with_bread_served_20261017194717.jpg"
                  alt="Mediterranean shakshuka skillet with gently poached eggs, crumbled feta cheese, and toasted sourdough at KAFFEPAUS"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13261F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[#F7F3EA]">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-[#F7F3EA]/80 font-sans">
                    ALL-DAY COMFORT
                  </p>
                  <p className="font-serif text-lg font-medium">
                    Skillet breakfasts cooked with love
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
