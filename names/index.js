function list(names){
    let arrayOfNames = names.map(el => el.name);
    let stringOfNames = '';
    if(arrayOfNames.length == 0) {
        return ''
    } else if(arrayOfNames.length == 1) {
        return arrayOfNames.join('');
    } else if (arrayOfNames.length == 2) {
        return arrayOfNames.join(' & ')
    } else {
        for (let i = 0; i < arrayOfNames.length - 2; i ++) {
            stringOfNames += arrayOfNames[i] + ', ';
        }
        stringOfNames += arrayOfNames[arrayOfNames.length -2] + ' & ' + arrayOfNames[arrayOfNames.length - 1];
    }

    return stringOfNames;
}
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));