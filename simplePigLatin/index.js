function pigIt(str){
    return str
        .split(' ')
        .map(el => {
            if(!el.match(/[a-z]/gi)) {
                return el;
            } else {
                return el.split('').slice(1).join('') +
                    el.split('').shift() +
                    'ay';
            } 
        })
        .join(' ')
}

console.log(pigIt('Pig latin is cool'));