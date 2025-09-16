class Funcionarios{
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
    }

    calcula_salario(){
        console.log(`O salario de ${this.nome} é de R$ ${this.salario.toFixed(2)}`)
    }
}

class Gerente extends Funcionarios{
    calcula_salario(){
        let salario_final = this.salario * 1.30
        console.log(`O salario de ${this.nome} é de R$ ${salario_final.toFixed(2)}`)
    }
}

class Desenvolvedor extends Funcionarios{
    calcula_salario(){
        let salario_final = this.salario * 1.10
        console.log(`O salario de ${this.nome} é de R$ ${salario_final.toFixed(2)}`)
    }
}

let weslley = new Desenvolvedor('Weslley', 3000)
let jose = new Gerente('José', 4000)

weslley.calcula_salario()
jose.calcula_salario()