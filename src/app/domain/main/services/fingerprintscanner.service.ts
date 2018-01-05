
import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {EnrollCommand} from "../command/enroll.command";

@Injectable()
export class FingerprintScannerService {

  constructor(private http: Http) {

  }
  enroll(id: number) {
    return this.http.post('http://localhost:7004/fingerprint-scanner/enroll', new EnrollCommand(id));
  }
}
