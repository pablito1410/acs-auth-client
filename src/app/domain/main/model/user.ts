
export class User {
  id: string
  name: string
  lastName: string
  avatarUrl: string


  constructor(id: string, name: string, lastName: string, avatarUrl: string) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.avatarUrl = avatarUrl;
  }
}
