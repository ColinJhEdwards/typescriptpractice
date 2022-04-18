// This is the compiled ts file which is now js, though previous comments removed
var input1 = document.querySelector(".one");
var input2 = document.querySelector(".two");
var btn = document.querySelector(".button");

function add(num1, num2) {
  return num1 + num2;
}
btn.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
