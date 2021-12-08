var maxSequence = function(arr){
    if(arr.length == 0) {
        return 0;
    }
    let ans = arr[0];
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        ans = Math.max(ans, sum);
        sum = Math.max(sum, 0);
    }

    if(ans < 0) {
        return 0;
    } else {
        return ans;
    }
}

console.log(maxSequence([]));