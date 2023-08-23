//modern method

//프로토타입 접근시 사용하는 모던 메소드
const user = {
    activate: true
};

// Object.create(proto) : [[Prototype]]이 proto를 참조하는 빈 객체를 만듦
// 프로토타입이 user인 새로운 객체를 생성
const student = Object.create(user);
console.log(student.activate);    // true

// Object.getPrototypeOf(obj) – obj의 [[Prototype]]을 반환
console.log(Object.getPrototypeOf(student)) //{ activate: true }
console.log(Object.getPrototypeOf(student) === user); // true

// Object.setPrototypeOf(obj, proto) – obj의 [[Prototype]]이 proto가 되도록 설정
Object.setPrototypeOf(student, {}); // student의 프로토타입을 {}으로 변경
console.log(Object.getPrototypeOf(student)) //{ }
console.log(Object.getPrototypeOf(student) === user); // false

//__proto__ 를 getter, setter로 직접 사용하면 때문에 키가 "__proto__"일 때 에러가 발생 하는
//의도하지 않은 결과가 나올 수 있어 위와 같은 메소드를 사용하는 것이 좋다.
const obj = Object.create(user);
let key = "__proto__";
console.log(obj[key]);//{ activate: true }
obj[key] = {test : "새로운 객체 덮어쓰기"};
console.log(obj[key]);  //{ test: '새로운 객체 덮어쓰기' }
console.log(obj.__proto__); ////{ test: '새로운 객체 덮어쓰기' }

