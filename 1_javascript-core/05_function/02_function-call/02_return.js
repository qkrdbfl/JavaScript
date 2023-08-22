//반환문
function hello(name){
    //반환문
    return `${name}님 안녕해!`;
    // 반환문 이후의 문은 실행 안하고 무시됨
    console.log(name); // 걍 무시됨 컴파일에러는 아님
}

console.log(hello('박유리'));

function func(){
    console.log('함수가 호출됐넹');
    //반환값이 없으면 반환문 생략 가능하고 암묵적으로 undefined 반환
    return; //반환 값을 명시적으로 지정하지 않으면 undefined 반환
}

console.log(func());

