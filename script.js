// let message = "Hello"
// // console.log(message)
// let msg = message
// console.log(msg)

// let user = {
//     name: "John"
// }
// console.log(user)
//
// let admin = user
// console.log(admin)

// let user = {
//     name: "John"
// }
// let admin = user
// admin.name = "Pete"
// console.log(user.name)
//
// let a = {}
// let b = a
// console.log(a==b)
// console.log(a===b)

// let a = {};
// let b = {}; // два независимых объекта
//
// console.log( a == b ); // false
//
//
// let user = {
//     name: "John",
//     age: 30
// }
//
// let clone = {}
//
// for(let key in user){
//     clone[key]=user=[key]
// }
//
// clone.name = "Pete"
// console.log(user.name)
//
//
// let user = {
//     name: "John"
// }
//
// let boolean = {
//     canView: true
// }
// let boolean2 = {
//     canEdit: true
// }
// Object.assign(user, boolean, boolean2)
// console.log(user)

//
// let user = {
//     name:"John"
// }
// Object.assign(user, {name: "Pete"})
// console.log(user)

// let user = {
//     name: "John",
//     age: 30
// }
// // console.log(user)
//
// let clone = Object.assign({}, user)
// console.log(clone)

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// }
// //
// // console.log(user.sizes.width)
// let clone = Object.assign({}, user)
// console.log(user.sizes===clone.sizes)
// console.log(clone)
// user.sizes.width++
// console.log(clone.sizes.width)

// let user = {
//     name: "John",
//     age: 30
// }
//
// user.sayHi = function (){
//     console.log("Hello")
// }
//
// user.sayHi()
//
// let user = {
//     name: "John",
//     age: 30,
//
//     sayHi(){
//         console.log(this.age)
//     }
// }
//
// user.sayHi()

// let user = {
//     name: "John"
// }
// let admin = {
//     admin: "Admin"
// }
// function isAdmin () {
//     console.log(admin.admin)
// }
//
// function sayHi () {
//     console.log(user.name)
// }
//
//
// sayHi(user.name)
// isAdmin(admin.admin)

// function User (age) {
//     this.age = age;
//     this.isAdmin = false
// }
// let user = new User(40)
//
// console.log(user.age)
// console.log(user.isAdmin)

// function BigUser () {
//     this.name = "John";
//     return {
//         name: "Back"
//     }
// }
//
// console.log(new BigUser().name)
//
// function User (name) {
//     this.name = name
//
//     this.sayHi = function (){
//         console.log("My name is : " + this.name)
//     }
// }
//
// let john = new User("John")
// john.sayHi()

// let array = ["apple", "orange", "banana"]
//
// array[1] = "limon"
// console.log(array)
// console.log(array[1])
// console.log(array[0])
// console.log(array[2])
// console.log(array.length)
//
// let arr = [1, 2, 3, 4, 5]
// console.log(arr)

//
// let array = ["apple", "orange", "banana"]
// console.log(array)
// console.log(array.pop())
//
// array.push("mersedec")
// console.log(array)

// console.log(array.shift())
//
// array.unshift("bmw")
// console.log(array)

// let fruits = ["Банан"]
//
// let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
//
// console.log( arr === fruits ); // true
//
// arr.push("Груша"); // массив меняется по ссылке
//
// console.log( fruits ); // Банан, Груша - теперь два элемента

// let arrays = ["apple", "orange", "banana"]
// for(let array of arrays) {
//     console.log(array)
// }

