import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "src/app/shared";
import { UserService } from "src/app/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  users$: Observable<IUser[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.users$;
  }
}
