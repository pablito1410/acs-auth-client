
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Role} from "../model/role";

@Component({
  selector: 'auth-success-component',
  styleUrls: ['auth.component.css'],
  templateUrl: 'auth.success.component.html'
})
export class AuthSuccessComponent implements OnInit {
  id: string
  name: string
  lastName: string
  avatarUrl: string
  isAdmin: boolean
  navigationEnabled: boolean;
  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log('externalId=' + this.id)
    this.name = this.route.snapshot.params['name']
    this.avatarUrl = this.route.snapshot.params['avatarUrl']
    console.log('avatarurl=' + this.avatarUrl)
    this.isAdmin = this.showAdminOptions(this.route.snapshot.params['role'])
    this.navigationEnabled = true
    setTimeout(()=>{
      if (this.navigationEnabled) {
        this.router.navigate(['main']);
      }
    },
      5000)
  }

  private showAdminOptions(role: Role) {
    if (role == Role.ADMIN) {
      return true
    }
    return false
  }

  private navigateToAdminPanel() {
    this.navigationEnabled = false
    this.router.navigate(['admin-panel'])
  }

  showAvatar(): boolean {
    console.log(this.avatarUrl != null)
    return this.avatarUrl != null && this.avatarUrl != 'null'
  }
}
