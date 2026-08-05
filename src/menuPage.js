export { menuPage };

const menuPage = (() => {
    const content = document.querySelector("#content");

    const build = () => {
        content.classList.add("content-menu");  
        
        const menuContainer = document.createElement("div");
        menuContainer.id = "menu-container"
        content.appendChild(menuContainer);

        const h1Menu = document.createElement("h1");
        h1Menu.textContent = "Menu";
        menuContainer.appendChild(h1Menu);


    }

    return { build };
})();