import { JSDOM } from 'jsdom';
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="student-template"></div></body></html>`);

global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.HTMLTemplateElement = dom.window.HTMLTemplateElement;

console.log("Проверка окружения: document =", typeof document); 

import products from './script.js';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Задание-2. картa названий - описаний (через .reduce)
const productDescriptionMap = products.reduce((accumulator, currentProduct) => {
  accumulator[currentProduct.name] = currentProduct.description;
  return accumulator;
}, {});
console.log("Карта названий и описаний продуктов:", productDescriptionMap);

// Задание-3.создать и реализовать шаблон для продуктовых карточек.

function outputProductCards(productsToShow) {
  const container = document.getElementById('product-list');
  const template = document.getElementById('product-template');
  
  if (!container || !template) return;
  container.innerHTML = ''; // Очистка 

  productsToShow.forEach(product => {
    const { image, description, name, properties, composition, price } = product;
    const clone = template.content.cloneNode(true);

    clone.querySelector('.product-img').src = `/image/${image}.svg`;
    clone.querySelector('.name').textContent = name;
    clone.querySelector('.description').textContent = description;
    clone.querySelector('.product-properties').textContent = properties;
    clone.querySelector('.composition-list').innerHTML = composition.map(i => `<li>${i}</li>`).join("");
    clone.querySelector('.cost-product').innerHTML = `${price} &#8381;`;

    container.appendChild(clone);
    console.log(`[DOM] Карточка создана: ${name}`);
  });
}

// Задание-4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const productDescriptions = products.reduce ((acc, product) => {
    acc[product.name] = product.properties
    return acc
}, {})

console.log(productDescriptions)

// Задание-5.
async function getUserCardCount() {
  const answer = await rl.question("Сколько карточек отобразить? Введите число от 1 до 5 (или 'exit' для отмены): ");

  if (answer.toLowerCase() === 'exit') {
    return null;
  }
  const count = parseInt(answer, 10);

  // Проверка валидности
  if (!isNaN(count) && count >= 1 && count <= 5) {
    return count;
  } else {
    console.log("Некорректный-ввод. введите число от 1 до 5.");
    return await getUserCardCount(); // Рекурсия для повторного запроса
  }
}
// Функция для отрисовки карточек
function renderProductCards(numCards, allProducts) {
  if (numCards === null) {
    console.log("Ввод отменен. Карточки не будут отображены.");
    return;
  }

  const cardsToRender = allProducts.slice(0, numCards);
  console.log(`\n- Отображаем ${cardsToRender.length} карточек-`);

  cardsToRender.forEach((product, index) => {
    console.log(`Карточка ${index + 1}: ${product.name} — ${product.description}`);
  });
}

// функция запуска
async function main() {
  try {
    const numberOfCards = await getUserCardCount();
    renderProductCards(numberOfCards, products);
  } catch (err) {
    console.error("Произошла ошибка:", err);
  } finally {
    rl.close(); // закрываем ввод
  }
}

main();

 


