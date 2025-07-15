document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("header").innerHTML = await (
    await fetch("/components/header.html")
  ).text();
  document.getElementById("userbox").innerHTML = await (
    await fetch("/components/userbox.html")
  ).text();

  if (localStorage.getItem("token")) {
    const res = await fetch("https://apiv2.hatch.lol/auth/me", {
      headers: {
        Token: localStorage.getItem("token"),
      },
    });
    if (res.ok) {
      window.user = await res.json();
      document.getElementById("header").classList.add("logged-in");
      document.querySelector(
        "#nav-user img"
      ).src = `https://apiv2.hatch.lol/users/${user.name}/pfp`;
      document.querySelector("#nav-user span").innerText =
        user.displayName ?? user.username;
    }
  }

  const userbox = document.getElementById("userbox");
  document.getElementById("nav-user").addEventListener("click", () => {
    if (userbox.style.display == "block") {
      userbox.style.display = "none";
    } else {
      userbox.style.display = "block";
    }
  });

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
