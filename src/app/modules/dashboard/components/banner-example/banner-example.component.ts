import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
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
export class BannerExampleComponent implements OnInit, AfterViewInit {
  @Input() components: [] = [];

  @ViewChildren(ModulePlaceholderDirective)
  componentRefs: QueryList<ModulePlaceholderDirective>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadComponents();
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
    this.componentRefs.changes.subscribe(() => {
      if (this.componentRefs) {
        this.componentRefs.forEach((templateRef, index) => {
          const comp = this.components[index];
          setTimeout(() => {
            this.loadComponent(templateRef, comp);
          });
        });
      }
    });
  }
}
