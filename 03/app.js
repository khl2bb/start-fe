

function log(str) {
    console.log(str);
}


// window.outerWidth

// window.name

// window.open('http://www.daum.net');

// window.opener

// window.close();


// dom appendchild MDN

// <ul id="list">
// <li>1</li>
// <li>2</li>
// </ul>

// <script>
// const list = document.getElementById('list'); 
// list.removeChild(list.children[0]);
// </script>
debugger;
// 와 디버거 짱

window.load=function(){
    alert("load");
};
var app = document.getElementById("list");

app.addEventListener("click", function(event) {
    if(event.target.nodeName == "LI"){
        //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
    }
});
// //DOM 레벨2
// window.addEventListener('load', function(){
//     alert("load");
// });


