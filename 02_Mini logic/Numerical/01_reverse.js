let num = 12345;
let rev = 0;

while (num > 0 ){
    let lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10); 
}
console.log(rev);