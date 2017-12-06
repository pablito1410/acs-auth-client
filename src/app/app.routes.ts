
import {Route} from "@angular/router";
import {MainComponent} from "./domain/main/main.component";
import {AuthSuccessComponent} from "./domain/main/authentication/auth.success.component";
import {AuthFailureComponent} from "./domain/main/authentication/auth.failure.component";
import {AuthenticationGuard} from "./domain/main/authentication/auth.guard";
import {PinPadComponent} from "./domain/main/pinpad/pin-pad.component";

export const appRoutes: Route[] = [
  { path: 'main', component: PinPadComponent },
  { path: 'auth-success', component: AuthSuccessComponent, canActivate: [AuthenticationGuard] },
  { path: 'auth-failure', component: AuthFailureComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]
