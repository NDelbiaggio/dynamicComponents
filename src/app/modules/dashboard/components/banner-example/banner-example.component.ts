import { ComponentContainerComponent } from "./../component-container/component-container.component";
import { BootstrapCardComponent } from "./../bootstrap-card/bootstrap-card.component";
import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { ModulePlaceholderDirective } from "../../directives";

@Component({
  selector: "app-banner-example",
  templateUrl: "./banner-example.component.html",
  styleUrls: ["./banner-example.component.scss"],
})
export class BannerExampleComponent implements OnInit, AfterViewInit {
  @Input() components: [] = [];
  @Output() addComponent: EventEmitter<any>;
  oldList: any[] = [];

  @ViewChildren(ModulePlaceholderDirective)
  componentRefs: QueryList<ModulePlaceholderDirective>;

  @Output() removeComp: EventEmitter<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.removeComp = new EventEmitter();
    this.addComponent = new EventEmitter();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadComponents();
  }

  loadComponent(templateRef: ModulePlaceholderDirective, component: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ComponentContainerComponent
    );

    // Access are view container and empty the contained views
    const viewContainerRef = templateRef.viewContainerRef;

    // Create the component and inject it in the view
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    componentRef.instance.component = component;
    componentRef.instance.containerSize = component.size;

    componentRef.instance.closed.subscribe(() =>
      this.removeComp.emit(component)
    );
  }

  loadComponents(): void {
    this.componentRefs.changes.subscribe((changes) => {
      if (this.componentRefs) {
        this.componentRefs.forEach((templateRef, index) => {
          const comp: any = this.components[index];
          const res = this.oldList.find(
            (component) => component.name === comp.name
          );
          if (!res) {
            setTimeout(() => {
              this.loadComponent(templateRef, comp);
            });
          }
        });
      }
      this.oldList = this.components;
    });
  }

  trackByCompName(index, comp) {
    return comp.name;
  }

  onAddComponent(comp) {
    this.addComponent.emit(comp);
  }
}
