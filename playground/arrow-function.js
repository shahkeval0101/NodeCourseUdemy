// const square = (x) =>{
//     return x*x
// }

// const square = (x) => x*x


// console.log(square(2))
const event = {
    name : "Birthday Party",
    GuestList:["keval","nidhi","indiana"],
    printGuestList(){
        console.log(this.name)
        this.GuestList.forEach(element => {
            console.log("guest is ",element,this.name)
        });
    }
}
event.printGuestList()