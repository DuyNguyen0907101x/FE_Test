import { getEmployees } from "./api_calls";

let employees = [];
getEmployees()
  .then(res => {
    console.log(res.data.employees);

    return (employees = employees.concat(res.data.employees));
  })
  .then(() => {
    let employeeDiv = document.getElementById("employees");
    console.log("em", employees);

    employees.forEach(e => {
      employeeDiv.insertAdjacentHTML(
        "beforeend",
        `
        <div id="employee" class="col-12 my-3">
        <div class="employee row">
          <div class="col-3"><img src="${e.avatar}" alt=""></div>
          <div class="col-9">
            <h1>${e.firstName} ${e.lastName}, 26</h1>
            <p class="font-weight-bold">Location: <span class="font-weight-light">Los Angeles</span></p>
            <p class="font-weight-bold">Occupation: <span class="font-weight-light">${
              e.occupation
            }</span></p>
            <p class="font-weight-bold">
              Technologies: <span class="font-weight-light">${e.technologies.join(
                ", "
              )}</span>
            </p>
          </div>
        </div>
      </div>
    `
      );
    });
  });
