//서비스 클래스
//ng g s 서비스 이름 -> 서비스 생성 cli 명령어
import { Injectable } from '@angular/core';

@Injectable()
export class ServService {

  getMember(){
    return MEMBER;
  }

}
const MEMBER = [
  {id:1 , title: "성욱이는"},
  {id:2 , title: "맞아야 제맛"}
];
