const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");

const createTodo = () => {
    if (input.value.trim() === "") return alert("Напишите что нибудь");

    const div = document.createElement("div");
    const text = document.createElement("h3");
    const divs = document.createElement("div");
    const edit = document.createElement("button");
    const deleteBtn = document.createElement("button");

    div.setAttribute("class", "block_text");
    divs.setAttribute("class", "buttons_div");
    edit.setAttribute("class", "edit_button");
    deleteBtn.setAttribute("class", "delete_button");


    edit.innerHTML = 'edit';
    deleteBtn.innerHTML = 'delete';
    text.innerHTML = input.value;

    divs.append(edit, deleteBtn);
    div.append(text, divs);
    todoList.append(div);

    input.value = '';

    edit.onclick = () => {
        const editedText = prompt(`Введите изменения`).trim();
        if (editedText) {
            text.innerHTML = editedText;
        }
    }
    deleteBtn.onclick = () => {
        div.remove()
    }
}
createButton.onclick = () => createTodo()
// createButton.addEventListener("click", createTodo);

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") return createTodo();
});










