// Object 생성자 함수
//new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다

//빈 객체 생성
const student = new Object(); //{ }랑 new Object();랑 별 차이 없음

//프로퍼티 추가
student.name = '박유리'; // 프로퍼티 추가
student.age = 27;

console.log(student);