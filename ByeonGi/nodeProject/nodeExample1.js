//모듈파일을 과 분리
var calc = require('./module1');
//require()함수는 모듈파일 명이 지정되면 module1.js파일을 찾아보고 파일이 없는 경우에는 module1 폴더가 있는지 확인합니다.
//만약 module1 폴더가 있으면 안에 있는 index.js 파일을 불러옵니다.

console.log('모듈을 분리한 후 = calc.add 함수 호출 결과 : %d',calc.add(10,10));
//module1.js파일에 있는 exports.add 함수 호출;


//내부에 있는 모듈 사용하기.
var calc2 = {};
//calc2 객체 생성
calc2.add = function(a,b){
  return a+b;s
}
//함수 정의
console.log('모듈로 분리하기전 - calc2.add 함수 호출 결과 : %d', calc2.add(10, 10));


var calc3 = require('./module1');//exports를 사용한 모듈파일을 불러옴
console.log('모듈로 분리한 후 = calc3.add 함수 호출 결과 : %d', calc3.add(10,10));
