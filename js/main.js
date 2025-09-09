document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  // Функция проверки видимости элемента
  const checkBoxes = () => {
    const triggerBottom = window.innerHeight * 0.8; // Триггер на 80% высоты экрана

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("active"); // Показываем элемент
      } else {
        box.classList.remove("active"); // Скрываем при прокрутке вверх
      }
    });
  };

  // Проверяем при загрузке и при прокрутке
  checkBoxes();
  window.addEventListener("scroll", checkBoxes);
});
