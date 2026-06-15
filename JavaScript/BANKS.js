const bankAccount = {
    accountHolder: "Rahul",
    balance: 5000,

    deposit(amount) {
        bankAccount.balance += amount;
        console.log("amount deposited.");
        console.log("Current Balance: ₹" + bankAccount.balance);
    },

    withdraw(amount) {
        if (amount > bankAccount.balance) {
            console.log("Insufficient Balance!");
        } else {
            bankAccount.balance -= amount;
            console.log("₹" + amount + " withdrawn.");
            console.log("Current Balance: ₹" + bankAccount.balance);
        }
    },

    checkBalance() {
        console.log("Account Holder: " + bankAccount.accountHolder);
        console.log("Balance: ₹" + bankAccount.balance);
    }
};

bankAccount.checkBalance();
bankAccount.deposit(2000);
bankAccount.withdraw(1500);
bankAccount.checkBalance();