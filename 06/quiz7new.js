/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */

// 과제 조건 자체를 잘못 이해해서요 eslint에 맞게 작성하면서 코드를 다시 작성합니다.
/* 5월 8일 수정한 것
1. 잘못 클릭 시 생명 -1
2. alert 전에 생명 0으로 만들기
3. 게임 종료 시 리스너 제거
4. 게임 종료 시 벌레 숨김
*/

const $bugSpace = document.querySelector('.box'); // bug 출현 공간
const $pointBoard = document.getElementById('point'); // 점수 표시 공간
const $lifeBoard = document.getElementById('life'); // 생명 표시 공간

// const bugSpaceStartPosX = $bugSpace.offsetLeft; // bug 출현 공간 기준 위치 left
// const bugSpaceStartPosY = $bugSpace.offsetTop; // bug 출현 공간 위치 top
const bugSpaceWidth = $bugSpace.offsetWidth; // bug 출현 공간 가로
const bugSpaceHeight = $bugSpace.offsetHeight; // bug 출현 공간 세로
const bugWidth = 20; // bug 가로
const bugHeight = 20; // bug 세로

let isBugCaught = false; // bug가 잡혔는가? 초기화
let lifeDecreasing = false; // 생명이 감소하고 있는 상태인가? 초기화
let isBugExist = true; // bug가 존재하는가? 초기화

let lifeDecreaseTimer;

const checkingInterval = window.setInterval(checkState, 100); // 0.1초 간격으로 상태 확인
let makeBugInterval = window.setInterval(bugDisappear, 2000); // 2초 간격으로 bug 재생성

function increaseScore() { // 점수 증가 함수
    const presentScore = Number($pointBoard.innerText); // 점수 불러오기
    $pointBoard.innerText = presentScore + 1; // 점수 + 1
}

function getRandomIntInclusive(min, max) { // 출처 MDN Math.random() 최대값 최솟값을 포함한 랜덤 정수 생성
    let minNum = min;
    let maxNum = max;

    minNum = Math.ceil(min); // 최소값 중 최대 정수
    maxNum = Math.floor(max); // 최대값 중 최소 정수
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // 최댓값도 포함, 최솟값도 포함
}

function makeBug() { // 버그 생성 함수
    const $bugToAdd = document.createElement('div'); // div 엘리먼트 생성

    $bugToAdd.id = 'bug'; // div id = bug 설정
    $bugToAdd.style.left = `${getRandomIntInclusive(0, bugSpaceWidth - bugWidth)}px`; // div left 위치를 0부터 bug 출현 공간 가로 크기 - bug 가로 길이 중 랜덤
    $bugToAdd.style.top = `${getRandomIntInclusive(0, bugSpaceHeight - bugHeight)}px`; // div top 위치를 0부터 bug 출현 공간 세로 크기 - bug 세로 길이 중 랜덤
    $bugSpace.appendChild($bugToAdd); // bug div 엘리멘트 출력

    const $bug = document.getElementById('bug'); // bug 찾기
    $bug.addEventListener('click', bugCaught); // 클릭 리스너 장착
    isBugCaught = false; // bug 잡힌 상태 아님
}


function checkState() { // 상태 확인 함수
    if (!isBugCaught && !lifeDecreasing) { // bug가 살아 있는 상태고 생명 감소 상태가 아니면
        setLifeDecreaseTimer(); // 생명 감소 타이머 작동
    } else if (isBugCaught) { // bug가 잡힌 상태이면
        clearInterval(lifeDecreaseTimer); // 생명 감소 타이머 해제
        lifeDecreasing = false; // 생명 감소 상태 아님
        if (!isBugExist) { // bug가 없는 상태면
            setTimeout(makeBug, 1000); // 1초 뒤 makeBug (버그 생성)
            isBugExist = true; // bug가 있을 예정이다.
        }
    }
}

function bugDisappear() {
    const $bug = document.getElementById('bug'); // bug div 불러오기

    $bugSpace.removeChild($bug); // bug div 삭제
    makeBug();
    clearInterval(makeBugInterval); // 버그 재생성 간격 초기화
    makeBugInterval = window.setInterval(bugDisappear, 2000); // 버그 재생성 간격 2초
}

function bugCaught(event) { // bug 잡힘 함수
    const $bug = document.getElementById('bug'); // bug div 불러오기

    $bugSpace.removeChild($bug); // bug div 삭제
    isBugExist = false; // bug가 없는 상태임
    increaseScore(); // 점수 1 증가
    isBugCaught = true; // bug가 잡힌 상태임
    clearInterval(makeBugInterval); // 버그 재생성 간격 초기화
    makeBugInterval = window.setInterval(bugDisappear, 3000); // 버그 재생성 간격 3초
    event.stopPropagation(); // 버그 잡혔을 때 점수 감소 중지
}

function setLifeDecreaseTimer() { // 생명 감소 타이머 생성
    if (!isBugCaught) { // bug가 잡히지 않았다면(bug가 살아있으면)
        lifeDecreaseTimer = window.setInterval(decreaseLife, 2000); // 1초마다 생명 감소시키기
        lifeDecreasing = true; // 생명 감소 상태 true
    }
}

function decreaseLife() { // 생명 감소 함수
    const presentLife = Number($lifeBoard.innerText); // 생명 숫자 불러오기
    $lifeBoard.innerText = presentLife - 1; // 생명 1 감소

    if (Number($lifeBoard.innerText) === 0) { // 생명이 0이면
        setTimeout(() => { // 메세지 출력 전에 생명력 바꾸기 수정(5월 8일)
            // eslint-disable-next-line no-alert
            alert('Game over'); // 게임 오버 메세지
        });
        clearInterval(checkingInterval); // state checking interval 해제(상태 채크 반복 해제)
        clearInterval(lifeDecreaseTimer); // 생명 감소 타이머 해제
        clearInterval(makeBugInterval); // 버그 생성 멈춤
        isBugCaught = true; // bug 잡힘
        // bugCaught(); // 게임 종료 시 버그 잡힘
        // $pointBoard.innerText -= 1; // 게임 종료 시 버그 잡힌 후 점수 -1
        document.getElementById('bug').style.display = 'none'; // 게임 종료 시 벌레 숨김 (5월 8일 추가)
        $bug.removeEventListener('click', bugCaught); // 게임 종료 시 리스너 제거 (5월 8일 추가)
        $bugSpace.removeEventListener('click', decreaseLife); // 게임 종료 시 리스너 제거 (5월 8일 추가)
    }
}

const $bug = document.getElementById('bug'); // 처음 bug div 찾기

$bugSpace.addEventListener('click', decreaseLife); // 잘못 클릭 시 생명 감소 (5월 8일 수정)
$bug.addEventListener('click', bugCaught); // 처음 bug 클릭 리스너
