const params = new URLSearchParams(window.location.search);
const username = params.get("u");

document.querySelector("#redirect").href = `/user/followers/?u=${username}`;

let client_username;
if (localStorage.getItem("token")) {
  fetch("https://api.hatch.lol/auth/me", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  }).then((res) =>
    res.json().then((data) => {
      client_username = data.name;
  
      fetch(`https://api.hatch.lol/users/${username}/following`).then(
        (following) => {
          following.json().then((data) => {
            let following = [];
            data.following.forEach((user) => {
              following.push(user.name);
            });
            if (!following.includes(client_username)) {
              document.querySelector("#followstatus").remove();
            }
          });
        },
      );
    }),
  );
} else {
  document.querySelector("#followstatus").remove();
}

fetch(`https://api.hatch.lol/users/${username}`).then((res) => {
  if (res.status === 200) {
    res.json().then((data) => {
      document.title = `${data.displayName} (@${data.name}) on Hatch`;

      if (data.verified == false) {
        document.querySelector("#verified-check").remove();
      }
      document.querySelector("#displayname").innerText = data.displayName;
      document.querySelector("#username").innerText = `@${data.name}`;
      document.querySelector("#pfp").src =
        `https://api.hatch.lol${data.profilePicture}?size=70`;
      document.querySelector("#following-count").innerText = data.followingCount;
      document.querySelector("#status").innerHTML = data.hatchTeam
        ? '<i class="fa-solid fa-shield-halved"></i> Hatch Team'
        : "Hatchling";
      document.body.classList.remove("loading");
    });
  } else if (res.status === 404) {
    window.history.replaceState(null, "", "/404/");
    window.location.assign("/404/");
  }
});

fetch(`https://api.hatch.lol/users/${username}/following`).then((res) => {
  if (res.ok) {
    res.json().then((data) => {
      let following_list = document.querySelector("#following-list");
      data.following.forEach((user) => {
        following_list.innerHTML = `
        ${following_list.innerHTML}
        <a class="small-user" href="/user/?u=${user.name}">
          <img src="https://api.hatch.lol${user.profilePicture}?size=70">
          <span>${user.displayName}</span>
        </a>`;
      });
    });
  }
});