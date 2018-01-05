
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {UserGroup} from "../model/user-group";
import {UserGroupMember} from "../model/user-group-member";

@Injectable()
export class UserService {


  apiKey = new RequestOptions({ headers:  new Headers({
    'x-api-key': '1aab065b4a68023be52427fdae9a40e2c81c5a90',
    'Access-Control-Allow-Origin': '*'}) });

  constructor(private http: Http) {

  }
  getAllUsers(): any {
    return this.http.get('http://localhost:7000/users').map((response: Response) => response.json());
  }

  getAllGroups():any {
    return this.http.get('http://localhost:7000/usergroups').map((response: Response) => response.json());
  }

  // getGroupId(name: string): string {
  //   this.getAllGroups().subscribe(response => {
  //     let groups = response.filter(group => {
  //       console.log('group name: ' + group.name)
  //       group.name == name
  //     })
  //     console.log('getGroupId return ' + groups[0].externalId)
  //     return groups.length > 0 ? groups[0].externalId : null
  //   })
  //   console.log('getGroupId return null')
  //   return null
  // }

  private getUserGroupMembersQuery(groupId: string): Observable<UserGroupMember[]> {
    return this.http.get('http://localhost:7000/usergroups/' + groupId + '/members').map((response: Response) => response.json())
  }

  getUserGroupMembers(groupId: string): Observable<UserGroupMember[]> {
      return this.getUserGroupMembersQuery(groupId)
  }
}
