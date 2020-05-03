import { IUser } from "./../../shared/models/iuser";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users: IUser[] = [
    { firstName: "Nico", lastName: "Delb" },
    { firstName: "Paul", lastName: "Smith" },
  ];

  usersSubj = new BehaviorSubject<IUser[]>(this.users);
  users$ = this.usersSubj.asObservable();

  constructor() {}

  addUser(user: IUser) {
    this.users = [...this.users, user];
    this.usersSubj.next(this.users);
  }
}
