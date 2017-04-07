//https://www.google.co.kr/?gws_rd=ssl#newwindow=1&q=actor
//웹 사이트에 접속하기 위한 사이트 주소 정보는 노드에서 URL개체로 만들수 있다.
// //위 주소처럼 만들어진 주소 문자열은 단수 문자열잉므로 서버에서 이 정보를 받아 처리할 때는 어디까지가 사이트 주소인지
// 그리고 어떤 내용이 요청 파라미터인지 구별을 위해서 ?기호를 사용한다.
// 이작업을 쉽게 할 수 있도록 노드에 미리만들어 둔 모듈이 url모듈이다.
//url 모듈을 사용한면 일반 주소 문자열으 URL객체로 만들거나 또는 URL객체에서 일반 문자열로 변환하는게 쉬워진다.
//parse() 주소 문자열을 파싱하여 URL객체를 생성
//format() URL객체를 주소 문자열로 변환

var url = require('url');

//주소 문자열을 URL객체로 만들기
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jops&where=m&sm=mtp_hty');

//URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);

//query 속성은 요청파라미터 정보가 담겨져있다.

//요청 파라미터 구분하기
var querystring = require('querystring');
//parse()메소드는 요청 파라미터 문자열을 파싱하여 객체로 만들어줌
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
//stringify()메소드는 객체 안에 들어있는 요청 파라미터를 다시 하나의 문자열로 바꿀때 사용
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
