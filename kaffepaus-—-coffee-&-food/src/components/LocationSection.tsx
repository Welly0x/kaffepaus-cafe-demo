import React, { useState, useEffect } from 'react';
import { MapPin, Phone, ExternalLink, Navigation, Clock, Sparkles } from 'lucide-react';
import { CAFE_INFO, getDubaiTimeStatus } from '../data/cafeInfo';
import {
  BotanicalDivider,
  BotanicalSlenderBranch,
  BotanicalEucalyptusSprig,
  BotanicalCornerArch,
  BotanicalPetiteSprig,
} from './BotanicalDecorations';

export const LocationSection: React.FC = () => {
  const [status, setStatus] = useState(() => getDubaiTimeStatus());

  // Periodically refresh current Dubai time status every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getDubaiTimeStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F7F3EA] relative overflow-hidden">
      {/* Top-right corner delicate botanical arch */}
      <BotanicalCornerArch
        className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 translate-x-4 -translate-y-4 pointer-events-none"
        opacity={0.36}
        flip
      />

      {/* Top-left subtle petite sprig */}
      <BotanicalPetiteSprig
        className="hidden sm:block absolute top-0 left-0 w-36 sm:w-48 h-40 sm:h-52 pointer-events-none -translate-x-2 -translate-y-2 rotate-45"
        opacity={0.34}
      />

      {/* Varied Botanical Branch: Slender Olive along left margin */}
      <BotanicalSlenderBranch
        className="hidden lg:block absolute -left-8 xl:left-2 top-1/3 w-44 lg:w-52 h-[500px] pointer-events-none -rotate-6"
        opacity={0.35}
        flip
        side="left"
      />

      {/* Varied Botanical Branch: Rounded Eucalyptus along right margin */}
      <BotanicalEucalyptusSprig
        className="hidden xl:block absolute -right-6 xl:right-2 bottom-12 w-44 lg:w-56 h-[500px] pointer-events-none rotate-3"
        opacity={0.34}
        side="right"
      />

      {/* Bottom-left delicate sprig */}
      <BotanicalPetiteSprig
        className="hidden sm:block absolute -bottom-4 left-4 w-36 sm:w-48 h-40 sm:h-52 pointer-events-none -rotate-12"
        opacity={0.32}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#173A2F]/80 uppercase mb-2">
            VISIT OUR CAFÉ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173A2F] font-semibold tracking-tight text-balance">
            Come by for a little pause.
          </h2>
          <BotanicalDivider color="#173A2F" opacity={0.25} className="my-2" />
          <p className="text-sm sm:text-base text-[#292A25]/80 font-sans mt-2 max-w-lg mx-auto leading-relaxed">
            Located on the ground floor of Imperial Residence in Jumeirah Village Triangle,
            welcoming neighbours, food lovers, and coffee enthusiasts.
          </p>
        </div>

        {/* Location & Map Grid: Balanced 2-Column Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Column 1: Details & Opening Hours (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* 1. Café Contact & Location Card */}
            <div className="bg-[#EAE4D8]/70 rounded-3xl p-6 sm:p-8 border border-[#173A2F]/12 shadow-xs transition-all hover:border-[#173A2F]/25">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#173A2F]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#173A2F]" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#173A2F]">
                    KAFFEPAUS · JVT
                  </span>
                </div>
                {/* Real-time Dubai Status Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F3EA] border border-[#173A2F]/15 text-xs font-medium text-[#173A2F]">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen ? 'bg-emerald-600' : 'bg-[#8B9E87]'
                    }`}
                  />
                  <span>{status.statusLabel}</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#173A2F] font-semibold mb-6">
                {CAFE_INFO.name}
              </h3>

              {/* Address & Telephone */}
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#173A2F]/10 flex items-center justify-center shrink-0 text-[#173A2F] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#173A2F]/70">
                      Address
                    </p>
                    <p className="text-sm sm:text-base text-[#292A25] font-normal leading-relaxed mt-0.5">
                      {CAFE_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#173A2F]/10 flex items-center justify-center shrink-0 text-[#173A2F] mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#173A2F]/70">
                      Telephone
                    </p>
                    <a
                      href={CAFE_INFO.phoneTel}
                      className="text-base sm:text-lg font-mono font-semibold text-[#173A2F] hover:underline mt-0.5 inline-block focus:outline-none focus:ring-1 focus:ring-[#173A2F]"
                    >
                      {CAFE_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#173A2F]/12 flex flex-col sm:flex-row gap-3">
                <a
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#F7F3EA] bg-[#173A2F] rounded-full hover:bg-[#13261F] active:scale-95 transition-all text-center shadow-xs cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href={CAFE_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#173A2F] bg-[#F7F3EA] border border-[#173A2F]/20 rounded-full hover:bg-white active:scale-95 transition-all text-center cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Café</span>
                </a>
              </div>
            </div>

            {/* 2. Verified Opening Hours Card */}
            <div className="bg-[#EAE4D8]/50 rounded-3xl p-6 sm:p-7 border border-[#173A2F]/12 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#173A2F]/10">
                <div className="flex items-center gap-2.5 text-[#173A2F]">
                  <Clock className="w-4 h-4 text-[#173A2F]" />
                  <h4 className="font-serif text-lg sm:text-xl font-semibold tracking-tight">
                    Opening Hours
                  </h4>
                </div>
                <span className="text-[11px] font-sans text-[#173A2F]/70 tracking-wider uppercase">
                  {status.statusSubtext}
                </span>
              </div>

              {/* Weekly Schedule List */}
              <div className="space-y-2.5">
                {CAFE_INFO.hours.map((entry) => {
                  const isToday = status.currentDayIndex === entry.dayIndex;
                  return (
                    <div
                      key={entry.day}
                      className={`flex items-center justify-between text-xs sm:text-sm py-1.5 px-3 rounded-lg transition-colors ${
                        isToday
                          ? 'bg-[#173A2F]/8 font-medium text-[#173A2F]'
                          : 'text-[#292A25]/85 hover:bg-[#173A2F]/4'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={isToday ? 'font-semibold text-[#173A2F]' : ''}>
                          {entry.day}
                        </span>
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#173A2F] text-[#F7F3EA] px-1.5 py-0.5 rounded-sm">
                            Today
                          </span>
                        )}
                      </div>

                      {entry.isClosed ? (
                        <span className="text-xs font-serif italic text-[#8B9E87] font-medium tracking-wide">
                          Closed
                        </span>
                      ) : (
                        <span className="font-mono tabular-nums text-xs sm:text-sm text-[#173A2F]">
                          {entry.hoursDisplay}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-[#173A2F]/10 text-center">
                <p className="text-[11px] text-[#292A25]/65 leading-relaxed">
                  Kitchen closes 30 minutes prior to closing time. Takeaway & table seating available all day.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Refined Map Embed with Warm Aesthetic Frame (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="grow rounded-3xl overflow-hidden border border-[#173A2F]/15 shadow-sm min-h-[420px] lg:min-h-[580px] bg-[#EAE4D8] relative p-2 sm:p-2.5 bg-[#EAE4D8]/80">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <iframe
                  title="KAFFEPAUS location map at Imperial Residence, Jumeirah Village Triangle, Dubai"
                  src={CAFE_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[400px] lg:min-h-[560px] grayscale-[15%] contrast-[103%]"
                />

                {/* Subtle Brand Forest-Green Overlay */}
                <div
                  className="absolute inset-0 bg-[#173F35]/[0.18] pointer-events-none z-[1]"
                  aria-hidden="true"
                />

                {/* Floating Map Overlay Badge */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none z-10">
                  <div className="bg-[#F7F3EA]/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xs text-xs font-medium text-[#173A2F] border border-[#173A2F]/10 flex items-center gap-2 pointer-events-auto">
                    <span className="w-2 h-2 rounded-full bg-[#173A2F]" />
                    <span className="font-semibold">Imperial Residence G 23</span>
                    <span className="text-[#8B9E87]">·</span>
                    <span className="text-[#292A25]/75">JVT Dubai</span>
                  </div>

                  <a
                    href={CAFE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#173A2F] text-[#F7F3EA] hover:bg-[#13261F] px-3.5 py-2 rounded-xl shadow-xs text-xs font-medium transition-all pointer-events-auto flex items-center gap-1.5"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
