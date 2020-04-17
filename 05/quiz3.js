let $body = document.body;
let $addRedButton = document.querySelector('.add-red');
let $addBoxButton = document.querySelector('.add-btn');
let $delBoxButton = document.querySelector('.delete-btn')
let $textSpace = document.querySelector('.txt');
let $addTextButton = document.querySelector('.text-btn');
let $resetBoxButton = document.querySelector('.reset-btn');
let $hideBoxButton = document.querySelector('.toggle-btn');
let $imageButton = document.querySelector('.image-btn');

let isHide = 0; // box 숨기기 상태 인가?

function log(str) { // 콘솔 로그 줄여쓰기 용도
    console.log(str);
}

function addRed() { // 문제 1
    let $redBox = document.querySelectorAll('.box'); // class가 box 인 엘리멘트 노드 리스트

    for(i=0; i<$redBox.length; i++){ // 리스트 안에 있는 엘리멘트들에 
        $redBox[i].className += ' red'; // class red 추가
    }
}

function addBox() { // 문제 2
    let $addBox = document.createElement("div"); // div 엘리멘트 하나 생성

    $addBox.className += 'box'; // 생성한 엘리먼트에 클래스 box 추가
    $body.appendChild($addBox); // appendChild 로 동적 추가
}

function delBox() { // 문제 3
    let $delBox = document.querySelectorAll('.box'); // class가 box 인 엘리멘트 노드 리스트 
    
    if($delBox.length){ // 삭제할 box 가 있으면
        $body.removeChild($delBox[$delBox.length-1]) // 노드 리스트 중에서 제일 마지막 box 제거
    }
}

function addText() { // 문제 4
    let $addBox = document.querySelectorAll('.box'); // class가 box 인 엘리멘트 노드 리스트 
    let textToAdd = $textSpace.value; // 추가할 text

    for(i=0; i<$addBox.length; i++){ // 리스트 안에 있는 엘리멘트들에 
        $addBox[i].innerHTML += textToAdd; // box에 text 추가
    }
}

function resetBox() { // 문제 5
    let $delBox = document.querySelectorAll('.box'); // 모든 .box

    // for(i=0; i<$delBox.length; i++){ // 리스트 안에 있는 엘리멘트들에 
    //     $body.removeChild($delBox[i]) // box 엘리멘트 제거
    // } 이미 존재하는 함수인 delBox()를 활용하려고 수정했습니다. 문제 8

    for(i=0; i<$delBox.length; i++) { // 리스트 안에 있는 엘리멘트들에 
        delBox(); // box 엘리멘트 제거
    } // delBox() 활용
}

function hideToggle() { // 문제 6
    let $hideBox = document.querySelectorAll('.box'); // class가 box 인 엘리멘트 노드 리스트
    
    if(!isHide){ // box가 보일 때
        for(i=0; i<$hideBox.length; i++){ // 리스트 안에 있는 엘리멘트들에 
            $hideBox[i].hidden = true; // box 숨김
        }
        isHide = 1; // box 숨김 상태
    }
    
    else{ // box 가 숨김 상태 일 때
        for(i=0; i<$hideBox.length; i++){ // 리스트 안에 있는 엘리멘트들에 
            $hideBox[i].hidden = false; // box 숨김 해제
        }
        isHide = 0; // box 숨김 상태 아님
    }
}

function displayImage() { // 문제 7
    let $addBox = document.querySelectorAll('.box'); // 모든 .box

    for(i=0; i<$addBox.length; i++){ // 리스트 안에 있는 엘리멘트들에 
        let $image = document.createElement("img"); // img 엘리멘트 생성

        $image.src = "https://i.imgur.com/69NjYBH.png"; // img src 입력
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