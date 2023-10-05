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
}

function CreateProject(name){
    let newProject = new Project(name);
    projects.push(newProject);
}

// eslint-disable-next-line no-unused-vars
const NewProject = (() => {

    let isFormDisplayed = false;

    domElement.newProject.addEventListener('click', () => {
        // Dom
        if(!isFormDisplayed)
        {
            isFormDisplayed = true;
            let newProjectData = document.createElement('form');
            let newProjectNameDiv = document.createElement('div');
            let chooseProjectNameDiv = document.createElement('div');
            let newProjectNameLabel = document.createElement('label');
            let newProjectNameInput = document.createElement('input');
            let newProjectTitle = document.createElement('h2');
            let newProjectCreate = document.createElement('input');
            let cancel = document.createElement('input');
            

            // Content
            newProjectTitle.textContent = "New project";
        
            newProjectNameLabel.for = "name";
            newProjectNameLabel.textContent = "Name";
        
            newProjectNameInput.type ='text';
            newProjectNameInput.name = "name";
            newProjectNameInput.id = "name";

            newProjectCreate.type = 'submit';
            newProjectCreate.value = 'Create';
            newProjectCreate.id = 'create';

            cancel.type = 'submit';
            cancel.value = 'Cancel';
            cancel.id = 'cancel';

            //Style
            newProjectNameDiv.classList.add('newProjectData');
            chooseProjectNameDiv.classList.add('chooseProjectNameDiv');
        
            // Structure
            newProjectNameDiv.appendChild(newProjectTitle);
            chooseProjectNameDiv.appendChild(newProjectNameLabel);
            chooseProjectNameDiv.appendChild(newProjectNameInput);
            newProjectNameDiv.appendChild(chooseProjectNameDiv);
            newProjectNameDiv.appendChild(newProjectCreate);
            newProjectNameDiv.appendChild(cancel);

            newProjectData.appendChild(newProjectNameDiv);

            domElement.body.appendChild(newProjectData);

            newProjectData.addEventListener('submit', (event) => {
                event.preventDefault();
                CreateProject(event.target.name.value);
                newProjectNameDiv.classList.remove('newProjectData');
                domElement.body.removeChild(newProjectData);
                displayProjects();
            })

            cancel.addEventListener('click', () => {
                domElement.body.removeChild(newProjectData);
            })
        }
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


const displayProjects = () => {
    domElement.projectMenuSummary.innerHTML = "";
    projects.forEach(project => {
            let projectDiv = document.createElement('div');
            let projectName = document.createElement('div');
            let removeProject = document.createElement('div');
            projectName.textContent = project.name;
            removeProject.textContent = '-';
            removeProject.id = "remove";

            projectDiv.classList.add('projectDiv');

            projectDiv.appendChild(projectName);
            projectDiv.appendChild(removeProject);
            domElement.projectMenuSummary.appendChild(projectDiv);
    })
};

export { displayProjects }