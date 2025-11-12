/*
4 4 4 4 4 4 4 
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4

*/

let n = 4;
let size = 2 * n - 1;
for (let i = 1; i <= size; i++)
{
    let str = "";
    for (let j = 1; j <= size; j++)
    {
        let top = i - 1;
        let left = j - 1;
        let bottom = size - i;
        let right = size - j;
        let val = Math.min(top, left ,bottom ,right);
        str = str + (n - val) + " ";
    }
    console.log(str);
}
