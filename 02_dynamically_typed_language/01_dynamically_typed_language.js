//JavaScript는 동적 타입 언어이다!
// => 데이터 타입을 사전에 선언하지 않는다
// => 변수 선언이 아니라 할당에 의해 타입이 결정 되며 (값이 들어갔을때 타입이 결정! 미리 선언하는 자바와는 다름)
//    재할당에 의해 "동적으로 변수의 타입이 변화 가능"함.
//해당하는 타입들이 뭔지 출력됨!
var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = 'JavaScript';
console.log(typeof test);

test = true;
console.log(typeof test);

//자바스크립트의 첫번째 버전의 버그이지만 기본 코드에 영향을 줄 수 있어 아직까지 수정되지 못하고 있음.
test = null;
console.log(typeof test); //null가 아니라 object로 출력됨ㅜ

test = Symbol();
console.log(typeof test);

test = {};//객체.
console.log(typeof test);//object

test = [];//배열.
console.log(typeof test);//object

test = function(){}; //함수. 함수를 선언후 변수에 담았다라고 생각하기
console.log(typeof test); //function(object)의 한 종류

