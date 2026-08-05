import food1 from "./assets/food1.jpg";
export { homePage };
const homePage = (() => {
    const content = document.querySelector("#content");

    // Will create elements, then add content and selectors to them
    const build = () => {
        content.classList.add("content-home");

        // "quote-container" div
        const quoteContainer = document.createElement("div");
        quoteContainer.id = "quote-container";
        content.appendChild(quoteContainer);

        // "img-container" div
        const imgContainer = document.createElement("div");
        imgContainer.id = "img-container";
        quoteContainer.appendChild(imgContainer);

        // img
        const img = document.createElement("img");
        img.src = food1;
        img.alt = "foood";
        imgContainer.appendChild(img);

        // "quote" p
        const quote = document.createElement("p");
        quote.id = "quote";
        quote.textContent = "Good food is what makes life worth it all";
        quoteContainer.appendChild(quote)

        // "sidebar" div
        const sidebar = document.createElement("div");
        sidebar.id = "sidebar";
        content.appendChild(sidebar);

        // "hours" div
        const hours = document.createElement("div")
        hours.id = "hours";
        sidebar.appendChild(hours);

        // "Hours of Operation" h2
        const hoo = document.createElement("h2");
        hoo.textContent = "Hours of Operation";
        hours.appendChild(hoo);

        // ul
        const ul = document.createElement("ul");
        hours.appendChild(ul);

        // li's
        const mon = document.createElement("li")
        mon.textContent = "Mon: 4:00pm - 2:00am";
        const tue = document.createElement("li");
        tue.textContent = "Tue: 4:00pm - 2:00am";
        const wed = document.createElement("li");
        wed.textContent = "Wed: 4:00pm - 2:00am";
        const thu = document.createElement("li");
        thu.textContent = "Closed";
        const fri = document.createElement("li");
        fri.textContent = "Fri: 4:00pm - 2:00am";
        const sat = document.createElement("li");
        sat.textContent = "Sat: 5:00pm - 3:00am";
        const sun = document.createElement("li");
        sun.textContent = "Sun: 5:00pm - 3:00am";
        ul.append(mon, tue, wed, thu, fri, sat, sun);

        // "questions" div and p
        const questions = document.createElement("div");
        questions.id = "questions";
        sidebar.appendChild(questions);

        const qP1 = document.createElement("p");
        qP1.textContent = "Questions about availability or menu?"
        const qP2 = document.createElement("p");
        const phone = document.createElement("a");
        phone.href = "tel:+15550123456";
        phone.textContent = "(555) 012-3456"
        qP2.append("Please call us at ", phone)
        questions.append(qP1, qP2);

        // "reviews" div
        const reviews = document.createElement("div");
        reviews.id = "reviews";
        content.appendChild(reviews);

        // review-container 1
        const reContainer1 = document.createElement("div")
        reContainer1.classList.add("review-container")
        reviews.appendChild(reContainer1);

        const reHeader1 = document.createElement("div");
        reHeader1.classList.add("review-header");
        const title1 = document.createElement("p");
        title1.classList.add("review-title");
        title1.textContent = "Best Restaurant Ever";
        const name1 = document.createElement("p");
        name1.classList.add("review-name");
        name1.textContent = "John Doe";
        const body1 = document.createElement("p");
        body1.classList.add("review-body");
        body1.textContent = "The food here is so good, my husband and I are here every weekend!";
        reContainer1.append(reHeader1, body1);
        reHeader1.append(title1, name1);

        // review-container 2
        const reContainer2 = document.createElement("div")
        reContainer2.classList.add("review-container")
        reviews.appendChild(reContainer2);

        const reHeader2 = document.createElement("div");
        reHeader2.classList.add("review-header");
        const title2 = document.createElement("p");
        title2.classList.add("review-title");
        title2.textContent = "Chicken Parmesian";
        const name2 = document.createElement("p");
        name2.classList.add("review-name");
        name2.textContent = "Frank Linneti";
        const body2 = document.createElement("p");
        body2.classList.add("review-body");
        body2.textContent = "The Drunken Deer has the best Chicken Parm I've ever had.";
        reContainer2.append(reHeader2, body2);
        reHeader2.append(title2, name2);

        // review-container 3
        const reContainer3 = document.createElement("div")
        reContainer3.classList.add("review-container")
        reviews.appendChild(reContainer3);

        const reHeader3 = document.createElement("div");
        reHeader3.classList.add("review-header");
        const title3 = document.createElement("p");
        title3.classList.add("review-title");
        title3.textContent = "Love the Atmosphere";
        const name3 = document.createElement("p");
        name3.classList.add("review-name");
        name3.textContent = "Pamela Beasly";
        const body3 = document.createElement("p");
        body3.classList.add("review-body");
        body3.textContent = "The elegeant atmosphere and food make an amazing experience";
        reContainer3.append(reHeader3, body3);
        reHeader3.append(title3, name3);

    };

    const destroy = () => {
        content.classList.remove("content-home");

        const removeOne = (target) => {
            const element = document.querySelector(target);
            element.remove();
        }
        removeOne("#reviews")
        removeOne("#sidebar");
        removeOne("#quote-container");
    }

    return { build, destroy };
})();