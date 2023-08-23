//생성자 함수 프로토타입
const user = {
    activate: true,
    login: function () {
        console.log('로그인 되었습니다.');
    }
};

function Student(name) {
    this.name = name;
}   

// 여기서의 prototype은 앞에서 배운 프로토타입()과 이름만 같을뿐 실제는 일반 프로퍼티다.
Student.prototype = user;

//F.prototype은 new F를 호출할 때만 사용된다.
//new F를 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 할당한다.
// student.__proto = user;
 let student = new Student("우");
 let student2 = new Student("유");

 console.log(student.activate);
 console.log(student2.activate);
 student.login();
 student2.login();


