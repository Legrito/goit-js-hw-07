// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


let counterValue = 0;
const couterRef = document.querySelector("#value");

const increment = () => { 
    counterValue += 1;
    return couterRef.textContent = counterValue;
}
const decrement = () => {
    counterValue -= 1;
    return couterRef.textContent = counterValue;
}
const couterButtons = document.querySelectorAll("button");

const decrementButton = couterButtons[0];
const incrementButton = couterButtons[1];

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);


