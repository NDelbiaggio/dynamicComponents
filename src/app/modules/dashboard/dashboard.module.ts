import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { DashboardRoutingRoutingModule } from "./dashboard-routing-routing.module";
import { ModuleSelectorComponent } from "./components/module-selector/module-selector.component";

const COMPONENTS = [DashboardPageComponent, ModuleSelectorComponent];

const IMPORTS = [CommonModule, DashboardRoutingRoutingModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
})
export class DashboardModule {}
