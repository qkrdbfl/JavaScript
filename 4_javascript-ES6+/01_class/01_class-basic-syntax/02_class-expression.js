// 클래스 표현식

// 1. 익명 클래스 표현식
let Tutor = class {
    teach() {
        console.log('이해하셨나요~?');
    }
};

new Tutor().teach();

// 2. 기명 클래스 표현식
let Tutee = class MyTutee {
    learn() {
        console.log('우와~ 이해했어요!');
        // MyTutee라는 클래스명은 오직 클래스 내에서만 사용할 수 있다.
        console.log(MyTutee);
    }
};

new Tutee().learn();
// new MyTutee().learn(); ReferenceError: MyTutee is not defined

// 3. 클래스 동적 생성
function makeTutee(message) {

    return class {
        feedback() {
            console.log(message);
        }
    };
}

let SecondTutee = makeTutee("10점 만점에 10점~!");
new SecondTutee().feedback();

// => 클래스 표현식 정의가 가능하다는 것의 의미는 함수처럼 클래스도 일급 객체이며
// 다른 표현식 내부에서 정의, 전달, 반환, 할당이 가능하다는 것이다.