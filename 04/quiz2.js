/* eslint-disable linebreak-style */
/* eslint-disable indent */
const board = document.getElementById('board');

function drawBoard() {
    let str = '';
    str += '<div class="wrapper">';
    for (let i = 0; i < 2; i += 1) {
        str += `<div class="floor"><div id="${i * 7 + i + 1}" class="black"> </div> <div id="${i * 7 + i + 2}" class="white"> </div> <div id="${i * 7 + i + 3}" class="black"> </div> <div id="${i * 7 + i + 4}" class="white"> </div> </div>`;
        str += `<div class="floor"><div id="${i * 7 + i + 5}" class="white"> </div> <div id="${i * 7 + i + 6}" class="black"> </div> <div id="${i * 7 + i + 7}" class="white"> </div> <div id="${i * 7 + i + 8}" class="black"> </div> </div>`;
    }
    str += '</div>';
    board.innerHTML = str;
}

// function log(str) {
//     console.log(str);
// }

drawBoard();

board.addEventListener('click', (event) => {
    // log(event)
    const tempId = event.target.id;
    if (tempId) {
        drawBoard();
        const targetBox = document.getElementById(tempId);
        targetBox.style = 'background-color:red';
    }
});

// // 마우스 클릭이 제대로 안 이루어질때
// board.addEventListener("mouseup", function(event) {
//     if(tempId = event.target.id){
//         drawBoard();
//         let targetBox = document.getElementById(tempId);
//         targetBox.style="background-color:red";
//     }
// });
