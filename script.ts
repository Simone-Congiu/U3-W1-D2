class SonAccount {
    balanceInit: number = 0
    constructor(firstdep: number, firstdraw: number,) {
        this.balanceInit = 0
        this.oneDeposit(firstdep)
        this.oneDrow(firstdraw)



    }

    oneDeposit(deposito: number) {
        this.balanceInit = this.balanceInit + deposito

        return this.balanceInit
    }

    oneDrow(prelievo: number) {
        this.balanceInit = this.balanceInit - prelievo

        return this.balanceInit
    }





}


class MotherAccount extends SonAccount {
    balanceInit: number = 0
    constructor(firstdep: number, firstdraw: number,) {
        super(firstdep, firstdraw)
        this.balanceInit = 0
        this.oneDeposit(firstdep)
        this.oneDrow(firstdraw)
        this.addinterest()
    }

    addinterest() {
        this.balanceInit += this.balanceInit * 0.1
    }




}









let saldoFiglio = new SonAccount(100, 20)
saldoFiglio.oneDeposit(90)
saldoFiglio.oneDrow(10)
saldoFiglio.oneDeposit(100)
console.log(`il bilancio ora è ${saldoFiglio.balanceInit}`)





let saldoMadre = new MotherAccount(30, 10)
saldoMadre.oneDeposit(20)
saldoMadre.oneDrow(20)
console.log(saldoMadre)




