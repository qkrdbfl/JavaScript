var string;
string = 'JavaScript'; // 작은 따옴표
string = "JavaScript"; // 큰 따옴표
string = `JavaScript`; // 백틱(ES6)

string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식";

//자바스크립트의 문자열은 원시타입임 : 값 변경 불가!

//템플릿 리터널
//ES6부터 도입된 멀티라인 문자열, 표현식 삽입들 편리한 문자열 처리 기능을 제공하는 문자열 표기법

// var str = '안녕하세요.
// 반갑습니다.'; // 이렇게 줄바꿈은 안댐 일반문자열 내에서는 허용 X

var str = '안녕하세요.\n반갑습니다'; //이스케이프 시퀀스를 사용해야만 가능

console.log(str);

//백틱으로 처리
var multiline = `안녕하세요.
반갑습니다.
제 이름은 박유리입니다.`;
console.log(multiline);  //백틱 사용하면 줄 바꿈 허용, 모든 공백 허용

var lastName = '홍';
var firstName = '길동';
console.log('제 이름은' + lastName + firstName + '입니다');

//표현식 삽입을 사용하면 문자열 연산자보다 가독성 좋고 간편하게 문자를 조합할수 있다. 하지만 꼭 백틱으로 써야함
console.log(`제 이름은 ${lastName}${firstName}입니다.`); //${변수} 쓰면 괄호안에가 변수로 치부됨
//백틱 안쓰면 삽입 없이 고대로 출력됨
console.log('제 이름은 ${lastName}${firstName}입니다.');
