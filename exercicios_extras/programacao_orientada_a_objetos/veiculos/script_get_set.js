class Veiculo {
    constructor(modelo, ano, marca){
        if (new.target === Veiculo){
            throw new Error('Não é possível instanciar a classe veículo')
        }
        this._modelo = modelo
        this._ano = ano
        this._marca = marca
    }

    get modelo(){
        return this._modelo
    }

    get ano(){
        return this._ano
    }

    get marca(){
        return this._marca
    }

    informacoes(){
        return `Veículo ${this._modelo} | Ano ${this._ano} | Marca ${this._marca}`
    }
}

class Carro extends Veiculo{
    constructor(modelo, ano, marca, portas){
        super(modelo, ano, marca)
        this._portas = portas
    }

    get portas(){
        return this._portas
    }

    set portas(nova_portas){
        if (nova_portas != 2 && nova_portas != 4){
            console.log('Numero de portas inválidas')
        } else {
            this._portas = nova_portas
        }
    }

    informacoes(){
        return super.informacoes() + ` | Portas ${this.portas}`
    }

}


class Moto extends Veiculo{
    constructor(modelo, ano, marca, cilindradas){
        super(modelo, ano, marca)
        this._cilindradas = cilindradas
    }

    get cilindradas(){
        return this._cilindradas
    }

    set cilindradas(nova_cilindrada){
        if (nova_cilindrada < 50){
            console.log('Cilindradas muito baixas')
        } else {
            this._cilindradas = nova_cilindrada
        }
    }

    informacoes(){
        return super.informacoes() + ` | Cilindradas ${this.cilindradas}`
    }

}

let uno = new Carro('Uno', 1995, 'Fiat', 4)
let sahara = new Moto('Sahara', 2020, 'Honda', 180)

uno.portas = 5
sahara.cilindradas = 30

console.log(uno.modelo)
console.log(sahara.modelo)

console.log(uno.informacoes())
console.log(sahara.informacoes())