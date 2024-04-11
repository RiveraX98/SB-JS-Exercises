

function freqCounter(str){
    const counter = {}
    for (el of str){
        counter[el] = counter[el] +1 || 1
    }
    return counter
}

function sameFreq(num1,num2){
    let str1 = num1.toString();
    let str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    const num1Freq = freqCounter(str1)
    const num2Freq = freqCounter(str2)

    for (let key in num1Freq){
        if (!num2Freq[key]) return false
        if (num1Freq[key] !== num2Freq[key]) return false
    }
    return true
}