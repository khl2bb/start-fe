// import avgModule from "./avg.js";

const $body = document.body;
let count = 0;

function log(string) {
    console.log(string)
}

function makeBox(string1, string2){
    let showBox = document.createElement('div');
    showBox.id = showBox
    showBox.innerText = `${string1} = ${string2}`
    $body.appendChild(showBox);
    // log(string1);
}


// log(`moduleA.is loaded?`);
makeBox(`avg(1,2)`, avg(1,2));
makeBox(`avg(1,2)`, avg(1,2));
makeBox(`avg(2,1,2)`, avg(2,1,2));
// $showBox.innerText = `avg(1, 2) = ${avg(1, 2)}`;
// document.body.innerHTML = '바디'
// $showBox.innerText = '';
// log(`moduleA.is loaded?`);