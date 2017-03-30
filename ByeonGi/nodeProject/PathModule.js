/*
  파일 패스를 다루는 path모듈
  join() 여러개의 이름들을 모두 합쳐 하나의 파일 패스로 만들어 줍니다.
  파일 패스를 완성할 때 구분자 등을 알아서 조정합니다.

  dirname() 파일 패스에서 디렉터리이름을 반환합니다.
  basename() 파일 패스에서 파일 의 확장ㅈ를 제외한 이름을 반환합니다.
  extname() 파일 패스에서 파일의 확장자를 반환합니다.
  */

var path = require('path');

//디렉터리 이름 합치기
var directories = ["user", "mike","docs"];

//여러 개의 이름을 담고 있는 배열 객체를 만들었을 때 배열 객체의 join()메소드를
//사용하면 하나의 디렉터리 이름이나 파일 이름으로 만들 수 있다.
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s',docsDirectory);

//디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/User/mike', 'notepad.exe');
console.log('파일 패스 : %s', curPath);


//패스에서 디렉터리, 파일 이름, 확장자 구별하기
var filename = "C:\\Users\\mike\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('디렉터리 : %s, 파일 이름 : %s, 확장자 : %s', dirname, basename, extname);
