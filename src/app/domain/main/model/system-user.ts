

import {Attribute} from "./attribute";
import {Role} from "./role";

export class SystemUser {
  id: number
  _id: string
  email: string
  firstname: string
  lastname: string
  attributes: Attribute[]
  username: string;
  role: Role;
}
