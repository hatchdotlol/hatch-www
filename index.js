document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.getElementById("nav-links");

    const bubble = document.getElementById("nav-bubble");
    const links = navLinks.querySelectorAll("a");

    function moveBubble(target) {
        const rect = target.getBoundingClientRect();
        const parentRect = navLinks.getBoundingClientRect();
        bubble.style.width = rect.width + 16 + "px";
        bubble.style.height = rect.height + 8 + "px";
        bubble.style.left = rect.left - parentRect.left - 8 + "px";
        bubble.style.top = rect.top - parentRect.top - 4 + "px";
    }

    const cur = navLinks.querySelector(".nav-link-cur");
    if (cur) moveBubble(cur);

    links.forEach((link) => {
        link.addEventListener("mouseenter", () => moveBubble(link));
        link.addEventListener("focus", () => moveBubble(link));
    });

    navLinks.addEventListener("mouseleave", () => {
        if (cur) moveBubble(cur);
    });
});
