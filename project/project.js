const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const rate_dialog = document.querySelector("#rate-dialog");

document.querySelector("#share").addEventListener("click", () => {
    document.querySelector("#share-dialog").open =
        !document.querySelector("#share-dialog").open;
});

document.querySelector("#share-url").innerText = window.location.href;
document.querySelector(
    "#share-embed"
).innerText = `<iframe src="https://dev.hatch.lol/embed/?id=${id}" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>`;

const member_rating = (rating) => {
    if (rating === "N/A") {
        rate_dialog.innerHTML =
            "<h3>About this rating</h3><p>Projects with the age rating of N/A have not been rated by a Hatch Team member yet. This means the project content could contain anything, even if not appropriate for the site. Report projects that does not follow the Hatch Guidelines.</p>";
    } else if (rating === "E") {
        rate_dialog.innerHTML =
            "<h3>About this rating</h3><p>Projects with the age rating of E are suitable for all ages. This project contains little to no violence and/or language.</p>";
    } else if (rating === "7+") {
        rate_dialog.innerHTML =
            "<h3>About this rating</h3><p>Projects with the age rating of 7+ are suitable for most users. This project contains little to no violence and/or language, and may recieve an NFE rating on Scratch.</p>";
    } else if (rating === "9+") {
        rate_dialog.innerHTML =
            "<h3>About this rating</h3><p>Projects with the age rating of 9+ are suitable for some users. This project may contain some violence, cartoonish blood, light profanity, and scares, and would most likely recieve an NFE rating on Scratch.</p>";
    } else if (rating === "13+") {
        rate_dialog.innerHTML =
            "<h3>About this rating</h3><p>Projects with the age rating of 13+ are only suitable for teenagers. This project may contain intense violence, blood, profanity, scares, and moderate suggestive content, and would be taken down on Scratch.</p>";
    } else {
        rate_dialog.innerHTML =
            "<h3>About this rating</h3><p>This rating is not recognized.</p>";
    }
};

const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
};

const time_ago = (input) => {
    const date = new Date(input);
    const formatter = new Intl.RelativeTimeFormat("en");

    const secondsElapsed = (date.getTime() - Date.now()) / 1000;
    for (let key in ranges) {
        if (ranges[key] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key];
            return formatter.format(Math.round(delta), key);
        }
    }
};

