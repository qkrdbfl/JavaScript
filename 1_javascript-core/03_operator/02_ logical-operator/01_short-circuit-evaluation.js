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

//단축 평가를 활용하면 if문을 대체할수 있음
var num =2;

if(num % 2 == 0){
    console.log('짝수');
}else{
    console.log('홀수');
}

num % 2 == 0 && console.log('짝수')
num % 2 == 0 || console.log('홀수')

//객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고
//프로퍼티를 참조할 때 단축 평가를 유용하게 사용 가능
var obj = null;

//var val = obj?.value;  //타입 에러남

//obj가 Falsy(null, undefined) 값이면 좌항만 실행하여 val -> null
//obj가 Truthy 값아면 val -> obj.value
var val = obj && obj.value;
