// Перемикач кольорів
// Є масив кольорів в hex-форматі і кнопки Start і Stop.

// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// Напиши скрипт, який після натискання кнопки Start, раз в секунду змінює колір фону body на випадкове значення з масиву використовуючи інлайн-стиль. При натисканні на кнопку Stop, зміна кольору фону повинна зупинятися.

// ⚠️ Врахуй, на кнопку Start можна натиснути нескінченну кількість разів. Зроби так, щоб поки зміна теми запушено, кнопка Start була не активна.

// Для генерації випадкового числа (індекс елемента масиву квітів), використовуй функцію randomIntegerFromInterval.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
};

console.log(refs.body);
console.log(refs.start);
console.log(refs.stop);

const TIMER_DELAY = 1000;
let timerID = null;

refs.start.addEventListener('click', startChangeBackgroundColor);
refs.stop.addEventListener('click', stopChangeBackgroundColor);

function startChangeBackgroundColor () {

     timerID = setInterval(() =>{
        const colorsIndex = randomIntegerFromInterval(0, colors.length-1)
        refs.body.style.backgroundColor = colors[colorsIndex];
        
    }, TIMER_DELAY);

    refs.start.disabled = true;
}

function stopChangeBackgroundColor () {
    clearInterval(timerID);
   refs.start.disabled = false;
};


function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };