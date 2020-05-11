import { Injectable, Compiler, Injector } from "@angular/core";
import { COMPONENTS_META } from "./modules.data";
import { ModuleComponent, ModuleComponentList } from "src/app/shared";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModuleService {
  private moduleList: BehaviorSubject<Partial<ModuleComponent[]>>;

  moduleList$: Observable<Partial<ModuleComponent[]>>;

  constructor(private compiler: Compiler, private injector: Injector) {
    this.moduleList = new BehaviorSubject(this.getModulesList());
    this.moduleList$ = this.moduleList.asObservable();
  }

  private getModulesList(): Partial<ModuleComponent[]> {
    let list = [];
    for (const comp of COMPONENTS_META.values()) {
      const { id, name, isActive, component, size } = comp;
      list.push({ id, name, isActive, component, size });
    }
    return list;
  }

  async getComponentWitFactory(componentId: ModuleComponentList) {
    const comp = COMPONENTS_META.get(componentId);
    const compModule = await comp.getComponentModule();
    const factory = await this.compiler.compileModuleAsync(compModule);
    const entryComp = (factory.moduleType as any).getComponent(comp.component);
    const moduleRef = factory.create(this.injector);
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
      entryComp
    );
    const { id, name, isActive, component, size } = comp;

    return {
      id,
      name,
      isActive,
      component,
      size,
      factory: componentFactory,
    };
  }
}
