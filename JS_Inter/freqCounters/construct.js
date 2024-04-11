function freqCounter(str){
    const counter = {}
    for (el of str){
        counter[el] = counter[el] +1 || 1
    }
    return counter
}

function constructNote(msg,letters) {
    const msgCount = freqCounter(msg)
    const letterCount = freqCounter(letters)
    for (let key in msgCount){
        if (!letterCount[key]) return false
        if (msgCount[key] !== letterCount[key]) return false
    }
    return true
}

console.log(constructNote('aa', 'abc'))