import { UserService } from "./services/user.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const SERVICES = [UserService];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...SERVICES],
})
export class CoreModule {}
