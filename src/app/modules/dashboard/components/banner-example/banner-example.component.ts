import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  OnChanges,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from "@angular/core";
import { ModulePlaceholderDirective } from "../../directives";

@Component({
  selector: "app-banner-example",
  templateUrl: "./banner-example.component.html",
  styleUrls: ["./banner-example.component.scss"],
})
export class BannerExampleComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input() components: [] = [];

  @ViewChildren(ModulePlaceholderDirective)
  componentRefs: QueryList<ModulePlaceholderDirective>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.components) {
      this.loadComponents();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.loadComponents());
  }

  loadComponent(templateRef: ModulePlaceholderDirective, component: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component.component
    );

    // Access are view container and empty the contained views
    const viewContainerRef = templateRef.viewContainerRef;
    viewContainerRef.clear();

    // Create the component and inject it in the view
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  loadComponents(): void {
    if (this.componentRefs) {
      this.componentRefs.forEach((templateRef, index) => {
        const comp = this.components[index];
        this.loadComponent(templateRef, comp);
      });
    }
  }
}
