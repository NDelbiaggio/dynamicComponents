import { BootstrapAlertsComponent } from "./../../components/bootstrap-alerts/bootstrap-alerts.component";
import { BootstrapCardComponent } from "./../../components/bootstrap-card/bootstrap-card.component";
import { Component, OnInit } from "@angular/core";
import { UserListComponent } from "../../components/user-list/user-list.component";
import { UserFormComponent } from "../../components";

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.scss"],
})
export class DashboardPageComponent implements OnInit {
  add: any;

  components: any[] = [];

  constructor() {
    this.selectAdOne();
  }

  ngOnInit(): void {
    this.components = [
      {
        component: BootstrapAlertsComponent,
      },
      {
        component: UserFormComponent,
      },

      {
        component: UserListComponent,
      },

      {
        component: BootstrapCardComponent,
      },
    ];
  }

  selectAdOne() {
    this.components = [this.components[1], this.components[0]];
  }

  selectAdTwo() {
    this.add = {
      component: BootstrapAlertsComponent,
    };
  }
}
