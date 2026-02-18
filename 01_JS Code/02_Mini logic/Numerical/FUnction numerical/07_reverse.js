function reveerseNumber(num){
    let rev = 0;

    while(num > 0){
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return rev;
}

let ans = reveerseNumber(1234)
console.log(ans);
