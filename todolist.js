//selector
 const todoinput=document.querySelector(".todoinput");
 const todobtn=document.querySelector(".todobtn");
const todolist=document.querySelector(".todo-mainlist");
const todomain=document.querySelector(".todomainlist");

//event listerners
document.addEventListener('DOMContentLoaded',gettodos);
todobtn.addEventListener("click", addtodo);
todomain.addEventListener('click', delchk);

//functions

function addtodo(event){
    event.preventDefault();
    let input =todoinput.value;
    console.log(input); 
if( input === ''){
    alert("ENTER THE VALUE");
}else{   
    
   
const tododiv =document.createElement("div");//creating div
tododiv.classList.add("tododiv");//style
const todoli =document.createElement("li");//creating list
todoli.innerText=todoinput.value;//text inside
todoli.classList.add("todoli-style");//style
tododiv.appendChild(todoli);//appending li to div

//add local storage
savelocaltodos(todoinput.value);
// check mark
const completedbutton =document.createElement("button");
completedbutton.innerHTML='<i class="fas fa-check"></i>';
completedbutton.classList.add("completed-style");//style
tododiv.appendChild(completedbutton);

// trash mark
const trashbutton =document.createElement("button");
trashbutton.innerHTML='<i class="fas fa-trash"></i>';
trashbutton.classList.add("trash-style");//style
tododiv.appendChild(trashbutton);

//appent the tododiv to actual ul 
todomain.appendChild(tododiv);

todoinput.value='';
}
} 

function delchk(e){
 console.log(e.target);
  let item=e.target;
 if(item.classList[0]==="trash-style"){
  TODO=item.parentElement;
  TODO.classList.add("fall");//style
  removelocaltodos(TODO);
  TODO.addEventListener('transitionend',function(){
    TODO.remove();
  });
  
 }
 if(item.classList[0]==="completed-style"){
const todos=item.parentElement;
todos.classList.toggle("completed");
 }
}


function savelocaltodos(todo){
let todos;

if(localStorage.getItem("todos") === null){
  todos=[];
}else{
  todos=JSON.parse(localStorage.getItem("todos"));

}
todos.push(todo);
localStorage.setItem("todos",JSON.stringify(todos));


}

function gettodos(){
  let todos;

  if(localStorage.getItem("todos") === null){
    todos=[];
  }else{
    todos=JSON.parse(localStorage.getItem("todos"));
  
  }
  todos.forEach(function(todo){
      
const tododiv =document.createElement("div");//creating div
tododiv.classList.add("tododiv");//style
const todoli =document.createElement("li");//creating list
todoli.innerText=todo;
todoli.classList.add("todoli-style");//style
tododiv.appendChild(todoli);//appending li to div


// check mark
const completedbutton =document.createElement("button");
completedbutton.innerHTML='<i class="fas fa-check"></i>';
completedbutton.classList.add("completed-style");//style
tododiv.appendChild(completedbutton);

// trash mark
const trashbutton =document.createElement("button");
trashbutton.innerHTML='<i class="fas fa-trash"></i>';
trashbutton.classList.add("trash-style");//style
tododiv.appendChild(trashbutton);

//appent the tododiv to actual ul 
todomain.appendChild(tododiv);

  });

}

function removelocaltodos(TODO){
  console.log("deleted")
  let todos;

  if(localStorage.getItem("todos") === null){
    todos=[];
  }else{
    todos=JSON.parse(localStorage.getItem("todos"));
  
  }
  const todoindex=(TODO.children[0].innerText);
  todos.splice(todos.indexOf(todoindex),1);
  localStorage.setItem("todos",JSON.stringify(todos));
}