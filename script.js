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

const updateDate = () => {
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
updateDate();
setInterval(updateDate, 1000);

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
// таймер я нашла в интернете
document.addEventListener("DOMContentLoaded", function () {
  const $days = document.querySelector(".timer__days");
  const $hours = document.querySelector(".timer__hours");
  const $minutes = document.querySelector(".timer__minutes");
  const $seconds = document.querySelector(".timer__seconds");

  // конечная дата
  const deadline = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1
  );
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? "0" + days : days;
    $hours.textContent = hours < 10 ? "0" + hours : hours;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    $days.nextElementSibling.textContent = declensionNum(days, [
      "день",
      "дня",
      "дней",
    ]);
    $hours.nextElementSibling.textContent = declensionNum(hours, [
      "час",
      "часа",
      "часов",
    ]);
    $minutes.nextElementSibling.textContent = declensionNum(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    $seconds.nextElementSibling.textContent = declensionNum(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);
  }
  // получаем элементы, содержащие компоненты даты

  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});
