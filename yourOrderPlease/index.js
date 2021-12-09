function order(words){
    let indexOfWords = words.split(' ').map(el => parseInt(el.match(/\d/gi)));
    let newWordsArray = [];

    for(let i = 0; i < words.split(' ').length; i++) {
        newWordsArray[indexOfWords[i] - 1] = words.split(' ')[i];
    }

    return newWordsArray.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));