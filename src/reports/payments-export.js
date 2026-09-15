import { toCsv } from '../lib/csv.js';

const payments = [
  { id: 'p1', bookingId: 1, amount: 420, method: 'card' },
  { id: 'p2', bookingId: 2, amount: 980, method: 'card' },
];

/** Payments as CSV, served from /reports/payments.csv. */
export function paymentsCsv() {
  return toCsv(payments, ['id', 'bookingId', 'amount', 'method']);
}
