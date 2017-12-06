
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'auth-success-component',
  styleUrls: ['auth.component.css'],
  templateUrl: 'auth.success.component.html'
})
export class AuthSuccessComponent implements OnInit {
  id: string
  name: string
  lastName: string
  avatarUrl: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.params['name']
    this.lastName = this.route.snapshot.params['lastName']
    this.avatarUrl = this.route.snapshot.params['avatarUrl']

    setTimeout(()=>{ this.router.navigate(['main']); }, 5000)
  }

}
