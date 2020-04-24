const $body = document.body;
const $boxAll = document.querySelectorAll(".box");

let isDrag = 0; // 드래그 상태 인가?

function log(str) { // 콘솔 로그 줄여쓰기 용도
    console.log(str);
}

function drag() { // 드래그 시작
    isDrag = 1; // 드래그 상태임
}

function stopDrag() { // 드래그 정지
    isDrag = 0; // 드래그 상태 아님
}

function mousePos(event) { // 마우스가 움직일 때 
    if(isDrag){ // 드래그 일 때
        let mouseXmove = event.movementX; // mouse X 움직임
        let mouseYmove = event.movementY; // mouse Y 움직임
        let boxPosX = event.target.offsetLeft; // box 위치 left
        let boxPosY = event.target.offsetTop; // box 위치 top

        event.target.style.left = (boxPosX + mouseXmove).toString() + "px"; // 원래 위치 + 변화값 할당
        event.target.style.top = (boxPosY + mouseYmove).toString() + "px"; // 원래 위치 + 변화값 할당
    }
}

for(i=0; i<$boxAll.length; i++){
    $boxAll[i].addEventListener('mousedown', drag);
    $boxAll[i].addEventListener('mouseup', stopDrag);
    $boxAll[i].addEventListener('mouseleave', stopDrag); // 마우스 나갈 때 추가
    $boxAll[i].addEventListener('mousemove', mousePos);
}