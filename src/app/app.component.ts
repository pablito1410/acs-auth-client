import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,) {
    iconRegistry
      .addSvgIcon('processing-fingerprint',
        sanitizer.bypassSecurityTrustResourceUrl('./../favicon.ico'))
  }
}
