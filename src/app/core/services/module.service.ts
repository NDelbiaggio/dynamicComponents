import { Injectable, Compiler, Injector } from "@angular/core";
import { COMPONENTS_LABEL, COMPONENTS } from "./modules.data";

@Injectable({
  providedIn: "root",
})
export class ModuleService {
  constructor(private compiler: Compiler, private injector: Injector) {}

  getModulesList() {
    return COMPONENTS_LABEL;
  }

  async getComponentWitFacory(componentId: "string") {
    const comp = COMPONENTS.find((c) => c.id === componentId);
    if (!comp) {
      throw Error("component does not exist");
    }

    const compModule = await comp.getComponentModule();

    const factory = await this.compiler.compileModuleAsync(compModule);

    const entryComp = (factory.moduleType as any).getComponent(comp.component);

    const moduleRef = factory.create(this.injector);

    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
      entryComp
    );

    const { id, name, isActive } = comp;

    return {
      id,
      name,
      isActive,
      factory: componentFactory,
    };
  }
}
