// const objectA = {
//     name: 'Aleks',
//     lastName: 'Frichko',
//     age: 20,
// }

// const doubleA = objectA

// doubleA.stuff = 'glovo'

// console.log(objectA)

// console.log('Я працюю!')

// // function yourYearToday() {
// //     let dateBirthday = prompt('Напишіть ваш рік народження.')
// //     let todaytime = prompt('Напишіть сьогоднішні рік')

// //     yourBirthday = todaytime - dateBirthday



// //     console.log(--yourBirthday)
// // }

// // yourYearToday()

// const myGirls = {
//     sasha: 23,
//     angelina: 11,
// }

// console.log(myGirls)

// myGirls.lena = 5

// myGirls.kate = 14

// myGirls.ola = 90

// myGirls.dasha = 1

// console.log(myGirls)

// delete myGirls.dasha

// console.log(myGirls)

// const myInformation = {
//     name: 'Aleks',
//     lastName: 'Frichko',

// }

// console.log(myInformation)

// const myLocation = 'country'

// myInformation[myLocation] = 'Ukraine'

// console.log(myInformation)


// let many = 338 

// let iWant = 10000

// const myHave = {
//     many,
//     iWant,
//     shit: 'А не багато хочеш ?'
// }

// console.log(myHave)

// const myCity = {
//     city: 'Khm',
//     popular: false,
// }

// console.log(myCity)

// myCity.country = 'Ukranine'

// myCity.yearsCity = 600 

// console.log(myCity)

// let nameUser = prompt('Напишіть ваше імя')

// const greetingUser = {
//     nameUser,
//     nameGreeating: function () {
//         console.log(this.nameUser)
//     }
// }

// greetingUser.nameGreeating()

// const post = {
//     title: 'title',
//     likesVideo: 999
// }

// let postJson = JSON.stringify(post)

// console.log(post)
// console.log(postJson)


// Мутації в Javascript 


// Примітивні типи даних
const a = 10
let b = a
console.log(a)
console.log(b)

b = 30

console.log(a) // результат: 10
console.log(b) // результат: 30

// Силочни тип даних

const myInfo = {
    age: 20,
    name: 'Aleks',
    lastName: 'Frichko',
    location: 'Lomachynci'
}

console.log(myInfo)
const myInfoTrue = myInfo

console.log(myInfoTrue)
console.log(myInfo)

// myInfoTrue.location = 'Khm'
