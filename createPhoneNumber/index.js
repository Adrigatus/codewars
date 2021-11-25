function createPhoneNumber(numbers){
    let first = numbers.slice(0, 3);
    let second = numbers.slice(3, 6);
    let last = numbers.slice(6, numbers.length);

    let final = "(" + first.join("") + ") " + second.join("") + "-" + last.join("");
    return final;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);