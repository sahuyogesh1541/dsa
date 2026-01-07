let arr = [1, 2, 3, 4, 6],target = 6

let pair = []

// using nested loop
// for(let i= 0; i< arr.length; i++){
//     for(let j = i+1;j< arr.length; j++){
//         if(target - arr[j] == arr[i]){
//             pair = [arr[i],arr[j]]
//         }
//     }
// }
// console.log(pair)

let next = arr.length-1
for(let i = 0; i< arr.length; i++){
     if(arr[i] + arr[next] == target){
        pair = [arr[i], arr[next]]
        break;
     }
     next--;
}
console.log(pair)