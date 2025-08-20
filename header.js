

// get everything and assemble it into the navbar (minus the user)


document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("header").innerHTML = await (
        await fetch("/components/header.html")
    ).text();
    let userboxExcludedPaths = ["/login"];
    if (!userboxExcludedPaths.includes(window.location.pathname)) {
        document.getElementById("userbox").innerHTML = await (
            await fetch("/components/userbox.html")
        ).text();
    }

    
// get the user stuff if logged in and add it in

    
    if (localStorage.getItem("token")) {
        document.getElementById("header").classList.add("logged-in");
        const res = await fetch("https://api.hatch.lol/auth/me", {
            headers: {
                Token: localStorage.getItem("token"),
            },
        });
        if (res.ok) {
            window.user = await res.json();
            document.querySelector(
                "#nav-user img"
            ).src = `https://api.hatch.lol/users/${user.name}/pfp`;

            // document.querySelector("#nav-user span").innerText = user.displayName ?? user.username;
            // it's supposed to say notification count :bruhidle:
        }
    } else {
        document.getElementById("header").classList.add("logged-out");
    }

    const userbox = document.getElementById("userbox");
    document.getElementById("nav-user").addEventListener("click", () => {
        if (userbox.style.display == "block") {
            userbox.style.display = "none";
        } else {
            userbox.style.display = "block";
        }
    });
    
    
// this stuff controls the selection bubble in the navbar

    
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
        if (
            link.href === location.href ||
            link.href === location.href.slice(0, location.href.length - 1)
        )
            link.className = "nav-link-cur";
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
