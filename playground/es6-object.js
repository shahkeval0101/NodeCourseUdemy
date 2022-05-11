// const name = "keval"
// const userAge = 23
// const user = {
//   name,
//   age : userAge,
//   location : "Mumbai"
// }
// console.log(user)
//object shorthand syntax , will set same value to the name variable
// const product = {
//   label : "red",
//   price : 3,
//   stock : 201,
//   salePrice : undefined
// }
// const {label:productLabel, stock} = product //destructuring with new name 
// console.log(productLabel, stock)

//function destructuring
const transaction = (type, {label, stock})=>{
  console.log(label, stock)
}
transaction('order',product)