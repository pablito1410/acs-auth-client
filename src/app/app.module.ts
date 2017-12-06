import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MessageService} from "./domain/main/services/message.service";
import {WebsocketService} from "./domain/main/services/websocket.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainModule} from "./domain/main/main.module";
import {appRoutes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {AuthenticationGuard} from "./domain/main/authentication/auth.guard";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MessageService,
    WebsocketService,
    AuthenticationGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
