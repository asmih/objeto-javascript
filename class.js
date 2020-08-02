const Pessoa = function() {
    console.log('exemplar criar')
}

const pessoa1 = new Pessoa()
const pessoa2 = Object.create(Pessoa)

const pessoa = {
    isHuman: false,
    resultado: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
    }
};

const me = Object.create(pessoa)
me.name = 'Yasmin'
me.isHuman = true

me.resultado()