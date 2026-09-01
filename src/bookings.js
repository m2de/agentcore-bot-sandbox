// In-memory bookings. Synthetic data only.
export const bookings = [
  { id: 1, lodge: 'Heron', guest: 'A. Example', nights: 3, total: 420, week: '2026-W40' },
  { id: 2, lodge: 'Otter', guest: 'B. Example', nights: 7, total: 980, week: '2026-W40' },
  { id: 3, lodge: 'Heron', guest: 'C. Example', nights: 2, total: 280, week: '2026-W41' },
];

export function createBooking({ lodge, guest, nights }) {
  const booking = { id: bookings.length + 1, lodge, guest, nights, total: nights * 140, week: '2026-W41' };
  bookings.push(booking);
  return booking;
}
