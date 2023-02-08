import { DioAccount } from './DioAccount';

export class NewAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.setBalance(amount + 10);
    }
    console.log('Voce pegou um empréstimo');
  };
}
