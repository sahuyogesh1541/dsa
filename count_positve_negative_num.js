let arr =[ 1,3,5,-3,-4 ,-6,-6,-3];

let positive = 0, negative = 0;

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] < 0){
        negative++
    }
    else {
        positive++
    }
}
console.log(positive,negative)