function removeDumpicates(arr){
    return [...new Set(arr)];
} 
console.log(removeDumpicates([1,1, 2, 3, 2, 2]));
