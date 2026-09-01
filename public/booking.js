const form = document.getElementById('booking');
const status = document.getElementById('status');

document.getElementById('book-now').addEventListener('click', async () => {
  status.hidden = false;
  const data = Object.fromEntries(new FormData(form));
  const res = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ ...data, nights: Number(data.nights) }),
  });
  status.textContent = res.ok ? 'Booked!' : 'Something went wrong.';
});
