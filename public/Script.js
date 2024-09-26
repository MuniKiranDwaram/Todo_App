let todo = JSON.parse(localStorage.getItem('todo')) || [];


const todoValue=document.getElementById("To-do-Value");
const AddToDo=document.getElementById("AddTodo");
const TodoList=document.getElementById("Todo-list");
const count=document.getElementById("Count");
const deleteAll=document.getElementById("DeleteAllButton");

let itemNumber = 0;


document.addEventListener("DOMContentLoaded", function() {


    AddToDo.addEventListener('click', AddToDOItem); // Pass the function reference
    todoValue.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') { // Check for Enter key
            AddToDOItem();
        }
    });
    deleteAll.addEventListener('click', DeleteAllToDoItems);
    //displayToDOList(); // Display existing todos on load
    });

    function updateLocalStorage()
    {
        localStorage.setItem("todo",JSON.stringify(todo));
    }

    function AddToDOItem()
    {
        itemNumber++;
        event.preventDefault();
        if(todoValue.value)
        {
            const Item = todoValue.value.trim();
            const newItemHTML = `<li class="flex items-center">
            <input type="checkbox" class="CheckBox_${itemNumber}">
            <p id="label_${itemNumber}" class="ml-2">${Item}</p>
            <i class="fa-regular fa-x" height=""5px" width="5px" onclick="removeItem(event)"></i>
            </li>`;
            TodoList.innerHTML += newItemHTML; 
            const label = document.getElementById(`label_${itemNumber}`);
            label.innerHTML = Item;
            todo.push(label.innerHTML);
            updateLocalStorage();
            todoValue.value = "";

            const checkBox = document.getElementsByClassName(`CheckBox_${itemNumber}`)[0];

            
            if (checkBox) { // Check if the checkbox exists
                checkBox.addEventListener('change', strikeoutItem); // Pass the function reference, do not call it
            }
            
            count.innerHTML = itemNumber + " items added";
        }
    }

    function DeleteAllToDoItems()
    {
        todo.length = 0;
        displayToDOList();
    }

    function displayToDOList()
    {
        if(todo.length === 0)
        {
            TodoList.innerHTML = ""; 
        }
        count.innerHTML = todo.length + " items added";
    }

    function removeItem(event)
    {
        const icon = event.target;
        const listItem = icon.closest('li');
        if(listItem)
        {
            listItem.remove();
            var removedItem = todo.indexOf(todo[itemNumber-1]);
            itemNumber = --itemNumber;
            todo.splice(removedItem,1);
            displayToDOList();
        }
    }

    function strikeoutItem(e)
    {
        const label = e.target.nextElementSibling; 
        label.classList.toggle("completed");
    }