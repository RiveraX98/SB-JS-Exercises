const fs= require("fs")
const axios = require("axios")
const process = require('process')

function cat(path){
    fs.readFile(path,"utf8", (err,data)=>{
        if(err){
            console.log(err)
            process.exit(1)
        }
        console.log(data)
    })
}

async function webCat(url){
    try{
        res= await axios.get(url)
        console.log(res)
    }catch(err){
        console.error(`Error: ${err}`)
        process.exit(1)
    }
}

let path = process.argv[2]
if (path.includes("http")){
    webCat(path)
}
else{
    cat(path)
}