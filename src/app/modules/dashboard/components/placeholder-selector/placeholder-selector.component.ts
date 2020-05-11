import {
  Component,
  OnInit,
  HostBinding,
  Output,
  EventEmitter,
} from "@angular/core";
import { ContainerSize } from "../component-container";
import { ModuleService } from "src/app/core";
import { ModuleComponent } from "src/app/shared";
import { Observable } from "rxjs";

@Component({
  selector: "app-placeholder-selector",
  templateUrl: "./placeholder-selector.component.html",
  styleUrls: ["./placeholder-selector.component.scss"],
})
export class PlaceholderSelectorComponent implements OnInit {
  size: ContainerSize = ContainerSize.small;

  sizes: ContainerSize[] = [
    ContainerSize.small,
    ContainerSize.medium,
    ContainerSize.medium_large,
    ContainerSize.large,
  ];

  @HostBinding("class") get classSize() {
    switch (this.size) {
      case ContainerSize.small:
        return "col-3";
      case ContainerSize.medium:
        return "col-6";
      case ContainerSize.medium_large:
        return "col-9";
      case ContainerSize.large:
        return "col-12";

      default:
        return "col-3";
    }
  }

  @Output() addComponent: EventEmitter<any>;

  componentsAvailable$: Observable<ModuleComponent[]>;

  constructor(private moduleService: ModuleService) {
    this.addComponent = new EventEmitter();
  }

  ngOnInit(): void {
    this.componentsAvailable$ = this.moduleService.moduleList$;
  }

  setSize(size: ContainerSize) {
    this.size = size;
  }

  onComponentAdd(component: ModuleComponent) {
    this.addComponent.emit({ component, size: this.size });
  }
}
