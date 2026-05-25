function firstNonRepeatingChar(str){
  let obj = new Map()
  
  for(let i of str){
    if(obj.has(i)){
      obj.set(i,obj.get(i) +1)
    }
    else{
      obj.set(i,1)
    }
  } 
   
   for(let i of obj.keys()){  
     if(obj.get(i) == 1){
       return i
     }
   }
  // return false
}


console.log(firstNonRepeatingChar("sesaheaa"))

console.log(firstNonRepeatingChar("nithin"))
