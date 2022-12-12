let personalBalance = 1000;

function atMachine() {

    let selectChoice = Number(prompt('Select a choice | 1 Balance | or | 2 Withdraw | or | 3 Deposit | '));

    if (selectChoice === 1) {
        yourBalance();
    } else if (selectChoice === 2) {
        moneyWithdrawal();
    } else if (selectChoice === 3) {
        moneyDeposit();
    } else {
        callError();
    }
}

function yourBalance() {
    alert(`Your current balance is: ${personalBalance}`);
    atMachine();
}

function moneyDeposit() {
    var deposit = parseFloat(prompt('How much would you like to deposit?'));
    if (isNaN(deposit)) {
        alert('Error: please enter a number!');
        moneyDeposit();
    } else {
        personalBalance += deposit;
        yourBalance();
    }
}

function moneyWithdrawal() {
    let withdraw = parseFloat(prompt('How much would you like to withdrawal?'));
    if (isNaN(withdraw) ||
        withdraw > personalBalance) {
        alert('Not enough money');
    } else {
        personalBalance -= withdraw;
        yourBalance();
    }
}

function callError() {
    alert('Error: accepted choices are 1, 2 or 3!!.');
    atMachine();
}

atMachine();