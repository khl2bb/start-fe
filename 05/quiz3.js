/* eslint-disable linebreak-style */
/* eslint-disable indent */
const $body = document.body;
const $addRedButton = document.querySelector('.add-red');
const $addBoxButton = document.querySelector('.add-btn');
const $delBoxButton = document.querySelector('.delete-btn');
const $textSpace = document.querySelector('.txt');
const $addTextButton = document.querySelector('.text-btn');
const $resetBoxButton = document.querySelector('.reset-btn');
const $hideBoxButton = document.querySelector('.toggle-btn');
const $imageButton = document.querySelector('.image-btn');

let isHide = 0; // box 숨기기 상태 인가?

// function log(str) { // 콘솔 로그 줄여쓰기 용도
//     console.log(str);
// }

function addRed() { // 문제 1
    const $redBox = document.querySelectorAll('.box'); // class가 box 인 엘리멘트 노드 리스트
    let i;
    for (i = 0; i < $redBox.length; i += 1) { // 리스트 안에 있는 엘리멘트들에
        $redBox[i].className += ' red'; // class red 추가
    }
}

function addBox() { // 문제 2
    const $addBox = document.createElement('div'); // div 엘리멘트 하나 생성

    $addBox.className += 'box'; // 생성한 엘리먼트에 클래스 box 추가
    $body.appendChild($addBox); // appendChild 로 동적 추가
}

function delBox() { // 문제 3
    const $delBox = document.querySelectorAll('.box'); // class가 box 인 엘리멘트 노드 리스트

    if ($delBox.length) { // 삭제할 box 가 있으면
        $body.removeChild($delBox[$delBox.length - 1]); // 노드 리스트 중에서 제일 마지막 box 제거
    }
}

function addText() { // 문제 4
    const $addBox = document.querySelectorAll('.box'); // class가 box 인 엘리멘트 노드 리스트
    const textToAdd = $textSpace.value; // 추가할 text
    let i;
    for (i = 0; i < $addBox.length; i += 1) { // 리스트 안에 있는 엘리멘트들에
        $addBox[i].innerHTML += textToAdd; // box에 text 추가
    }
}

function resetBox() { // 문제 5
    const $delBox = document.querySelectorAll('.box'); // 모든 .box

    // for(i=0; i<$delBox.length; i++){ // 리스트 안에 있는 엘리멘트들에
    //     $body.removeChild($delBox[i]) // box 엘리멘트 제거
    // } 이미 존재하는 함수인 delBox()를 활용하려고 수정했습니다. 문제 8
    let i;
    for (i = 0; i < $delBox.length; i += 1) { // 리스트 안에 있는 엘리멘트들에
        delBox(); // box 엘리멘트 제거
    } // delBox() 활용
}

function hideToggle() { // 문제 6
    const $hideBox = document.querySelectorAll('.box'); // class가 box 인 엘리멘트 노드 리스트
    let i;
    if (!isHide) { // box가 보일 때
        for (i = 0; i < $hideBox.length; i += 1) { // 리스트 안에 있는 엘리멘트들에
            $hideBox[i].hidden = true; // box 숨김
        }
        isHide = 1; // box 숨김 상태
    } else { // box 가 숨김 상태 일 때
        for (i = 0; i < $hideBox.length; i += 1) { // 리스트 안에 있는 엘리멘트들에
            $hideBox[i].hidden = false; // box 숨김 해제
        }
        isHide = 0; // box 숨김 상태 아님
    }
}

function displayImage() { // 문제 7
    const $addBox = document.querySelectorAll('.box'); // 모든 .box
    let i;
    for (i = 0; i < $addBox.length; i += 1) { // 리스트 안에 있는 엘리멘트들에
        const $image = document.createElement('img'); // img 엘리멘트 생성

        $image.src = 'https://i.imgur.com/69NjYBH.png'; // img src 입력
        $image.width = $addBox[i].offsetWidth; // img width 설정 box 의 width로
        $image.height = $addBox[i].offsetHeight; // img height 설정 box 의 height로
        $addBox[i].appendChild($image); // appendChild로 image 추가
    }
}

$addRedButton.addEventListener('click', addRed);
$addBoxButton.addEventListener('click', addBox);
$delBoxButton.addEventListener('click', delBox);
$addTextButton.addEventListener('click', addText);
$resetBoxButton.addEventListener('click', resetBox);
$hideBoxButton.addEventListener('click', hideToggle);
$imageButton.addEventListener('click', displayImage);
