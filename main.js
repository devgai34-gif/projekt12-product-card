 // 1. Поиск элементов (делаем один раз)
const cards = document.querySelectorAll('.card-container');
const firstCard = cards[0]; // Первая карточка — это просто нулевой элемент списка

// 2. Вспомогательная функция для смены цвета
const setBg = (element, color) => {
  // Если передали список (NodeList), красим всех, если один элемент — только его
  element.forEach ? element.forEach(el => el.style.backgroundColor = color) : element.style.backgroundColor = color;
};

// 3. Обработчики 
document.querySelector('#change-color-card-button').onclick = () => setBg(cards, '#00FF00');
document.querySelector('#change-all-card-color-button').onclick = () => setBg(cards, 'rgb(3, 39, 246)');
document.querySelector('#change-color-first-card-btn').onclick = () => setBg(firstCard, 'rgb(234, 0, 255)');

// 4. Окна и логи
document.querySelector('#open-google-btn').onclick = () => {
  if (confirm('Открыть Google?')) window.open('https://google.com');
};

document.querySelector('#output-log-btn').onclick = () => {
  console.log('ДЗ ГОТОВО');
  alert('Лог выведен в консоль');
};

// 5. Текст и классы
const title = document.querySelector('.product-title');
title.onmouseover = () => console.log(title.textContent);

document.querySelector('#change-color-red-btn').onclick = (e) => e.target.classList.toggle('change-color-green');



