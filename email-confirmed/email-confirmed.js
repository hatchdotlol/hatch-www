let client_username;
if (localStorage.getItem("token")) {
    fetch("https://api.hatch.lol/auth/me", {
        headers: {
            Token: localStorage.getItem("token"),
        },
    }).then((res) =>
        res.json().then((data) => {
            client_username = data.name;
        })
    );
}
document.getElementById("welcomebanner").textContent =
    "Welcome to Hatch, " + client_username + "!";
