import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import {NotificationType} from "./model/notification.type";
import {Notification} from "./model/notification";
import {MatIconRegistry, MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {AuthenticationService} from "./authentication/service/auth.service";

@Component({
  selector: 'main-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private messagesService: MessageService,
              private authenticationService: AuthenticationService,
              private snackBar: MatSnackBar,
              private router: Router){
  }

  ngOnInit() {
    this.messagesService.messages.subscribe(msg => {
      console.log(msg);
      let notification: Notification = JSON.parse(JSON.stringify(msg.text));
      this.processNotification(notification)
    })
  }

  private processNotification(notification: Notification) {
    switch(notification.notificationType) {
      case NotificationType.PROCESSING_FINGERPRINT:
        this.processingFingerprintNotification()
        break;
      case NotificationType.IDENTIFIED:
        this.identifiedNotification(notification)
      default:
    }
  }

  sendMessage() {
    this.messagesService.sendMsg("Test Message");
  }

  private processingFingerprintNotification() {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    this.snackBar.open("Processing fingerprint...", '', config).afterDismissed().subscribe(() => {
    })
  }

  private identifiedNotification(notification: Notification) {
    this.snackBar.dismiss()
    let user = this.authenticationService.authenticate(notification.id)
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
