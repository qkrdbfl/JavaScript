// [[Prototype]]

const user = {
    activate: true,
    login: function () {
        console.log('로그인 되었습니다.');
    }
};

const student = {
    passion: true
};

// __(언더바2개) __proto__는 [[Prototype]]의 getter, setter
student.__proto__ = user;

console.log(student.passion);
console.log(student.activate);
student.login();

// => "student의 프로토 타입은 user이다."또는"student는 user를 상속받는다." 라고 표현함
// => 프로토타입에서 상속받은 프로퍼티를 상속받은 프로퍼티를 상속 프로퍼티라고 함.

//프로토타입 체인
const greedyStudent ={
    class : 11,
    __proto__ : student
};

console.log(greedyStudent.class);   //11
console.log(greedyStudent.passion); //true //student에서 상속받은 상속 프로퍼티
console.log(greedyStudent.activate);//true //user에서 상속받은 상속 프로퍼티


