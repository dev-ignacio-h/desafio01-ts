export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // setName = (name: string): void => {
  //   this.name = name;
  //   console.log('Nome alterado com sucesso!');
  // };

  getName = (): string => {
    return this.name;
  };

  setBalance = (amount: number): void => {
    this.balance += amount;
  };

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log('Voce depositou');
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.validateBalance(amount)) {
      this.balance -= amount;
      console.log('Voce sacou');
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };

  private validateBalance = (amount: number): boolean => {
    if (this.balance >= amount) {
      console.log(this.balance);
      return true;
    }

    throw new Error('You need money!');
  };
}
