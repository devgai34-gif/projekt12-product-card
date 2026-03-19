// 4. Логика формы подписки в футере

const subscriptionForm = document.querySelector('.input-button');

if (subscriptionForm) {
  subscriptionForm.addEventListener('submit', function(event) {
    // Отменяем перезагрузку страницы
    event.preventDefault();
    
    // Ищем поле ввода внутри текущей формы
    const emailInput = subscriptionForm.querySelector('.subscribe-input');
    const emailValue = emailInput.value;

    // Выводим данные в консоль в виде объекта
    console.log('--- Новая подписка ---');
    console.log({ email: emailValue });

    // Очищаем поле после успешной "отправки"
    subscriptionForm.reset();
    alert(`Спасибо! Письмо с акциями будет отправлено на: ${emailValue}`);
  });
}

// 5. Логика модального окна

// Переменная для хранения данных пользователя (теперь с более ясным именем)
let registeredUser = null;

const overlay = document.querySelector('.overlay');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.querySelector('.close');
const registrationForm = document.getElementById('registrationForm');

// Функция открытия модального окна
if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    overlay.classList.add('modal-showed');
  });
}

// Функция закрытия модального окна (по крестику)
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    overlay.classList.remove('modal-showed');
  });
}

// Закрытие при клике на темную область (оверлей) вокруг окна
overlay.addEventListener('click', function(event) {
  // Проверяем, что кликнули именно по фону, а не по самому окну
  if (event.target === overlay) {
    overlay.classList.remove('modal-showed');
  }
});

// 6. Работа формы регистрации 

if (registrationForm) {
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Встроенная проверка валидности браузером (required, minlength и т.д.)
    if (!registrationForm.checkValidity()) {
      alert('Пожалуйста, заполните все поля корректно.');
      return;
    }

    // Собираем данные из всех полей формы
    const formData = new FormData(registrationForm);
    const data = Object.fromEntries(formData.entries());

    // Проверка совпадения паролей
    if (data.password !== data.confirmPassword) {
      alert('Ошибка: Пароли не совпадают!');
      return;
    }

    // Если всё ок, создаем объект пользователя
    // Удаляем лишнее поле confirmPassword, чтобы не хранить дубликаты
    delete data.confirmPassword;

    registeredUser = {
      ...data,
      id: Date.now(), // Добавляем уникальный ID
      createdOn: new Date().toLocaleString('ru-RU') // Красивая дата регистрации
    };

    console.log('Регистрация✅ завершена успешно!✅');
    console.log('Данные пользователя:', registeredUser);

    // Закрываем окно и очищаем форму
    overlay.classList.remove('modal-showed');
    registrationForm.reset();
    
    alert(`Добро пожаловать, ${data.firstName}!`);
  });
}

