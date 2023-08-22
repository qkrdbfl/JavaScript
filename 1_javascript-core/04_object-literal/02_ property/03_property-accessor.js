//프로퍼티 접근
var dog = {
    name :'우유',
    eat : function(food){
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
    }
};

dog.eat('개껌'); //함수라서()로 호출함

//1. 마침표 표기법 (dot notation)
console.log(dog.name);
dog.eat('개껌');

//2. 대괄호 표기법(square bracket notation)
console.log(dog['name']); // 프로퍼티 키는 반드시 따옴표로 감싼 문자열로 써야함
//console.log(dog[name]);// 이건 잘못된 작성법!
dog['eat']('개껌'); // []표기법이라면 일단 따옴표로! 그리고 뒤에 대괄호를 씀

//프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시 대괄호 표기법을 사용함
var obj = {
    'dash-key' : 'dash-value',
    0 : 1
};

//console.log(obj.dash-key); // ReferenceError: key is not defined에러
//console.log(obj.'dash-key');// 컴파일에러
//console.log(obj[dash-key]); //ReferenceError: dash is not defined
console.log(obj['dash-key']); //얘만 옳바른 표기법..

//숫자로 다뤄봄
//console.log(obj.0); //걍 컴파오류
//console.log(obj.'0'); //걍 컴파오류
console.log(obj[0]); //1  //프로퍼티키가 숫자로 이루어진 문자열인 경우 대괄호
console.log(obj['0']); //1

