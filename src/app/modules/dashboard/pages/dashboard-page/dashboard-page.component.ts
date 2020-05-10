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
        isActive: false,
      },
      {
        name: "User Form",
        component: UserFormComponent,
        isActive: false,
      },

      {
        name: "User List",
        component: UserListComponent,
        isActive: false,
      },

      {
        name: "Card",
        component: BootstrapCardComponent,
        isActive: false,
      },
    ];
  }

  toggleComponent(comp: any) {
    const componentIndex = this.componentsDisplayed.findIndex(
      ({ name }) => name === comp.name
    );

    if (componentIndex >= 0) {
      this.removeComponent(comp);
    } else {
      this.componentsDisplayed = [...this.componentsDisplayed, comp];
      this.activateComp(comp);
    }
  }

  removeComponent(comp: any) {
    this.componentsDisplayed = this.componentsDisplayed.filter(
      ({ name }) => name !== comp.name
    );
    this.deactivateComp(comp);
  }

  activateComp(comp: any) {
    this.componentsAvailable.find((c) => c === comp);
    comp.isActive = true;
  }

  deactivateComp(comp: any) {
    this.componentsAvailable.find((c) => c === comp);
    comp.isActive = false;
  }

  emptyComponents() {
    this.componentsDisplayed = [];
    this.componentsAvailable.forEach((c) => this.deactivateComp(c));
  }
}
