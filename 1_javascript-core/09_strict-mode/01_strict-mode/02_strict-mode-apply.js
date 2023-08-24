//strict mode (엄격 모드) 적용하기

//1. 전역의 선두에 추가 - 스크립트 전체에 strict mode(엄격모드)를 적용한다

//'use strict'; -- 엄격모드 명령어(전체 적용)

function test() {
    //2. 함수 몸체의 선두에 추가 - 해당 함수와 중첩 함수에 strict mode(엄격모드)적용
    //'use strict'; //(함수범위)에만 엄격모드 적용됨

    x = 10;     //ReferenceError: x is not defined

    //코드의 선두가 아니라면 strict mode(엄격모드) 적용되지 않음X
    'use strict'; // 밑에 쓰면 적용안됨 위에 써야함.
}

test();
console.log(x);


/*
- 전역에 strict mode를 적용하면 스크립트 태그 단위로 적용되어
- strict mode와 non strict mode의 혼용으로 인한 오류가 발생할수 있으니 유의한다.

<script>
    'use strict';
</script>
<script>
    x = 10;
</script>

*/

//서드파티 라이브러리가 non strict mode인 경우 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를
//구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다
(function(){ 
    'use strict';

    //작성 코드

})();

// 위에 해당 함수 안에서만 적용하는 코드 쓰고 
//괄호 밖에 서브파티에 코드 적어서 나눠쓰면 라이브러리에서 코드 가져와 쓸때 안정적임