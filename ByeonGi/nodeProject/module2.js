//외장 모듈 사용하기
var nconf = require('nconf');//이미 다른 사람이 시스템 환경변수에 접근 할 수 있도록 만든 모듈을 nconf파일인데 '외장모듈이라고' 한다.

nconf.env();

console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));
