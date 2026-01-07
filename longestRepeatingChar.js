let str  = "abcabcbb" ;
let left = 0,max = 0 ;
let s = new Set();
for(let i = 0 ; i< str.length; i++){
    while(s.has(str[i])){
        s.delete(str[left])
        left++
    }
    s.add(str[i]) 
    max = Math.max(max, i-left +1) 
}
console.log(max)    