//정규 표현식(Regular expression)은 
//일정한 패턴을 가진 문자열의 집합을 표현하기 위해
//사용하는 형식 언어(formal language)이다.

//검색대상
const target = 'JavaScript';

// 정규 표현식 리터럴 - /pattern/플래그
let regexp = /j/i; // 찾을패턴 : j, 플래그 : i => 대소문자 구별 없이

// RegExp 생성자 함수 - new RegExp(pattern[, flag])
regexp = new RegExp('j', 'i'); //세가지 다 가능한 형태임
regexp = new RegExp(/j/, 'i');
regexp = new RegExp(/j/i);     // 이건 ES6부터 가능한 표현
//regexp = new RegExp(/j/); //이러면 소문자j 없어서 false나옴

// test 메서드 - target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언으로 반환
console.log(regexp.test(target)); //true