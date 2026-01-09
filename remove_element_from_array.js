let arr = [1,2,4,6,8,2,3,4,5]  
let k =4
let left = 0 ,right = arr.length -1
for(let i = 0 ; i<arr.length;i++){
    if(arr[right] == k){
        arr.pop()
        --right 
    }
    if(arr[i] == k){
        let temp = arr[i]
        arr[i] = arr[right]
        arr[right] = temp
        arr.pop()
        right--
    }
    // console.log(right)
}
console.log(arr)

 
