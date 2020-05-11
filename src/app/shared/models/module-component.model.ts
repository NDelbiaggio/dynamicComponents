import { ModuleComponentList } from "./module-component-list.model";
import { ContainerSize } from "src/app/modules/dashboard";

export interface ModuleComponent {
  id: string;
  name: string;
  component: ModuleComponentList;
  isActive: boolean;
  getComponentModule: () => Promise<any>;
  size: ContainerSize;
}
