import { BootstrapAlertsComponent } from "./../../components/bootstrap-alerts/bootstrap-alerts.component";
import { BootstrapCardComponent } from "./../../components/bootstrap-card/bootstrap-card.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.scss"],
})
export class DashboardPageComponent implements OnInit {
  add: any;

  constructor() {
    this.selectAdOne();
  }

  ngOnInit(): void {}

  selectAdOne() {
    this.add = {
      component: BootstrapCardComponent,
    };
  }

  selectAdTwo() {
    this.add = {
      component: BootstrapAlertsComponent,
    };
  }
}
