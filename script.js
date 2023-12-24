const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// const num = document.querySelector(".num");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // let span = document.createElement("span");
        // span.innerHTML = "\u274C"
        // li.appendChild(span);
        let a = document.createElement("a");
        a.innerHTML = inputBox.value;
    }
    inputBox.value = "";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "A"){
        e.target.parentElement.remove();
    }
}, false);



