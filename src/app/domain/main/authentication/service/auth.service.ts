
import {Injectable, OnInit, Optional} from "@angular/core";
import {User} from "../../model/user";
import {Role} from "../../model/role";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService {

  // users : { [externalId: string] : User } = {
  //   ['0']: new User('1', 'Paweł', 'Krosny', null, 'http://www.math.uni-frankfurt.de/~person/_4170854.jpg', Role.ADMIN),
  //   ['1']: new User('2', 'Jan', 'Kowalski', null, 'http://fasadagroup.pl/wp-content/uploads/2016/04/profile4-370x370.jpg', Role.USER),
  //   ['2']: new User('3', 'Euzebiusz', 'Nowak', null, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyolctdniU84JacfCkkaIZhjbYg2oUD87UmsscqOcBAw0CpbptxQ', Role.USER)
  // };
  //
  // pins : { [externalId: string] : string } = {
  //   ['1234']: '0',
  //   ['0000']: '1',
  //   ['4567']: '2'
  // }

  constructor(private http: Http) { }


  authenticate(id: string): Observable<Response> {
    return this.http.get('http://localhost:7000/users/' + id)
  }

  authenticateByPin(pin: string): Observable<Response> {
    return this.http.get('http://localhost:7000/users/pin/' + pin)
    // if (pin == '1234')
    //   return Observable.of(new User('-1', null, null, '', null, Role.USER))
    // else if (pin == '9999')
    //   return Observable.of(new User('-1', null, null, '', null, Role.ADMIN))
    // else
    //   return null
  }
}
