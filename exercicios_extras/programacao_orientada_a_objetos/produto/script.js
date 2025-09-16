class Produto {
    constructor(nome, quantidade, preco) {
        this.nome = nome
        this.quantidade = quantidade
        this.preco = preco
    }

    vender(qtd) {
        if(qtd > this.quantidade) {
            console.log(`Não foi possível vender ${qtd} unidades, pois há apenas ${this.quantidade}`)
        } else {
            this.quantidade -= qtd
            console.log(`Vendido ${qtd} unidades`)
        }
    }

    comprar(qtd) {
        if (qtd < 0) {
            console.log('Não é possível dar entrada de uma quantidade negativa')
        } else {
            this.quantidade += qtd
            console.log(`Comprado ${qtd} unidades`)
        }
    }

    atualiza_preco(preco){
        this.preco = preco
        console.log(`Preço atualizado com sucesso`)
    }

    aplica_desconto(porcentagem){
        if(porcentagem < 0 || porcentagem > 100) {
            console.log(`Não é possível aplicar essa porcentagem de ${porcentagem}%`)
            return
        }
        this.preco *= Math.abs((porcentagem / 100) - 1)
        console.log(`Desconto aplicado com sucesso`)
    }

    mostrar_estoque(){
        console.log(`Consta ${this.quantidade} em estoque`)
    }

    mostrar_preco(){
        console.log(`O preço atual é de R$: ${this.preco.toFixed(2)}`)
    }
}

class Loja {
    constructor(nome) {
        this.nome = nome
        this.produtos = []
    }

    adiciona_produto(prod){
        this.produtos.push(prod)
    }

    listar_produtos(){
        console.log(`Produtos disponíveis na loja ${this.nome}`)
        this.produtos.forEach(p => {
            console.log(`- Produto: ${p.nome} | Quantidade: ${p.quantidade} | Preço: ${p.preco.toFixed(2)}`)
        })
    }

    busca_produto(prod){
        let encontrado = this.produtos.find(p => p.nome.toLowerCase() === prod.toLowerCase())
        if (encontrado){
            console.log(`Produto encontrado: Produto: ${encontrado.nome} | Quantidade: ${encontrado.quantidade} | Preço: ${encontrado.preco.toFixed(2)}`)
            return encontrado
        } else {
            console.log(`O produto ${prod} não foi encontrado na base de dados`)
        }
    }
}

let armario = new Produto('Armario 2 porta', 5, 1000.00)
let cama = new Produto('Cama casal', 4, 400)

armario.mostrar_estoque()
armario.comprar(10)
armario.vender(6)
armario.mostrar_estoque()
armario.mostrar_preco()
armario.atualiza_preco(1500.00)
armario.mostrar_preco()

console.log('---------------------------------')

cama.mostrar_estoque()
cama.mostrar_preco()
cama.aplica_desconto(-10)
cama.mostrar_preco()

console.log('---------------------------------')

let minhaloja = new Loja('Móveis Weslley')
minhaloja.adiciona_produto(cama)
minhaloja.adiciona_produto(armario)
minhaloja.listar_produtos()
minhaloja.busca_produto('teste')
minhaloja.busca_produto('cama casal')