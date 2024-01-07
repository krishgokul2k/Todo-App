const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const num = document.querySelector("span");
const link = document.querySelector("a");
const get = document.querySelector(".get");
console.log(get);
function Task(){
    let line =document.querySelector("hr");
    if(inputBox.value === ''){
        num.style.display = "none";
        link.style.display = "none";
        line.style.display = "none";
    }
    else{
        num.style.display = "block";
        link.style.display = "block";
        line.style.display = "block";
    }
}
const btn = document.querySelector("button");
console.log(btn);
btn.addEventListener("click", () =>{
    if(inputBox.value === ''){
        alert("you must write something!");
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let list = document.querySelectorAll("li");
        console.log(list);
        let arr = [list.length];
        arr.map((index)=>{
            get.innerHTML = index;
        })
    }
    inputBox.value = '';
})
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "A"){
        e.target.parentElement.remove();
    }
}, false);
