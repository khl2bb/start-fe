/* eslint-disable linebreak-style */

function getRandomInt(min, max) {
  const roundMin = Math.ceil(min); // 정수화
  const roundMax = Math.floor(max); // 정수화
  return Math.floor(Math.random() * (roundMax - roundMin)) + roundMin; // 최댓값은 제외, 최솟값은 포함
}

// eslint-disable-next-line no-unused-vars
function random(...theArgs) {
  for (let j = 0; j < theArgs.length; j += 1) { // 인수 개수 만큼
    if (!Number.isInteger(theArgs[j])) { // 정수가 아니면
      return -1; // 리턴 -1
    }
  }

  if (theArgs.length === 1) { // 인수가 1개면
    return getRandomInt(0, theArgs[0]); // 최소값을 0으로 설정하고 랜덤값 반환
  }

  const min = theArgs[0]; // 최소값은 0번 인자
  const max = theArgs[1]; // 최대값은 1번 인자
  return getRandomInt(min, max); // 랜덤값 리턴
}
