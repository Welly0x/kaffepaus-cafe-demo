export interface OpeningHourEntry {
  day: string;
  dayShort: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  openTime: string;
  closeTime: string;
  isClosed: boolean;
  hoursDisplay: string;
}

export interface CafeDetails {
  name: string;
  tagline: string;
  address: string;
  neighborhood: string;
  city: string;
  country: string;
  phone: string;
  phoneTel: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  hours: OpeningHourEntry[];
}

export const CAFE_INFO: CafeDetails = {
  name: 'KAFFEPAUS — COFFEE AND FOOD',
  tagline: 'Good Coffee. Beautifully Unhurried.',
  address: 'G 23, Imperial Residence, Al Barsha South Fifth, Jumeirah Village Triangle, Dubai, UAE',
  neighborhood: 'Jumeirah Village Triangle (JVT)',
  city: 'Dubai',
  country: 'UAE',
  phone: '058 513 9344',
  phoneTel: 'tel:+971585139344',
  mapsUrl: 'https://maps.app.goo.gl/KPpTDXCNAmmM8ZMW7',
  // High-fidelity embed pinned to Imperial Residence, JVT Dubai
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.471618683501!2d55.1915995!3d25.0519828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d6c6e7592cf%3A0x6b680783478959d!2sImperial%20Residence%2C%20Jumeirah%20Village%20Triangle%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  hours: [
    {
      day: 'Monday',
      dayShort: 'Mon',
      dayIndex: 1,
      openTime: '09:00',
      closeTime: '18:00',
      isClosed: false,
      hoursDisplay: '9:00 AM – 6:00 PM',
    },
    {
      day: 'Tuesday',
      dayShort: 'Tue',
      dayIndex: 2,
      openTime: '09:00',
      closeTime: '18:00',
      isClosed: false,
      hoursDisplay: '9:00 AM – 6:00 PM',
    },
    {
      day: 'Wednesday',
      dayShort: 'Wed',
      dayIndex: 3,
      openTime: '09:00',
      closeTime: '18:00',
      isClosed: false,
      hoursDisplay: '9:00 AM – 6:00 PM',
    },
    {
      day: 'Thursday',
      dayShort: 'Thu',
      dayIndex: 4,
      openTime: '09:00',
      closeTime: '18:00',
      isClosed: false,
      hoursDisplay: '9:00 AM – 6:00 PM',
    },
    {
      day: 'Friday',
      dayShort: 'Fri',
      dayIndex: 5,
      openTime: '09:00',
      closeTime: '18:00',
      isClosed: false,
      hoursDisplay: '9:00 AM – 6:00 PM',
    },
    {
      day: 'Saturday',
      dayShort: 'Sat',
      dayIndex: 6,
      openTime: '09:00',
      closeTime: '18:00',
      isClosed: false,
      hoursDisplay: '9:00 AM – 6:00 PM',
    },
    {
      day: 'Sunday',
      dayShort: 'Sun',
      dayIndex: 0,
      openTime: '',
      closeTime: '',
      isClosed: true,
      hoursDisplay: 'Closed',
    },
  ],
};

/**
 * Calculates current open/closed status in Dubai local time (Asia/Dubai, UTC+4).
 */
export function getDubaiTimeStatus(): {
  isOpen: boolean;
  statusLabel: string;
  statusSubtext: string;
  currentDayIndex: number;
  dubaiTimeFormatted: string;
} {
  try {
    const now = new Date();
    // Parse time in Asia/Dubai
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dubai',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    let hour = 0;
    let minute = 0;
    let weekdayStr = '';

    for (const p of parts) {
      if (p.type === 'hour') hour = parseInt(p.value, 10);
      if (p.type === 'minute') minute = parseInt(p.value, 10);
      if (p.type === 'weekday') weekdayStr = p.value;
    }

    const dayMap: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };
    const currentDayIndex = dayMap[weekdayStr] ?? 0;
    const currentMinutes = hour * 60 + minute;
    const openMinutes = 9 * 60; // 09:00 AM = 540
    const closeMinutes = 18 * 60; // 06:00 PM = 1080

    // Format 12-hour Dubai time
    const time12Formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dubai',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    const dubaiTimeFormatted = time12Formatter.format(now);

    // If Sunday -> Closed
    if (currentDayIndex === 0) {
      return {
        isOpen: false,
        statusLabel: 'Closed Today',
        statusSubtext: 'Opens Monday at 9:00 AM · Dubai Time',
        currentDayIndex,
        dubaiTimeFormatted,
      };
    }

    // Mon - Sat
    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      return {
        isOpen: true,
        statusLabel: 'Open Now',
        statusSubtext: 'Closes at 6:00 PM · Dubai Time',
        currentDayIndex,
        dubaiTimeFormatted,
      };
    }

    if (currentMinutes < openMinutes) {
      return {
        isOpen: false,
        statusLabel: 'Closed Now',
        statusSubtext: 'Opens today at 9:00 AM · Dubai Time',
        currentDayIndex,
        dubaiTimeFormatted,
      };
    }

    // After 6:00 PM
    if (currentDayIndex === 6) {
      // Saturday night -> next open is Monday 9 AM
      return {
        isOpen: false,
        statusLabel: 'Closed for the Day',
        statusSubtext: 'Opens Monday at 9:00 AM · Dubai Time',
        currentDayIndex,
        dubaiTimeFormatted,
      };
    }

    return {
      isOpen: false,
      statusLabel: 'Closed for the Evening',
      statusSubtext: 'Opens tomorrow at 9:00 AM · Dubai Time',
      currentDayIndex,
      dubaiTimeFormatted,
    };
  } catch {
    return {
      isOpen: false,
      statusLabel: 'Café Hours',
      statusSubtext: 'Mon–Sat: 9:00 AM – 6:00 PM',
      currentDayIndex: -1,
      dubaiTimeFormatted: '',
    };
  }
}
