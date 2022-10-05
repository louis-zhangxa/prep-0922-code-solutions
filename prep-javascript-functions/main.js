function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(Name) {
  return '"Hello ' + Name + '!"';
}

var greet = getGreeting('World');
console.log(greet);

function addAndMultiplyBy5(num1, num2) {
  sum = num1 + num2;
  return sum * 5;
}

var output = addAndMultiplyBy5(10, 5);
console.log(output);

function multiplyAndDivideBy5(num1, num2) {
  sum = num1 * num2;
  return sum / 5;
}

var outputDivide = multiplyAndDivideBy5(35, 10);
console.log(outputDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var outputSubtract = subtractTwoNumbers(22, 7);
console.log(outputSubtract);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
var outputCircle = getCircleCircumference(5);
console.log(outputCircle);

function getFullName(firstName, lastName) {
  return '"' + firstName + ' ' + lastName + '"';
}
var outputFullName = getFullName('Juan', 'Ramirez');
console.log(outputFullName);

function cube(number) {
  return number * number * number;
}
var outputCube = cube(5);
console.log(outputCube);
