/*
* * * * *
* * * *
* * *
* *
*
* *
* * *
* * * *
* * * * *
*/

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i + 1; j++) {
        str = str + "* ";
    }
    console.log(str);
}
for (let i = 2; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
        str = str + "* ";
    }
    console.log(str);
}
