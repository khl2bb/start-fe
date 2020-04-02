// // 익명 함수표현식
// var car = function() {
//   //코드
// };

// //중첩함수

// // 익명 즉시실행함수, 스코프 보호
// (function() {
//   //코드
// })();


// 즉시 시행 함수


function log(str) {
    console.log(str);
}

var count = [10, 20, 30, 40, 50, 60, 70, 100];
//  배열 count 요소들의 평균값 구하는 코드를 작성하세요 *

let sum = 0;
let average = 0;

for (let i = 0; i < count.length; i++) {
    sum = sum + count[i];

}

average = sum / count.length;

// log(average);



// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(String(i) + " * " + String(j) + " = " + String(i * j))
//     }
// }

function call9X9() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            console.log(String(i) + " * " + String(j) + " = " + String(i * j))
        }
    }
}

// call9X9();

let jinoo = {
    hobby: "Playing Computer Game",
    cry: function() {
        console.log('I wanna rest.. Leave me alone');
    },
    sayHobby: function() {
        console.log("My hobby is playing computer game. \nThere are infinite computer games in the world. \nThe only thing that i need is time to play.")
    }
};

// jinoo.cry();
// jinoo.sayHobby();

let zero = 0;
let adding = true;

while (adding) {
    let numberToAdd = Number(prompt("더할 숫자를 입력해보세요."));
    // log(numberToAdd);
    // log(typeof numberToAdd);
    // console.log(Number.isNaN(numberToAdd))
    if (Number.isNaN(numberToAdd) || numberToAdd === 0) {
        adding = false;
        alert("당신이 더한 숫자의 합은 " + String(zero) + "입니다.");
        // console.log(adding);
    } else {
        zero += numberToAdd;
        log(zero);
    }
    // adding = false;
    // log(Number(numberToAdd));
    // log(typeof Number(numberToAdd));
    // if (!NaN) {
    //     console.log("NaN is false")
    // }
    // adding = false;
    // let numberToAdd = prompt("더할 숫자를 입력해보세요.");
    // log(numberToAdd);
    // // if (typeof numberToAdd !== "number" || numberToAdd === NaN) {
    // //     adding = false;
    // // } else {
    // //     adding = true;
    // //     zero += numberToAdd;
    // //     log(zero);
    // // }
    // console.log('dd')
}