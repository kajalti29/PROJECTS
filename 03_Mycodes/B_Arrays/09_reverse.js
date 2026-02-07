// 7️⃣ Reverse an array (without reverse())
let arr = [1, 2, 3, 4];
let rev = [];

for(let i = arr.length-1; i>=0; i--){
    rev.push(arr[i]);
}
console.log(rev);


// let arr = [1, 2, 3, 4]; 
// It is a origin Array.

// let rev=[];
// 👉 Isme hum reverse order ke elements store karenge.

// for(let i = arr.length - 1; i >= 0; i--)

// arr.length = 4
// Last index = 4 - 1 = 3
// Loop last element se first element tak chalega.

// rev.push(arr[i]);
// arr[i] → current element
// push() → rev array ke end me add karta hai.


