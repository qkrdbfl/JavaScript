// 프로토 타입 특징
const user = {
    id: 'user',
    login() {
        console.log(`${this.id}님 로그인 되었습니다.`);
    }
};

const student = {
    __proto__: user
};

//프로토타입은 프로퍼티를 읽을 때만 사용하며 프로퍼티를 추가, 수정, 삭제하는 연산은 객체에 직접 한다.
student.id = 'user01';
//login 메소드 내의 this는 프로토 타입에 영향받지 않으며 this는 언제나 .앞에 있는 객체이다
student.login(); // 출력 : user01님 로그인 되었습니다.

for (let key in student) {
    //for in반복문은 상속 프로퍼티도 순회 대상에 포함시킴
    console.log(key);

    //key에 대응하는 프로퍼티가 상속 프로퍼티가 아니라 객체에 직접 구현된 프로퍼티일 경우 true 반환.
    let isOwn = student.hasOwnProperty(key);

    if(isOwn){
        console.log(`객체 자신의 propert : ${key}`);
    }else{
        console.log(`상속 propert : ${key}`);
    }
}

