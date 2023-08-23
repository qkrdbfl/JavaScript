//const
//let키워드에서 알아본 특징은 모두 동일하며 상수(const) 선언을 위해서 사용된다는 점이 특징이다

//const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야함
//const x; //x라고만 쓰고 초기화를 안하면 사용못함
const x = 1; // 일케 초기화^^

//const 키워드로 선언한 변수는 재할당 금지
// x = 2; //TypeError: Assignment to constant variable. //상수에게 재할당해서 오류난다

//일반적으로 상수의 이름은 개문자로 선언해 상수임을 나타내고, 여러 단어로 이루어진 경우
// _(언너스코어)로 구분해서 스네이크 케이스로 표현.
const DISCOUNT_RATE = 0.15;

const student = {
    name : '박유리',
    age : 27
};

//객체 그자체는 고정이고 안에 속성들을 바꿀수 있음 근데 객체를 바꾸는거 안돼
student.name = '우유';
console.log(student); //이건 돼. 프로퍼티안에 값을 변경했을뿐이고

//객체 재할당 못함. : TypeError: Assignment to constant variable.
student = { // 이건 안돼. 새 객체를 student에 할당한거잖아
    name : '박유리',
    age : 30
};

//ES6를 사용한다면 var 키워드는 사용하지 않는다.
//"재할당이 필용한 경우"에 한정해 "let 키워드를 사용"하며 "변수의 스코프는 최대한 좁게" 만든다.
//변경이 발생하지 않고 읽기 전용으로 사용하는 원시 값과 객체에는 "const 키워드"를 사용한다.
//const 키워드는 재할당을 금지하므로 var, let 키워드보다 "안전"한다.
