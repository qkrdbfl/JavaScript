//1. 특정 단어로 시작하는지 검사
//https:// 또는 http:// 로 시작하는 검사
// ^ : 시작하는지.
const url = 'https://www.google.com';
// const url = 'http://www.google.com';
// const url = 'https://www.google.com';
// const url = 'www.google.com';

console.log(/^https?:\/\//.test(url));

//2. 특정 단어로 끝나는지 검사
// 파일 확장자가 js인지 검사
const fileName = 'test.js';
// const fileName = 'test.css';

// 파일 확장자 검사
console.log(/js$/.test(fileName));

//3. 숫자로만 이루어진 문자열인지 검사
const target = '12345';
// const target = '123@45';

// 처음과 끝이 숫자이고 최소 한 번 이상 반복 되는 문자열과 매칭
console.log(/^\d+$/.test(target)); // ^:첨부터, $: 끝까지, \d:숫자가, +:하나이상 있는지

//4. 아이디로 사용 가능한지 검사
//알파벳 대소문자 또는 숫자로 시작하고 끝나며 6~12자리인지 검사
//const id = 'hello123';
//const id = 'hello1';
const id = 'hello1이잉';

//         대소문자 숫자 6~12 첨부터 끝까지인 ^,$표기해주기
console.log(/^[A-Za-z\d]{6,12}$/.test(id));
// [가-힣] :문자열이라면 이렇게 하지만 이건 자음 모음형태만 허용함
//[ㄱ-ㅎㅏ | 가-힣] : 이건 자음 모음 완성된 형태 전부 포함함

//5. 핸드폰 형식에 맞는지 검사
const phone = '010-1234-5678';
// const phone = '010-123-4567';
// const phone = '010-1235-4567';
//           010 - 세자리나 네자리 - 5678 
console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(phone));

//특수문자를 포함 여부 검사
const target2 = 'hello#world';
//const target2 = 'helloworld12';


// 포함여부라 발견만하면 돼서 ^$가 필요없음 [^12]는 12가 아닌! 것을 찾는다는 뜻임 
console.log(/[^A-Za-z0-9가-힣]/.test(target2));