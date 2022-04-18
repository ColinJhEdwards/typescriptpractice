//  the ! means that the variable will never return null, we are sure of this as a developer we checked the code
const input1 = document.querySelector(".one")! as HTMLInputElement;
const input2 = document.querySelector(".two")! as HTMLInputElement;
const btn = document.querySelector(".button");

// instead of num1 / num2, we assign them a specific type num1: number
function add(num1: number, num2: number) {
  return num1 + num2;
}

btn.addEventListener("click", () => {
  console.log(add(+input1.value, +input2.value));
});

// compile the typescript file into javascript by running "tsc ts-only.ts"
// this will create a javascript file but also return any errors
