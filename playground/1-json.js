const fs = require('fs')
// const book = {
//     title : "Ego is the enemy",
//     author : "Ryan Holiday"
// }
// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJson)

// const dataBuffer = fs.readFileSync("1-json.json")
// const dataJSon = dataBuffer.toString()
// const data = JSON.parse(dataJSon)
// console.log(data.title)

const data = JSON.parse(fs.readFileSync("1-json.json").toString())
data.name = "Keval"
data.age = "23"
console.log(data)
fs.writeFileSync('1-json.json',JSON.stringify(data))