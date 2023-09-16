

let shuffled = "False" 
let deckId=""
async function getFirstCard(){
 
    let res1 = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    deckId= res1.data.deck_id
    let res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)

    $("#card-details").html(`${res2.data.cards[0].value} of ${res2.data.cards[0].suit}`)
    $("#card-image").append(`<img src="${res2.data.cards[0].image}">`)
    shuffled="True"

    console.log("ran one")
}

async function getAnotherCard(){
    if (shuffled == "False"){
       getFirstCard() 
    }

    let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)

    rotate = Math.random() * 180
    $("#card-details").html(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    $("#card-image").append(`<img src="${res.data.cards[0].image}" style=" transform: rotate(${rotate}deg)">`)

    console.log(res)


    if(res.data.remaining == 0){
        $("button").remove()
    }
}

$("button").click(getAnotherCard)