fetch(`https://api.hatch.lol/projects/${id}`).then((res) => {
    if (res.status === 200) {
        document
            .querySelector("#project-comment-form")
            .addEventListener("submit", (e) => {
                e.preventDefault();

                fetch(`https://api.hatch.lol/projects/${id}/comments`, {
                    method: "POST",
                    headers: {
                        Token: localStorage.getItem("token"),
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        content: document.querySelector(
                            "#project-comment-form-input"
                        ).value,
                    }),
                }).then((res) => {
                    if (res.status === 200) {
                        document.querySelector(
                            "#project-comment-form-input"
                        ).value = "";
                        document.querySelector(
                            "#project-comment-form-input"
                        ).placeholder = "Comment posted!";
                    }
                });
            });

        res.json().then((data) => {
            document.title = `${data.title} on Hatch`;

            document.querySelector(
                "#author-logo"
            ).src = `https://api.hatch.lol${data.author.profilePicture}?size=70`;
            document.querySelector("#author-username").innerText =
                data.author.username;
            document.querySelector(
                "#author-username"
            ).href = `/user/?u=${data.author.username}`;

            document.querySelector("#project-title").innerText = data.title;
            document.querySelector("#project-version").innerText =
                "v" + data.version;
            document.querySelector("#project-publish-date").innerText =
                time_ago(data.uploadTs * 1000);
            document
                .querySelector("#project-publish-date")
                .setAttribute(
                    "title",
                    new Date(data.uploadTs * 1000).toString()
                );
            document.querySelector(
                "#project-embed"
            ).src = `https://warp.algebrahelp.org/embed.html?project_url=https://api.hatch.lol/projects/${id}/content${
                localStorage.getItem("token") && data.rating === "13+"
                    ? `?token=${localStorage.getItem("token")}`
                    : ""
            }`;
            document.querySelector("#project-description").innerHTML =
                text_modify(data.description);

            document.querySelector("#project-age-rating").innerText =
                data.rating;

            document.querySelector("#project-age-rating").classList.add(`teen-${data.rating}`);

            fetch("https://api.hatch.lol/auth/me", {
                headers: {
                    Token: localStorage.getItem("token"),
                },
            }).then((res) => {
                if (res.status === 200) {
                    res.json().then((user) => {
                        if (user.name === data.author.username) {
                            document.querySelector(
                                "#project-edit-button"
                            ).href = `/project/edit/?id=${id}`;
                        } else {
                            document
                                .querySelector("#project-edit-button")
                                .remove();
                        }
                        document.querySelector(
                            "#project-comment-form-pfp"
                        ).src = `https://api.hatch.lol${user.profilePicture}?size=40`;
                    });
                } else {
                    document.querySelector("#project-edit-button").remove();

                    if (data.rating === "13+") {
                        document.querySelector("#project-embed").remove();
                        document
                            .querySelector("#project-see-inside-button")
                            .remove();
                        document
                            .querySelector("#project-embed-container")
                            .classList.add("teen-block");
                        document
                            .querySelector("#download")
                            .classList.add("disabled");
                    }

                    document
                        .querySelectorAll(
                            ".interaction-button, .comment-input, #report"
                        )
                        .forEach((element) => {
                            element.classList.add("disabled");
                            element.tabIndex = -1;
                        });

                    document.querySelector(
                        "#project-comment-form-input"
                    ).disabled = true;
                }
            });

            document.querySelector(
                "#download"
            ).href = `https://api.hatch.lol/projects/${id}/content${
                localStorage.getItem("token") && data.rating === "13+"
                    ? `?token=${localStorage.getItem("token")}`
                    : ""
            }`;

            document.querySelector(
                "#project-see-inside-button"
            ).href = `https://turbowarp.org/editor?project_url=https://api.hatch.lol/projects/${id}/content${
                localStorage.getItem("token") && data.rating === "13+"
                    ? `%3Ftoken%3D${localStorage.getItem(
                          "token"
                      )}#-never-share-your-token`
                    : ""
            }`;

            fetch(`https://api.hatch.lol/projects/${id}/comments`).then(
                (res) => {
                    res.json().then((data) => {
                        Object.values(data).forEach((comment) => {
                            let exact_date = new Date(
                                comment.postDate * 1000
                            ).toString();
                            let date = time_ago(comment.postDate * 1000);
                            document.querySelector("#comments").innerHTML = `
        <div class="comment">
          <div class="comment-top">
            <img src="${`https://api.hatch.lol${comment.author.profilePicture}`}?size=40" class="comment-pfp" alt="Profile picture">
            <a href="/user/?u=${
                comment.author.username
            }" class="comment-username">${comment.author.displayName}</a>
            <p class="comment-time" title="${exact_date}">${date}</p><a class="comment-reply"><i class="fa-solid fa-reply"></i> Reply</a><a href="#report" class="comment-report"><i class="fa-solid fa-flag"></i></a>
          </div>
          <p class="content">${
              comment.replyTo === null
                  ? ""
                  : `<a href="/user/?u=${comment.replyTo}">@${comment.replyTo}</a> `
          }${text_modify(comment.content)}</p>
        </div>
        ${document.querySelector("#comments").innerHTML}`;
                        });
                    });
                }
            );

            document.querySelector("#upvote-count").innerText =
                "Coming soon...";
            document.querySelector("#downvote-count").innerText =
                "Coming soon...";
            document.querySelector("#vote-percent").innerText =
                "Coming soon...";
            document.querySelector("#project-tags").innerText =
                "Coming soon...";
            document.body.classList.remove("loading");

            if (localStorage.getItem("token")) {
                fetch("https://api.hatch.lol/auth/me", {
                    headers: {
                        Token: localStorage.getItem("token"),
                    },
                }).then((res) => {
                    if (res.status === 200) {
                        res.json().then((user_data) => {
                            const par = document.querySelector(
                                "#project-age-rating"
                            );
                            if (user_data.hatchTeam) {
                                par.style.cursor = "pointer";
                                let new_rating;
                                let rating_picker =
                                    rate_dialog.querySelector("select");
                                rating_picker.onchange = (e) => {
                                    new_rating = rating_picker.value;
                                };
                                rate_dialog.querySelector("button").onclick =
                                    () => {
                                        if (new_rating) {
                                            fetch(
                                                "https://api.hatch.lol/admin/set-rating",
                                                {
                                                    method: "POST",
                                                    headers: {
                                                        Token: localStorage.getItem(
                                                            "token"
                                                        ),
                                                        "Content-Type":
                                                            "application/json",
                                                    },
                                                    body: JSON.stringify({
                                                        project_id:
                                                            parseInt(id),
                                                        rating: new_rating,
                                                    }),
                                                }
                                            ).then((e) => {
                                                if (e.ok) {
                                                    par.innerHTML = new_rating;
                                                } else {
                                                    alert(
                                                        "Failed to change rating: " +
                                                            e.text
                                                    );
                                                }
                                            });
                                            rate_dialog.toggleAttribute("open");
                                        }
                                    };
                            } else {
                                member_rating(data.rating);
                            }
                        });
                    } else {
                        member_rating(data.rating);
                    }
                });
            } else {
                member_rating(data.rating);
            }
        });
    } else if (res.status === 404 || res.status === 422) {
        window.history.replaceState(null, "", "/404/");
        window.location.assign("/404/");
    }
});

const par = document.querySelector("#project-age-rating");
par.addEventListener("click", () => {
    rate_dialog.toggleAttribute("open");
});
