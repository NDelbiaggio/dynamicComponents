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
    this.add = {
      component: BootstrapCardComponent,
    };
  }

  ngOnInit(): void {}
}
