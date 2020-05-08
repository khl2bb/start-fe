/* eslint-disable linebreak-style */
/* eslint-disable indent */
const $body = document.body;
const $box = document.getElementById('box');

let isDrag = 0; // 드래그 상태 인가?

// function log(str) { // 콘솔 로그 줄여쓰기 용도
//     console.log(str);
// }

function drag() { // 드래그 시작
    isDrag = 1; // 드래그 상태임
}

function stopDrag() { // 드래그 정지
    isDrag = 0; // 드래그 상태 아님
}

function mousePos(event) { // 마우스가 움직일 때
    if (isDrag) { // 드래그 일 때
        const mouseXmove = event.movementX; // mouse X 움직임
        const mouseYmove = event.movementY; // mouse Y 움직임
        const boxPosX = $box.offsetLeft; // box 위치 left
        const boxPosY = $box.offsetTop; // box 위치 top

        $box.style.left = `${(boxPosX + mouseXmove).toString()}px`; // 원래 위치 + 변화값 할당
        $box.style.top = `${(boxPosY + mouseYmove).toString()}px`; // 원래 위치 + 변화값 할당
    }
    // if(isDrag){ // 드래그 되면
    //     $box.style.left = (mouseX - (boxWidth/2)).toString()+ "px"; // 마우스 커서 위치에 박스 중앙 할당
    //     $box.style.top = (mouseY - (boxHeight/2)).toString() + "px"; // 마우스 커서 위치에 박스 중앙 할당
    // } 박스 중앙을 마우스 커서로 옮기는 코드입니다.
    // 주어진 예시와 조금 다르기 때문에 사용하지 않습니다.
}

$box.addEventListener('mousedown', drag);
$box.addEventListener('mouseup', stopDrag);
$body.addEventListener('mousemove', mousePos);
