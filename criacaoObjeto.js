const obj = {}
console.log(obj)

console.log(typeof Object, typeof new Object)
const obj2 = new Object

function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
        const p1 = new Produto ('Caneta', 7.99, 0.15)
        const p2 = new Produto('Notebook', 3000, 0.25)
