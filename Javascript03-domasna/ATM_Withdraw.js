let personalBalance = 10000;

function atMachine() {

    let selectChoice = Number(prompt('Select a choice | 1 Balance | or | 2 Withdraw |'));

    if (selectChoice === 1) {
        return yourBalance();
    } else if (selectChoice === 2) {
        return moneyWithdrawal();
    }
    return callError();
}

function yourBalance() {
    alert(`Your current balance is: ${personalBalance}`);
    return atMachine();
}

function moneyWithdrawal() {
    let withdraw = Number(prompt('How much would you like to withdrawal?'));
    if (Number.isNaN(withdraw) ||
        withdraw >= personalBalance) {
        alert('Not enough money');
        return moneyWithdrawal();
    }
    personalBalance -= withdraw;
    return yourBalance();
}

function callError() {
    alert('Error: accepted choices are 1 or 2!!.');
    return atMachine();
}

atMachine();