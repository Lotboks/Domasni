const ageInput = Number(prompt("Please enter age"));
const convertedInto = prompt("Enter a number between 1 or 2 (1 - Human to Dog | 2 - Dog to Human)").toLowerCase();

function convertAge(age, convertTo) {

    if (Number.isNaN(age)) {
        return "Invalid input";
    }

    if (convertTo !== "1" && convertTo !== "2") {
        return "Invalid Input";
    }

    if (convertTo === "1") {
        const result = age / 7;
        console.log(`your age in Dog years is ${result}`);
        return result;
    }

    const result = age * 7;
    console.log(`your Dogs age in Human years is ${result}`);
    return result;
}

console.log(`Entered Age: ${ageInput}`);

const convertedAge = convertAge(ageInput, convertedInto);




