// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputChange = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

inputChange.addEventListener("change", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});
