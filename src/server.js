import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { weeklyBookings } from './reports/weekly-bookings.js';
import { createBooking } from './bookings.js';

const routes = {
  'GET /': () => page('booking.html'),
  'GET /booking.js': () => file('booking.js', 'text/javascript'),
  'POST /api/bookings': (body) => json(201, createBooking(JSON.parse(body))),
  'GET /reports/weekly-bookings': () => json(200, weeklyBookings()),
};

const page = (name) => file(name, 'text/html');
async function file(name, type) {
  return { status: 200, type, body: await readFile(new URL(`../public/${name}`, import.meta.url)) };
}
function json(status, data) {
  return { status, type: 'application/json', body: JSON.stringify(data) };
}

createServer(async (req, res) => {
  let body = '';
  for await (const chunk of req) body += chunk;
  const route = routes[`${req.method} ${req.url}`];
  const out = route ? await route(body) : { status: 404, type: 'text/plain', body: 'Not found' };
  res.writeHead(out.status, { 'content-type': out.type });
  res.end(out.body);
}).listen(3000);
