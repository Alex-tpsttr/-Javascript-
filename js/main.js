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
// const a = 10
// let b = a
// console.log(a)
// console.log(b)

// b = 30

// console.log(a) // результат: 10
// console.log(b) // результат: 30

// Силочни тип даних

const myInfo = {
    age: 20,
    name: 'Aleks',
    lastName: 'Frichko',
    location: 'Lomachynci'
}

// console.log(myInfo)
// const myInfoTrue = myInfo

// console.log(myInfoTrue)
// console.log(myInfo)

// myInfoTrue.location = 'Khm'
// Пробуєм скопіювати об'єкт щоб при зміннах в новому об'єкті, нічого не змінювались в об'єкті з якого ми взяли ті значення

const myInfoReal = Object.assign({}, myInfo)

myInfoReal.girlfriend = false

// console.log(myInfo)
// console.log(myInfoReal)

// Так, перши метод працює. Йде до другого у нього синтаксис трохи буде легши та менши писанини

const myInfoFuture = { ...myInfo }

myInfoFuture.work = 'Developer'

// console.log(myInfo)
// console.log(myInfoFuture)

// Берем треті спосіб з копіюванням що вкладенних об'єктів в об'єкт.

// myInfo.weight = {
//     2015: 60,
//     2017: 65,
//     2020: 72,
// }

// const myInfoWeight = JSON.parse(JSON.stringify(myInfo))

// Функція.

// для чого вона ?

// наприклад маєм таки код 

let a = 5
let b = 10


let c

c = a + b
console.log(c)

a = 'Саша '
b = 'Даша'

console.log(c)

// Це все можна записати коротше 

function sum(a, b) {
    const c = a + b
    console.log(c)
}
console.dir(sum)

sum(a, b)

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
 }

console.log(myFn(10, 6))
