// the function below returns num1 + num2, ideally two number types would be given for this function
// However what if, as seen below, two parameters are given which are strings?
// This would not be considered a technical error but is not the intended use
// this is why having access to types from typescript is so valuable
function addNum(num1, num2) {
  return num1 + num2;
}

console.log(addNum("1", "2"));

// without typescript we would have to do something like an if statement to ensure the values entered are numbers
// as seen below
function addNum2(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}

console.log(addNum2("1", "2"));

// See ts-only.ts for typescript method
