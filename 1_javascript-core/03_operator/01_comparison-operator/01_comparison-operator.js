//비교연산자

//동등 비교 (==, !=) : 암묵적 타입 변환을 통해 타입 일치 시킨 후 같은 값인지 비교
//일치비교 (===, !==) : 타입과 값이 모두 일치하는지 비교

//숫자1, 문자 '1', true 비교
console.log(`1 == '1' : ${1 == '1'}`); // true
console.log(`1 == true : ${1 == true}`); // true
console.log(`1 === '1' : ${1 === '1'}`); // false
console.log(`1 === true : ${1 === true}`); // false

//숫자0, 문자'0', 빈문자열 '', false비교
console.log(`0 == '0' : ${0 == '0'}`);// true
console.log(`0 == '' : ${0 == ''}`);// true
console.log(`0 == '0' : ${0 == false}`);// true
console.log(`0 === '0' : ${0 === '0'}`);// false
console.log(`0 === '' : ${0 === ''}`);// false
console.log(`0 === '0' : ${0 === false}`);// false

//null과 undefined 비교
console.log(`null == undefined : ${null == undefined}`);// true
console.log(`null === undefined : ${null === undefined}`);// false

//NaN은 자신과 일치하지 않는 유일한 값이다
console.log(`NaN == NaN : ${NaN == NaN}`);// false
console.log(`NaN === NaN : ${NaN === NaN}`);// false
//빌트인 함수 Number.isNaN을 이용해서 확인해야 한다.
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);// true

//비교 연산자를 통해 문자열끼리 비교도 가능하고 "유니코드 순"으로 비교함
//일치비교 연산자
console.log(`'hello' == 'hello' : ${'hello' == 'hello'}`);
console.log(`'hello' !== 'hello' : ${'hello' !== 'hello'}`);

//대소 비교 연산자
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`);
console.log(`'apple' > 'banana' : ${'apple' > 'banana'}`);
console.log(`'cat' > 'Zoo' : ${'cat' > 'Zoo'}`);
console.log(`'cat' > 'Zoo' : ${'cat' > 'Zoo'}`);
