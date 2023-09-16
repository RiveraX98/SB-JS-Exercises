
const searchValue = $('#textbox') 
let div = document.querySelector("div")
const submit = document.querySelector("#submit")
let token = "kr9MrvsIgW08wcISpjNzMPuoXCYd6xkE"




function getSrc(response){
    let numResults = response.data.data.length;
    console.log(numResults)
    let indx = Math.floor(Math.random() * numResults)
    console.log(indx)
    let giphObj = response.data.data[indx]
    let giphSrc = (giphObj.images.original.url)
    addGiph(giphSrc)
    
}
 


submit.addEventListener("click",async function(evnt){
    evnt.preventDefault()
    let search = $('#textbox').val() 
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{api_key:token, q:search}});
    getSrc(response)  

   })
   


function addGiph(source){
let newImg = $("div").append(`<img src= ${source}></img>`)
$("#textbox").val("") 


}



$("#clear").on("click", function() {
    $("div").empty();
  })

