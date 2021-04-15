/**
 * Dependencies
 * NO TOCAR
 */
const random = require('random-item')
const db = require('megadb')
const Discord = require('discord.js')
const path = require('path')

// <--- Categoria de Diversion --->
const answer = [
  "si",
  "no",
  "tal vez",
  "puede ser",
  "creo que no",
  "obviamente, que no",
  "hmmmm... no lo se",
  "quien sabe",
  "no entendi",
  "quizas",
  "probablemente",
  "Juana dice que no",
  "S... no.",
  "Yo que se",
  "Ni idea",
  "No hay respuesta para esa pregunta",
  "Diria que no",
  "Diria que si",
  "Tal vez, si luchas por eso e.e",
  "Fua... haceme una pregunta mas facil",
  "eh... no se",
  "...",
  "Hmmm...",
  "preguntale a Carlos"
];

/**
 * Obten un resultado aleatorio del 8ball
 * @returns {string}
 */
function randomAnswer() {
  return random(answer);
}
let number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
]
let mail = [
  "juanito.alcachofa1423@gmail.com",
  "alfonso.castro@hotmail.com",
  "kuaker666@gmail.com",
  "anonymous@gmail.com",
  "iwanttobreakfree@gmail.com",
  "iluvqueen@gmail.com",
  "iluvmatiascandia@gmail.com",
  "owo.owo@gmail.com",
  "cristian-castro@gmail.com",
  "alejandro.salerno@gmail.com",
  "awadeuwu@gmail.com",
  "loveofmylife@gmail.com",
  "whyistayalive@gmail.com",
  "supa-man@gmail.com",
  "whyareugae@gmail.com",
  "@gmail.com",
  "@gmail.com",
  "@gmail.com",
  "@gmail.com",

]
let phone = random.multiple(number, 4) + random.multiple(number, 3) + random.multiple(number, 4)
let ip = random.multiple(number, 3) + '.' + random.multiple(number, 3) + '.' + random(number) + '' + random.multiple(number, 3)
let country = ["Argentina", "Venezuela", "Colombia", "Paraguay", "Uruguay", "Chile", "BRRazil", "United Kingdom", "United States", "Canada", "España", "Alemania", "Rusia", "Polonia", "Afganistán", "Mongolia", "Mexico"]
let continent = ["America", "Europa", "Asia", "Oceania", "South America", "North America", "Central America"]
let name = ["Juanito Perez", "Gonzalo Gomez", "Ricardo Arjona", "Julian Casablanca", "El Pepe", "Santiago Dominguez", "Thiago Pereira", "Julian Castro", "Cristian Castro", "Ricardo Milos", "Rosa Melano", "Elton Tito", "Juan.", "Pablo Jaramillo", "Juan Salerno"]
let cc = ["xxxx-xxxx-xxxx", "6666-6666-6666", "4444-4444-4444", "3333-3333-3333", "2222-2222-2222", "1111-1111-1111", "5555-5555-5555", "7777-7777-7777", "8888-8888-8888", "9999-9999-9999", "1234-1234-1234", "4321-4321-4321", "1238-7123-9738", "2324-2543-7968", "1298-3123-9812", "8173-9182-1237", "9827-3498-7234", "1982-3776-6218", "1982-4537-9825"]

/**
 * @returns {string}
 * Retorna un email aleatorio
 */
function randomMail() {
  return mail[Math.floor(Math.random() * mail.length)]
}

/**
 * @returns {string}
 * Retorna un número aleatorio
 */
function randomPhone() {
  return phone[Math.floor(Math.random() * phone.length)]
}

/**
 * @returns {string}
 * Retorna una IP aleatoria
 */
function randomIp() {
  return ip[Math.floor(Math.random() * phone.length)]
}

/**
 * @returns {string}
 * Retorna un país aleatorio
 */
function randomCountry() {
  return country[Math.floor(Math.random() * country.length)]
}

/**
 * @returns {string}
 * Retorna un continente aleatorio
 */
function randomContinent() {
  return continent[Math.floor(Math.random() * continent.length)]
}

/**
 * @returns {string}
 * Retorna un nombre aleatorio
 */
function randomName() {
  return name[Math.floor(Math.random() * name.length)]
}

/**
 * @returns {string}
 * Retorna una tarjeta de credito aleatoria
 */
function randomCreditCard() {
  return cc[Math.floor(Math.random() * cc.length)]
}



module.exports = {
  randomAnswer,
  randomMail,
  randomPhone,
  randomIp,
  randomCountry,
  randomContinent,
  randomName,
  randomCreditCard
};
console.log(randomName())