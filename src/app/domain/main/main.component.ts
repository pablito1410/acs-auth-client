import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {NotificationType} from "./notification.type";
import {Notification} from "./notification";
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'user-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit{
  title = 'ACS';
  processingMsg = 'Put your fingerprint'

  constructor(private messagesService: MessageService){
  }

  ngOnInit() {
    this.messagesService.messages.subscribe(msg => {
      console.log(msg);
      let notification: Notification = JSON.parse(JSON.stringify(msg.text));
      if (notification.notificationType == NotificationType.PROCESSING_FINGERPRINT) {
        console.log('JEST!')
      } else {
        console.log(JSON.stringify(notification.notificationType))
      }
      this.processNotification(notification)
    })
  }

  private processNotification(notification: Notification) {
    switch(notification.notificationType) {
      case NotificationType.PROCESSING_FINGERPRINT:
        this.processingMsg = 'Processing fingerprint...';
        break;
      default:
        this.processingMsg = 'Unknown notification :('
    }
  }

  sendMessage() {
    this.messagesService.sendMsg("Test Message");
  }

}
