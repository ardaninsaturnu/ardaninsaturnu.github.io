const form = document.getElementById('form');
const todoInput = document.getElementById('todo');

const bodyOne = document.querySelectorAll('#card-body')[0];
const bodyTwo = document.querySelectorAll('#card-body')[1];

const filterInput = document.getElementById('filter');
const todoList = document.getElementById('list-group');

const clear = document.querySelector('#clear');

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addTodo); //for elementi için eventler listelendi submit edildiğinde adtodo çalışsın
    document.addEventListener("DOMContentLoaded", callBackFromStorage);
    bodyTwo.addEventListener("click", deleteTodo);
    filterInput.addEventListener("keyup", filterTodos);
    clear.addEventListener("click", clearAllTodos)



}

function clearAllTodos(e) {

    if (confirm("are you sure about clear all todos?")) {

        todoList.innerHTML = "";
    }

    localStorage.removeItem("todos");


}

function filterTodos(e) {

    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-item");

    listItems.forEach(function(listI) {

        const text = listI.textContent.toLowerCase();

        if (text.indexOf(filterValue) === -1) {

            listI.setAttribute("style", "display : none");
        } else {

            listI.setAttribute("style", "display : flex");
        }

    });

}

function deleteTodo(e) {


    if (e.target.className === 'fa fa-times') {

        e.target.parentElement.parentElement.remove();

        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

    }


}

function deleteTodoFromStorage(deletetodo) {

    let todos = getFromStorage();

    todos.forEach(function(todo, index) {

        if (todo === deletetodo) {
            todos.splice(index, 1);
        }

    });

    localStorage.setItem("todos", JSON.stringify(todos));

}

function callBackFromStorage() {

    let todos = getFromStorage();

    todos.forEach(function(todo) {

        addTodoUı(todo);
    })

}

function addTodo(e) {

    const newTodo = todoInput.value.trim(); //inputa girilen todoyu aldım new todo değişkenine atadım

    if (newTodo === '') {

        /*<div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> This is an alert box.
        </div>*/

        showAlert('danger', 'Lütfen Bir Todo Giriniz');

    } else {

        addTodoUı(newTodo); //inputa girilen değeri parametre olarak aldığımız yeni bir fuction yapısı kurduk
        addStorage(newTodo);
        showAlert('cool', 'harika oluşturuldu');


    }


    e.preventDefault(); // sayfada ki linkin başka bir linke gitmesini önler

}

function getFromStorage() {

    let todos;

    if (localStorage.getItem('todos') === null) { //eğer storeda bu isimde bir array yoksa işlem yapılmasın ararry boş dönsün 

        todos = [];

    } else {

        todos = JSON.parse(localStorage.getItem("todos")); // string şeklinde alması için veriyi json parse yöntemi

    }

    return todos;

}

function addStorage(newTodo) {

    let todos = getFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));



}

function showAlert(type, message) {

    const alert = document.createElement('div');
    const spanAlert = document.createElement('span');

    spanAlert.className = "close";
    spanAlert.addEventListener('click', function() { alert.remove() })
    spanAlert.innerHTML = "&times;";

    alert.className = `alerts ${type}`;
    alert.textContent = message;


    alert.appendChild(spanAlert); //spanı alert divinin içine yerleştirdik
    bodyOne.appendChild(alert); //oluşturulan divide birinci bodynin sonuna eklenmesini söyledik


    //settimeout ile alerti 3000 ms yani 3 saniye sonra yok etmesini söyledik

    setTimeout(function() {

        alert.remove();

    }, 3000);


}

function addTodoUı(newTodo) {
    /*
    <li id="list-item" class="list-item">
                    ardaninsaturnu bitirilecek
                    <a href="#"><i class="fa fa-times"></i></a>
    </li>
    */

    const listItem = document.createElement('li');
    const link = document.createElement('a');

    listItem.className = 'list-item';
    listItem.id = 'list-item';

    link.href = "#";
    link.className = 'delete-item';
    link.innerHTML = "<i class='fa fa-times'></i>";


    listItem.appendChild(document.createTextNode(newTodo)); // appendchild elemanın sonuna ekler create text node ise text oluşturur
    listItem.appendChild(link); // a taginide li elementinin içine yerleştirdik 

    todoList.appendChild(listItem); //list itemların id si todolist olan ulnin altına eklemek için yazdık
    todoInput.value = ''; //ekleme işlemi tamamlandığında inputtaki değeri sıfırlamak ve kullancının yeni bir input girmesini sağlamak üzere boşaltılır
}