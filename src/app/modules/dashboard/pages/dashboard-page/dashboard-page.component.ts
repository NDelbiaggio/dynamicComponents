import { BootstrapAlertsComponent } from "./../../components/bootstrap-alerts/bootstrap-alerts.component";
import { BootstrapCardComponent } from "./../../components/bootstrap-card/bootstrap-card.component";
import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { UserListComponent } from "../../components/user-list/user-list.component";
import { UserFormComponent } from "../../components";

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.scss"],
})
export class DashboardPageComponent implements OnInit {
  add: any;

  componentsAvailable: any[] = [];

  componentsDisplayed: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.componentsAvailable = [
      {
        name: "Alerts",
        component: BootstrapAlertsComponent,
      },
      {
        name: "User Form",
        component: UserFormComponent,
      },

      {
        name: "User List",
        component: UserListComponent,
      },

      {
        name: "Card",
        component: BootstrapCardComponent,
      },
    ];
  }

  toggleComponent(comp: any) {
    console.log(comp);

    const componentIndex = this.componentsDisplayed.findIndex(
      ({ name }) => name === comp.name
    );

    if (componentIndex >= 0) {
      this.componentsDisplayed = this.componentsDisplayed.filter(
        ({ name }) => name !== comp.name
      );
    } else {
      this.componentsDisplayed = [...this.componentsDisplayed, comp];
    }
  }
}
