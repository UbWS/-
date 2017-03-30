import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jinhyeok',
  /*templateUrl 대신에 template: '' 를 이용하여
  * ' '안에 html 소스를 넣어서 간단한 컴포넌트를 정의할 수 있다.
  * template를 사용하면 html파일이 필요가 없다.
  */
  templateUrl: './jinhyeok.component.html',
  styleUrls: ['./jinhyeok.component.css']
})
export class JinhyeokComponent implements OnInit {
  a : string = "text";
  name = 'Jinheok';

  constructor() { }

  ngOnInit() {
  }

}
