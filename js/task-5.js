// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//         в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

const getUserName = (event) => {
    userName.textContent = event.currentTarget.value;
};

input.addEventListener('input', getUserName);


