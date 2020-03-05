import axios from 'axios';
console.log('ok');
var $icon = document.getElementById('icon');
var $sidebar = document.getElementById('sidebar')
var $menuTitle = document.getElementsByClassName('menu__title')
var extended = false;
var $main = document.getElementById('main');
var $employeeItem = $('#employee-item').html();


console.log($employeeItem)

function menuTitleToggle() {
  for(var i = 0;i<$menuTitle.length;i++) {
    if(extended) {
      $menuTitle[i].classList.add('menu__title--none')
    } else {
      $menuTitle[i].classList.remove('menu__title--none')
    }
  }
}
$icon.addEventListener('click',(event) => {
  if(extended) {
    $sidebar.classList.remove('sidebar--extends');
    $icon.className = "sidebar__extend-icon fas fa-chevron-right fa-3x"
    $main.classList.remove("main--sidebar-extended")

  }else { 
    $sidebar.classList.add('sidebar--extends');
    $icon.className = "sidebar__extend-icon fas fa-chevron-left fa-3x"
    $main.classList.add("main--sidebar-extended")
  }
  menuTitleToggle()

  extended = !extended;
})

axios.get('http://www.mocky.io/v2/5e57c3773000004c00fd3d30')
.then(response => {
  var employees = response.data.employees;
  console.log(employees);
  for(var i = 0;i < employees.length;i++) {
    console.log(i);
    var template = $('#employee-item').html();
    $('#employees').append(template)

    $('.avatar').last().attr("src",employees[i].avatar)
    $('.first-name').last().text(employees[i].firstName)
    $('.last-name').last().text(employees[i].lastName)
    $('.occupation').last().text(employees[i].occupation)
  }
})




