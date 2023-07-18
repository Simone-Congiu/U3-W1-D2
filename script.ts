class SonAccount {
  balanceInit: number = 0;
  constructor(firstdep: number, firstdraw: number) {
    this.balanceInit = 0;
    this.oneDeposit(firstdep);
    this.oneDrow(firstdraw);
  }

  oneDeposit(deposito: number) {
    this.balanceInit = this.balanceInit + deposito;

    return this.balanceInit;
  }

  oneDrow(prelievo: number) {
    this.balanceInit = this.balanceInit - prelievo;

    return this.balanceInit;
  }
}

class MotherAccount extends SonAccount {
  balanceInit: number = 0;
  constructor(firstdep: number, firstdraw: number) {
    super(firstdep, firstdraw);
    this.balanceInit = 0;
    this.oneDeposit(firstdep);
    this.oneDrow(firstdraw);
    this.addinterest();
  }

  addinterest() {
    this.balanceInit += this.balanceInit * 0.1;
  }
}

let saldoFiglio = new SonAccount(0, 0);

let firstForm = document.querySelector(".son-form") as HTMLFormElement;
console.log(firstForm);
firstForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// prendo i bottoni e li collego

let addButton = document.querySelector(".btn-son-add") as HTMLButtonElement;
addButton.addEventListener("click", () => {
  let inputValueSon: number = parseFloat(
    (<HTMLInputElement>document.getElementById("first-input")).value
  );
  console.log(inputValueSon);
  saldoFiglio.oneDeposit(inputValueSon);
  console.log(saldoFiglio.balanceInit);
  let pContainerSaldo = document.querySelector("p") as HTMLParagraphElement;
  pContainerSaldo.innerHTML = `il bilancio del figlio è ${saldoFiglio.balanceInit}`;
});

let removeButton = document.querySelector(
  ".btn-son-remove"
) as HTMLButtonElement;
removeButton.addEventListener("click", () => {
  let inputValueSon: number = parseFloat(
    (<HTMLInputElement>document.getElementById("first-input")).value
  );
  if (saldoFiglio.balanceInit >= 0) {
    saldoFiglio.oneDrow(inputValueSon);
    let pContainerSaldo = document.querySelector("p") as HTMLParagraphElement;
    pContainerSaldo.innerHTML = `il bilancio del figlio è ${saldoFiglio.balanceInit}`;
  } else {
    alert("sei già sotto, aggiungi fondi per continnuare a prelevare");
  }
});

let saldoMadre = new MotherAccount(0, 0);
let secondForm = document.querySelector(".mom-form") as HTMLFormElement;
console.log(secondForm);
secondForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

let addButtonMom = document.querySelector(".btn-mom-add") as HTMLButtonElement;
addButtonMom.addEventListener('click',()=>{
    let inputValueMom: number = parseFloat(
        (<HTMLInputElement>document.getElementById("second-input")).value
      );
      console.log(inputValueMom);
      saldoMadre.oneDeposit(inputValueMom)
      let pContainerSaldoMom = document.querySelector(".saldo-mom") as HTMLParagraphElement;
      pContainerSaldoMom.innerHTML = `il bilancio della mamma è ${saldoMadre.balanceInit+saldoMadre.balanceInit*10/100}`;
})

let removeButtonMom = document.querySelector(
    ".btn-mom-remove"
  ) as HTMLButtonElement;
  removeButtonMom.addEventListener("click", () => {
    let inputValueMom: number = parseFloat(
      (<HTMLInputElement>document.getElementById("second-input")).value
    );
    if (saldoMadre.balanceInit >= 0) {
      saldoMadre.oneDrow(inputValueMom);
      let pContainerSaldoMom = document.querySelector(".saldo-mom") as HTMLParagraphElement;
      pContainerSaldoMom.innerHTML = `il bilancio della mamma è ${saldoMadre.balanceInit+saldoMadre.balanceInit*10/100}`;
    } else {
      alert("sei già sotto, aggiungi fondi per continnuare a prelevare");
    }
  });




