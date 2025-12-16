let inputField = document.querySelector("input");

function addValue(elementValue) {
  inputField.value += elementValue;
}

function clearInput() {
  inputField.value = "";
}

function deleteLast() {
  inputField.value = inputField.value.slice(0, -1); // 0th index to last index length -1
}

function evaluate() {
    inputField.value = eval(inputField.value); // eval() is used to evaluate string as a mathematical expression it's an In-Built function in JS
}