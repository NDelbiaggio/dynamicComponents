import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-module-selector",
  templateUrl: "./module-selector.component.html",
  styleUrls: ["./module-selector.component.scss"],
})
export class ModuleSelectorComponent implements OnInit {
  @Output() button1Clicked: EventEmitter<void>;
  @Output() button2Clicked: EventEmitter<void>;

  constructor() {
    this.button1Clicked = new EventEmitter();
    this.button2Clicked = new EventEmitter();
  }

  ngOnInit(): void {}

  buttonOneClicked() {
    this.button1Clicked.emit();
  }

  buttonTwoCliecked() {
    this.button2Clicked.emit();
  }
}
