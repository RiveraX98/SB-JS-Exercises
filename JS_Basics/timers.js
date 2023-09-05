


function countdown (time){
    let timer = setInterval (function(){
        time--
        if (time <=0){
            console.log ("Done")
            clearInterval(timer)
            
        }
        else{
            console.log(time)
        }
    }, 1000)

}




function randomGame(){
    let numOfTries= 0 
   let loop= setInterval (function(){
        let guess = (Math.random());
        numOfTries++

         if (guess > 0.75){
             console.log ("Tries = " + numOfTries,"Guess = " + guess)
            clearInterval(loop)
            }
    }, 1000)
}

