const $url = document.querySelector('#url'); // URL 입력 공간
const $btn = document.querySelector('#btn'); // URL 입력 버튼
const $log = document.querySelector('#log'); // 출력 공간


function printLog(str) { // 출력 공간에 출력
  $log.value = str; // 공간의 value를 str로 지정
}

function good(result) { // fetch가 잘 되면
  // quiz9.html 내용 출력
  const defaultGoodFetch = fetch('quiz9.html'); // quiz9.html fetch

  defaultGoodFetch.then(res => { // response 람다
    const goodFetchData = res.text(); // text 추출

    goodFetchData.then(( // 추출이 되면
        data => printLog(data) // 출력 공간에 quiz9.html 내용 출력
    ));
  })
}

function bad(error) { // fetch가 잘 안 되면 
  printLog(error); // error를 출력 공간에 출력
  // daum.net 내용 출력
  const defaultBadFetch = fetch('https://daum.net'); // daum.net fetch

  defaultBadFetch.then(res => { // response 람다
    const badFetchData = res.text(); // text 추출

    badFetchData.then(( // 추출이 되면
        data => printLog(data) // 출력 공간에 daum.net 내용 출력
    ));
  })
}

function fetchUrl() { // fetch를 실행하는 함수
  const url = $url.value; // URL 입력 공간의 값을 url 변수로 할당
  printLog(''); // 출력 공간 초기화

  if (!url) { // 아무것도 입력하지 않은 경우에는
    // eslint-disable-next-line no-alert
    window.alert('url를 입력하세요'); // 경고창 띄우기
  } else { // 문자열이 입력된 경우에는
    fetch(url).then(good).catch(bad); // 해당 문자열을 url로 여겨서 fetch를 한다.
  }
}
// $url에서 엔터를 칠경우 fetchUrl()
function checkSubmit(e) { // URL 입력 함수
  if (e.keyCode === 13) { // 엔터가 눌리면
    fetchUrl(); // fetch를 실행한다.
  }
}

$btn.addEventListener('click', fetchUrl); // 버튼이 클릭되면 fetch 실행
$url.addEventListener('keypress', checkSubmit); // 엔터가 눌리면 url 입력 및 fetch
