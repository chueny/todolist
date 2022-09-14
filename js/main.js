document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{

        document.querySelector('#tasks').innerHTML += `
            <div class="task">
               <input type="checkbox" class="check">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="fa fa-trash"></i>
                </button>
            </div>
        `;

        //
    }

    // document.getElementById('myText').placeholder = "Add more tasks";

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }


   var doneTask = document.querySelectorAll(".check");
       for(let i=0; i<doneTask.length; i++){
        doneTask[i].onclick = function(){
            console.log("YOYO");
            this.parentNode.style.textDecoration = 'line-through';
        }
       }
}

//Other things to add to improve this to do list
//Checkbox --done
//Onclick of add button, place holder says "add more tasks"
//Local storage, so it stays on the computer if you close it
