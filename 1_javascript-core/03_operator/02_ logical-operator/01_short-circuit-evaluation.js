//단축 평가

//표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것을 말한다.
//&&, || 연산자 표현식의 결과는 떄로는 불리언 값이 아닐수도 있다

//OR인 경우 'apple'이 이미 Truthy한 값이어서 true로 평가되고
//논리연산자의 결과를 결정한 첫번째 피연산자 'apple'을 그대로 반환함
console.log('apple' || 'banana'); // apple
console.log(false || 'banana');   // banana

// AND의 경우 좌항, 우항 모두 확인해야 해서 논리 연산의 결과를 결정하는
//두번쨰 피연산자 'banana'를 그대로 반환함.
console.log('apple' && 'banana'); // banana
console.log(false && 'banana');   // false


