let arr = [ 1,3,4,5,7]

let low = 0,high = arr.length -1;

for(let i = 0; i < arr.length ; i++){
    if(low < high){
        let temp =  arr[i];
        arr[i] = arr[high];
        arr[high] = temp; 
        low++ 
        high --
    }
}
console.log(arr)