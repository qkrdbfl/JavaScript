//변화 상황

//1. 일반 함수의 this
//생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문에
//strict mode에서는 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩 된다.
(function () {
    'use strict';

    function test() {
        console.log(this);
    }

    test(); // undefined

    new test(); // test {}
}());

//2. arguments 객체
//매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않음.
(function(x){
    'use strict'; //[Arguments] { '0': 1 }출력
    //'use strict'; //없으면 [Arguments] { '0': 2 }출력

    x = 2;

    console.log(arguments);// arguments : arguments안에 전달된 인수 저장.
})(1);








