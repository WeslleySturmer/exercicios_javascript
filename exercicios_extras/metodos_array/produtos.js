let produtos = [
  { nome: "Mouse", preco: 50, estoque: 10 },
  { nome: "Teclado", preco: 120, estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 3 },
  { nome: "Cabo HDMI", preco: 35, estoque: 8 }
]

let disponiveis = produtos.filter(p => p.estoque > 0)

let comDesconto = disponiveis.map(p => ({
  ...p,
  preco: p.preco * 0.9
}))

let valorTotal = comDesconto.reduce((acc, p) => acc + (p.preco * p.estoque), 0)

console.log("Disponíveis:", disponiveis);
console.log("Com desconto:", comDesconto);
console.log("Valor total em estoque:", valorTotal);
