const fs= require("fs")
const axios = require("axios")
const process = require('process')

let content
let path

if (process.argv[2] === "--out"){
    path = process.argv[3]
    content = process.argv[4]
    console.log("running")

}else{
     content = process.argv[2]

}

function writeFile(path,data){
    fs.writeFile(path,data,"utf-8", (err) =>{
        if(err){
            console.error(`Error: ${err}`)
            process.exit(1)
        }
        console.log("ok")
    })   
}

function cat(content){
    fs.readFile(content,"utf8", (err,data)=>{
        if(err){
            console.log(err)
            process.exit(1)
        }else{
        console.log (data)}

        if(content = process.argv[4]){
            writeFile(path,data)
        }
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


if (content.includes("http")){
    webCat(content)
}
else{
    cat(content)
}

