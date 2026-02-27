function countFrequency(arr){
    let result = {}; 

    for(let num of arr){
        result[num] = (result[num] || 0) + 1;
    }
     return result;
}
console.log(countFrequency([1, 2, 2, 3, 3, 3, 4]));
     