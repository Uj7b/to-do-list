let search = document.getElementById("search");
let add = document.getElementById("add");
let apply = document.getElementById("apply");
let cancel = document.getElementById("cancel");
let addModal = document.getElementById("addTaskWindow");

search.addEventListener("input", (ev) => {
  console.log(ev.target.value);
});

function addTodo() {
  
}
function renderList() {}

function filterTodo() {}
add.addEventListener("click", (ev) => {
  addModal.style.visibility = "visible";
});
cancel.addEventListener("click", (ev) => {
  addModal.style.visibility = "hidden";
});
addModal.addEventListener("click", (e) => {
  if (e.target === addModal) {

    addModal.style.visibility = "hidden";
  }
  e.stopPropagation()
});

apply.addEventListener("click", addTodo())