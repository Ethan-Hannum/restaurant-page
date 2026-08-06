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

        const section1 = document.createElement("div");
        section1.classList.add("menu-section");
        menuContainer.appendChild(section1);

        const menuHeader1 = document.createElement("h2");
        menuHeader1.textContent = "Appetizers";
        section1.appendChild(menuHeader1);

        const appetizers = document.createElement("ul");
        appetizers.classList.add("menu-list", "appetizers");
        section1.appendChild(appetizers);

        const appDiv1 = document.createElement("div");
        appDiv1.classList.add("menu-item");
        appetizers.appendChild(appDiv1);

        const carpaccio = document.createElement("li");
        carpaccio.textContent = "Beef Carpaccio";
        appDiv1.appendChild(carpaccio);

        const carpDesc = document.createElement("p");
        carpDesc.textContent = "Locally sourced beef with our own vinegar base";
        appDiv1.appendChild(carpDesc);

        const carpPrice = document.createElement("p");
        carpPrice.textContent = "$12";
        appetizers.appendChild(carpPrice);

        const appDiv2 = document.createElement("div");
        appDiv2.classList.add("menu-item");
        appetizers.appendChild(appDiv2);

        const escargot = document.createElement("li");
        escargot.textContent = "Escargot";
        appDiv2.appendChild(escargot);

        const escargotDesc = document.createElement("p");
        escargotDesc.textContent = "The best escargot around. Made with garlic, butter and parsley";
        appDiv2.appendChild(escargotDesc);

        const escargotPrice = document.createElement("p");
        escargotPrice.textContent = "$15";
        appetizers.appendChild(escargotPrice);

        const appDiv3 = document.createElement("div");
        appDiv3.classList.add("menu-item");
        appetizers.appendChild(appDiv3);

        const calamari = document.createElement("li");
        calamari.textContent = "Calamari";
        appDiv3.appendChild(calamari);

        const calamariDesc = document.createElement("p");
        calamariDesc.textContent = "Fried breaded squid served with homemade marinara sauce";
        appDiv3.appendChild(calamariDesc);

        const calamariPrice = document.createElement("p");
        calamariPrice.textContent = "$20";
        appetizers.appendChild(calamariPrice);

        const appDiv4 = document.createElement("div");
        appDiv4.classList.add("menu-item");
        appetizers.appendChild(appDiv4);

        const tartare = document.createElement("li");
        tartare.textContent = "Steak Tartare";
        appDiv4.appendChild(tartare);

        const tartareDesc = document.createElement("p");
        tartareDesc.textContent = "Made with onions, capers and parsley with Worcestershire sauce to season";
        appDiv4.appendChild(tartareDesc);

        const tartarePrice = document.createElement("p");
        tartarePrice.textContent = "$30";
        appetizers.appendChild(tartarePrice);

        const appDiv5 = document.createElement("div");
        appDiv5.classList.add("menu-item");
        appetizers.appendChild(appDiv5);

        const potato = document.createElement("li");
        potato.textContent = "Potato Skins";
        appDiv5.appendChild(potato);

        const potatoDesc = document.createElement("p");
        potatoDesc.textContent = "Classic potato skins, served with ranch dipping sauce";
        appDiv5.appendChild(potatoDesc);

        const potatoPrice = document.createElement("p");
        potatoPrice.textContent = "$12";
        appetizers.appendChild(potatoPrice);

        const section2 = document.createElement("div");
        section2.classList.add("menu-section");
        menuContainer.appendChild(section2);

        const menuHeader2 = document.createElement("h2");
        menuHeader2.textContent = "Main Course";
        section2.appendChild(menuHeader2);

        const mainCourse = document.createElement("ul");
        mainCourse.classList.add("menu-list", "main-course");
        section2.appendChild(mainCourse);

        const mainDiv1 = document.createElement("div");
        mainDiv1.classList.add("menu-item");
        mainCourse.appendChild(mainDiv1);

        const bisque = document.createElement("li");
        bisque.textContent = "Lobster Bisque";
        mainDiv1.appendChild(bisque);

        const bisqueDesc = document.createElement("p");
        bisqueDesc.textContent = "Traditional Bisque, favorite of the Head Chef";
        mainDiv1.appendChild(bisqueDesc);

        const bisquePrice = document.createElement("p");
        bisquePrice.textContent = "$55";
        mainCourse.appendChild(bisquePrice);

        const mainDiv2 = document.createElement("div");
        mainDiv2.classList.add("menu-item");
        mainCourse.appendChild(mainDiv2);

        const filet = document.createElement("li");
        filet.textContent = "Filet Mignon";
        mainDiv2.appendChild(filet);

        const filetDesc = document.createElement("p");
        filetDesc.textContent = "Crowd favorite 8oz Filet Mignon Steak";
        mainDiv2.appendChild(filetDesc);

        const filetPrice = document.createElement("p");
        filetPrice.textContent = "$60";
        mainCourse.appendChild(filetPrice);

        const mainDiv3 = document.createElement("div");
        mainDiv3.classList.add("menu-item");
        mainCourse.appendChild(mainDiv3);

        const wagyu = document.createElement("li");
        wagyu.textContent = "A5 Wagyu Steak";
        mainDiv3.appendChild(wagyu);

        const wagyuDesc = document.createElement("p");
        wagyuDesc.textContent = "Top Tier Wagyu from Japan";
        mainDiv3.appendChild(wagyuDesc);

        const wagyuPrice = document.createElement("p");
        wagyuPrice.textContent = "$75";
        mainCourse.appendChild(wagyuPrice);

        const section3 = document.createElement("div");
        section3.classList.add("menu-section");
        menuContainer.appendChild(section3);

        const menuHeader3 = document.createElement("h2");
        menuHeader3.textContent = "Desserts";
        section3.appendChild(menuHeader3);

        const dessert = document.createElement("ul");
        dessert.classList.add("menu-list", "dessert");
        section3.appendChild(dessert);

        const dessertDiv1 = document.createElement("div");
        dessertDiv1.classList.add("menu-item");
        dessert.appendChild(dessertDiv1);

        const brulee = document.createElement("li");
        brulee.textContent = "Crème Brûlée";
        dessertDiv1.appendChild(brulee);

        const bruleeDesc = document.createElement("p");
        bruleeDesc.textContent = "Torched for that perfect crust";
        dessertDiv1.appendChild(bruleeDesc);

        const bruleePrice = document.createElement("p");
        bruleePrice.textContent = "$25";
        dessert.appendChild(bruleePrice);

        const dessertDiv2 = document.createElement("div");
        dessertDiv2.classList.add("menu-item");
        dessert.appendChild(dessertDiv2);

        const souffle = document.createElement("li");
        souffle.textContent = "Chocolate Souffle";
        dessertDiv2.appendChild(souffle);

        const souffleDesc = document.createElement("p");
        souffleDesc.textContent = "A delicant chocolate sourffle to end the night";
        dessertDiv2.appendChild(souffleDesc);
        
        const soufflePrice = document.createElement("p");
        soufflePrice.textContent = "$25";
        dessert.appendChild(soufflePrice);
    }

    return { build };
})();