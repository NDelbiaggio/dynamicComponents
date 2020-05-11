import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesListComponent } from "./components/courses-list/courses-list.component";

@NgModule({
  declarations: [CoursesListComponent],
  imports: [CommonModule],
  entryComponents: [CoursesListComponent],
})
export class CourseModule {
  static getComponent(component: string) {
    return CoursesListComponent;
  }
}
