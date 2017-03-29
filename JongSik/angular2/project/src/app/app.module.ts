import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JinhyeokComponent } from './jinhyeok/jinhyeok.component';
import { JongsikComponent } from './jongsik/jongsik.component';

@NgModule({
  declarations: [
    AppComponent,
    JinhyeokComponent,
    JongsikComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
