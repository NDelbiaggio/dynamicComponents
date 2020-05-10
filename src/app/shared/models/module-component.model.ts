import { ModuleComponentList } from "./module-component-list.model";

export interface ModuleComponent {
  id: string;
  name: string;
  component: ModuleComponentList;
  isActive: boolean;
  getComponentModule: () => Promise<any>;
}
