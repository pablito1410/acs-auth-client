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
import {CommonModule} from "@angular/common";
import {FingerprintScannerService} from "./domain/main/services/fingerprintscanner.service";
import {HttpModule} from "@angular/http";
import {RfidModuleService} from "./domain/main/services/rfid.module.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MessageService,
    WebsocketService,
    AuthenticationGuard,
    FingerprintScannerService,
    RfidModuleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
