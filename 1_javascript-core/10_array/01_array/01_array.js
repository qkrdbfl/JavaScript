//1. 배열 리터럴을 통한 생성
//const arr = [요소들을 , 로 나열하기];
const arr = ['바나나','복숭아','키위'];
console.log(arr);

//2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2); // 빈배열이 하나 생성됨 []

//전달된 인수가 1개고 숫자인경우 length 프로퍼티 값이 인수인 배열을 생성
const arr3 = new Array(10);
console.log(arr3);  //[ <10 empty items> ]

//전달된 인수가 2개이상이거나, 숫자가 아니면 인수를 요소로 갖는 배열생성
const arr4 = new Array(1, 2, 3);
console.log(arr4);  //[ 1, 2, 3 ]

//3. Array.of 메소드
//전달된 인수를 요소로 갖는 배열 생성
console.log(Array.of(10));
console.log(Array.of(1, 2, 3));
console.log(Array.of('hello', 'js'));

//4. 배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며 배열의 요소에 접근할때 사용함
console.log(arr[0]); // 바나나
console.log(arr[1]); // 복숭아
console.log(arr[2]); // 키위

//배열은 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다
console.log(arr.length); //3

//for문을 통한 요소 순차 접근
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]); //바나나, 복숭아, 키위
}

//배열은 별도의 타입이 존재하지 않고 객체 타입임
console.log(typeof arr); //object