class Veiculos{
    constructor(modelo, ano, marca){
        if (new.target === Veiculos){
            throw new Error('Não é possível instanciar a classe veículo')
        }
        this.modelo = modelo.toUpperCase()
        this.ano = ano
        this.marca = marca.toUpperCase()
    }

    informacoes(){
        //throw new Error('Não é possível utilizar o método nessa classe')
        console.log(`Veículo modelo ${this.modelo} de ano ${this.ano} marca ${this.marca}`)
    }
}

class Carro extends Veiculos{
    constructor(modelo, ano, marca, portas){
        super(modelo, ano, marca)
        this.portas = portas
    }

    informacoes(){
        super.informacoes()
        console.log(`Carro com ${this.portas} portas`)
    }
}

class Moto extends Veiculos{
    constructor(modelo, ano, marca, cilindradas){
        super(modelo, ano, marca)
        this.cilindradas = cilindradas
    }

    informacoes(){
        super.informacoes()
        console.log(`Moto com ${this.cilindradas} cilindradas`)
    }
}

let opala = new Carro('Opala', 1980, 'Chevrolet', 2)
let sahara = new Moto('Sahara', 2020, 'Honda', 350)

opala.informacoes()
sahara.informacoes()