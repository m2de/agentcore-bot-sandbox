import { bookings } from '../bookings.js';

/** Bookings per week, for finance. Returned as JSON from /reports/weekly-bookings. */
export function weeklyBookings() {
  const weeks = {};
  for (const b of bookings) {
    weeks[b.week] ??= { week: b.week, bookings: 0, nights: 0, revenue: 0 };
    weeks[b.week].bookings += 1;
    weeks[b.week].nights += b.nights;
    weeks[b.week].revenue += b.total;
  }
  return Object.values(weeks);
}
