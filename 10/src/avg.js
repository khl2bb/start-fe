/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */


// arguments를 사용하여 avg를 구현한 것 (eslint airbnb 규칙이 arguments를 안 쓰는 것을 권장하더군요)
// function avg() {
//     let total = 0;
//     let avg = 0;
//     let countNum = 0;

//     for (let i = 0; i < arguments.length; i += 1) {
//       if (Number.isInteger(arguments[i])) {
//         total += arguments[i];
//         countNum += 1;
//       } else if (Array.isArray(arguments[i])) {
//         for (let j = 0; j < arguments[0].length; j += 1) {
//           if (Number.isInteger(arguments[0][j])) {
//             total += arguments[0][j];
//             countNum += 1;
//           }
//         }
//         break;
//       }
//     }
//     avg = total / countNum;
//     return avg;
// }

// 평균 구하는 모듈
function avg(...theArgs) {
  let total = 0; // 총 합
  let result = 0; // 결과값(평균)
  let countNum = 0; // 숫자 개수

  for (let i = 0; i < theArgs.length; i += 1) { // 인수 개수 만큼 반복
    if (Number.isInteger(theArgs[i])) { // 정수면
      total += theArgs[i]; // 합하고
      countNum += 1; // 개수 + 1
    } else if (Array.isArray(theArgs[i])) { // 배열이면
      for (let j = 0; j < theArgs[0].length; j += 1) { // 배열안의 개수 만큼
        if (Number.isInteger(theArgs[0][j])) { // 정수면
          total += theArgs[0][j]; // 합하고
          countNum += 1; // 개수 + 1
        }
      }
      break; // 배열인 경우는 상위 반복문 포함해서 반복문 종료
    }
  }
  result = total / countNum; // 결과(평균) 은 총합/개수
  return result; // 리턴
}
