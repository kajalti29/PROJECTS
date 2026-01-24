// 👉 Har next number = pichhle do numbers ka sum

let a = 0, b = 1;

for(let i = 0; i < 7; i++){
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}