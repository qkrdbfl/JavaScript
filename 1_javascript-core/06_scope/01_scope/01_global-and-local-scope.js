//전역과 지역 스코프

//전역 : 코드의 가장 바깥 영역
//전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수가 되며 전역 변수는 어디서든지 참조가넝

//지역 : 함수 내부 몸체
//지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

var x = 'global x'; //전역변수
var y = 'global y';

function outer() {

    var z = "outer's local z"; //지역변수
    console.log(x);     // global x
    console.log(y);     // global y
    console.log(z);     // outer's local z

    function inner() {

        var x = "inner's local x";
        console.log(x); // inner's local x
        console.log(y); // global y //전역에 있는 y를 찾을것임
        console.log(z); // outer's local z //아우터에 있는 z를 찾을것임
    }
    inner();
}
outer();

console.log(x);         // global x

//console.log(z); // ReferenceError: z is not defined
//z는 정의되지 않았습니다 에러