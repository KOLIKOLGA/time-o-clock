const hoursBlock = document.querySelector(".time__hours");
const minuteBlock = document.querySelector(".time__minutes");
const secondsBlock = document.querySelector(".time__seconds");
const date1 = document.querySelector(".date1");

const timeDate = () => {
  const dateDate = document.querySelector(".date");

  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("ru-RU", options);
  dateDate.textContent = currentDate;
};
timeDate();
setInterval(timeDate, 1000);

const numWord = (value, words) => {
  value = Math.abs(value) % 100;
  const lastNum = value % 10;

  if (value > 10 && value < 20) return words[2];
  if (lastNum > 1 && lastNum < 5) return words[1];
  if (lastNum === 1) return words[0];

  return words[2];
};

const updateTimer = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const fHours = hours < 10 ? "0" + hours : hours;
  const fMinutes = minutes < 10 ? "0" + minutes : minutes;
  const fSeconds = seconds < 10 ? "0" + seconds : seconds;

  hoursBlock.textContent = fHours;
  minuteBlock.textContent = fMinutes;
  secondsBlock.textContent = fSeconds;

  secondsBlock.nextElementSibling.textContent = numWord(seconds, [
    "секунда",
    "секунды",
    "секунд",
  ]);
  minuteBlock.nextElementSibling.textContent = numWord(minutes, [
    "минута",
    "минуты",
    "минут",
  ]);
  hoursBlock.nextElementSibling.textContent = numWord(hours, [
    "час",
    "часа",
    "часов",
  ]);
};
updateTimer();
setInterval(updateTimer, 1000);

let d;
function formatTime(d) {
  d = new Date();

  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();

  const h = d.getHours().toString().padStart(2, "0");
  const m = d.getMinutes().toString().padStart(2, "0");
  const s = d.getSeconds().toString().padStart(2, "0");
  const currentTime = `${day}.${month}.${year} - ${h}:${m}:${s}`;
  date1.textContent = currentTime;
}
formatTime();
setInterval(formatTime, 1000);
