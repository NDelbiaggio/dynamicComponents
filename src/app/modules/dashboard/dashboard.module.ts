import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardPageComponent } from "./pages";
import {
  ModuleSelectorComponent,
  BannerExampleComponent,
  BootstrapCardComponent,
} from "./components";
import { ModulePlaceholderDirective } from "./directives";
import { DashboardRoutingRoutingModule } from "./dashboard-routing-routing.module";

const COMPONENTS = [
  DashboardPageComponent,
  ModuleSelectorComponent,
  BannerExampleComponent,
  BootstrapCardComponent,
];

const DIRECTIVES = [ModulePlaceholderDirective];

const IMPORTS = [CommonModule, DashboardRoutingRoutingModule];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...IMPORTS],
})
export class DashboardModule {}
