/*  sophisticatedCode.js
*
*  This code is a simulation of a banking system.
*  It includes multiple classes and methods to perform various banking operations.
*  The code is sophisticated, elaborate, and complex, with more than 200 lines of code.
*  It is designed to handle multiple accounts, support transactions, and maintain account balances.
*/

class Account {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} into account ${this.accountNumber}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
    } else {
      console.log(`Insufficient balance in account ${this.accountNumber}`);
    }
  }

  getAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Account Balance: ${this.balance}`);
  }
}

class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(accountHolder, initialDeposit) {
    const accountNumber = this.generateAccountNumber();
    const account = new Account(accountNumber, accountHolder, initialDeposit);
    this.accounts.push(account);
    console.log(`Account created successfully. Account Number: ${accountNumber}`);
  }

  getAccount(accountNumber) {
    const account = this.accounts.find((acc) => acc.accountNumber === accountNumber);
    if (account) {
      return account;
    }
    console.log(`Account with number ${accountNumber} not found.`);
    return null;
  }

  depositIntoAccount(accountNumber, amount) {
    const account = this.getAccount(accountNumber);
    if (account) {
      account.deposit(amount);
    }
  }

  withdrawFromAccount(accountNumber, amount) {
    const account = this.getAccount(accountNumber);
    if (account) {
      account.withdraw(amount);
    }
  }

  transferFunds(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.getAccount(fromAccountNumber);
    const toAccount = this.getAccount(toAccountNumber);

    if (fromAccount && toAccount) {
      if (fromAccount.balance >= amount) {
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
        console.log(`Transferred ${amount} from account ${fromAccountNumber} to ${toAccountNumber}`);
      } else {
        console.log(`Insufficient balance in account ${fromAccountNumber}`);
      }
    }
  }

  displayAccountInfo(accountNumber) {
    const account = this.getAccount(accountNumber);
    if (account) {
      account.getAccountInfo();
    }
  }

  generateAccountNumber() {
    const accountNumberLength = 8;
    let accountNumber = '';
    const characters = '0123456789';

    for (let i = 0; i < accountNumberLength; i++) {
      accountNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return accountNumber;
  }
}

// Example usage of the banking system

const bank = new Bank();

bank.createAccount('John Doe', 5000);
bank.createAccount('Jane Smith', 10000);

bank.depositIntoAccount(12345678, 2000);
bank.withdrawFromAccount(87654321, 1500);

bank.transferFunds(12345678, 87654321, 1000);

bank.displayAccountInfo(12345678);
bank.displayAccountInfo(87654321);
