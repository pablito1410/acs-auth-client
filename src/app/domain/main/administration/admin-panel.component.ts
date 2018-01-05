
import {Component, OnInit, ViewChild} from "@angular/core";
import {FingerprintScannerService} from "../services/fingerprintscanner.service";
import {MessageService} from "../services/message.service";
import {Notification} from "../model/notification";
import {NotificationType} from "../model/notification.type";
import {UserService} from "../services/user.service";
import {MatTableDataSource, MatPaginator} from "@angular/material";
import {User} from "../model/user";
import {Validators, FormControl} from "@angular/forms";
import {Role} from "../model/role";
import {SystemUser} from "../model/system-user";
import {RfidModuleService} from "../services/rfid.module.service";

@Component({
  selector: 'admin-panel',
  templateUrl: 'admin-panel.component.html',
  styleUrls: ['admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  infoMsg: string
  infoMsgCard: string
  // externalId: number
  users: User[] = new Array()
  user: User
  validationControl = new FormControl('', [Validators.required]);

  constructor(private fingerprintScannerService: FingerprintScannerService,
              private messagesService: MessageService,
              private userService: UserService,
              private rfidModuleService: RfidModuleService) {

  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.loadUsers()
    this.messagesService.messages.subscribe(msg => {
      console.log(msg);
      let notification: Notification = JSON.parse(JSON.stringify(msg.text));
      this.processNotification(notification)
    })
  }

  private enroll() {
    if (this.user == null) {
      console.log('No user selected')
      return
    }
    console.log('Selected user: ' + this.user.id + ' ' + this.user.username)
    this.infoMsg = 'Enrollment process starting...'
    this.fingerprintScannerService.enroll(+this.user.id).subscribe(response => {
      console.log('response.status=' + response.status)
      if (response.status == 201) {
        this.infoMsg = 'Enrollment process finished successfully'
      } else if (response.status == 409) {
        this.infoMsg = 'ID already exist'
      } else {
        this.infoMsg = 'Error, try again'
      }
      setTimeout(() => { }, 1000)
    },
    error => {
      this.infoMsg = 'Error, try again'
    })

  }

  private enrollCard() {
    console.log('enroll card')
    if (this.user == null) {
      console.log('No user selected')
      return
    }
    console.log('Selected user: ' + this.user.id + ' ' + this.user.username)
    this.infoMsgCard = 'Enrollment process starting...'
    this.rfidModuleService.enroll(+this.user.id).subscribe(response => {
      console.log('response.status=' + response.status)
      if (response.status == 201) {
        this.infoMsgCard = 'Enrollment process finished successfully'
      } else {
        this.infoMsgCard = 'Error, try again'
      }
      setTimeout(() => { }, 1000)
    },
    error => {
      this.infoMsgCard = 'Error, try again'
    })

  }

  private processNotification(notification: Notification) {
    switch(notification.notificationType) {
      case NotificationType.INPUT_FINGER:
        this.inputFingerNotification()
        break;
      case NotificationType.TAKE_OFF_FINGER:
        this.takeOffFinger()
        break;
      case NotificationType.INPUT_CARD:
        this.infoMsgCard = 'Input card...'
        break;
      case NotificationType.TAKE_OFF_CARD:
        this.infoMsgCard = 'Take off card'
      default:
    }
  }

  private inputFingerNotification() {
    this.infoMsg = 'Input finger...'
  }

  private takeOffFinger() {
    this.infoMsg = 'Take off finger...'
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(allUsers => {
      allUsers.results.forEach(result => {
        this.users.push(new User(result.id, result._id, result.firstname, result.lastname, result.username, null, null))
      })
    })

      this.userService.getAllGroups().subscribe(response => {
        let groups = response.filter(group => group.name == 'Admins')
        if (groups.length > 0) {
          this.userService.getUserGroupMembers(groups[0].id).subscribe(members => {
            let ids: string[] = new Array()
            members.forEach(member => {
              if (member.to.type = 'user')
                ids.push(member.to.id)
            })
            this.users.forEach(user => {
              if (ids.indexOf(user.externalId) > -1)
                user.role = Role.ADMIN
            })
          })
        }
      })
    }

}
