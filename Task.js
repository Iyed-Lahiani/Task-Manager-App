class Task {
    constructor(name) {
        this._name=name;
        this._id= (JSON.parse(localStorage.getItem("tasks")) || []).length;
    }

    getTaskElement(){
        const li =document.createElement("li");
        li.innerHTML= `${this._name} <button class="delete-btn">Delete</button>`;
        li.querySelector(".delete-btn").addEventListener('click',()=>{
            li.remove();
            let savedTasks = JSON.parse(localStorage.getItem("tasks"));
            savedTasks = savedTasks.filter(task => task.name !== this._name);
            localStorage.setItem("tasks",JSON.stringify(savedTasks))
        })
        return li;
    }
    static saveTasks(){
        let displayedTasks;
        displayedTasks=[];
        document.querySelectorAll("li").forEach((li,index)=>{
            const taskName = li.firstChild.textContent;
            displayedTasks.push({name:taskName,id:index});
        });
        localStorage.setItem("tasks",JSON.stringify(displayedTasks));
    }

    static loadTasks(){
        const savedTasks =JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach(task => {
            let loadedTask = new Task(task.name);
            loadedTask.id=task.id;
            document.getElementById("taskList").appendChild(loadedTask.getTaskElement())
        })
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}
export {Task}