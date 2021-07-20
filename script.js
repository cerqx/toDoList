const valorInput = document.querySelector("#txt-tarefa");
const addBtn = document.querySelector("#btn-tarefa");

//função que adiciona tarefa
function addTask() {
    var taskTitle = valorInput.value;
    
    if(taskTitle){

        //clonar template
        var template = document.querySelector(".template")
        
        var newTarefa = template.cloneNode(true);
        
        //adicionar titulo

        newTarefa.querySelector(".titulo-tarefa").textContent = taskTitle;

        //remover classes desnecessárias
        newTarefa.classList.remove('template');
        newTarefa.classList.remove('hide');

        //adicionar na lista

        const list = document.querySelector(".task");

        console.log(list);

        list.appendChild(newTarefa);

        //remover tarefa 
        
        const removeBtn = newTarefa.querySelector("#btn-fechar").addEventListener("click", function(){
            removeTask(this);
        });

        //completar tarefa
        const doneBtn = newTarefa.querySelector("#btn-feito").addEventListener("click", function(){
            completeTask(this);
        })
        
        //limpar texto
        valorInput.value = "";

    }
};

//função de remover tarefa 

function removeTask(task){

    task.parentNode.remove(true);
};

function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}


addBtn.addEventListener("click", function(evento){
    evento.preventDefault();

    addTask();
})