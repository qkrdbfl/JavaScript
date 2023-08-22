//매개변수와 인수
function hello(name){

    //모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관됨
    console.log(arguments);

    return `${name}님 안녕하쇼.`;
}

//매개변수는 함수 몸체 외부에서 참조 할수 없다
//console.log(name); //ReferenceError: name is not defined

var result = hello ('박유리');
console.log(result);

//함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않음
//인수가 부족해서 할당되지 않은 매개변수의 값은 undefined이다.
result = hello();
console.log(result); // undefined님 안녕하쇼. 라고 출력됨

//매개변수보다 인수가 많은경우 초과된 인수는 무시됨.
result = hello('박유리','우유');
console.log(result); //박유리님 안녕하쇼. 라는 출력나옴


//인수를 전달하지 않거나 undefined를 전달하면 매개변수 기본값이 동작하도록 설정할수 있다
//(ES6 추가 문법)
function hi(name = '피카츄'){

    return `${name}안녕~`;
}

result = hi('박유리');
console.log(result);
result = hi();
console.log(result);