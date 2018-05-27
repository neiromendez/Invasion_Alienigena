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

console.log(array);

for (let i = 0; i < arr[0];) {
    let x = getX(arr, i + 1);
    let y = getY(arr, i + 2);
    let e = getEscala(arr, i + 3);

    if (arr[0] > 1)
        i = otraNave(arr, i + 4);
    else
        i++;

    console.log(x, y, e);
}

function getX(arreglo, pos) {
    let value = 0;
    for (let i = pos; i < arreglo.length; i++)
        if (Number(arreglo[i]) && value === 0)
            value = Number(arreglo[i]);

    return value;
}

function getY(arreglo, pos) {
    let value = 0;

    for (let i = pos; i < arreglo.length; i++)
        if (Number(arreglo[i]) && value === 0)
            value = Number(arreglo[i]);

    return value;
}

function getEscala(arreglo, pos) {
    let value = 0;

    for (let i = pos; i < arreglo.length; i++)
        if (Number(arreglo[i]) && value === 0)
            value = Number(arreglo[i]);

    return value;
}

function otraNave(arreglo, pos) {
    let value = 0;

    for (let i = pos; i < arreglo.length; i++)
        if (Number(arreglo[i]) && value === 0)
            value = i;

    return value;
}
