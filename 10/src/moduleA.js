/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// import avg from '../avg.js';

const $body = document.body;

// function log(string) {
//   console.log(string);
// }

// 모듈 예제 div 생성
function makeBox(string1, string2) {
  const showBox = document.createElement('div');
  showBox.id = showBox;
  showBox.innerText = `${string1} = ${string2}`;
  $body.appendChild(showBox);
}

// 모듈 예시
makeBox('avg(1,2,3,4)', avg(1, 2, 3, 4));
makeBox('avg(1,2)', avg(1, 2));
makeBox('avg(1,2,3,4,5,6)', avg(1, 2, 3, 4, 5, 6));
makeBox("avg(1,'a',2)", avg(1, 'a', 2));
makeBox('avg([1,2,3])', avg([1, 2, 3]));

makeBox('random(0, 100)', random(0, 100));
makeBox('radmon(3)', random(3));
makeBox("random(0, 'a')", random(0, 'a'));
