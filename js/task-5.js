// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//         в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
const defaultUserName = userName.textContent;
const getUserName = (event) => {
    if (event.currentTarget.value == "") {
        console.log(event.currentTarget.value);
        userName.textContent = defaultUserName;
        console.log('gecnj');
     }
    userName.textContent = event.currentTarget.value;
    console.dir(event.currentTarget);
};

input.addEventListener('input', getUserName);


