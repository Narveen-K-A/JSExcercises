function bankAccount(firstname, lastname, balance) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.balance = balance;
    let name = firstname + " " + lastname;
    console.log("Account: "+name+ " Balance: "+balance);

    console.log("Murshid.deposit(400)");

    function deposit(depositamt){
        balance = balance + depositamt;
    }
    deposit(400);

    console.log("Account: "+name+ " Balance: "+balance);

    function withdraw(withdrawamt){
        if(withdrawamt <= balance){
            balance = balance - withdrawamt;
            console.log("Account: "+name+ " Balance: "+balance);
            console.log("true");
        }
        else{
            console.log("Insufficient amount!");
            console.log("Account: "+name+ " Balance: "+balance);
            console.log("false");
        }
    }
    console.log("Murshid.withdraw(200)");
    withdraw(200);
    console.log("Murshid.withdraw(1200)");
    withdraw(1200);
}

let murshidAcc = new bankAccount('Murshid', 'P C', 600);
