export { aboutPage };

const aboutPage = (() => {
    const content = document.querySelector("#content");

    const build = () => {
        const aboutContainer = document.createElement("div");
        aboutContainer.id = "about-container";
        content.appendChild(aboutContainer);

        const storyContainer = document.createElement("div");
        storyContainer.id = "story-container";
        aboutContainer.appendChild(storyContainer);

        const storyHeader = document.createElement("h2");
        storyHeader.textContent = "Our Story";
        storyContainer.appendChild(storyHeader);

        const storyDesc = document.createElement("p");
        storyDesc.textContent = "The Drunken Deer was founded with one goal in mind; \
        Serve amazing food and to build this website. We're proud of the experiences guests have at The Drunken Deer \
        From browsing the website beforehand to eating some of the best food around, we're confident you will have \
        a great time at The Drunken Deer";
        storyContainer.appendChild(storyDesc);

        const contactContainer = document.createElement("div");
        contactContainer.id = "contact-container";
        aboutContainer.appendChild(contactContainer);

        const contactHeader = document.createElement("h2");
        contactHeader.textContent = "Contact Us!";
        contactContainer.appendChild(contactHeader);

        const contactDesc = document.createElement("p");
        contactDesc.textContent = "For any questions or concerns, please contact us anytime below:"
        contactContainer.appendChild(contactDesc);

        const address = document.createElement("address");
        contactContainer.appendChild(address);

        const email = document.createElement("a");
        email.href = "mailto:thedrunkendeer@notareal.email.com";
        email.textContent = "thedrunkdeer@notareal.email.com";
        address.append("By Email: ", email);
        const emailBr = document.createElement("br");
        address.appendChild(emailBr);

        const contactPhone = document.createElement("a");
        contactPhone.href = "tel:+15550123456";
        contactPhone.textContent = "(555) 012-3456";
        address.append("By Phone: ", contactPhone);
        const phoneBr = document.createElement("br");
        address.appendChild(phoneBr);

        address.append("Or write to us at:");
        const addressBr1 = document.createElement("br");
        address.appendChild(addressBr1);
        address.append("The Drunken Deer");
        const addressBr2 = document.createElement("br");
        address.appendChild(addressBr2);
        address.append("12950 N 7th St");
        const addressBr3 = document.createElement("br");
        address.appendChild(addressBr3);
        address.append("Phoenix, AZ 85022");
    }

    return { build };
})();