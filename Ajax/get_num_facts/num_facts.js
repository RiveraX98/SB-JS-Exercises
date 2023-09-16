



async function numFact(){
   
    $("#num_fact").empty()
    let num = $("#fav_num").val()
    let res = await axios.get(`http://numbersapi.com/${num}`)
    $("#num_fact").append(`<p>${res.data}</p>`)
    console.log(res)
   

}

$("#num").click(numFact)



async function getRange(){
    $("#range").empty()
    let min = $("#min_num").val()
    let max= $("#max_num").val()
    let res = await axios.get(`http://numbersapi.com/${min}..${max}`)
    console.log(res)
    for (let data of Object.values(res.data)){
        console.log(data)
        $("#range").append(`<li>${data}</li>`)
    }

}

$("#sendRange").click(getRange)




async function getMore(){
    $("#num_fact").empty()
    let num = $("#fav_num").val()
    console.log(num)
    let res = await Promise.all([
        axios.get(`http://numbersapi.com/${num}`),
        axios.get(`http://numbersapi.com/${num}`),
        axios.get(`http://numbersapi.com/${num}`)
    ])

    $("#num_fact").append(`<p>${res[0].data}</p>`)
    console.log(res[0])
    $("#num_fact").append(`<p>${res[1].data}</p>`)
    $("#num_fact").append(`<p>${res[2].data}</p>`)
}



$("#more").click(getMore)