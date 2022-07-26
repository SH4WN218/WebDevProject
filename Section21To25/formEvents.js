const form = document.querySelector('#shelterform');
const input = document.querySelector('#petName');
const list = document.querySelector('#list');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const petName = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = petName;
    list.append(newLi);
    input.value = '';
});
