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
})
export class DashboardModule {}
