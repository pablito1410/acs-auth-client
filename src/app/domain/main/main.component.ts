import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import {NotificationType} from "./model/notification.type";
import {Notification} from "./model/notification";
import {MatIconRegistry, MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {AuthenticationService} from "./authentication/service/auth.service";
import {UserService} from "./services/user.service";
import {Role} from "./model/role";
import {User} from "./model/user";

@Component({
  selector: 'main-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private messagesService: MessageService,
              private userService: UserService,
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
    this.authenticationService.authenticate(notification.id).subscribe(response => {
      if (response.status != 200) {
        this.router.navigate(['auth-failure'])
        this.snackBar.dismiss()
      } else {
        let user = response.json()

        this.userService.getAllGroups().subscribe(response => {
          let groups = response.filter(group => group.name == 'Admins')
          if (groups.length > 0) {
            this.userService.getUserGroupMembers(groups[0].id).subscribe(members => {
              let ids: string[] = new Array()
              members.forEach(member => {
                if (member.to.type = 'user') {
                  console.log('admin id=' + member.to.id)
                  ids.push(member.to.id)
                }
              })
              if (ids.indexOf(user.externalId) > -1) {
                console.log('selected user ' + user.name + ' is an admin')
                user.role = Role.ADMIN
              }
              this.navigateToUserPanel(user)
            },
            error => this.navigateToUserPanel(user))
          }
        },
        error => this.navigateToUserPanel(user))
    }
      this.snackBar.dismiss()
    })

  }

  private navigateToUserPanel(user: User) {
    console.log('user role =' + user.role)
    this.router.navigate(['auth-success', {
      id: user.id,
      name: user.name,
      avatarUrl: user.avatarUrl,
      role: user.role
    }])
    this.snackBar.dismiss()
  }
}
