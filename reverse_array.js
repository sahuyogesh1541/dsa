// Two Pointer
let arr = [ 1,3,4,5,7] 

let low = 0,high = arr.length -1;
 
while(low < high){
    let temp =  arr[low];
    arr[low] = arr[high];
    arr[high] = temp; 
    low++ 
    high --
} 
console.log(arr)