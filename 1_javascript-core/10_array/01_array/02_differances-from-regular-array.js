//(일반 배열과의 차이점)

//<<일반적인 배열> : 각 요소가 동일한 데이터 크기를 가지며, 빈틈 없이 연속적으로 이어져 있어
//인덱스를 통해 임의의 요소에 한 번에 접근할 수 있는 고속 동작을 장점

//<<자바스크립트의 배열> : 일반적인 배열의 동작을 흉내 낸 특수한 객체, 
//각각의 메모리 공간이 동일한 크기를 갖지 않아도 되고 연속적으로 이어지 있지 않을 수도 있다
//인덱스로 배열 요소에 접근하는 경우 일반적인 배열보다 느리지만, 요소의 삽입 삭제의 경우 빠르다.

console.log(Object.getOwnPropertyDescriptors([1,2,3]));  //숨겨진 애들까지 보여주는
/*
 출력 : 
{
'0': { value: 1, writable: true, enumerable: true, configurable: true },
'1': { value: 2, writable: true, enumerable: true, configurable: true },
'2': { value: 3, writable: true, enumerable: true, configurable: true },
length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

//자바스크립트의 모든 값이 객체의 프로퍼티 값이 될 수 있으므로 모든 값이 배열의 요소가 될 수있다.
//모든 값이 배열의 요소가 될수 잇다.
const arr = [
    '홍길동',   //문자
    20,        //숫자
    true,       //불리언
    null,       //널 
    undefined,
    NaN,
    Infinity,
    [],  //배열
    {},  //객체
    function(){}  //익명함수이다 라고 출력. [Function (anonymous)]
];
console.log(arr);  



