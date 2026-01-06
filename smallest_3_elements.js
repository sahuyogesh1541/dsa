let arr=[1,23,4,6,2,3,-5,-3,7]
let s1 = Infinity,s2 = Infinity,s3 = Infinity;

for(let i = 0; i <arr.length; i++){
    let temp = arr[i];
    if(arr[i] < s1){ 
        s3 = s2 ;
        s2 = s1;
        s1 = temp;

    }
    else if(arr[i] < s2){
        s3 = s2;
        s2 = temp
    }
    else if( arr[i] < s3){
        s3 = temp
    }
}

console.log(s1,s2,s3)