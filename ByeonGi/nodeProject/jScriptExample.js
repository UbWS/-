var Users = [{name : '소녀시대', age:20}, {name:'걸스데이', age:22}];

Users.push({name:'티아라', age:23});

console.log('사용자 수 : %d', Users.length);
console.log('첫 번째 사용자 이름 : %s', Users[0].name);


// var add = function(a, b){
//   return a+b;
// };
//
// Users.push(add);
// console.log('배열 요소의 수 : %d', Users.length);
// console.log('세번째 요소로 추가된 함수 실행 : %d', Users[3](10, 10));


console.log('배열의 요소의 수 : %d', Users.length);
for(var i = 0; i<Users.length; i++){
  console.log('배열 요소 #'+ i + ' : %s ', Users[i].name);
}

console.log('\nForEach 구문 사용하기');
Users.forEach(function(item, index){
  console.log('배열 요소 #' + index + ' : %s', item.name);
})
// push(object) : 배열의 끝에 요소를 추가합니다.
// pop() : 배열의 끝에 있는 요소를 삭제 합니다.
// unshift() 배열의 앞에 요소를 추가합니다.
// shift() 배열의 앞에 있는 요소를 삭제 합니다.
// splice(index, removecount[,Object]) : 여러개의 객체를 요소로 추가하거나 삭제합니다.
// slice(index, copyCount) : 여러개의 요소를 잘라내어 새로운 배열 객체로 만듭니다.

console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);

Users.push({name : '최진혁' , age : 24});
console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

Users.pop();
console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length);

console.log('\nunshift() 호출 전 배열 요소의 수 : %d', Users.length);

Users.unshift({name : '최진혁 ' , age: 24});
console.log('unshift() 호출 후 배열 요소의 수 : %d', Users.length);

Users.shift();
console.log('shift() 호출 후 배열 요소의 수 : %d', Users.length);

console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d,' Users.length);

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제후');
console.dir(Users);
