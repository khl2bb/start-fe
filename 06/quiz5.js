/* eslint-disable linebreak-style */
/* eslint-disable indent */
const $boxAll = document.querySelectorAll('.box');

let isDrag = 0; // 드래그 상태 인가?
const topZIndex = 99;
const bottomZIndex = 0;

// function log(str) { // 콘솔 로그 줄여쓰기 용도
//     console.log(str);
// }

function drag() { // 드래그 시작
    isDrag = 1; // 드래그 상태임
}

function stopDrag(event) { // 드래그 정지
    isDrag = 0; // 드래그 상태 아님
    const { target } = event;

    target.style.zIndex = bottomZIndex; // z-index 원상복귀
}

function mousePos(event) { // 마우스가 움직일 때
    if (isDrag) { // 드래그 일 때
        const mouseXmove = event.movementX; // mouse X 움직임
        const mouseYmove = event.movementY; // mouse Y 움직임
        const boxPosX = event.target.offsetLeft; // box 위치 left
        const boxPosY = event.target.offsetTop; // box 위치 top

        const { target } = event;

        target.style.zIndex = topZIndex; // 타겟 div를 제일 위에 그리기
        target.style.left = `${(boxPosX + mouseXmove).toString()}px`; // 원래 위치 + 변화값 할당
        target.style.top = `${(boxPosY + mouseYmove).toString()}px`; // 원래 위치 + 변화값 할당
    }
}

let i;
for (i = 0; i < $boxAll.length; i += 1) {
    $boxAll[i].addEventListener('mousedown', drag);
    $boxAll[i].addEventListener('mouseup', stopDrag);
    $boxAll[i].addEventListener('mouseleave', stopDrag); // 마우스 나가졌을때  추가
    $boxAll[i].addEventListener('mousemove', mousePos);
}
