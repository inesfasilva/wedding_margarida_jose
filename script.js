// Countdown Timer logic for Page 1
const weddingDate = new Date("Sep 5, 2026 11:30:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById(
    "countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m`;
}, 1000);
