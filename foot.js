document.addEventListener("DOMContentLoaded", async () => {
    const footElement = document.getElementById("foot");
    footElement.innerHTML = await (await fetch("/components/foot.html")).text();
});
