//외장 모듈 사용하기
//nconf설치 해줘야함 npm install nconf
//npm 패키지를 사용한다면 다른 사람이 만들어 올려 놓은 패키지르 다운로드 하여 설치 할 수 있다.
//npm? nodePackageManager 노드의 패키지를 사용할 수 있도록 설치 및 삭제 등을 지원하는 프로그램
var nconf = require('nconf');//이미 다른 사람이 시스템 환경변수에 접근 할 수 있도록 만든 모듈을 nconf파일인데 '외장모듈이라고' 한다.


nconf.env();
//만 약 다른 프로젝트나 다른 PC에서 만들 프로그램을 실행하려할때 설치한 외부패키지가 많다면 일일이 다시 설치해야한다.
//그래서 외부 패키지의 수만큼npm 명령어를 입력해야하는 번거로움을 없앨 수 있도록 package.json 파일 안에 설치한 패키지들의 정보를 넣어 둘 수 있다.
//npm init name : node >>> Enter Enter Enter...
//package.json had made..
//npm uninstall nconf
//npm intall nconf --save
console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));
