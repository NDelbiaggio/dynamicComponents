import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appModulePlaceholder]",
})
export class ModulePlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
