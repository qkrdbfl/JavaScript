//in 연산자
var student = {
    name : '박유리',
    age : 27,
    test : undefined
};
console.log(student.name === undefined); // false - 해당 프로퍼티가 객체 안에 존재
console.log(student.age === undefined);  // true - 해당 프로퍼티가 객체 안에 존재하지 않음
console.log(student.test === undefined); // true - 프로퍼티는 존재하지만 값이 undefined

console.log("name" in student); // 프로퍼티 키이름(왼) 써주고 객체(오) 써주고
console.log("height" in student); 
console.log("test" in student); 




