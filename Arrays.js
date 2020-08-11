function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function myfunc(a,b){return a-b;});
    
    
     var numsr=   nums.filter((value,index)=>nums.indexOf(value)===index);
    
    return numsr[numsr.length-2];
}