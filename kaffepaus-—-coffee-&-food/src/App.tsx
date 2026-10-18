/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceShowcase } from './components/ExperienceShowcase';
import { AboutSection } from './components/AboutSection';
import { DedicatedMenu } from './components/DedicatedMenu';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#292A25] font-sans antialiased selection:bg-[#173A2F] selection:text-[#F7F3EA]">
      {/* Refined Sticky Navigation Bar */}
      <Navbar onNavigate={handleNavigate} />

      <main>
        {/* 1. Hero & Brand Introduction */}
        <Hero
          onExploreMenu={() => handleNavigate('menu')}
          onFindUs={() => handleNavigate('location')}
        />

        {/* 2. Visual Food & Coffee Showcase */}
        <ExperienceShowcase
          onExploreMenu={() => handleNavigate('menu')}
        />

        {/* 3. About KAFFEPAUS & Philosophy */}
        <AboutSection />

        {/* 4. Dedicated Complete Menu */}
        <DedicatedMenu />

        {/* 5. Location, Visit, and Map Information */}
        <LocationSection />
      </main>

      {/* 6. Brand Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
