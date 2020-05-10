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
  HostBinding,
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

  expanded: boolean = false;

  @ViewChild(ModulePlaceholderDirective, { static: true })
  compTemplateRef: ModulePlaceholderDirective;

  @HostBinding("class.col-6") get small() {
    return this.expanded ? false : true;
  }
  @HostBinding("class.col-12") get large() {
    return this.expanded ? true : false;
  }

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

    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
    //   this.component.component
    // );

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
  }
}
