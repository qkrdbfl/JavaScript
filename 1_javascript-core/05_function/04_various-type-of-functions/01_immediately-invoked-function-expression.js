//즉시실행 함수
// 함수 정의와 동시에 즉시 호출이 되는 함수로 단 한번만 호출되면 다시 호출할수 없다

//function (원래라면 여기는 함수명을 작성하는곳인데) {} // 안쓰고 ()로 감싼다

//함수이름이 없는익명 함수를 사용하는것이 일반적이다
//반드시 () - 그룹 연산자로 감싸야한다
//(function () {}) // 이렇게

//일케 씀
(function () {
    console.log("익명 즉시 실행 함수 ! 함수 정의와 동시에 호출!")
})();
//()로 감싸면 즉시실행함수가 됨. 매개변수부가 선언되어서 아규먼트즈가 필요함
(function hello(name){
    console.log("기명 즉시 실행 함수 ! 함수 정의와 동시에 호출!")
    console.log(`${name}님 안녕하세요`);
})('박유리');

//이렇게는 못씀
//hello('박유리'); //ReferenceError: hello is not defined

//즉시 실행 함수 내에 코드를 모아주면 혹시 있을수 있는 변수나 함수의 이름 충돌방지가능
//라이브러리에서 코드를 가져와 내 코드와 같이 쓸때 유용함

