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

let pos = 1;

for (let i = 0; i < arr[0]; +i++) {
    let x = getX(arr, pos);
    let y = getY(arr, pos + 1);
    let e = getEscala(arr, pos + 2);
    let centro = getCentro(arr, pos + 3);
    let w = getSalida(centro);
    if (arr[0] > 1)
        pos = otraNave(arr, pos + 3);

    console.log("Salida", w);
    //   console.log("todo", x, y, e, centro);
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

function getCentro(arreglo, pos) {
    let cen = [];
    for (let i = pos; i < arreglo.length; i++) {
        if (Number(arreglo[i]))
            break;
        if ((arreglo[i].charCodeAt(0) >= 65 && arreglo[i].charCodeAt(0) <= 90) || (arreglo[i].charCodeAt(0) >= 97 && arreglo[i].charCodeAt(0) <= 122)) {
            cen.push(arreglo[i].trim());
        }
    }
    return cen;
}

function getSalida(salida) {
    Array.prototype.unique = function (a) {
        return function () {
            return this.filter(a)
        }
    }(function (a, b, c) {
        return c.indexOf(a, b + 1) < 0
    });

    return salida.unique();
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
