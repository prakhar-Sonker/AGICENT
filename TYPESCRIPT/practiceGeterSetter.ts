// Q2 (Medium-Hard):
// Create a class BankAccount with:

// Private _balance.

// Getter balance to check the balance.

// Setter balance to deposit money (only if deposit > 0).

// A method withdraw(amount) that reduces balance only if sufficient funds.


class BankAccount{
  private _balance: number;

  constructor(_balance: number){
    this._balance=_balance;
  }

  //getter
  //to check the balance
  get balance(){
    return this._balance;
  }

  //setter
  //update balance after depositing money
  set depositMoney(money: number){
    if(money>0){
      this._balance+=money;
      console.log(`Deposited: ${money}`);
    }
    else console.log("Money should be greater than 0");
  }

  //method to withdraw funds if sufficient balance
  //lets say if 10000 is maintained we will withdraw 1000 rs

    withdraw(amount: number) {
    if (amount > 0 && this._balance >= amount) {
      this._balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    } else {
      console.log("Insufficient funds or invalid amount!");
    }
}
}

// Test
let ba1 = new BankAccount(120000);
let ba2 = new BankAccount(9000);

console.log("Initial Balance (ba1):", ba1.balance);
console.log("Initial Balance (ba2):", ba2.balance);

ba1.depositMoney = 2000;  // ✅ using setter
ba2.depositMoney = -500;  // ❌ will reject

console.log("Balance after deposit (ba1):", ba1.balance);

ba1.withdraw(1000); // ✅ allowed
ba2.withdraw(10000); // ❌ insufficient funds

console.log("Final Balance (ba1):", ba1.balance);
console.log("Final Balance (ba2):", ba2.balance);