(async () => {
    let client_username;
    if (localStorage.getItem("token")) {
        client_username = (await (await fetch("https://api.hatch.lol/auth/me", {
            headers: {
                Token: localStorage.getItem("token"),
            },
        })).json()).name;
    }
    document.getElementById("welcomebanner").textContent =
        "Welcome to Hatch, " + client_username + "!";
});
