// length property

//1.  length property는 요소의 개수를 나타내는 0 이상의 정수의 값을 갖는다
console.log([].length); //0
const arr = [1, 2, 3, 4, 5]
console.log(arr.length); //5

// length property 값은 배열에 요소를 추가하거나 삭제하면 자동으로 갱신되다
arr.push(6);
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr.length); //6
arr.pop(); ///pop : 꺼내서 반환
console.log(arr); //[ 1, 2, 3, 4, 5 ]
console.log(arr.length); //5

//length 프로퍼티에 임의의 숫자 값을 명시적으로 할당할 수도 있다
//현재 length 프로퍼티보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다.
arr.length = 3;
console.log(arr);//[ 1, 2, 3 ] 기존요소들이 제거되어 나옴
console.log(arr.length); //3

arr.length = 10;
console.log(arr); //[ 1, 2, 3, <7 empty items> ]7개의 빈 아이템들이 잇다
console.log(arr.length); //10

//현재 length 프로퍼티보다 큰 숫자 값을 할당하면 length 프로퍼티의 값은 변경되지만 배열의 길이가 늘어나지는 않는다.
arr.length = 10;
console.log(arr);
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptor(arr)); //undefined

//자바스크립트는 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 희소 배열을 문법적으로 허용한다
const sparce = [, 2, , 4];
console.log(sparce); //[ <1 empty item>, 2, <1 empty item>, 4 ]
console.log(sparce.length); //4
console.log(Object.getOwnPropertyDescriptor(sparce)); //undefined


