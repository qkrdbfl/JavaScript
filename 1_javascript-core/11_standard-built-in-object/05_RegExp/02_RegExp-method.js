//정규 표현식 메서드
const target = 'Java JavaScript';

//RegExp.prototype.exec : 
//인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환
console.log(/va/.exec(target)); //[ 'va', index: 2, input: 'Java JavaScript', groups: undefined ]
console.log(/va/g.exec(target)); //g플래그는 문자열 내의 모든 패턴을 검색하라는 뜻이지만 첫번째 매칭을 찾으면 반환하고 거기서 멈춤
console.log(/hello/.exec(target)); //매칭결과 없으면 null 반환

//RegExp.prototype.test : 
//인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언으로 반환
console.log(/va/.test(target)); // true
console.log(/hello/.test(target)); // false

//String.prototype.match : 
//String 표준 빌트인 객체가 제공하는 메서드로 대상 문자열과
//인수로 전달 받은 정규 표현식과의 매칭 결과를 배열로 반환.
console.log(target.match(/va/)); // [ 'va', index: 2, input: 'Java JavaScript', groups: undefined ]
//g 플래그를 지정하면 모든 매칭 결과를 배열로 반환함.
console.log(target.match(/va/g)); // [ 'va', 'va' ]
console.log(target.match(/hello/)); // null

//String.prototype.replace, String.prototype.search, String.prototype.split 등이 있다. String 챕터에서 참조한다.



