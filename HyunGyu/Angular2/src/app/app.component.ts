import { Component } from '@angular/core';

export class Hero {
  /*
    변수명: type 앵귤러는 typescript를 사용 typescript는 javascript의 슈퍼셋(확대) 변수의 타입을 지정해 줘야함
    type을 사용하기 때문에 대규모 프로젝트에 용이하다.
  */
  id: number;
  name: string;
}

@Component({
  //html파일에서 Component사용을 위해 Component이름지정
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
  @Component 밑에는 로직 클래스인 AppComponent가 와야됨
  Hero가 밑에 쓰이면 @Component는 AppComponent가 아닌 Hero를 인식함
*/ 

// export class Hero {
//   id: number;
//   name: string;
// }

export class AppComponent {
  title = 'Tour of Heroes';
  
  //hero객체 생성
  hero: Hero = {
    id: 1,
    name: 'Windstorm';
  };
}