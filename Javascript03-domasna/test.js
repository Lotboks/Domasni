let lol = prompt("Enter number 1 for human/dog 2 for dog/human");

switch (lol) {

    case 1:
        function calcHumanYears(humanAge) {
            if (
                Number.isNaN(humanAge)
            ) {
                return "Invalid input";
            }
            let result = humanAge * 7;
            return result;
        }
        break;
    case 2:
        function calcDogYears(dogAge) {
            if (
                Number.isNaN(dogAge)
            ) {
                return "Invalid input";
            }
            let result = dogAge / 7;
            return result;
        }
        break;
    default:
        console.log("invalid input");
        break;

}


let userInput = prompt("Enter first number:");

let firstNumber = Number(userInput);

console.log(`The result of the function is: ${calcHumanYears(firstNumber)}`);
console.log(`The result of the function is: ${calcDogYears(firstNumber)}`);

