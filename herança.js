class Person {
    constructor(first, last, age, gender, interest) {
        this.name = {
            first,
            last 
        }
        this.age = age
        this.gender = gender,
        this.interest = interest
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`)   
    }

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now`)
    }
}
let han = new Person('Han', 'Solo', 15, 'male', ['Smuggling']);
han.greeting()
let leia = new Person('Leia', 'Organa', 19, 'female', ['Governament']);
leia.farewell()

class Teacher extends Person {
    constructor(first, last, age, gender, interest, subject, grade) {
    super(first, last, age, gender, interest)
    this.subject = subject
    this.grade = grade
}
}
let teacher = new Teacher ('Severus', 'Snape', 59, 'male', ['Potions'], 'Dark arts', 5)
teacher.greeting()
teacher.farewell()
teacher.grade
teacher.subject