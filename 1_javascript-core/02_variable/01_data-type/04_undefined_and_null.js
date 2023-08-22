// undefined 타입
//var undef = undefined; // 개발자가 의도적으로 변수에 undefined를 할당하는것은 지양하기
//자바스크립트 엔진이 변수 초기화 시 undefined 사용함 (아직 값을 정하지 않았다 라는 의미)
var undef; // 선언만 해도 undefined가 출력됨
console.log(undef);

//null 타입
//null은 변수에 값이 없다는것을 "의도적으로 명시" 할때 사용한다
var nullVal = 'something'; // 값이 있었다가 ~ 밑에처럼 적으면
nullVal = null; // 이전 참조를 제거하여 더 이상 'something'을 참조하지 않는다.
console.log(nullVal);