

import {Component, OnInit} from "@angular/core";
import {Observer, Observable} from "rxjs";
import {MatSnackBar, MatSnackBarConfig, MatDialog} from "@angular/material";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/service/auth.service";


@Component({
  selector: 'pin-pad-component',
  templateUrl: 'pin-pad.component.html',
  styleUrls: ['pin-pad.component.css']
})
export class PinPadComponent implements OnInit{

  pin: string = ''

  constructor(private snackBar: MatSnackBar,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

  }

  private addNumber(num: string) {
    this.pin = this.pin + num;
    if (this.pin.length >= 4) {
      let config = new MatSnackBarConfig();
      config.duration = 2000;
      this.snackBar.open("Processing PIN...", '', config).afterDismissed().subscribe(() => {


      })
      this.authenticate(this.pin)
      this.pin = ''
    }
  }


  private clearOneNumber() {
    this.pin = this.pin.substring(0, this.pin.length - 1)
  }

  private authenticate(pin: string) {
    let user = this.authenticationService.authenticateByPin(pin)
    if (user == null) {
      console.log('user=null')
      this.router.navigate(['auth-failure'])
      this.snackBar.dismiss()
    } else {
      this.router.navigate(['auth-success', {
        id: '1',
        name: user.name,
        lastName: user.lastName,
        avatarUrl: user.avatarUrl
      }])
      this.snackBar.dismiss()
    }
  }
}
