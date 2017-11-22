import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserService} from "./services/user.service";
import {WebsocketService} from "./services/websocket.service";
import { UserComponent } from "./domain/user/user.component"


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
    WebsocketService
  ],
  bootstrap: [
    AppComponent,
    UserComponent
  ]
})
export class AppModule { }
