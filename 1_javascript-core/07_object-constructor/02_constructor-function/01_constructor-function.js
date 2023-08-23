// 생성자 함수

const Student1 = {
    name: '박유리',
    age: 27,
    getInfo() {
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
};

const Student2 = {
    name: '우유',
    age: 7,
    getInfo() {
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
};

const Student3 = {
    name: '절미',
    age: 2,
    getInfo() {
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
};

//객체 리터럴을 이용한 객체 생성 방식은 직관적이고 간편하지만, 단 하나의 객체만 생성한다.
//동일 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술하기에 비효율적이다.

// 생성자 함수에 의한 객체 생성
//객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성.
function Student(name, age) {
    //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가르킴
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
}

//인스턴스의 생성
const student4 = new Student('아스나', 17); // 인스턴스의 생성
const student5 = new Student('신지', 18); // 인스턴스의 생성

console.log(student4);
console.log(student5);

