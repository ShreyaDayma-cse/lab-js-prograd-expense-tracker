var list = document.querySelector('#list');
var button = document.querySelector('.btn');
var income = 0.00;
var expense = 0.00;
function display() {
    for (var i = 0; i < localStorage.length; i++) {
        var transactionList = document.createElement('li');
        var amount = localStorage.getItem(localStorage.key(i));
        var input = localStorage.key(i);
        if (amount > 0) {
            income = income + parseInt(amount);
            transactionList.setAttribute('class', 'plus');
            transactionList.textContent = input + "---------------------------------" + amount;
        } else {
            expense -= amount;
            transactionList.setAttribute('class', 'minus');
            transactionList.textContent = input + "---------------------------------" + amount;
        }
        list.appendChild(transactionList);
    }
    document.querySelector('#money-plus').textContent = '$+  ' + income;
    document.querySelector('#money-minus').textContent = '$-  ' + expense;
    document.querySelector('#balance').textContent = '$  ' + (income - expense);
}

button.addEventListener('click', addItems);


function addItems() {
    var input = document.querySelector('#text').value;
    var amount = document.querySelector('#amount').value;
    localStorage.setItem(input, amount);
}

window.onload = () => {
    display();
}