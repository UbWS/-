import { Injectable } from '@angular/core';

@Injectable()
export class JsService {

  constructor() { }
  getJHInfo(){
    return databaseStudent;
  }
}

const databaseStudent = [
    {name : '최진혁', age: '24'},
    {name : '임종식', age: '25'}
]
