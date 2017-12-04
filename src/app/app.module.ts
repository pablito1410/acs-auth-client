import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MessageService} from "./services/message.service";
import {WebsocketService} from "./services/websocket.service";
import { MainComponent } from "./domain/main/main.component"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatGridListModule, MatIconModule, MatInputModule,
  MatSnackBarModule, MatProgressSpinnerModule} from "@angular/material";
import {PinPadComponent} from "./domain/pinpad/pin-pad.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PinPadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    MessageService,
    WebsocketService
  ],
  bootstrap: [
    AppComponent,
    MainComponent
  ]
})
export class AppModule { }
