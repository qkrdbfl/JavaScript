//console

//if문 code
var grade = '손님';
if (grade == "손님") {
    authority = "글읽기";
} else if (grade == "일반회원") {
    authority = "글읽기, 글쓰기"
} else if (grade == "운영자") {
    authority = "글읽기, 글쓰기, 글삭제"
} else { authority = ""; }

console.log(grade + "의 경우 " + authority + " 가 가능합니다.");

//삼항연산자 code

var grade = '운영자';

grade == "손님" ? authority = "글읽기" :
    grade == "일반회원" ? authority = "글읽기, 글쓰기" :
        authority = "글읽기, 글쓰기, 글삭제";

console.log(grade + "의 경우 " + authority + " 가 가능합니다.");


var browser = 'Edge';   // 'Chrome', 'Firefox' 등으로 변경해서 테스트
    if (browser == 'Edge') {
        console.log("Edge를 사용하고 계시네요!");
    } else if (browser == 'Chrome'
            || browser == 'Firefox'
            || browser == 'Safari'
            || browser == 'Opera') {
        console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
    } else {
        console.log('현재 페이지가 괜찮아 보이길 바랍니다!');
    }
    console.log("==============================================")

//switch문
switch (browser){
    case "Edge"
}




