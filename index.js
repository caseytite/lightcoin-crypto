class Account {
  constructor(username) {
    this.username = username;
    // this.balance = 0;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let movement of this.transactions) {
      balance += movement.value;
    }
    return balance;
  }

  addTransactions(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (!this.isAllowed) {
      console.log("Ya broke");
      return false;
    } else {
      this.time = new Date();
      this.account.addTransactions(this);
      return true;
    }
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
  isAllowed() {
    this.account.balance - this.amount >= 0 ? true : false;
  }
}

const mikkel = new Account("Michael");
console.log("Mikkel");
t1 = new Withdrawal(10, mikkel);
t1.commit();
// console.log("Transaction 1:", t1);
t2 = new Withdrawal(20, mikkel);
t2.commit();
// console.log("Transaction 2:", t2);
t3 = new Deposit(63, mikkel);
t3.commit();
// console.log("Transaction 3:", t3);
console.log(mikkel);
console.log(mikkel.balance);
//------
console.log("---------");

const adam = new Account("Jonas");
console.log("Adam");
t4 = new Withdrawal(50, adam);
t4.commit();
// console.log("Transaction 1:", t4);
t5 = new Withdrawal(70, adam);
t5.commit();
// console.log("Transaction 2:", t5);
t6 = new Deposit(186, adam);
t6.commit();
// console.log("Transaction 3:", t6);
console.log(adam);
console.log(adam.balance);
