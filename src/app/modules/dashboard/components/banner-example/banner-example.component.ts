import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  OnChanges,
} from "@angular/core";
import { ModulePlaceholderDirective } from "../../directives";

@Component({
  selector: "app-banner-example",
  templateUrl: "./banner-example.component.html",
  styleUrls: ["./banner-example.component.scss"],
})
export class BannerExampleComponent implements OnInit, OnChanges {
  @Input() ad;

  @ViewChild(ModulePlaceholderDirective, { static: true })
  adHost: ModulePlaceholderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.ad) {
      this.loadComponent();
    }
  }

  loadComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.ad.component
    );

    // Access are view container and empty the contained views
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    // Create the component and inject it in the view
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
