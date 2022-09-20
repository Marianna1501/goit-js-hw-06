// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const CountNumberInput = document.querySelector("#validation-input");

CountNumberInput.addEventListener("blur", (event) => {
  const inputLength = event.target.value.length;
  const verificationNumber = Number(
    CountNumberInput.getAttribute("data-length")
  );
  if (inputLength === verificationNumber) {
    CountNumberInput.classList.remove("invalid");
    CountNumberInput.classList.add("valid");
  }
  if (inputLength !== verificationNumber) {
    CountNumberInput.classList.remove("valid");
    CountNumberInput.classList.add("invalid");
  }
});
