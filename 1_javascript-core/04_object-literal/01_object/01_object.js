//객체 리터널 생성
var student = {
    //프로퍼티 : 객체 상태를 나타내는 값(data)로 키-값 쌍으로 구성
    name : '박유리',
    age : 27,
    //메서드 : 프로퍼티(상태 데이터)를 참조하고 조작할수 있는 동작(behavior)
    getInfo : function(){
        //여기에 함수에 정의하고 싶은 내용을 쓸수 있다.
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

console.log(typeof student); //object오브젝트이다
console.log(student); //키와 벨류 값이 출력되는걸 볼수 있다

var student2 = {}; //프로퍼티를 정의하지 않을 시 빈객체 생성
console.log(typeof student2);//object
console.log(student2);//{}
