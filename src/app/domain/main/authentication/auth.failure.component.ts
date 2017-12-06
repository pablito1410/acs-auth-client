import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'auth-failure-component',
  styleUrls: ['auth.component.css'],
  templateUrl: 'auth.failure.component.html'
})
export class AuthFailureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(()=>{ this.router.navigate(['main']); }, 3000)
  }

}
