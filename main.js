const cards = document.querySelectorAll('.card-container');
const firstCard = cards[0];

// 2. функция для смены цвета
const setBg = (element, color) => {
if (!element) return;

if (element instanceof NodeList) {
// Если это список элементов (все карточки)
element.forEach(el => el.style.backgroundColor = color);
} else {
// Если это один элемент (первая карточка)
element.style.backgroundColor = color;
}
};

// 3. Обработчики для кнопок (с проверкой на существование кнопки)

const btnAllGreen = document.querySelector('#change-color-card-button');
if (btnAllGreen) btnAllGreen.onclick = () => setBg(cards, '#00FF00');

const btnAllBlue = document.querySelector('#change-all-card-color-button');
if (btnAllBlue) btnAllBlue.onclick = () => setBg(cards, 'rgb(3, 39, 246)');

const btnFirstCard = document.querySelector('#change-color-first-card-btn');
if (btnFirstCard) btnFirstCard.onclick = () => setBg(firstCard, 'rgb(234, 0, 255)');

// 4. Окна и логи
const btnGoogle = document.querySelector('#open-google-btn');
if (btnGoogle) {
btnGoogle.onclick = () => {
if (confirm('Открыть Google?')) window.open('[https://google.com]()', '_blank');
};
}

const btnLog = document.querySelector('#output-log-btn');
if (btnLog) {
btnLog.onclick = () => {
console.log('ДЗ ГОТОВО');
alert('Лог успешно выведен в консоль браузера!');
};
}

// 5. Работа с заголовком и переключателем класса
const title = document.querySelector('.product-title');
if (title) {
title.onmouseover = () => console.log(title.textContent);
}

const btnRed = document.querySelector('#change-color-red-btn');
if (btnRed) {
btnRed.onclick = (e) => {
// Включаем/выключаем зеленый цвет кнопке
e.target.classList.toggle('change-color-green');
};
}

