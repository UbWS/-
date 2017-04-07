//항상 process 객체를 사용해 이벤트를 전달하면, 같은 이름의 이벤트를 사용하는 경우에
//충돌가능성이 있다.

var util = require('util');
var EventEmitter = require('events').EventEmitter;
//EventEmitter 는 events 모듈안에 속성으로 들어있다.

var Calc = function(){
  var self = this;

  this.on('stop', function(){
    console.log('Calc에 stop event 전달됨');

  });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a,g){
  return a+b;
}
module.exports = Calc;
module.exports.title = 'calculator';
