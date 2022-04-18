//  the ! means that the variable will never return null, we are sure of this as a developer we checked the code
var input1 = document.querySelector(".one");
var input2 = document.querySelector(".two");
var btn = document.querySelector(".button");
// instead of num1 / num2, we assign them a specific type num1: number
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
