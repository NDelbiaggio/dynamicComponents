import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  OnChanges,
  AfterViewInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { ModulePlaceholderDirective } from "../../directives";

@Component({
  selector: "app-component-container",
  templateUrl: "./component-container.component.html",
  styleUrls: ["./component-container.component.scss"],
})
export class ComponentContainerComponent implements OnInit, AfterViewInit {
  @Input() component: any;
  @Output() closed: EventEmitter<any>;

  @ViewChild(ModulePlaceholderDirective, { static: true })
  compTemplateRef: ModulePlaceholderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
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

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.component.component
    );

    const viewContainerRef = this.compTemplateRef.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  closeContainer() {
    this.closed.emit();
  }
}
