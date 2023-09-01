// 스프레드 문법을 이용한 배열, 객체 복사

//배열 복사
let arr = [10,20,30];
let arrCapy = [...arr];
console.log(arr);
console.log(arrCapy);
console.log(arr === arrCapy); // 주소값 비교 > 동일한 값이지만 동일객체 아님 = false

//객체 복사
let obj = { name : '홍길동', age : 20 };
let objCopy = { ...obj };
console.log(obj);
console.log(objCopy);
console.log(obj === objCopy); //false


