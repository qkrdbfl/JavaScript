// error case(에러 상황)

//1.암묵적 전역
(function () {
    'use strict';
    // 선언하지 않은 변수를 참조하면 에러가 발생한다.
    x = 1; // ReferenceError: x is not defined
    console.log(x);
}());

//2. 변수, 함수, 매개변수 삭제
(function () {
    //'use strict'; -쓰면 delete x;에 빨간줄생김

    var x = 1;
    // delete 연산자로 변수, 함수, 매개변수를 삭제하면 문법 에러가 발생한다.
    //객체의 프로퍼티 삭제시에만 사용가능
    delete x; // strict 모드에서는 식별자에 대해 'delete'를 호출할 수 없습니다.
}());

//3. 매개변수 이름의 중복
(function () {
    //'use strict';
    //문법에러
    function test(x, x) { // SyntaxError: Duplicate parameter name not allowed in this context
        return x + x;
    }

    console.log(test(1, 2));
}());

//4. with 문의 사용
(function () {
    //'use strict';

    const test = { x: 1, y: 2, z: 3 };

    //with는 객체 이름을 생략할 수 있어 코드가 간단해지는 효과가 있지만
    //성능과 가독성이 나빠지는 문제가 있어 사용하지 않는 것이 좋다.
    with (test) {
        console.log(x);
        console.log(y);
        console.log(z);
    };
}());


