const fs = require('fs')
const notes = require('./notes.js')

// // fs.writeFileSync('notes.txt','This file was created by node.js, my name is keval!')
// fs.appendFileSync('notes.txt','This is second line in node.js')


// const add = require("./utils")
// const sum = add(1,3)
// console.log(sum)


// const getNotes = require('./notes.js')
// const printString = getNotes()
// console.log(printString)

// var validator = require('validator');
// console.log(validator.isEmail('foo@bar.com')) //=> true
// console.log(validator.isURL('https://google.io'))

const chalk = require('chalk')
// console.log(chalk.green.bold.underline.strikethrough.inverse("success"))



// const yargs = require('yargs')
// console.log(process.argv)
// console.log(yargs.argv)

// console.log(process.argv)
// const command = process.argv[2]
// console.log(process.argv)

// if(command === "add"){
//     console.log("Adding notes!")
// }else if(command === "remove"){
//     console.log("Removing Notes")
// }

//Create Add command for note App
const yargs = require('yargs')
const { argv } = require('process')
yargs.version("1.1.0")
yargs.command({
    command: 'add',
    describe: "Add a new Note!",
    builder:{
    title:{
        describe:"Note Title",    
        demandOption:true,
        type:"string"
    },
    body:{
        describe:"Note Body",    
        demandOption:true,
        type:"string"
    }

    },
        handler(argv){
        console.log("Title : ",argv.title)
        console.log("Body : ", argv.body)
        notes.addNote(argv.title, argv.body)
        // console.log("Body : ",argv.body)
    }
})

//Create a remove command
yargs.command({
    command: 'remove',
    describe: "Remove Note!",
    builder:{
        title:{
            describe:"Note Title",    
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        // console.log("Removing a Note!!!")
        notes.removeNote(argv.title)

    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: "list Note!",
    handler(){
        notes.listNotes()
        // console.log("Listing all Notes!!!")
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: "Read a Note!",
   builder:
        { title:{
        describe:"Reading Notes",
        demandOption:true,
        type:"string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()