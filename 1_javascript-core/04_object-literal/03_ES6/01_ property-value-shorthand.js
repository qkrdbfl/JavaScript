//프로퍼티 값 단축 구문
var id = 'p-00001';
var price = 30000;

var product = {
    id : id,
    price : price // 키값(왼쪽)은 무조건 문자열!
};
console.log(product);

//ES6에서는 프로퍼티 값으로 변수를 사용하는 경우
//변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다. 프로퍼티 키는 변수 이름으로 자동 생성 된다.
// 프로퍼티 키는 변수 이름으로 자동 생성함!
var product2 = {id, price}; //이거 두개는 변수임 컴터가 알아서 id,price를 변수로 쓴다고? 해줌
console.log(product2);

