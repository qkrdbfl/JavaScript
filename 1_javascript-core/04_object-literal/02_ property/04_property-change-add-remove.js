//프로퍼티 값 변경, 추가, 삭제
var dog = { 
    name : '우유' 

}

//이미존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신됨
dog.name = '절미'; // 프로퍼티 값 갱신
dog['절미'] //표기법만 바꿔봄 같은 동작임
console.log(dog.name);

//프로퍼티 동적 추가
//존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성 되어 추가되고 프로퍼티 값이 할당 된다
dog.age = 3; // 프로퍼티 값 추가
dog['age'] = 3; //같은 동작함
console.log(dog.age);

// 프로퍼티 삭제 (특수한 연산자를 사용해줘야 함)
//delete 연산자는 객체의 프로퍼티를 삭제하며, 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다
delete dog.age;
delete dog['age'];
console.log(dog.age); // 프로퍼티가 없다고 undefined가 출력됨

delete dog.something;