export const COMPONENTS = [
  {
    id: "dashboard.alert",
    name: "Alerts",
    component: "BootstrapAlertsComponent",
    getComponentModule: async () => {
      const mod = await import("../../modules/dashboard/dashboard.module");
      return mod.DashboardModule;
    },
    isActive: false,
  },
  {
    id: "dashboard.card",
    name: "Card",
    component: "BootstrapCardComponent",
    getComponentModule: async () => {
      const mod = await import("../../modules/dashboard/dashboard.module");
      return mod.DashboardModule;
    },
    isActive: false,
  },
  {
    id: "dashboard.user_list",
    name: "User List",
    component: "UserListComponent",
    getComponentModule: async () => {
      const mod = await import("../../modules/dashboard/dashboard.module");
      return mod.DashboardModule;
    },
    isActive: false,
  },
  {
    id: "dashboard.user_form",
    name: "User Form",
    component: "UserFormComponent",
    getComponentModule: async () => {
      const mod = await import("../../modules/dashboard/dashboard.module");
      return mod.DashboardModule;
    },
    isActive: false,
  },
  {
    id: "courses.list",
    name: "Courses List",
    component: "CoursesListComponent",
    getComponentModule: async () => {
      const mod = await import("../../modules/course/course.module");
      return mod.CourseModule;
    },
    isActive: false,
  },
];

export const COMPONENTS_LABEL = COMPONENTS.map((c) => ({
  id: c.id,
  name: c.name,
  isActive: c.isActive,
}));
