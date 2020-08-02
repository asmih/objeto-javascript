const pessoa = {nome: 'Yasmin'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
console.log(pessoaConstante)
pessoaConstante.nome = 'Pedro'
pessoaConstante.nome = 'João'