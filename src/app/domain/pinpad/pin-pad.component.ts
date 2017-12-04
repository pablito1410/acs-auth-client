

import {Component, OnInit} from "@angular/core";
import {Observer, Observable} from "rxjs";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";


@Component({
  selector: 'pin-pad-component',
  templateUrl: './pin-pad.component.html',
  styleUrls: ['./pin-pad.component.css']
})
export class PinPadComponent implements OnInit{
  spinnerMode = 'determinate'
  spinnerValue = 0;
  pin: string = ''

  constructor(public snackBar: MatSnackBar) {


  }

  ngOnInit(): void {

  }

  private addNumber(num: string) {
    this.pin = this.pin + num;
    if (this.pin.length >= 4) {
      this.spinnerMode = 'indeterminate'
      let config = new MatSnackBarConfig();
      config.duration = 2000;
      this.snackBar.open("Processing PIN...", '', config).afterDismissed().subscribe(() => {
        this.spinnerMode = 'determinate'
      })
      this.pin = ''
    }
  }

  private clearOneNumber() {
    this.pin = this.pin.substring(0, this.pin.length - 1)//
  }
}
