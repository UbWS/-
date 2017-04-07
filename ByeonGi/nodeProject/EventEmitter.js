//노드는 대부분 이벤트를 기반으로하는 비동기식 방식으로처리
//emit() 이벤트를 다른쪽으로 전달하고 싶을때

//on(event,listener) 지정한 이벤트의 리스너를추가
//once(event,listener) 지정한 이벤트를 추가하고 한번 실행되면 자동으로 제거
//removeListener(event,listener) 지정한 이벤트에 대한 리스너를 제거
/*
process.on('exit',function(){
  console.log('exit 이벤트 발생함');
});
//process객체는 노드에서 언제든지 사용할 수 있는 객체인데 이미 내부적으로 EventEmitter가 상속되도록 만들어져 있다.
setTimeout(function(){
  console.log('2초후에 시스템 종료 시도');

  process.exit();
},2000);
*/
process.on('tick', function(count){
  console.log('tick 이벤트 발생함 : %s', count);
});

setTimeout(function(){
  console.log('2초 후에 tick이벤트 전달 시도함');

  process.emit('tick','2');
},2000);
