var Calc = require('./Calc');

var calc = new Calc();
calc.emit('stop');
//calc 객체에 stop 이벤트 전달

console.log(Calc.title + '에 stop이벤트 전달함');
