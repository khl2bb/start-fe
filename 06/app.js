// 백틱 기호를 써봅시다.
const one = 1;
const head = "짱";
const backtick = '백틱'
const $body = document.body;
const $cDiv = document.createElement("div"); 

function log(str) { // 콘솔 로그 줄여쓰기 용도
    console.log(str);
}

function multiply(a, b = 1) {
    return a * b;
}

[1, 2, 3].map(item => item * 2);

btn.addEventListener(event => {
  console.log('click');
});

// 포맷터쓰면 따옴표 바꾸고 세미콜론 자동 꿀 괄호 자동
// 줄정리까지 ㄷㄷ

function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));
  //배열복사
// 참조 포인터
// a = []
// b = a 하면 b 바꾸면 a도 바뀌어버린다
// 이걸 피하려면 b = [...a]

const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]

const obj = {
    a: 1,
    b: 2,
  };
  const newObj = { ...obj };
  console.log(newOjb);

$body.appendChild($cDiv);

log(`hello, ${one}`);
log(`백틱 backtick is ${head}`);

function func(...param) {
    console.log(param);
  }
  
  func(1, 2, 3);
  
  // es5
  function func() {
    console.log(arguments);
  }
  
  func(1, 2, 3);


  const { team, area } = obj;
const [col1, col2] = cols;
const [, cols2] = cols;

const number = 1234;

const student = {
  // number: number
  number,
};

// 프로미스 배우면 타임아웃이 쉬워지려나
// 콜백 안에 콜백 안에 콜백 콜백 지옥
// 