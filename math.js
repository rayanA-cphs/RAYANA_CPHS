/* Math Random Numbers */

function myRange10() {
    let myNum10 = parseInt(Math.random()*10) + 1;
    console.log (myNum10);
    return myNum10;
}

let n10 = myRange10();
console.log(n10);

function myRange100() {
    let myNum100 = parseInt(Math.random()*100) + 1;
    console.log (myNum100);
    return myNum100;
}

let n100 = myRange100();
console.log(n100)
