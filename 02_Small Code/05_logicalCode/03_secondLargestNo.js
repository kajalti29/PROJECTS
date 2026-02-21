// Find Second Largest Number (Very Important)

function secondLargest(arr){
    let largest = -Infinity;
    let second = -Infinity;

    for(let num of arr){
        if(num > largest){
            second = largest;
            largest = num;
        }else if (num > second && num !== largest){
            second = num;
        }
    }
    return second;
}
console.log(secondLargest([2, 4, 5, 2, 5, 6, 8]));
 