function validBraces(braces){
    let counter = 0;

    for(let i = 0; i < braces.length; i++) {
        if(braces[i] == '(') {
            counter++;
            
        }
    }
}

console.log(validBraces( "()" ));