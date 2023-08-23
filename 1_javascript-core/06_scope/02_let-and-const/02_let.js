//let
//var 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let, const를 도입했다.

//1. 변수 중복 선언 금지
let msg = '안녕하세요';
//같은 스코프 내에서는 중복 선언을 허용X
//let msg = '안녕히가세요'; // Syntax Error

//2.블록 레벨 스코프
//let 키워드로 선언한 변수는 모든 코드 블록(함수, if문, for문, while문, try/catch문)을 지역 스코프로 인정한다
let i = 0;
for (let i = 0; i < 10; i++) { //위의 전역과 for의 스코프가 분리되어 있음
    console.log(`지역 변수 i : ${i}`)
}
console.log(`전역 변수 i : ${i}`); //0,1,~,9,0 

//3. 변수 호이스팅
//변수 호이스팅이 발생하지 않는 것처럼 동작
// console.log(x); // ReferenceError: Cannot access 'x' before initialization에러
let x; //선언이 인식 되긴했는데 초기화하기 전까진 접근못한다고 막아벌임
