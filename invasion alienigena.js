let fs = require('fs');
let array = fs.readFileSync('entrada.txt').toString().split("\n");
let arr = [];
let time = new Date();

console.log(time);

for (let i = 0; i < array.length; i++) {
    value = array[i].split(" ");
    for (let j of value)
        arr.push(j);
}

//console.log(array);
//console.log(arr[0], arr);
let pos = 1;
for (let i = 0; i < arr[0]; +i++) {
    let x = getX(arr, pos);
    let y = getY(arr, pos + 1);
    let e = getEscala(arr, pos + 2);

    if (arr[0] > 1 )
        pos = otraNave(arr, pos + 3);

    console.log("todo", x, y, e);
}

function getX(arreglo, pos) {
    let value = 0;
    for (let i = pos; i < arreglo.length; i++)
        if (Number(arreglo[i]) && value === 0) {
            value = Number(arreglo[i]);
            break;
        }
    return value;
}

function getY(arreglo, pos) {
    let value = 0;

    for (let i = pos; i < arreglo.length; i++)
        if (Number(arreglo[i]) && value === 0) {
            value = Number(arreglo[i]);
            break;
        }
    return value;
}

function getEscala(arreglo, pos) {
    let value = 0;

    for (let i = pos; i < arreglo.length; i++)
        if (Number(arreglo[i]) && value === 0) {
            value = Number(arreglo[i]);
            break;
        }
    return value;
}

function otraNave(arreglo, pos) {
    let value = 0;

    for (let i = pos; i < arreglo.length; i++)
        if (Number(arreglo[i]) && value === 0) {
            value = i;
            break;
        }
    return value;
}
