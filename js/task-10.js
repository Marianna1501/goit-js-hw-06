// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const inputNum = document.querySelector("#controls>input");
const boxes = document.querySelector("#boxes");

const createBoxes = (quantity) => {
  const addEl = [];
  for (let i = 0; i < quantity; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    addEl.push(div);
  }
  return addEl;
};

document
  .querySelector("[data-create]")
  .addEventListener("click", () =>
    boxes.append(...createBoxes(inputNum.value))
  );
document
  .querySelector("[data-destroy]")
  .addEventListener("click", () => (boxes.innerHTML = ""));
