import {NgModule} from "@angular/core";
import {PinPadComponent} from "./pinpad/pin-pad.component";
import {MainComponent} from "./main.component";
import {
  MatButtonModule, MatIconModule, MatGridListModule, MatInputModule,
  MatProgressSpinnerModule, MatSnackBarModule, MatCardModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {AuthSuccessComponent} from "./authentication/auth.success.component";
import {RouterModule} from "@angular/router";
import {AuthenticationService} from "./authentication/service/auth.service";
import {AuthFailureComponent} from "./authentication/auth.failure.component";

@NgModule({
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    RouterModule
  ],
  declarations: [
    MainComponent,
    PinPadComponent,
    AuthSuccessComponent,
    AuthFailureComponent
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {

}
