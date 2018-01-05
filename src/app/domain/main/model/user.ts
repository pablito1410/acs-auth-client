
import {Role} from "./role";

export class User {
  externalId: string
  name: string
  avatarUrl: string
  role: Role
  lastName: string;
  username: string;
  id: number;


  constructor(id: number, externalId: string, name: string, lastName: string, username: string, avatarUrl: string, role: Role) {
    this.id = id;
    this.externalId = externalId;
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.avatarUrl = avatarUrl;
    this.role = role
  }

  public getNameText(): string {
    if (this.name == null && this.lastName == null) {
      return this.username
    }
    var name = ''
    if (this.name != null)
      name += this.name + ' '
    if (this.lastName != null) {
      name += this.lastName
    }
    return name
  }
}
