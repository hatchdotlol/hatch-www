const token = localStorage["token"];

if (token) {
  fetch("https://api.hatch.lol/auth/me", {
    headers: {
      Token: token,
    },
  }).then((res) => {
    res.json().then((data) => {
      document.querySelector("#welcomename").innerHTML =
        `Welcome back, ${data.displayName}!`;
      document
        .querySelector("#welcomepfp")
        .setAttribute("src", `https://api.hatch.lol${data.profilePicture}?size=100`);
      document.body.classList.remove("loading");
    });
  });
} else {
  document.querySelector("#welcome").style.display = "none";
}
