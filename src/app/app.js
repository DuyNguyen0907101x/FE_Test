import { SidebarComponent } from "./components/sidebar.component";
import { EmployeesComponent } from "./components/employees.component";

const sidebarComponent = new SidebarComponent();
const employeesComponent = new EmployeesComponent();

export const run = () => {
  sidebarComponent.addToggleEvent();
  employeesComponent.showAllEmployees();
};
