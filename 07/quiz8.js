/* eslint-disable linebreak-style */
/* eslint-disable indent */
const $minBox = document.getElementById('min'); // 최소값 인풋 엘리먼트
const $maxBox = document.getElementById('max'); // 최대값 인풋 엘리먼트
const $createButton = document.getElementById('btn'); // 생성 버튼 엘리먼트
const $targetBox = document.getElementById('box'); // 숫자가 출력되는 div 엘리먼트

let randomNum = 0; // 랜덤 숫자가 담길 변수
let effectNum = 0; // 애니메이션에 쓰일 변수
let printAnimation = null; // 애니메이션 interval이 담길 변수

function printNum() { // 숫자를 표시하는 함수
    $targetBox.innerText = effectNum; // 출력할 곳에 effectNum 표시

    effectNum += 3; // 숫자가 증가되는 표현 숫자
    if ((effectNum + 3) > randomNum) { // effectNum이 randomNum에 가까운 숫자가 되면
        $targetBox.innerText = randomNum; // randomNum을 표시하고
        clearInterval(printAnimation); // 애니메이션 해제
        $createButton.disabled = false; // 버튼 활성화
    }
}

function setAnimation() { // 애니메이션 세팅 및 시작
    effectNum = randomNum - 30; // 효과를 위해 선정된 숫자에서 30을 지우고 애니메이션 시작함

    $createButton.disabled = true; // 버튼 비활성화
    printAnimation = window.setInterval(printNum, 40); // 출력 애니메이션 시작
}

function createRandomNum() { // 랜덤 숫자를 선정하고 출력하는 함수입니다.
    const minNum = Number($minBox.value); // 최소값 가져오기
    const maxNum = Number($maxBox.value); // 최대값 가져오기

    randomNum = Math.floor((Math.random() * (maxNum - minNum - 1)) + minNum + 1); // 랜덤 숫자 선정 후 할당
    setAnimation();
}

function checkNPrint() { // 적절한 숫자가 입력되었는지 확인하고 랜덤 숫자를 생성할지 말지 결정하는 함수입니다.
    const minNum = Number($minBox.value); // 최소값 가져오기
    const maxNum = Number($maxBox.value); // 최대값 가져오기

    if (!Number.isInteger(minNum)) { // 입력된 최소값이 정수가 아니면
        $targetBox.innerText = '최소값을 정수로 입력해주세요';
    } else if (!Number.isInteger(maxNum)) { // 입력된 최대값이 정수가 아니면
        $targetBox.innerText = '최대값을 정수로 입력해주세요';
    } else if ((maxNum - minNum) <= 1) { // 최대값과 최소값 사이에 정수가 없는 상황이면
        $targetBox.innerText = '최대값과 최소값 사이에 정수가 없습니다.';
    } else {
        createRandomNum(); // 랜덤 숫자를 선정하고 출력하는 함수를 호출
    }
}

$createButton.addEventListener('click', checkNPrint); // 생성 버튼에 클릭 리스너 장착
