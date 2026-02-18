let arr = [1, 2, 2, 3, 1];
let unique = [];

for(let i = 0; i < arr.length; i++){
  if(!unique.includes(arr[i])){
    unique.push(arr[i]);
  }
}
console.log(unique);


// Logic:
// includes() check karta hai
// Naya ho tabhi add