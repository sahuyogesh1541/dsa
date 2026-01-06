let arr = [0,1,0,3,12] 

// one way using fil function
// let temp  = []
// for(let i in arr){
//     if(arr[i] != 0){
//         temp.push(arr[i])
//     }
// }
// temp.length = arr.length
// temp.fill(0,3)
// console.log(temp)

// through two pointer
let slow = 0 ,fast = 1
for(let i = 0 ; i< arr.length -1; i++){
    if(arr[slow] == 0  && arr[fast] != 0){
        let temp = arr[slow]
        arr[slow]  = arr[fast]
        arr[fast] = temp
        slow++;
        fast++ 
    } else if(arr[slow] == 0){
        fast ++
    } 
} 
console.log(arr)
