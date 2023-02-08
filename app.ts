import { CompanyAccount } from './class/CompanyAccount';
import { NewAccount } from './class/NewAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
// console.log(peopleAccount)
peopleAccount.deposit(1000);
peopleAccount.withdraw(1000);
peopleAccount.getBalance();
peopleAccount.setBalance(1000);
peopleAccount.getName();
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(1000);
companyAccount.withdraw(1000);
companyAccount.getBalance();
companyAccount.setBalance(1000);
companyAccount.getName();
companyAccount.getLoan(1000);
// console.log(companyAccount)
const newAccount: NewAccount = new NewAccount('Ignacio', 40);
newAccount.deposit(1000)
newAccount.getBalance();
newAccount.getLoan(1000);
newAccount.getName();
newAccount.setBalance(1000)
newAccount.withdraw(500)
