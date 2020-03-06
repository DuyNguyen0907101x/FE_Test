import { getAllEmployees } from "../utils/api";

export class EmployeesComponent {
  constructor() {
    this.$employeesList = $(".employees__list");
  }

  addEmployeeRow({ avatar, firstName, lastName, occupation, technologies }) {
    let technologiesString = "";
    for (let i = 0; i < technologies.length - 1; i++) {
      technologiesString += technologies[i] + ", ";
    }
    technologiesString += technologies[technologies.length - 1];

    let template = `
    <li class="employees__item">
        <div class="employees__left">
        <img
            src="${avatar}"
            class="employees__img"
        />
        </div>
        <div class="employees__right">
        <p class="employees__name">${firstName} ${lastName}</p>
        <p class="employees__occupation">${occupation}</p>
        <p class="employees__occupation">
            ${technologiesString}
        </p>
        </div>
    </li>
    `;

    this.$employeesList.append(template);
  }

  showAllEmployees() {
    let api = getAllEmployees();
    var self = this;
    api.then(response => {
      let employees = response.data.employees;
      employees.forEach(item => {
        self.addEmployeeRow(item);
      });
    });
  }
}
