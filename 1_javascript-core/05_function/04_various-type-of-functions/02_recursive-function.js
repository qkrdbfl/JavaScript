//재귀 함수
//함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한당!
//반복적인 처리를 위해 사용한다.

//n! = 1 * 2 * ... * (n-1) * n //이런 식으로 만들수 있대 n!는 ex)3!일때 1+2+3 임
function factorial(n) {
    //n이 1 이하일때 1을 반환함
    if(n<=1) return 1; //끊어주는 역할. n<=1는 람다식임
    //재귀호출
    return n * factorial(n - 1);
}
console.log(factorial(1));  //1
console.log(factorial(2));  //2
console.log(factorial(3));  //6
console.log(factorial(4));  //24  4xf(3) -> 4x3xf(2) -> 4x3x2xf(1)
console.log(factorial(5));  //120












