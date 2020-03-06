import axios from 'axios'

let btn = document.getElementById("btn");
let collapsed = document.getElementById("collapsed")
let beCollapsed = false
btn.addEventListener("click", () => {
    if (beCollapsed) {
        collapsed.classList.add("collapsed--clicked");
    }
    else {
        collapsed.classList.remove("collapsed--clicked");
    }
    beCollapsed = !beCollapsed
})
axios.get('http://www.mocky.io/v2/5e57c3773000004c00fd3d30').then(res => {
    foo(res.data)
});
const foo = ({ employees }) => {
    employees.map(obj => {
        let h = document.getElementById("list");
        h.insertAdjacentHTML("afterend", `
        <div class="list__child">
        ${obj.firstName}
        ${obj.lastName}
        <img src="${obj.avatar}"></img>
        
        
        </div>
        
        
        ${obj.id}`);
    })

}

