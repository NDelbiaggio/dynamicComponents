import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

interface Course {
  id: string;
  name: string;
}

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"],
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor() {}

  ngOnInit(): void {
    this.courses$ = of([
      { id: "angular", name: "angular" },
      { id: "react", name: "react" },
    ]);
  }
}
