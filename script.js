let input = document.getElementById("input");

let button = document.getElementById("add");

let list = document.getElementById("list");


button.addEventListener("click", function () {

    if (input.value.trim()) { 

        let newElement = document.createElement("li");

        newElement.textContent = input.value; 

        list.appendChild(newElement); 

        input.value = ""; 

        newElement.addEventListener("click", function () {

            newElement.style.textDecoration = "line-through";

        });

        newElement.addEventListener("dblclick", function () {

            list.removeChild(newElement);

        });

    } else {

        alert("Please enter a task."); 

    }

});
