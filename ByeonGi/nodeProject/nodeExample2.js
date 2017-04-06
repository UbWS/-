//내장 모듈 사용
//내장 모듈 node에 미리 포함되어있는 모듈
//외장 모듈 개발자가 직접 만들어 오린 모듈 외장 모듈
//내장 모듈에 대한 정보 http://nodejs.org/api
/*
  시스템 정보들을 알려주는 os 모듈
  hostname() 운영체제의 호스트 이름을 알려준다.
  totalname() 시스템의 전체 메모리 용량을 알려준다.
  freemem() 시스템에서 사용 가능한 메모리 용량을 알려줍니다.
  cpus() CPU정보를 알려줍니다.
  networkInterfaces() 네트워크 인터페에스 정보를 담은 배열 객체를반환합니다.
*/
console.log('시스템의 hostname : %s', os.hostname());
console.log('시스템의 메모리 : %d / %d', os.freemem(), os.totalmem());
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());
