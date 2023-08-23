//중첩 함수
//함수 내부에 정의 된 함수를 중첩 함수 또는 내부 함수라고 한다.
//중첩 함수를 포함하는 함수는 외부 함수라고 한다
//일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을 한다.

//outer - >외부함수
function outer(){

    var outerVal = '외부함수';

    //==내부에 정의된 함수(중첩함수)헬퍼함수의 역할(외부함수를 도와주는 역할형태)
    function inner(){

        var innerVal = '내부함수';
        //외부 함수의 변수를 내부 함수에서 참조 할수 있다
        console.log(`outerVal : ${outerVal}, innerVal : ${innerVal}`);
    }//==여기까지

    inner(); //내부호출

}
outer(); // 콘솔출력