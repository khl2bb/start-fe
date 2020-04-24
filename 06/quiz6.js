const $inputSpace = document.getElementById("num"); // 값 입력 공간
const $printBtn = document.getElementById("btn"); // 출력 버튼
const $resultSpace = document.getElementById("result"); // 결과 공간

function printNineTimesTable() { // 구구단 출력 함수
    let numToPrint = Number($inputSpace.value); // 입력 받은 값을 숫자로 저장
    
    if (numToPrint <= 0 || !Number.isInteger(numToPrint)) { // 입력 받은 값이 양의 정수가 아니면
        alert("양의 정수를 입력해주세요.") // alert
    }
    else { // 입력 받은 값이 양의 정수이면
        divString = ''; // 구구단이 될 엘리먼트 문자열
        for(i=1; i<10; i++) { // i가 1부터 9까지
            divString += `<div>${numToPrint} * ${i} = ${numToPrint*i}</div>`; // 구구단 문자열 추가
        }
        $resultSpace.innerHTML = divString; // 결과 공간을 divString 으로
    }
}

$printBtn.addEventListener('click', printNineTimesTable); // 출력 버튼 클릭 리스너