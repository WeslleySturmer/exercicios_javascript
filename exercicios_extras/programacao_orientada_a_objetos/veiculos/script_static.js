class Veiculo{
    constructor(modelo, ano, marca){
        if (new.target === Veiculo){
            throw new Error('Não é possível instanciar essa classe')
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
        return `Modelo ${this._modelo} | Ano ${this._ano} | Marca ${this._marca}`
    }

    static valida_ano(novo_ano){
        return !(novo_ano < 1950 || novo_ano > new Date().getFullYear())
    }
}

class Carro extends Veiculo{
    constructor(modelo, ano, marca, portas){
        if (!Veiculo.valida_ano(ano)){
            throw new Error('Ano inválido, tente novamente')
        }
        super(modelo, ano, marca)
        this._portas = portas
    }

    get portas(){
        return this._portas
    }

    informacoes(){
        return super.informacoes() + ` | Portas ${this._portas}`
    }
}

let celta = new Carro('Celta', 2024, 'Chevrolet', 4)

console.log(celta.informacoes())

let carro_errado = new Carro('CarroEx', 1900, 'MarcaEx', 4)
