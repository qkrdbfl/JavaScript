//속성
// global object는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성 되는 특수한 객체
// Node.js 환경에서는 global이 전역 객체이고, 브라우저 환경에서는 window가 전역 객체이다.
// 전역 객체는 계층 구조 상 어떤 객체에도 속하지 않는 최상위 객체이다.

/* 빌트인 전역 프로퍼티 */

// Infinity : 무한대를 나타내는 숫자 값
// 전역 프로퍼티는 global을 생략하고 참조할 수 있다.
console.log(global.Infinity === Infinity); //true
console.log(10/0);  //양의 무한대 //Infinity
console.log(-10/0); //음의 무한대 //-Infinity
console.log(typeof Infinity); //number 넘버타입의 하나다

// NaN : 숫자가 아님(Not a Number)을 나타내는 숫자 값
// Number.NaN 프로퍼티와 같다.
console.log(global.NaN); //NaN
console.log(Number.NaN);//NaN
console.log(Number('abc'));//NaN
console.log(10 * 'abc');//NaN
console.log(typeof NaN);//number

// undefined : 원시 타입 undefined
console.log(global.undefined); //undefined
let nothing;
console.log(nothing);//undefined
console.log(typeof undefined);//undefined