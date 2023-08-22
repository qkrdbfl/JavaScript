//숫자 타입으로 암묵적 변환

//1.산술연산자
//산술연산자의 피연산자는 모두 숫자여야하므로 숫자가 아닌 피 연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 - '5'); // 산술 연산자
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % '5');
console.log(10 % 'JavaScript');// 피연산 숫자 변환 불가로 숫자가 아니라는 NaN 출력됨

//2. 비교연산자
//비교 연산자로 크기를 비교하기 위해 모두 숫자 타입이여야 하므로
//숫자가 아닌 피 연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 > '20');
console.log(10 > '5'); // 비교 연산자
// 문자 모두 NaN으로 변환해서 비교불가 항상 false를 반환함
console.log(`1000 > 'a' : ${1000 > 'a'}`); //a는 아스키코드숫자가 있지만 뭘하든 펄스가 나옴 이유는 a가 숫자가 아니라서 NaN으로 취급되기때문(옳바른 비교가 아님))
console.log(`10 > 'a' : ${10 > 'a'}`);

//참고 : NaN끼리 비교연산자 사용도 불가하지만 isNaN함수를 사용하면 확인 가능
console.log(`NaN == NaN : ${NaN > NaN}`);// X
console.log(`isNaN(NaN) : ${isNaN(NaN)}`); // O

//3. +단항연산자
//피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환한다.
console.log(+'1');                //1
console.log(+''); // + 단항 연산자 //0
console.log(+'JavaScript');       //NaN
console.log(+true);               //1
console.log(+false);              //0
console.log(+null);               //0
console.log(+undefined);          //NaN
//console.log(+Symbol()); //TypeError: Cannot convert a Symbol value to a number에러
console.log(+{});                 //NaN
console.log(+[]);                 //0
console.log(+function () { });    //NaN

//빈 문자열, 빈 배열, null, false는 0으로 변환
//true는 1로 변환
//객체와 undefined, 함수는 변환 불가라 NaN이 반환됨

