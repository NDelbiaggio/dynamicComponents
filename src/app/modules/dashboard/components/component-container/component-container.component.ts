import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
  HostBinding,
} from "@angular/core";
import { ModulePlaceholderDirective } from "../../directives";
import { ContainerSize } from "./container-size.enum";

@Component({
  selector: "app-component-container",
  templateUrl: "./component-container.component.html",
  styleUrls: ["./component-container.component.scss"],
})
export class ComponentContainerComponent implements OnInit, AfterViewInit {
  @Input() component: any;
  size: ContainerSize;

  @Input() set containerSize(s: ContainerSize) {
    this.size = s;
  }

  @Output() closed: EventEmitter<any>;

  expanded: boolean = false;

  @ViewChild(ModulePlaceholderDirective, { static: true })
  compTemplateRef: ModulePlaceholderDirective;

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

  constructor() {
    this.closed = new EventEmitter();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.createChildComponent();
    });
  }

  createChildComponent() {
    if (!this.component) {
      return;
    }

    const viewContainerRef = this.compTemplateRef.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(
      this.component.factory
    );
  }

  closeContainer() {
    this.closed.emit();
  }

  toggleExpand() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.size = ContainerSize.large;
    } else {
      this.size = ContainerSize.medium;
    }
  }
}
