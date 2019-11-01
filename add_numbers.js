/**
 * 
 */

"use strict";

function add() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
    var z = x + y;

    document.getElementById('result').innerHTML = z;
    return false;
}

document.getElementById('go').addEventListener('click', add);
