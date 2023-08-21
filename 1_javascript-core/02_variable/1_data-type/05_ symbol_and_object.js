//Symbol은 ES6에서 추가 된 7버냬ㅉ 타입
//다른 값과 중복 되지 않는 유일무이한 값으로 이름 충돌 위험이 없는 객체의 유일한 프로퍼티(객체 : key(중복X) , value)
//고유한 키 값을 만들기 위해 사용
//심벌 외의 원시 값은 리터널을 통해 생성, 심벌을 Symbol 함수를 통해 호출해서 생성

//심벌 생성
var key = Symbol('key');
console.log(typeof key);// typeof : 타입 반환

//객체 타입
//자스의 데이터 타입은 크게 원시타입, 객체타입으로 분류됨
//number, string, boolean, undefined, null, symbol 6가지 데이터 타입 이외의 값은
//모두 객체 타입으로 객체, 함수, 배열 등에 대해서 추후 하나씩 자세히 다뤄
var obj = {}; // 객체 생성
obj[key] = 'value';
console.log(obj[key]); //value출력됨~

var func = function () {}; // 함수 생성
var arr = []; // 배열 생성