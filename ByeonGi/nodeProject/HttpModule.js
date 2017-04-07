var http = require('http');
//http 모듈에 들어있는 서버 기능을 사용하려면 require()메소드로 http모듈을 불러옵니다.
var server = http.createServer();
//createSever() 메소드를 반환하면 호출하면 서버 객체가 반환된다.

var port = 3001;
//웹 서버는 일반적으로 웹 브라우저 라고 하는 클라이언트에서HTTP 프로토콜로 요청한
//정보를 처리 한 후 응답을 보내 주는 역할
//PC나 서버 기계에 있는 6만개가 넘는 포트중에서 아무거나 사용하면 됨.

var fs = require('fs');

console.dir(http);

server.listen(port, function(){
  //listen 메소드를 호출하면 웹서버가 시작된다.(특정 포트에 대기하도록 설정)
  //listen()메소드를 호출할때 전달하는 두번째 파라미터 콜백함수 웹서버가 시작되면 호출됨
  //listen(포트번호, 호스트명, 백로그(실질적으로 동시 접속 연결수를 결정하는 정보), 콜백 함수)
  console.log('웹 서버가 시작되었습니다. : %d', port);
});



server.on('request', function(req,res){
  console.log('클라이언트 요청이 들어왔습니다.');

  var filename = 'practice2.html';
  fs.readFile(filename, function(err, data){
    res.writeHead(200, {"Content-type": "text/html"});
    //Content-type
    /*
      text/pain
      text/html
      text/css
      text/xml
      image/jpeg,png
      video/mpeg,audio/mp3
      application/zip
    */
    res.write(data);
    res.end();
  });
});
// //서버 종료 이벤트 처리
// server.on('close', function(){
//   console.log('서버가 종료됩니다.');
// });

//connection 클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트
//request 클라이언트가 요청할 때 발생하는 이벤트
//close 서버를 종료할 때 발생하는 이벤트
