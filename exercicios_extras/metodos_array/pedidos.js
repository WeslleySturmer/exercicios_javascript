let pedidos = [
  { id: 1, cliente: "Ana", valor: 250, status: "pago" },
  { id: 2, cliente: "Bruno", valor: 400, status: "pendente" },
  { id: 3, cliente: "Carla", valor: 150, status: "pago" },
  { id: 4, cliente: "Daniel", valor: 300, status: "pago" },
  { id: 5, cliente: "Eduarda", valor: 500, status: "pendente" }
]

let pedidosPagos = pedidos.filter(p => p.status == 'pago')
let nomeValor = pedidosPagos.map(p => {
    return {cliente: p.cliente, valor: p.valor}
})
let valorTotal = nomeValor.reduce((acc, p) => acc + p.valor, 0)

console.log(pedidosPagos)
console.log(nomeValor)
console.log('-----------------')
console.log(valorTotal)

