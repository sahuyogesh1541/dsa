let arr = [1, 2, 3, 4, 6],target = 6

let pair = []


for(let i= 0; i< arr.length; i++){
    for(let j = i+1;j< arr.length; j++){
        if(target - arr[j] == arr[i]){
            pair = [arr[i],arr[j]]
        }
    }
}
console.log(pair)

