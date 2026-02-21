let search = document.getElementById("search");
let add = document.getElementById("add");
let apply = document.getElementById("apply");
let cancel = document.getElementById("cancel");
let addModal = document.getElementById("addTaskWindow");
let taskInput = document.getElementById("taskInput");
let list = document.getElementById("list");
search.addEventListener("input", (ev) => {
  console.log(ev.target.value);
});

function addTodo() {
  localStorage.setItem("task", taskInput.value); //! The key is unique, so it will only change, not add
  taskInput.value = "";
  addModal.style.visibility = "hidden";
}
function renderList() {
  for (let i = 0; i < localStorage.length; i++) {
    list.innerHTML += `
    <li>
            <div class="task">
              <input type="checkbox" name="" id="" />
              <span>${localStorage.getItem(localStorage.key(i))}</span>
            </div>
            <div class="action-buttons">
              <button class="edit">✏️</button><button class="delete">🗑️</button>
            </div>
          </li>`;
  }
}

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
  e.stopPropagation();
});

apply.addEventListener("click", addTodo);
