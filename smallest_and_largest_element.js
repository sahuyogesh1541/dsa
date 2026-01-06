let arr= [22,3,56,7,3,23,24,5,6]
let small = Infinity, large = -Infinity
for(let i in arr){
    if(arr[i] < small){
        small = arr[i]
    }
    if(arr[i] > large){
        large = arr[i]
    }
}

console.log(small,large)