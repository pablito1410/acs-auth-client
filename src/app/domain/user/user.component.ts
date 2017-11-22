import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  title = 'app';

  constructor(private chat: UserService){ }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
      this.title = JSON.stringify(msg)
    })
  }

  sendMessage() {
    this.chat.sendMsg("Test Message");
  }

}
