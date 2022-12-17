const myForm = document.querySelector('#myForm');
const sendBtn = document.querySelector('#sendBtn');

let userName = document.querySelector('#userName');
let userLastName = document.querySelector('#userLastName');
let userGender = document.querySelector('#userGender');
let isAuto = document.querySelector('#isAuto');


sendBtn.addEventListener('click', function (event) {
    event.preventDefault();
    userName.textContent = myForm.elements.name.value;
    userLastName.textContent = myForm.elements.lastName.value;
    if (myForm.elements.gender.value == 'man') {
        userGender.textContent = 'Мужской';
    } else {
        userGender.textContent = 'Женский';
    }
    console.log(myForm.elements.auto.checked);

    if(myForm.elements.auto.checked == true) {
        isAuto.textContent = 'Есть авто';
    } else {
        isAuto.textContent = 'Нет авто';
    }
})