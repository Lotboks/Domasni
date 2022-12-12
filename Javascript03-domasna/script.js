let Choose = prompt("Choose a number between 1 and 2(1 is for human to dog years 2 is the other way around)");

switch (Choose) {
  case 1:
    function calcHumanYears(myAge) {
      {
        let userInput = prompt("Enter Age:");
      }
      let dogYears = myAge / 7;
      return dogYears;
    }
    break;

  case 2:
    function calcDogYears(dogAge) {
      {
        let humanYears = dogAge * 7;
        return humanYears;
      }
    }
    break;

  default: "Please enter a number between 1 and 2";
    break;
}





let firstNumber = Number(userInput);

console.log(`The result of the function is: ${calcHumanYears(userInput)}`);
console.log(`The result of the function is: ${calcDogYears(userInput)}`);
// console.log(`The result of the function is: ${calcDogYears(userInput)}`);


// let userInputHumanAge = prompt("Enter your age");
// console.log(`Your age is: ${userInputHumanAge}`);
// let userInputDogAge = prompt("Enter your dogs age");
// console.log(`Your dogs age is: ${userInputDogAge}`);

// let humanAgeNumber = Number(userInputHumanAge);
// let dogAgeNumber = Number(userInputDogAge);


// console.log(`Your age in dog years is: ${calcHumanYears(userInputHumanAge)}`);
// console.log(`Your dogs age in human years is: ${calcDogYears(userInputDogAge)}`);



// if (
//   Number.isNaN(myAge)
// ) {
//   return "Please enter a number!!";
// }
// {

// if (
//   Number.isNaN(myAge) ||
//   Number.isNaN(dogAge)
// ) {
//   return "Please enter a number!!";
// }

// let normalYears = (16 * (dogAge) + 31);
// let userInput2 = prompt("Enter your age");