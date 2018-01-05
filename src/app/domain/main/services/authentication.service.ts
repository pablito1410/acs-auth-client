

import {RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthenticationService {

  gettApiKeyHeader() {
    let headers = new Headers({ 'x-api-key': '1aab065b4a68023be52427fdae9a40e2c81c5a90' });
    return new RequestOptions({ headers: headers });
  }
}
