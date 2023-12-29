document.addEventListener("DOMContentLoaded", function () {
    // Get all the links with an ID that starts with 'section-link'
    const sectionLinks = document.querySelectorAll('a[href^="#section-"]');

    // Loop through each link and add a click event listener
    sectionLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Smooth scrolling function
    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");

        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    }
});
