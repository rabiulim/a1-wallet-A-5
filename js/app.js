// all id here

let income = document.getElementById("income");
let Food = document.getElementById("food");
let Rent = document.getElementById("rent");
let Clothes = document.getElementById("clothes");
let calculateBtn = document.getElementById("calculate-btn");
let TotalExpense = document.getElementById("total-expenses");
let Balance = document.getElementById("balance");
let saveInput = document.getElementById("save-input");
let saveBtn = document.getElementById("save-btn");
let SavingAmount = document.getElementById("saving-amount");
let RemainingBalance = document.getElementById("remaining-balance");
let allInput = parseInt(document.querySelectorAll('input')
);


// --------------food rent clothes and balance start --------------
calculateBtn.addEventListener('click', calculateHandler);
function calculateHandler() {
    let mainIncome = parseInt(income.value);
    let costFood = parseInt(Food.value);
    let constRent = parseInt(Rent.value);
    let constColthes = parseInt(Clothes.value);
    let TotalConst = costFood + constRent + constColthes;
    TotalExpense.innerText = TotalConst;


    let newBalance = mainIncome - TotalConst;
    Balance.innerText = newBalance;
    if (mainIncome < 0 || isNaN(mainIncome)) {
        alert('plz give positive number')
    }
    if (costFood < 0 || isNaN(costFood)) {
        alert('plz give positive number')
    }
    if (constRent < 0 || isNaN(constRent)) {
        alert('plz give positive number')
    }
    if (constColthes < 0 || isNaN(constColthes)) {
        alert('plz give positive number')
    }

    return newBalance;
};

// ---------------------save and % start------------//
saveBtn.addEventListener("click", saveMoney);
function saveMoney() {
    let mainIncome = parseInt(income.value);
    let numberPercent = parseInt(saveInput.value);
    let parcentance = mainIncome / 100;
    let finulSaveAmmount = parcentance * numberPercent;
    if (finulSaveAmmount < 0) {
        alert('plz give positive number')
    }
    if (finulSaveAmmount <= calculateHandler()) {
        SavingAmount.innerText = finulSaveAmmount;
        RemainingBalance.innerText = calculateHandler() - finulSaveAmmount;
    }
}



































/* document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodCost = document.getElementById('food').value;
    const rentCost = document.getElementById('rent').value;
    const clothesCost = document.getElementById('clothes').value;
    const allCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothesCost);
    console.log(allCost)

    const totalExpensenText = document.getElementById('total-expenses');
    const totalExpensen = totalExpensenText.innerText;

    const totalExpensenCost = parseInt(totalExpensen);
    totalExpensenText.innerText = allCost;

    const incomeInput = document.getElementById('income');
    const incomeCost = parseInt(incomeInput.value);

    const restIncome = incomeCost - totalExpensen;

    const balanceText = document.getElementById('balance');
    // const balanceCost = parseInt(balanceText.innerText);

    balanceText.innerText = restIncome;


})



document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input').value;
    const savingAmountText = document.getElementById('saving-amount');
    const incomeInput = document.getElementById('income').value;
    savingAmountText.innerText = (incomeInput * saveInput) / 100;

    // remaining balace
    const remainingBalanceText = document.getElementById('remaining-balance');
    const restRemaining = parseInt(balanceText.innerText);
    const balanceText = document.getElementById('balance').innerText;
    const balaceAmount = parseInt(balanceText)
    const remainingBalanceAmount = balaceAmount - restRemaining;
    remainingBalanceText.innerText = remainingBalanceAmount;

})
 */


