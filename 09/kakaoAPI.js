/* eslint-disable linebreak-style */
const $container = document.querySelector('.container');
const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
let $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK c1b0e77ee7738bbe54e18ca7e0c35eee' };

let searchCount = 1; // 검색 횟수(더보기 버튼에 활용)

function success(data) { // fetch 성공
  const { documents } = data; // 검색된 data에서 documents 저장
  const li = documents.map((doc) => `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`);
  // documents에 있는 요소들을 하나씩 가져와서 li 태그로 생성
  // 생성한 li를 ul안에 넣어서 result 값으로 넣음
  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
  // eslint-disable-next-line no-use-before-define
  createMoreButton(); // 더보기 버튼 생성
}
function error() { // fetch 실패
  // eslint-disable-next-line no-alert
  alert('데이터를 가져올수 없습니다');
}
function search() { // 검색 함수
  const { value } = $text; // 검색값

  if (value === '') { // 검색값이 없다면
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요'); // 경고창
    return false;
  }
  fetch(`${url}?query=${value}&page=${searchCount}`, { headers }) // fetch API Get
    .then((res) => res.json())
    .then(success)
    .catch(error);

  return true;
}
function createMoreContainer() { // 더보기 내용을 담을 컨테이너 생성 함수
  const $MoreContainer = document.createElement('div'); // div 엘리먼트 생성

  $MoreContainer.id = `result${searchCount}`; // div id 설정 result${searchCount}
  $container.appendChild($MoreContainer); // appendChild로 전체 컨테이너에 더보기 컨테이너 삽입

  $result = document.querySelector(`#result${searchCount}`); // $result를 방금 추가한 컨테이너로 변경
}
function moreSearch() { // 더보기 검색
  searchCount += 1; // 검색 횟수 +1, API에서 page 값에 영향, 라인34 참조
  createMoreContainer(); // 더보기 내용 컨테이너 생성
  search(); // 검색
}
function createMoreButton() { // 더보기 버튼 생성 함수
  const $MoreButton = document.createElement('li'); // li 엘리먼트 생성

  $MoreButton.className = 'list-group-item mb-5 btn btn-light'; // css를 위한 class 설정
  $MoreButton.style.textAlign = 'center'; // 더보기 버튼 텍스트 가운데 정렬
  $MoreButton.innerText = '더보기'; // 더보기 버튼 텍스트
  $result.appendChild($MoreButton); // appendChild로 더보기 버튼 삽입

  $MoreButton.addEventListener('click', moreSearch); // 더보기 버튼 클릭 리스너 장착
}
// $url에서 엔터를 칠경우 fetchUrl()
function checkSubmit(e) { // URL 입력 함수
  if (e.keyCode === 13) { // 엔터가 눌리면
    search(); // fetch를 실행한다.
  }
}

$btn.addEventListener('click', search); // 검색 버튼 리스너 장착
$text.addEventListener('keypress', checkSubmit); // 엔터가 눌리면 검색
