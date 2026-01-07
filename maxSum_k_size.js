let arr = [2,1,5,1,3,2],k = 3;

let sum = 0,maxSum = 0;

for(let i = 0 ; i< k ; i++){
    sum += arr[i];
}
maxSum = sum

for(let i = k ; i< arr.length ; i++){ 
    sum = sum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum,sum);
}

console.log(maxSum)
