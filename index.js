const cow = require('cowsay')
const { SQUIRREL } = require('cowsay')
const students = [
    'Adelino',
    'Emma',
    'Alejandro',
    'Adrián',
    'Juan Pablo',
    'Antonio',
    'Miguel',
    'Victor',
    'Diego',
    'David',
    'Ignacio',
    'Juan Manuel',
    'Hugo',
    'Alicia',
    'Elena',
    'Clara',
    'Ana',
    'Asier',
    'Belén'
]

const result = Math.floor(Math.random() * (students.length - 1))

console.log(cow.say({ text: `${students[result]}, la vaca te ha elegido!` }))