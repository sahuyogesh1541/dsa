var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let unique = new Set();
    let index = 0;
     
    for (let i = 0; i < nums.length; i++) {
        if (!unique.has(nums[i])) {
            unique.add(nums[i]);
            nums[index] = nums[i];   
            index++;
        }
    }
     
    for (let i = index; i < nums.length; i++) {
        nums[i] = '_';   
    }
    
    return index;   
};


console.log(removeDuplicates[1,1,2])
