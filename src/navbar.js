import * as domElement from './dom.js';

const navBar = (() => {
    // Dom
    let navBarDiv = document.getElementById('navBar');
    let menu = document.createElement('img');
    let title = document.createElement('h1');

    // Content
    menu.src = "../dist/img/menu.png";
    menu.alt = "https://www.flaticon.com/free-icons/hamburger";
    title.textContent = "To Do List";

    menu.addEventListener('click', () => {
        const projectMenu = domElement.projectMenu;
        projectMenu.classList.toggle('projectMenuTransition')
    });

    // Style
    menu.classList.add('menu');
    navBarDiv.classList.add('navBar');
    title.classList.add('navBarTitle');

    // Structure
    navBarDiv.appendChild(menu);
    navBarDiv.appendChild(title);

})();

export { navBar };