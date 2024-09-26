function AddToDOItem()
    {
        const toDoItem = todoValue.value.trim();
        if(toDoItem !== "")
        {
            todo.push({text:toDoItem,disabled:false});
        }
        todoValue.value = "";
        updateLocalStorage();
        displayToDOList();
    }


    function displayToDOList()
    {
        TodoList.innerHTML ="";
        todo.forEach((item,index) => {
            const div = document.createElement('div');
            div.innerHTML = `
    <label for="todo-${index}" class="Todo_add">
      <input id="todo-${index}" type="checkbox" ${item.disabled ? "checked" : ""} class="todo-Checkbox" style="margin-right:5px;z-index: 5;">
      <p id="input-${index}" class="${item.disabled ? "disabled" : ""}" onclick="editInput(${index}); event.stopPropagation();">
        ${item.text}
      </p>
    </label>
`;

            div.querySelector(".todo-Checkbox").addEventListener("change",function(){
                toggleTask(index);
            });

            //p.getElementById(`todo-${index}`).addEventListener("click",editInput(index))
            TodoList.appendChild(div);
            count.innerHTML = todo.length + " items added";
        });
    }

    function editInput(index)
    {
        var existingText = todo[index].text;
        let newText = prompt("Edit the text:", todo[index].text);
        if (newText !== null) 
        {
            this.innerText = newText;
        }
        else{
            this.innerText = existingText;
        }

        todo[index].text = this.innerText;
    }

    function toggleTask(index)
    {
        todo[index].disabled != todo[index].disabled;
        updateLocalStorage();
        displayToDOList();
    }

    function DeleteAllToDoItems()
    {
        todo.length = 0;
        count.innerHTML = todo.length;
        updateLocalStorage();
        displayToDOList();
    }