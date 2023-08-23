//일반 함수와 차이점
function Student(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
}

//일반 함수와 생성자 함수(앞 대문자)의 특별한 형식적 차이는 없다. (첫 문자를 대문자로 기술하여 구별하려 노력한다.)
//단, new 연산자와 함께 호출하면 생성자 함수로 동작하고
//만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다.

//스튜던트를 일반 함수처럼 불러보자
const student = Student('박유리', 27);
//일반 함수로 호출된 Student는 반환문이 없으므로 undefined를 반환함
console.log(student);
//일반 함수로 호출된 Student 내의 this는 전역 객체를 가리킨다
console.log(age);
console.log(name);
console.log(getInfo());

//생성자 함수가 new 연산자 없이 호출 되는 것을 방지하기 위해 ES6에서는 new.target을 지원한다.
//new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킴
//new 연산자 없이 일반 함수로 호출된 함수 내부의 new.target은 undefined이다.
function Dog(name, age){

    if(!new.target){ // !new.target의 값이 undefined이다. !는 반전
        //new 연산자와 함께 호출 되지 않은 경우 undefined이므로
        //new 연산자와 함께 생성자 함수를 재귀 호출 하여 생성된 인스턴스를 반환
        return new Dog(name, age);
    }

    this.name = name;
    this.age = age;
}

//new 연산자 없이 호출해도 if문에서 다시 new연산자와 함께 호출해주었으므로 객체를 반환 받음
const dog = Dog('우유',7);
console.log(dog); //아까는 출력이 undefined였지만 지금은 위에 처리했기때문에 객체를 반환 받음

//대부분의 빌트인 생성자 함수(Object, String, Number, Boolean, Date, RegExp, …)는
//new 연산자와 함께 호출 되었는지를 확인한 후 적절한 값을 반환한다
//String, Number, Boolean의 경우 new 연산자 없이 호출하면 객체 값이 아닌 문자열, 숫자, 불리언 값을 반환한다. 
//이를 데이터 타입을 변환에 활용하는 것이다.

