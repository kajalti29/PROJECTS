function removeDuplicats(arr){
    let unique = [];

    for(let num of arr){
        if(!unique.includes(num)){
            !unique.push(num)
        }
    }
    return unique;
}
console.log(removeDuplicats([1, 2, 2, 3, 4, 4]));
