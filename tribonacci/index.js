function tribonacci(signature,n){
    let tribonacciArr = [];
    for(let i = 0; i < n; i++) {
        if(i < 3) {
            tribonacciArr.push(signature[i]);
        } else {
            number = tribonacciArr[i-3] + tribonacciArr[i-2] + tribonacciArr[i-1];
            tribonacciArr.push(number);
        }
    }
    return tribonacciArr;
}

console.log(tribonacci([1,1,1],10));