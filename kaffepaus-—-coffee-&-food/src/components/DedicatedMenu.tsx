import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MenuCategory } from '../data/menuData';
import { Search, X, Coffee, UtensilsCrossed, Cake, Wine, Sparkles } from 'lucide-react';
import {
  BotanicalDivider,
  BotanicalSlenderBranch,
  BotanicalEucalyptusSprig,
  BotanicalCornerArch,
  BotanicalPetiteSprig,
} from './BotanicalDecorations';

type FilterGroup = 'all' | 'breakfast' | 'sandwiches' | 'mains' | 'crepes-sweets' | 'coffee' | 'drinks';

export const DedicatedMenu: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<FilterGroup>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { key: 'all' as FilterGroup, label: 'Full Menu', icon: Sparkles },
    { key: 'breakfast' as FilterGroup, label: 'Breakfast & Sourdough', icon: UtensilsCrossed },
    { key: 'sandwiches' as FilterGroup, label: 'Sandwiches & Wraps', icon: UtensilsCrossed },
    { key: 'mains' as FilterGroup, label: 'Mains, Pasta & Bowls', icon: UtensilsCrossed },
    { key: 'crepes-sweets' as FilterGroup, label: 'Crêpes, Waffles & Sweets', icon: Cake },
    { key: 'coffee' as FilterGroup, label: 'Specialty Coffee', icon: Coffee },
    { key: 'drinks' as FilterGroup, label: 'Coolers, Smoothies & Tea', icon: Wine },
  ];

  // Filter categories according to active tab and search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return MENU_CATEGORIES.map((cat) => {
      // First check group match
      if (activeGroup !== 'all' && cat.group !== activeGroup) {
        return null;
      }

      // If search query is present, filter items inside
      if (!query) {
        return cat;
      }

      const matchingItems = cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query)) ||
          cat.title.toLowerCase().includes(query)
      );

      if (matchingItems.length === 0) return null;

      return {
        ...cat,
        items: matchingItems,
      };
    }).filter(Boolean) as MenuCategory[];
  }, [activeGroup, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#F7F3EA] relative overflow-hidden">
      {/* Subtle, airy botanical illustrations framing outer edges */}
      <BotanicalCornerArch
        className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 -translate-x-4 -translate-y-4 pointer-events-none"
        opacity={0.36}
      />
      <BotanicalPetiteSprig
        className="hidden sm:block absolute top-0 right-0 w-36 sm:w-48 h-40 sm:h-52 pointer-events-none translate-x-2 -translate-y-2 rotate-45"
        opacity={0.34}
        flip
      />
      <BotanicalEucalyptusSprig
        className="hidden lg:block absolute -right-6 xl:right-2 top-1/3 w-44 lg:w-56 h-[520px] pointer-events-none rotate-3"
        opacity={0.34}
        side="right"
      />
      <BotanicalSlenderBranch
        className="hidden xl:block absolute -left-8 xl:left-2 top-2/3 w-44 lg:w-52 h-[500px] pointer-events-none -rotate-6"
        opacity={0.35}
        flip
        side="left"
      />
      <BotanicalPetiteSprig
        className="hidden sm:block absolute -bottom-4 left-4 w-36 sm:w-48 h-40 sm:h-52 pointer-events-none -rotate-12"
        opacity={0.32}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#173A2F]/80 uppercase mb-2">
            ALL-DAY REFRESHMENT
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173A2F] font-semibold tracking-tight">
            The Menu
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#173A2F]/85 mt-2">
            Find your next favourite.
          </p>
          <BotanicalDivider color="#173A2F" opacity={0.25} className="my-2" />
          <p className="text-xs sm:text-sm text-[#292A25]/70 font-sans max-w-md mx-auto">
            All prices in UAE Dirhams (Dh). Freshly prepared to order.
          </p>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="mb-12 space-y-5">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#173A2F]/60" />
            <input
              type="text"
              placeholder="Search dishes, coffee, crêpes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 text-sm bg-[#EAE4D8]/60 border border-[#173A2F]/20 rounded-full text-[#292A25] placeholder-[#292A25]/50 focus:outline-none focus:ring-2 focus:ring-[#173A2F]/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#173A2F]/60 hover:text-[#173A2F]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Functional Category Filter Tabs (Safe overflow scrolling & centered alignment) */}
          <div className="w-fit max-w-full mx-auto overflow-x-auto py-2 no-scrollbar scroll-smooth">
            <div className="flex items-center gap-1.5 w-max px-4 sm:px-6">
              {filterTabs.map((tab) => {
                const isActive = activeGroup === tab.key;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveGroup(tab.key)}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#173A2F] text-[#F7F3EA] shadow-xs'
                        : 'bg-[#EAE4D8]/60 text-[#292A25] hover:bg-[#EAE4D8] hover:text-[#173A2F]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Menu Listings Container */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-[#EAE4D8]/40 rounded-3xl border border-[#173A2F]/10 p-8">
            <p className="font-serif text-xl text-[#173A2F] mb-2">No matching dishes found</p>
            <p className="text-sm text-[#292A25]/70 mb-4">
              Try adjusting your search query or switch back to the Full Menu.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveGroup('all');
              }}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#F7F3EA] bg-[#173A2F] rounded-full hover:bg-[#13261F] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-14 sm:space-y-16">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#F7F3EA] rounded-3xl p-6 sm:p-10 border border-[#173A2F]/12 shadow-xs transition-all hover:border-[#173A2F]/25"
              >
                {/* Category Header */}
                <div className="mb-6 sm:mb-8 pb-4 border-b border-[#173A2F]/15">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#173A2F] font-semibold tracking-tight">
                      {cat.title}
                    </h3>
                    {cat.subtitle && (
                      <span className="text-xs sm:text-sm font-sans italic text-[#173A2F]/75">
                        {cat.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Items Grid (2 columns on tablet/desktop for balance) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-7 sm:gap-y-8">
                  {cat.items.map((item) => (
                    <div
                      key={item.id}
                      className="group flex flex-col justify-between py-1 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-serif text-base sm:text-lg text-[#173A2F] font-medium tracking-tight group-hover:text-[#13261F] transition-colors">
                          {item.name}
                        </span>
                        <span className="grow mx-2 border-b border-dotted border-[#173A2F]/25 self-baseline hidden sm:block" />
                        <span className="font-mono tabular-nums text-sm sm:text-base font-semibold text-[#173A2F] whitespace-nowrap shrink-0">
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-xs sm:text-sm text-[#292A25]/70 leading-relaxed mt-1 font-sans pr-4">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dietary & Service Note */}
        <div className="mt-14 text-center border-t border-[#173A2F]/10 pt-8">
          <p className="text-xs text-[#173A2F]/70 font-sans tracking-wide">
            Special requests or allergies? Please inform our staff when ordering. All coffees prepared with fresh whole milk; dairy-free options and flavour syrups available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};
