let h = [1,8,6,2,5,4,8,3,7]
  
let area =0,left = 0,right=h.length -1;
while(left < right){
    let temp = (right-left) * Math.min(h[left],h[right])
    if(temp > area){
        area = temp
    }
    if(h[left]< h[right]){
        left++
    }
    else{
        right--
    }  
    
} 

console.log(area)