const params = new URLSearchParams(window.location.search);
const username = params.get("u");

let client_username;
if (localStorage.getItem("token")) {
  fetch("https://api.hatch.lol/auth/me", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  }).then((res) =>
    res.json().then((data) => {
      client_username = data.name;
  
      if (username.toLowerCase() === client_username.toLowerCase()) {
        document.querySelector("#follow-button").remove();
      }
  
      fetch(`https://api.hatch.lol/users/${username}/followers`).then(
        (followers) => {
          followers.json().then((data) => {
            let followers = [];
            data.followers.forEach((user) => {
              followers.push(user.name);
            });
            if (document.querySelector("#follow-button-text")) {
              document.querySelector("#follow-button-text").innerText =
                `${followers.includes(client_username) ? "Unf" : "F"}ollow`;
            }
          });
        },
      );
  
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
  document.querySelector("#follow-button").remove();
}

if (document.querySelector("#follow-button")) {
  document.querySelector("#follow-button").addEventListener("click", () => {
    fetch(`https://api.hatch.lol/users/${username}/followers`).then(
      (followers) => {
        followers.json().then((data) => {
          let followers = [];
          data.followers.forEach((user) => {
            followers.push(user.name);
          });
          fetch(
            `https://api.hatch.lol/users/${username}/${followers.includes(client_username) ? "un" : ""}follow`,
            {
              method: "POST",
              headers: {
                Token: localStorage.getItem("token"),
              },
            },
          ).then((res) => {
            if (res.status === 200) {
              document.querySelector("#follow-button-text").innerText =
                `${followers.includes(client_username) ? "F" : "Unf"}ollow`;
            }
          });
        });
      },
    );
  });
}

fetch(`https://api.hatch.lol/users/${username}`).then((res) => {
  if (res.status === 200) {
    res.json().then((data) => {
      document.title = `${data.displayName} (@${data.name}) on Hatch`;

      if (data.verified == false) {
        document.querySelector("#verified-check").remove();
      }
      document.querySelector("#banner-image").src =
        data.bannerImage === null
          ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          : data.bannerImage;
      document.querySelector("#displayname").innerText = data.displayName;
      document.querySelector("#username").innerText = `@${data.name}`;
      document.querySelector("#bio").innerHTML = data.bio ? text_modify(data.bio) : "";
      document.querySelector("#pfp").src =
        `https://api.hatch.lol${data.profilePicture}?size=70`;
      document.querySelector("#banner").src = data.bannerImage;
      document.querySelector("#followers-count").innerText = data.followerCount;
      document.querySelector("#followers-link").href = `/user/followers/?u=${data.name}`;
      document.querySelector("#following-link").href = `/user/following/?u=${data.name}`;
      document.querySelector("#following-count").innerText =
        data.followingCount;
      document.querySelector("#posts-count").innerText = data.projectCount;
      document.querySelector("#status").innerHTML = data.hatchTeam
        ? '<i class="fa-solid fa-shield-halved"></i> Hatch Team'
        : "Hatchling";
      document.querySelector("#joindate").innerText =
        `Joined ${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date(data.joinDate).getMonth()]} ${new Date(data.joinDate).getDate()}, ${new Date(data.joinDate).getFullYear()}`;
      document.querySelector("#country").innerText = data.country;
      document.querySelector("#connections-list").innerText = "Coming soon...";
      document.body.classList.remove("loading");
    });
  } else if (res.status === 404) {
    window.history.replaceState(null, "", "/404/");
    window.location.assign("/404/");
  }
});

fetch(`https://api.hatch.lol/users/${username}/following`).then((res) => {
  if (res.status === 200) {
    res.json().then((data) => {
      const currentUsername = document.querySelector("#usernamenav");
      if (localStorage["token"] && currentUsername) {
        if (!data.following.includes(currentUsername.innerText)) {
          document.querySelector("#followstatus").style.display = "block";
        }
      }
    });
  }
});

function get_relative_time(timestamp) {
  let date = new Date(timestamp);
  let c_date = new Date(Date.now());
  if (date.getUTCFullYear() === c_date.getUTCFullYear()) {
    if (date.getUTCMonth() === c_date.getUTCMonth()) {
      if (date.getUTCDate() === c_date.getUTCDate()) {
        if (date.getUTCHours() === c_date.getUTCHours()) {
          if (date.getUTCMinutes() === c_date.getUTCMinutes()) {
            if (date.getUTCSeconds() === c_date.getUTCSeconds()) {
              return `now`;
            } else {
              if (date.getUTCSeconds() > c_date.getUTCSeconds()) {
                return `in ${date.getUTCSeconds() - c_date.getUTCSeconds()} seconds`;
              } else {
                return `${c_date.getUTCSeconds() - date.getUTCSeconds()} seconds ago`;
              }
            }
          } else {
            if (date.getUTCMinutes() > c_date.getUTCMinutes()) {
              return `in ${date.getUTCMinutes() - c_date.getUTCMinutes()} minutes`;
            } else {
              return `${c_date.getUTCMinutes() - date.getUTCMinutes()} minutes ago`;
            }
          }
        } else {
          if (date.getUTCHours() > c_date.getUTCHours()) {
            return `in ${date.getUTCHours() - c_date.getUTCHours()} hours`;
          } else {
            return `${c_date.getUTCHours() - date.getUTCHours()} hours ago`;
          }
        }
      } else {
        if (date.getUTCDate() > c_date.getUTCDate()) {
          return `in ${date.getUTCDate() - c_date.getUTCDate()} days`;
        } else {
          return `${c_date.getUTCDate() - date.getUTCDate()} days ago`;
        }
      }
    } else {
      if (date.getUTCMonth() > c_date.getUTCMonth()) {
        return `in ${date.getUTCMonth() - c_date.getUTCMonth()} months`;
      } else {
        return `${c_date.getUTCMonth() - date.getUTCMonth()} months ago`;
      }
    }
  } else {
    if (date.getUTCFullYear() > c_date.getUTCFullYear()) {
      return `in ${date.getUTCFullYear() - c_date.getUTCFullYear()} years`;
    } else {
      return `${c_date.getUTCFullYear() - date.getUTCFullYear()} years ago`;
    }
  }
}

fetch(`https://api.hatch.lol/users/${username}/projects`).then((res) => {
  if (res.status === 200) {
    res.json().then((data) => {
      document.querySelector("#shared-projects-row").innerHTML = "";
      document.querySelector("#recent-activity").innerHTML = "";
      data.projects.forEach((project) => {
        document.querySelector("#shared-projects-row").innerHTML = `
                    <div class="project">
                        <div class="project-top">
                            <a href="/project/?id=${project.id}"><img src="https://api.hatch.lol${project.thumbnail}?size=140" alt="Project thumbnail" class="project-thumbnail"></a>
                            <p class="project-stats">
                                <i class="fa-solid fa-square-caret-up"></i>&ensp;?<br>
                                <i class="fa-solid fa-eye"></i>&ensp;?<br>
                                <i class="fa-solid fa-message"></i>&ensp;?<br>
                                <span class="project-date">${new Date(project.uploadTs * 1000).getMonth() + 1}/${new Date(project.uploadTs * 1000).getDate()}/${new Date(project.uploadTs * 1000).getFullYear() - 2000}</span>
                            </p>
                        </div>
                        <div class="project-bottom">
                            <h3 class="project-title"><a href="/project/?id=${project.id}">${project.title}</a></h3>
                            <p class="project-author">By <a href="/user/?u=${project.author.username}">@${project.author.username}</a></p>
                        </div>
                    </div>
                    ${document.querySelector("#shared-projects-row").innerHTML}`;
        document.querySelector("#recent-activity").innerHTML = `
          <li>Published <a href="/project/?id=${project.id}">${project.title}</a> <span class="activity-time">${get_relative_time(project.uploadTs*1000)}</span></li>
          ${document.querySelector("#recent-activity").innerHTML}`;
      });
    });
  }
});
