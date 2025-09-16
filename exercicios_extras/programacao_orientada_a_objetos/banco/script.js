class ContaBanco {
    constructor(titular){
        this.titular = titular
    }

    #saldo = 0

    mostra_saldo(){
        console.log(`O saldo atual é de R$ ${this.#saldo}`)
    }

    depositar(valor){
        if (valor < 0){
            console.log(`Não é possível sacar um valor negativo`)
            return
        }
        this.#saldo += valor
        console.log('Depósito realizado com sucesso')
        this.mostra_saldo()
    }

    sacar(valor){
        if (valor > this.#saldo){
            console.log(`Não é possível sacar ${valor} pois o saldo atual é de ${this.#saldo}`)
        } else {
            this.#saldo -= valor
            console.log('Saque realizado com sucesso')
            this.mostra_saldo()
        }
    }
}

let contaWeslley = new ContaBanco('Weslley')

contaWeslley.mostra_saldo()
contaWeslley.depositar(100)
contaWeslley.sacar(150)
contaWeslley.sacar(80)