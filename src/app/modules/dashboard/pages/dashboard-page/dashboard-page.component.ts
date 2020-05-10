import { ModuleService } from "./../../../../core/services/module.service";
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

  constructor(private moduleService: ModuleService) {}

  ngOnInit(): void {
    this.componentsAvailable = this.moduleService.getModulesList();
  }

  async toggleComponent(comp: any) {
    const componentIndex = this.componentsDisplayed.findIndex(
      ({ id }) => id === comp.id
    );

    if (componentIndex >= 0) {
      this.removeComponent(comp);
    } else {
      const component = await this.moduleService.getComponentWitFacory(comp.id);
      this.componentsDisplayed = [...this.componentsDisplayed, component];
      this.activateComp(comp.id);
    }
  }

  removeComponent(comp: any) {
    this.componentsDisplayed = this.componentsDisplayed.filter(
      ({ id }) => id !== comp.id
    );
    this.deactivateComp(comp.id);
  }

  activateComp(compId: string) {
    const comp = this.componentsAvailable.find((c) => c.id === compId);
    comp.isActive = true;
  }

  deactivateComp(compId: string) {
    const comp = this.componentsAvailable.find((c) => c.id === compId);
    comp.isActive = false;
  }

  emptyComponents() {
    this.componentsDisplayed = [];
    this.componentsAvailable.forEach((c) => this.deactivateComp(c.id));
  }
}
