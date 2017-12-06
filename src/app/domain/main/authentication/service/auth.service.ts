
import {Injectable, OnInit, Optional} from "@angular/core";
import {User} from "../../model/user";

@Injectable()
export class AuthenticationService {

  users : { [id: string] : User } = {
    ['0']: new User('1', 'Paweł', 'Krosny', 'http://www.math.uni-frankfurt.de/~person/_4170854.jpg'),
    ['1']: new User('2', 'Jan', 'Kowalski', 'http://fasadagroup.pl/wp-content/uploads/2016/04/profile4-370x370.jpg'),
    ['2']: new User('3', 'Euzebiusz', 'Nowak', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyolctdniU84JacfCkkaIZhjbYg2oUD87UmsscqOcBAw0CpbptxQ')
  };

  pins : { [id: string] : string } = {
    ['1234']: '0',
    ['0000']: '1',
    ['4567']: '2'
  }


  authenticate(id: string): User {
    return this.users[id]
  }

  authenticateByPin(pin: string): User {
    return this.users[this.pins[pin]]
  }
}
