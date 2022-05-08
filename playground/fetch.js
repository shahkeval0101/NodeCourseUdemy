// import fetch from "node-fetch";
const fetch = require("node-fetch");

fetch("1-json.json")
.then(response =>{
    return response.json()
} )
.then(jsondata=>{
    console.log(jsondata)
})

// const fetchData = async () => {
//     try {
//       const res = await fetch("1-json.json");
//       data = await res.json();
//       console.log(data)
//     } catch (e) {
//       console.log("something went wrong!", e);
//     }
//   };
//   fetchData();