'use strict';

let line;

// ф-ия addElement для для добавления строки в список
function addElement(line) {
  const li = document.querySelector('.list');
  console.log('Добавляем строку li: ', `${line}`);
  // проверка на пробелы, чтобы не добавлять пустые строки из пробелов
  if (line && line.trim().length) {
    li.insertAdjacentHTML("beforeend", `<li>${line}</li>`)
  }
}

// ф-ия delElement для удаления последнего эл-та списка
function delElement() {
  const liDel = document.querySelector('ul > li:last-child');
  console.log('Удаляем строку: ', liDel);
  liDel.remove()
}

// ф-ия clearElement для очищения всего списка
function clearElement() {
  const listDel = document.querySelector('ul');
  // console.log('Удаляем все элементы списка');
  listDel.textContent = '';
}

// ф-ия addList для создания и редактирования списка
function addList() {
  while (true) {
    let line = prompt("Введите строку");

    // бесконечный prompt, пока не введут пустую строки или слово exit (преобразовываем то что введено в нижний регистр)
    if ((!line) || (line.toLowerCase() === 'exit')) break;

    // если пользователь ввёл del
    else if (line.toLowerCase() === 'del') {
      console.log('Пользователь ввёл del')
      // вызываем ф-ию delElement для действия
      delElement();
      // если пользователь ввёл clear
    } else if (line.toLowerCase() === 'clear') {
      console.log('Пользователь ввёл clear')
      // вызываем ф-ию clearElement для действия
      clearElement();
    } else {
      // вызываем ф-ию addElement для добавления строки в список
      addElement(line);
      console.log('Пользователь ввёл:', (`${line}`));
    }
  }
};
addList();

/* Код от Анны:

const addItem = (text) => {
  if (text === "clear") {
    ...
    alert("Очистили список");
  } else if (text === "del") {
    ...
    alert("Удалили строку");
  } else {
    ...
    alert("ДОбавили строку");
  }
};

const start = () => {
  while (true) {
    const line = prompt("Введите текст");

    if (line === null || line === "exit") {
      alert("Выход");
      return;
    }
    if (line && line.trim().length) {
      addItem(line);
    }
  }
};

*/