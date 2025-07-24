const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const hours = document.getElementById("hrs");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("sec");
const dates = document.getElementById("dat");
const months = document.getElementById("mon");
const days = document.getElementById("day");
const year = document.getElementById("year");
const ampm = document.getElementById("am-pm");

function updateClock() {
  const time = new Date();

  const hrs24 = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();

  const am_pm = hrs24 >= 12 ? "PM" : "AM";
  const hrs12 = hrs24 % 12 || 12;

  hours.textContent = String(hrs12).padStart(2, "0");
  minutes.textContent = String(mins).padStart(2, "0");
  seconds.textContent = String(secs).padStart(2, "0");

  dates.textContent = String(time.getDate()).padStart(2, "0");
  months.textContent = monthNames[time.getMonth()];
  days.textContent = dayNames[time.getDay()];
  year.textContent = time.getFullYear();
  ampm.textContent = am_pm;
}

// Run once immediately, then every second
updateClock();
setInterval(updateClock, 1000);
