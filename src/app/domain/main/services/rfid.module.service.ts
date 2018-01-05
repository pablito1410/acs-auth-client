

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {EnrollCommand} from "../command/enroll.command";
@Injectable()
export class RfidModuleService {

  constructor(private http: Http) {

  }
  enroll(id: number) {
    return this.http.post('http://localhost:7008/rfid-module/enroll', new EnrollCommand(id));
  }
}
