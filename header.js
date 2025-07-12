document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("header").innerHTML = await (await fetch("/components/header.html")).text();

    const navLinks = document.getElementById("nav-links");

    const bubble = document.getElementById("nav-bubble");
    const links = navLinks.querySelectorAll("a");

    function moveBubble(target) {
        bubble.classList.remove("hidden");
        const rect = target.getBoundingClientRect();
        const parentRect = navLinks.getBoundingClientRect();
        bubble.style.width = rect.width + 16 + "px";
        bubble.style.height = rect.height + 8 + "px";
        bubble.style.left = rect.left - parentRect.left - 8 + "px";
        bubble.style.top = rect.top - parentRect.top - 4 + "px";
    }
    
    links.forEach((link) => {
        if (link.href === location.href || link.href === location.href.slice(0, location.href.length - 1)) link.className = "nav-link-cur";
        link.addEventListener("mouseenter", () => moveBubble(link));
        link.addEventListener("focus", () => moveBubble(link));
    });
    
    const cur = navLinks.querySelector(".nav-link-cur");
    if (cur) moveBubble(cur);

    navLinks.addEventListener("mouseleave", () => {
        if (cur) moveBubble(cur);
        else bubble.classList.add("hidden");
    });
});
