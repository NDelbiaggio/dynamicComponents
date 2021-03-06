import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardPageComponent } from "./pages";
import {
  ModuleSelectorComponent,
  BannerExampleComponent,
  BootstrapCardComponent,
  BootstrapAlertsComponent,
  UserFormComponent,
  UserListComponent,
  ComponentContainerComponent,
} from "./components";
import { ModulePlaceholderDirective } from "./directives";
import { DashboardRoutingRoutingModule } from "./dashboard-routing-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

const COMPONENTS = [
  DashboardPageComponent,
  ModuleSelectorComponent,
  BannerExampleComponent,
  BootstrapCardComponent,
  BootstrapAlertsComponent,
  UserListComponent,
  UserFormComponent,
  ComponentContainerComponent,
];

const DIRECTIVES = [ModulePlaceholderDirective];

const IMPORTS = [
  CommonModule,
  ReactiveFormsModule,
  DashboardRoutingRoutingModule,
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...IMPORTS],
  entryComponents: [
    BannerExampleComponent,
    BootstrapCardComponent,
    BootstrapAlertsComponent,
    UserListComponent,
    UserFormComponent,
  ],
})
export class DashboardModule {
  static getComponent(component: string) {
    switch (component) {
      case "BootstrapCardComponent":
        return BootstrapCardComponent;

      case "BootstrapAlertsComponent":
        return BootstrapAlertsComponent;

      case "UserListComponent":
        return UserListComponent;

      case "UserFormComponent":
        return UserFormComponent;

      default:
        break;
    }
  }
}
