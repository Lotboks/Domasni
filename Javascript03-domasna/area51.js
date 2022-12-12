let year = prompt("Enter the year you were born: ");
console.log(`The year you were born in: ${year}`);

function chinese_zodiac(year) {

    Number.isNaN(year)

    switch ((year - 4) % 12) {
        case 0:
            return 'Rat';

        case 1:
            return 'Ox';

        case 2:
            return 'Tiger';

        case 3:
            return 'Rabbit';

        case 4:
            return 'Dragon';

        case 5:
            return 'Snake';

        case 6:
            return 'Horse';

        case 7:
            return 'Goat';

        case 8:
            return 'Monkey';

        case 9:
            return 'Rooster';

        case 10:
            return 'Dog';

        case 11:
            return 'Pig';

        default:
            console.log("Please enter numbers only!!");
    }
}

console.log(`Your chinese zodiac is: ${chinese_zodiac(year)}`);