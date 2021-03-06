import { ModuleComponentList, ModuleComponent } from "src/app/shared";

export const COMPONENTS_META = new Map<ModuleComponentList, ModuleComponent>([
  [
    ModuleComponentList.BootstrapAlertsComponent,
    {
      id: "dashboard.alert",
      name: "Alerts",
      component: ModuleComponentList.BootstrapAlertsComponent,
      getComponentModule: async () => {
        const mod = await import("../../modules/dashboard/dashboard.module");
        return mod.DashboardModule;
      },
      isActive: false,
    },
  ],
  [
    ModuleComponentList.BootstrapCardComponent,
    {
      id: "dashboard.card",
      name: "Card",
      component: ModuleComponentList.BootstrapCardComponent,
      getComponentModule: async () => {
        const mod = await import("../../modules/dashboard/dashboard.module");
        return mod.DashboardModule;
      },
      isActive: false,
    },
  ],
  [
    ModuleComponentList.UserListComponent,
    {
      id: "dashboard.user_list",
      name: "User List",
      component: ModuleComponentList.UserListComponent,
      getComponentModule: async () => {
        const mod = await import("../../modules/dashboard/dashboard.module");
        return mod.DashboardModule;
      },
      isActive: false,
    },
  ],
  [
    ModuleComponentList.UserFormComponent,
    {
      id: "dashboard.user_form",
      name: "User Form",
      component: ModuleComponentList.UserFormComponent,
      getComponentModule: async () => {
        const mod = await import("../../modules/dashboard/dashboard.module");
        return mod.DashboardModule;
      },
      isActive: false,
    },
  ],
  [
    ModuleComponentList.CoursesListComponent,
    {
      id: "courses.list",
      name: "Courses List",
      component: ModuleComponentList.CoursesListComponent,
      getComponentModule: async () => {
        const mod = await import("../../modules/course/course.module");
        return mod.CourseModule;
      },
      isActive: false,
    },
  ],
]);
