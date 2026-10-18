import React from 'react';
import {
  BotanicalDivider,
  BotanicalBranchCorner,
  BotanicalBranchInward,
} from './BotanicalDecorations';

interface ExperienceShowcaseProps {
  onExploreMenu?: () => void;
}

export const ExperienceShowcase: React.FC<ExperienceShowcaseProps> = ({
  onExploreMenu,
}) => {
  // Curated showcase mosaic items from approved photographs
  const showcaseItems = [
    {
      index: 1, // halloumi-toast
      title: 'Halloumi Sourdough Bloomer',
      subtitle: 'Artisanal Toast',
      image: new URL('../assets/images/Halloumi_cheese_sandwich_on_plate_20261017192838.jpg', import.meta.url).href,
      span: 'md:col-span-8 lg:col-span-8',
      aspect: 'aspect-[4/3]',
      tag: 'Fresh Breakfast',
    },
    {
      index: 9, // orange-cooler
      title: 'Tropical Fruit Cooler',
      subtitle: 'Sparkling Infusion',
      image: new URL('../assets/images/Orange_cocktail_on_stone_surface_20261017230027.jpg', import.meta.url).href,
      span: 'md:col-span-4 lg:col-span-4',
      aspect: 'aspect-[3/4]',
      tag: 'Signature Cooler',
    },
    {
      index: 6, // smoothie-bowl
      title: 'Organic Açai Smoothie Bowl',
      subtitle: 'Pumpkin Seed Granola',
      image: new URL('../assets/images/Smoothie_bowl_on_café_table_20261017192748.jpg', import.meta.url).href,
      span: 'md:col-span-4 lg:col-span-4',
      aspect: 'aspect-4/3',
      tag: 'All-Day Energy',
    },
    {
      index: 8, // fusilli-pesto
      title: 'Genovese Fusilli with Chicken Panko',
      subtitle: 'De Cecco Pasta',
      image: new URL('../assets/images/Pasta_with_chicken_and_cheese_20261017200237.jpg', import.meta.url).href,
      span: 'md:col-span-4 lg:col-span-4',
      aspect: 'aspect-4/3',
      tag: 'Chef Special',
    },
    {
      index: 4, // chocolate-crepe
      title: 'Chocolate Strawberry Crêpe',
      subtitle: 'Nutella & Berries',
      image: new URL('../assets/images/Crepe_with_chocolate_and_bananas_20261017011454.jpg', import.meta.url).href,
      span: 'md:col-span-4 lg:col-span-4',
      aspect: 'aspect-4/3',
      tag: 'Sweet Moments',
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F7F3EA] border-t border-[#173A2F]/10 relative overflow-hidden">
      {/* Decorative Botanical branch illustrations */}
      <BotanicalBranchCorner
        className="absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 text-[#5A6F54] rotate-90 -translate-x-12 -translate-y-12 pointer-events-none"
        color="#5A6F54"
        opacity={0.14}
      />
      <BotanicalBranchInward
        className="hidden lg:block absolute bottom-12 right-0 w-72 h-44 text-[#8B9E87] pointer-events-none"
        color="#8B9E87"
        opacity={0.13}
        side="right"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#173A2F]/80 uppercase mb-3">
            CULINARY COMPOSITION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173A2F] font-semibold tracking-tight text-balance">
            A taste of the KAFFEPAUS experience.
          </h2>
          <BotanicalDivider color="#173A2F" opacity={0.25} className="my-3" />
          <p className="text-sm sm:text-base text-[#292A25]/80 leading-relaxed font-sans mt-2">
            Every dish is prepared fresh to order using honest ingredients, French sourdoughs,
            and specialty beans roasted with intention.
          </p>
        </div>

        {/* Editorial Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {showcaseItems.map((item, idx) => (
            <div
              key={item.title}
              className={`${item.span} group relative rounded-2xl overflow-hidden bg-[#EAE4D8] border border-[#173A2F]/10 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                idx === 1 ? 'md:h-full' : ''
              }`}
            >
              <div className={`w-full ${item.aspect} ${idx === 1 ? 'md:h-full md:aspect-auto' : ''} relative overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Visual Scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#13261F]/80 via-[#13261F]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Subtle Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-sans font-medium tracking-wider uppercase text-[#F7F3EA]/90 bg-[#13261F]/50 backdrop-blur-xs px-2.5 py-1 rounded-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-[#F7F3EA]">
                  <p className="text-xs uppercase tracking-widest text-[#D8D0C3] font-sans">
                    {item.subtitle}
                  </p>
                  <p className="font-serif text-lg sm:text-xl font-medium mt-0.5 text-balance">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
