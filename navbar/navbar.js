let logged_out = !localStorage.getItem("token");

if (!logged_out) {
    fetch("https://api.hatch.lol/auth/me", {
        headers: {
            Token: localStorage.getItem("token"),
        },
    }).then((res) => {
        if (res.status === 200) {
            res.json().then((json) => {
                document.querySelector(
                    "html"
                ).style = `--primary: ${json.theme}`;
                if (localStorage.getItem("theme") !== json.theme) {
                    localStorage.setItem("theme", json.theme);
                }
                document.getElementById(
                    "pfpnav"
                ).src = `https://api.hatch.lol${json.profilePicture}?size=30`;
                document.getElementById("usernamenav").innerText =
                    json.displayName;
                document.getElementsByClassName(
                    "nav-your-profile"
                )[0].href = `https://dev.hatch.lol/user/?u=${json.name}`;
            });
        } else {
            localStorage.removeItem("token");
            location.reload();
        }
    });
}

if (logged_out) {
    document.querySelector("html").style = "--primary: #ffbd59";
} else if (localStorage.getItem("theme")) {
    document.querySelector("html").style = `--primary: ${localStorage.getItem(
        "theme"
    )}`;
}

document.getElementById("navarea").innerHTML = `<div class="navbg"></div>
        <div class="nav">
          <div id="logo"><a href="https://dev.hatch.lol/"><img class="logo" src="/navbar/img/logo.png" alt="Hatch logo"></a></div>
          <div id="search">
            <i class="fa-solid fa-magnifying-glass" onclick="searchMade()"></i>
            <input type="text" id="searchinp" name="search" placeholder="Search..." size="3">
          </div>
          <a class="navitem" href="https://wiki.hatch.lol">
            Wiki
          </a>
          <a class="navitem" href="https://forums.hatch.lol/">
            Forums
          </a>
          <a class="navitem" href="https://dev.hatch.lol/about">
            About
          </a>
          <a class="navitem" href="https://dev.hatch.lol/explore">
            Explore
          </a>
          ${
              logged_out
                  ? `<a class="navitem" href="https://dev.hatch.lol/signup">
            Sign up
          </a>
          <a class="navitem" href="/login">
            Log in
          </a>`
                  : `<a class="navitem" id="mail" href="https://dev.hatch.lol/messages">
            <img src="/navbar/img/messages.svg" id="msgsym" alt="Messages" /><div id="messagect"><b>1</b></div>
        
          </a>
          <a class="navitem" href="https://dev.hatch.lol/mystuff">
          <i class="fa-regular fa-folder-open fa-2xl" id="mystuff"></i> 
          </a>
          <div id="userbox">
          <div id="userinfo"><img id="pfpnav" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="Your profile picture"><div id="usernamenav"> </div><div id="dropdownimgcover"><img id="dropdownarrow" src="/navbar/img/downarrow.png" alt="Dropdown arrow" /></div></div>
            <div id="userdrop" style="display: none" tabindex="0">
              <a class="dropdown-option nav-your-profile" id="highest">
                Your Profile
              </a>
              <a class="dropdown-option" href="https://dev.hatch.lol/settings">
                Account Settings
              </a>
              <a class="dropdown-option lowest" id="nav-sign-out">
                Sign Out
              </a>
            </div>
          </div>`
          }
        </div>`;

let x = document.querySelector("#userdrop");
let y = document.querySelector("#userinfo");

if (!logged_out) {
    document.querySelector("#nav-sign-out").addEventListener("click", () => {
        localStorage.removeItem("token");
        location.reload();
    });

    y.addEventListener("click", (e) => {
        e.preventDefault();
        dropToggle();
    });

    document.onclick = (e) => {
        if (!e.composedPath().includes(y)) {
            x.classList.remove("active");
        }
    };
}

function dropToggle() {
    x.classList.toggle("active");
}

function searchMade() {
    const searchinput = document.getElementById("searchinp").value.trim();
    let allowedchars = /^[a-zA-Z0-9-_]+$/;
    let searchTerm = searchinput.replaceAll(" ", "%20");
    if (searchinput[0] === "@" && allowedchars.test(searchinput.substring(1))) {
        window.location.href = `https://dev.hatch.lol/user/?u=${searchinput.substring(
            1
        )}`;
    } else if (
        searchinput[0] === "!" &&
        /^\d+$/.test(searchinput.substring(1))
    ) {
        window.location.href = `https://dev.hatch.lol/project/?id=${searchinput.substring(
            1
        )}`;
    } else if (
        (searchinput[0] === "`" || searchinput[0] === "\\") &&
        (searchinput[1] == "!" || searchinput[1] == "@")
    ) {
        window.location.href =
            "https://dev.hatch.lol/search/?q=" +
            encodeURIComponent(searchTerm.substring(1));
    } else {
        window.location.href =
            "https://dev.hatch.lol/search/?q=" + encodeURIComponent(searchTerm);
    }
}

const searchInp = document.getElementById("searchinp");
searchInp.onkeydown = (e) => {
    if (e.key === "Enter" && searchInp.value !== "") {
        searchMade();
    }
};
