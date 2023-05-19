function bankAccount(firstname, lastname, balance) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.balance = balance;
}

let murshidAcc = new bankAccount('Murshid', 'P C', 600);

let name = murshidAcc.firstname + " " + murshidAcc.lastname;
console.log("Account: "+name+ " Balance: "+murshidAcc.balance);

console.log("Murshid.deposit(400)");

function deposit(depositamt){
    murshidAcc.balance = murshidAcc.balance + depositamt;
}
deposit(400);

console.log("Account: "+name+ " Balance: "+murshidAcc.balance);

function withdraw(withdrawamt){
    if(withdrawamt <= murshidAcc.balance){
        murshidAcc.balance = murshidAcc.balance - withdrawamt;
        console.log("Account: "+name+ " Balance: "+murshidAcc.balance);
        console.log("true");
    }
    else{
        console.log("Insufficient amount!");
        console.log("Account: "+name+ " Balance: "+murshidAcc.balance);
        console.log("false");
    }
}
console.log("Murshid.withdraw(200)");
withdraw(200);

console.log("Murshid.withdraw(1200)");
withdraw(1200);
