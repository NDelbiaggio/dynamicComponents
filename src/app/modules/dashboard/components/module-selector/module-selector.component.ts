import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-module-selector",
  templateUrl: "./module-selector.component.html",
  styleUrls: ["./module-selector.component.scss"],
})
export class ModuleSelectorComponent implements OnInit {
  @Input() components: { name: string; isActive: boolean };
  @Output() componentSelected: EventEmitter<any>;
  @Output() empty: EventEmitter<any>;

  constructor() {
    this.componentSelected = new EventEmitter();
    this.empty = new EventEmitter();
  }

  ngOnInit(): void {}

  onSelect(comp: any) {
    this.componentSelected.emit(comp);
  }

  onEmpty() {
    this.empty.emit();
  }
}
