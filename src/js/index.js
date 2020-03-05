import { getEmployees } from './service';

(() => {
  const $sideBar = document.getElementById('side-bar');
  const $toggle = document.getElementById('toggle');

  if (!$sideBar || !$toggle) {
    return;
  }

  let collapsed = false;

  $toggle.addEventListener('click', () => {
    collapsed = !collapsed;

    $sideBar.className = 'index-page__side';

    if (collapsed) {
      $sideBar.className += ' index-page__side--collapsed';
    }
  });
})();

(() => {
  const fetchEmployees = () => getEmployees()
    .then(res => insertEmployeesHTML(res.data.employees));

  const insertEmployeesHTML = (employees) => {
    const $container = document.getElementById('employees');

    if (!$container) {
      return;
    }

    let innerHTML = '';
    console.log(employees)
    employees.forEach(emp => {
      innerHTML += `
        <div class="employee">
          <img class="employee__avatar" src="${emp.avatar}" />

          <h3 class="employee__name">${emp.firstName} ${emp.lastName}, 26</h3>

          <p class="employee__desc">
            <span class="employee__label">Location</span>:
            <span class="employee__content">Los Angeles</span>
          </p>

          <p class="employee__desc">
            <span class="employee__label">Occupation</span>:
            <span class="employee__content">${emp.occupation}</span>
          </p>

          <p class="employee__desc">
            <span class="employee__label">Technologies</span>:
            <span class="employee__content">${emp.technologies.join(', ')}</span>
          </p>
        </div>
      `
    });

    $container.innerHTML = innerHTML;
  }

  fetchEmployees();
})();
