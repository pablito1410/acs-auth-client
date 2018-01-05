

import {Component, OnInit} from "@angular/core";
import {Observer, Observable} from "rxjs";
import {MatSnackBar, MatSnackBarConfig, MatDialog} from "@angular/material";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/service/auth.service";
import {UserService} from "../services/user.service";
import {Role} from "../model/role";


@Component({
  selector: 'pin-pad-component',
  templateUrl: 'pin-pad.component.html',
  styleUrls: ['pin-pad.component.css']
})
export class PinPadComponent implements OnInit{

  pin: string = ''

  constructor(private snackBar: MatSnackBar,
              private userService: UserService,
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
    this.authenticationService.authenticateByPin(pin).subscribe(response => {
      if (response.status == 200) {
        let user = response.json()
        this.router.navigate(['auth-success', {
          id: user.id,
          name: '',
          avatarUrl: user.avatarUrl,
          role: user.role
        }])
        this.snackBar.dismiss()
      }
      this.snackBar.dismiss()
    },
    error => {
        this.router.navigate(['auth-failure'])
        this.snackBar.dismiss()
    })
  }
}
