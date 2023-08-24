//배열 고차 함수
// *고차함수 : 함수를 인수로 전달 받거나 함수를 반환한은 함수

//Array.prototype.sort : 배열을 정렬 기준으로 정렬
let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1; //숫자 10~100랜덤값 들어감
}

console.log(`정렬 전 numbers : ${numbers}`);//82,5,98,31,24,30,74,28,73,3

//오름차순 정렬이 기본이며 정렬후 정렬 순서를 유지함
//기본적으로는 문자열 정렬로 한자리수나 세자리수가 올바르지 않게 정렬 되는 모습 보임
//=> 다른 정렬 기준을 사용하려면 compare 함수를 인수로 전달해야함.
numbers.sort();// 정렬함

console.log(`정렬 후 numbers : ${numbers}`); //24,28,3,30,31,5,73,74,82,98
// 중간에 한자리수들은 문자로써 배열되서 나옴;
//숫자 오른차순 정렬에 사용될 function
function compare(a, b) {
    if (a > b) return 1; //양수를 반환 ->순서 변경
    if (a == b) return 0; //0을 반환 -> 같은 값
    if (a < b) return -1; //음수를 반환 -> 순서변경 X
}

numbers.sort(compare);
console.log(`매개변수로 compare 함수 전달 : ${numbers}`);

//함수 이터럴을 전달하여 숫자 내림차순 정렬
numbers.sort(function (a, b) { return b - a });
numbers.sort((a, b) => b - a);// 위에코드 이렇게 쓸수 있음 람다식

console.log(`매개변수로 함수 리터럴 전달 : ${numbers}`);

//Array.prototype.forEach : for을 대체할수 있는 고차함수.

/*
    배열.forEach(function(item, index, array){
        // 배열 요소 각각에 실행할 기능 작성
    });
*/

numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (item, index, array) { //////
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
});

//각 요소별로 *10 한 값을 콘솔에 출력
numbers.forEach(item => console.log(item * 10));// 10,20,30,40,50

//Array.prototype.map : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값들로 구성 된 새로운 배열 반환.
/*
    배열.map(function(item, index, array){
        // 배열 요소 각각에  반환할 새로운 값
    });
*/

const types = [true, 1, 'text'].map(item => typeof item);
console.log(types); //[ 'boolean', 'number', 'string' ]

const lengths = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(lengths); // [ 5, 6, 3, 3, 3 ] //길이가 출력

//Array.prototype.filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값이 true인 요소로만 구성 된 새로운 배열 반환.
const odds = numbers.filter(item => item % 2); //01중에 1이 나오는 애만 구성요소로 넣으라는 뜻
console.log(odds); // [ 1, 3, 5 ]

//Array.prototype.reduce : 배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백 함수를 실행하고 그 결과를 반환
numbers.reduce(function (previousValue, currentValue, currentIndex, array) {
    console.log(`previousValue : ${previousValue}`); //undefined //이전 콜백 함수의 반환값이 들어감
    console.log(`currentValue : ${currentValue}`); //4 //배열 요소의 값
    console.log(`currentIndex : ${currentIndex}`); //3 //베열 인덱스
    console.log(`array : ${array}`); //1,2,3,4,5 //메소드를 호출한 배열
    //리턴을 해줘야하는 구문이지만 안써줘서 previousValue가 undefined나온것임
    return previousValue;
});

//합산
const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(`sum : ${sum}`); // 15

//최대값 취득
const max = numbers.reduce((pre, cur) => pre > cur ? pre : cur);
//const max = [5,1,10,8,4].reduce((pre, cur) => pre > cur ? pre : cur); //일케 써두 댐
console.log(`max : ${max}`); // 5

//Array.prototype.some : 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환

//배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인
let result = [1, 5, 3, 2, 4].some(item => item > 10);
console.log(`result : ${result}`); // false

// 배열 내 요소 중 3보다 큰 값이 1개 이상 존재하는지 확인
result = [1, 5, 3, 2, 4].some(item => item > 3);
console.log(`result : ${result}`); // true

//Array.prototype.every : 배열 내 모든 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환

//배열 내 요소 모든 값이 3보다 큰지 확인
let result1 = [1, 5, 3, 2, 4].every(item => item > 3);
console.log(`result1 : ${result1}`); // false

// 배열 내 요소 모든 값이 0보다 큰지 확인
result1 = [1, 5, 3, 2, 4].every(item => item > 0);
console.log(`result1 : ${result1}`); // true

//Array.prototype.find :  배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 "그 결과가 참인 첫번째 요소"를 반환
//참인 요소가 존재하지 않으면 undefinde 반환.
//Array.prototype.findIndex : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 "그 결과가 참인 첫번째 요소의" 인덱스를 반환
//참인 요소가 존재하지 않는다면 -1을 반환.

const students = [
    { name : '유관순', score : 90 },
    { name : '홍길동', score : 80 },
    { name : '장보고', score : 70 }
];

result = students.find(item => item.name === '유관순');
console.log(result); // { name: '유관순', score: 90 }

result = students.findIndex(item => item.name === '유관순');
console.log(result); // 0

result = students.find(item => item.name === '신사임당');
console.log(result); // undefined

result = students.findIndex(item => item.name === '신사임당');
console.log(result); // -1

//만약 80점 이상인 학생들을 찾는다면?
//find, findIndex는 일치하는 요소를 찾으면 더 이상 탐색하지 않고 하나의 요소, 인덱스만 반환함
//filter는 콜백 함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다
result = students.filter(item => item.score >= 80);
console.log(result); //유관순이랑 홍길동 나옴