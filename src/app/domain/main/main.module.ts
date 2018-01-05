import {NgModule} from "@angular/core";
import {PinPadComponent} from "./pinpad/pin-pad.component";
import {MainComponent} from "./main.component";
import {
  MatButtonModule, MatIconModule, MatGridListModule, MatInputModule,
  MatProgressSpinnerModule, MatSnackBarModule, MatCardModule, MatExpansionModule, MatSelectModule,
  MatOptionModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthSuccessComponent} from "./authentication/auth.success.component";
import {RouterModule} from "@angular/router";
import {AuthenticationService} from "./authentication/service/auth.service";
import {AuthFailureComponent} from "./authentication/auth.failure.component";
import {AdminPanelComponent} from "./administration/admin-panel.component";
import {CommonModule} from "@angular/common";
import {UserService} from "./services/user.service";

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
    MatExpansionModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  declarations: [
    MainComponent,
    PinPadComponent,
    AuthSuccessComponent,
    AuthFailureComponent,
    AdminPanelComponent
  ],
  providers: [
    AuthenticationService,
    UserService
  ],
  bootstrap: [
    MainComponent,
    AdminPanelComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {

}
