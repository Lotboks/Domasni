const phonePrice = 119.95;
console.log("Phone Price: $" + phonePrice);

let phonesAmount = prompt("Enter Phone Amount: ");
console.log("Phones Amount:", phonesAmount)

let phonesTotal = phonePrice * phonesAmount
console.log("Phones total Amount: $" + phonesTotal)

const taxRate = 5;
console.log("Tax Rate: ", taxRate + "%");

taxTotal = phonesTotal * (taxRate / 100);
console.log("Tax Total: $" + taxTotal);

finalPrice = phonesTotal + taxTotal ;
console.log("Total: $" + finalPrice);

// istata domasna samo user da si vnese kolku telefoni saka.