import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { ModuleComponent } from "src/app/shared";
import { ModuleService } from "src/app/core/services";

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.scss"],
})
export class DashboardPageComponent implements OnInit {
  componentsAvailable: Partial<ModuleComponent[]> = [];
  componentsDisplayed: any[] = [];

  constructor(private moduleService: ModuleService) {}

  ngOnInit(): void {
    this.componentsAvailable = this.moduleService.getModulesList();
  }

  async toggleComponent(comp: ModuleComponent) {
    const componentIndex = this.componentsDisplayed.findIndex(
      ({ component }) => component === comp.component
    );

    if (componentIndex >= 0) {
      this.removeComponent(comp);
    } else {
      const component = await this.moduleService.getComponentWitFactory(
        comp.component
      );
      this.componentsDisplayed = [...this.componentsDisplayed, component];
      this.activateComp(comp.component);
    }
  }

  removeComponent(comp: any) {
    this.componentsDisplayed = this.componentsDisplayed.filter(
      ({ component }) => component !== comp.component
    );
    this.deactivateComp(comp.component);
  }

  activateComp(component: string) {
    const comp = this.componentsAvailable.find(
      (c) => c.component === component
    );
    comp.isActive = true;
  }

  deactivateComp(component: string) {
    const comp = this.componentsAvailable.find(
      (c) => c.component === component
    );
    comp.isActive = false;
  }

  emptyComponents() {
    this.componentsDisplayed = [];
    this.componentsAvailable.forEach((c) => this.deactivateComp(c.component));
  }
}
