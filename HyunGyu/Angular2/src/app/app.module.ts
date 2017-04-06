import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//양방향 데이터 바인딩을 위한 제공모듈
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//공통적으로 사용할 Component, Module, Service를 등록
@NgModule({
  //component, pipes, directives(지시자) 등을 등록
  declarations: [
    AppComponent
  ],
  //사용할 주요 모듈 등록
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //공통으로 사용할 서비스 등록
  providers: [],
  //최상위 컴포넌트
  bootstrap: [AppComponent]
})
//위의 어노테이션(메타데이터)을 읽어들인뒤 컴포넌트를 export시킴
export class AppModule { }
