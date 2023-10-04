import * as domElement from './dom.js';

let projects = [];

function Project(name){
    this.name = name;
    this.tasks = [];
}

function Task(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
};

function CreateProject(name){
    let newProject = new Project(name);
    projects.push(newProject);
    console.log(projects);
}

const NewProject = (() => {

    domElement.newProject.addEventListener('click', () => {
        let newProjectData = document.createElement('form');
        let newProjectNameDiv = document.createElement('div');
        let newProjectNameLabel = document.createElement('label');
        let newProjectNameInput = document.createElement('input');
        let newProjectTitle = document.createElement('h2');
        let newProjectCreate = document.createElement('input');
        
        newProjectTitle.textContent = "Adding a new project";
    
        newProjectNameLabel.for = "name";
        newProjectNameLabel.textContent = "Name";
    
        newProjectNameInput.type ='text';
        newProjectNameInput.name = "name";
        newProjectNameInput.id = "name";

        newProjectCreate.type = 'submit';
        newProjectCreate.value = 'Create';

        newProjectNameDiv.classList.add('newProjectData');
    
        newProjectNameDiv.appendChild(newProjectTitle);
        newProjectNameDiv.appendChild(newProjectNameLabel);
        newProjectNameDiv.appendChild(newProjectNameInput);
        newProjectNameDiv.appendChild(newProjectCreate);
        newProjectData.appendChild(newProjectNameDiv);

        domElement.body.appendChild(newProjectData);

        newProjectData.addEventListener('submit', (event) => {
            event.preventDefault();
            CreateProject(event.target.name.value);
            newProjectNameDiv.classList.remove('newProjectData');
            domElement.body.removeChild(newProjectData);
        } )
    })
})();

let pro1 = new Project("Mon super projet");
let task1 = new Task("Creer une div", "inserer une div dans le html content", "14/10/2023", "haute");
let pro2 = new Project("Mon fabuleux projet");
let task2 = new Task("Creer une image", "inserer une image dans le html content", "14/10/2023", "haute");
let pro3 = new Project("Mon incroyable projet");
let task3 = new Task("Creer une voiture", "inserer une voiture dans le html content", "14/10/2023", "haute");
let pro4 = new Project("Mon projet de fou");
let task4 = new Task("Creer une machine", "inserer une voiture dans le html content", "14/10/2023", "haute");

projects.push(pro1);
pro1.tasks.push(task1);  
projects.push(pro2);
pro2.tasks.push(task2);
projects.push(pro3);
pro3.tasks.push(task3);
projects.push(pro4);
pro4.tasks.push(task4);


const displayProjects = (() => {
    projects.forEach(project => {
            let projectDiv = document.createElement('div');
            projectDiv.textContent = project.name;
            domElement.projectMenuSummary.appendChild(projectDiv);
    })
})();