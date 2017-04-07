import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JinhyeokComponent } from './jinhyeok/jinhyeok.component';
import { JongsikComponent } from './jongsik/jongsik.component';
import { UseServiceComponent } from './use-service/use-service.component';
import { ServService} from './serv.service';
import { JsService } from './js.service';
import { HttptestComponent } from './httptest/httptest.component';

@NgModule({

  //일반 컴포넌트 클래스는 여기에 등록
  declarations: [
    AppComponent,
    JinhyeokComponent,
    JongsikComponent,
    UseServiceComponent,
    HttptestComponent
  ],
  imports: [
    BrowserModule, // 모든 애플리케이션이 브라우저를 띄우기 위해 필요한것
    FormsModule,
    HttpModule
  ],
  //서비스 클래스는 providers에 넣으면 된다. 등록의 개념
  providers: [
    ServService,
    JsService
  ],
  //앙귤러가 index.html 호스트 웹 페이지에 띄우는 컴포넌트!
  bootstrap: [AppComponent]
})
export class AppModule { }
