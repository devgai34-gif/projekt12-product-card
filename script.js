import { JSDOM } from 'jsdom';

// все ID и классы, которые ищет ваш скрипт
const dom = new JSDOM(`<!DOCTYPE html><html><body>
  <template id="student-template">
    <div class="student-card"></div>
  </template>
  
  <div class="student-list"></div> <ul id="students-container"></ul> </body></html>`);

global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.HTMLTemplateElement = dom.window.HTMLTemplateElement;
global.Node = dom.window.Node;

// ПРОВЕРКА (чтобы увидеть результат в консоли)
const checkList = document.querySelector(".student-list"); 
console.log("Список найден:", !!checkList);

export const products = [
  {
    name: "Krem-gel",
    image: "Крем-гель",
    description: "для вашей кожи",
    properties: "Отлично разглаживает кожу",
    composition: [
      "группа витаминов",
      "витамины С В1 Е",
      "Имеет солнцезащитное действие"
    ],
    price: 1000,
  },
  {
    name: "Maska",
    image: "маска",
    description: "для вашей кожи",
    properties: "Отлично разглаживает кожу",
    composition: [
      "активная группа витаминов",
      "витамины С В1 Е",
      "Имеет солнцезащитное действие"
    ],
    price: 1000,
  },
  {
    name: "Krem",
    image: "Крем",
    description: "для вашей кожи",
    properties: "Отлично разглаживает кожу.",
    composition: [
      "активная группа витаминов",
      "витамины С В1 Е",
      "Имеет солнцезащитное действие"
    ],
    price: 1000,
  },
  {
    name: "Gel",
    image: "гель",
    description: "для вашей кожи",
    properties: "Отлично разглаживает кожу",
    composition: [
      "активная группа витаминов",
      "витамины С В1 Е",
      "Имеет солнцезащитное действие"
    ],
    price: 1000,
  },
  {
    name: "Muss",
    image: "ТОВАР-5",
    description: "для вашей кожи",
    properties: "Отлично разглаживает кожу",
    composition: [
      "активная группа витаминов",
      "витамины С В1 Е ",
      "Имеет солнцезащитное действие"
    ],
    price: 1000,
  }
];

const studentTemplate = document.getElementById("student-template");
const studentList = document.querySelector(".student-list");

export default products; // Экспорт массива по умолчанию

