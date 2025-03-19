document.addEventListener("DOMContentLoaded", async () => {
    if (localStorage.getItem("token")) {
        try {
            const authResponse = await fetch("https://api.hatch.lol/auth/me", {
                headers: {
                    Token: localStorage.getItem("token"),
                },
            });

            if (authResponse.ok) {
                const authData = await authResponse.json();

                if (authData.hatchTeam === true) {
                    const params = new URLSearchParams(window.location.search);
                    const username = params.get("u");

                    const userResponse = await fetch(
                        `https://api.hatch.lol/users/${username}`
                    );

                    if (userResponse.ok) {
                        const userdata = await userResponse.json();
                        const userJoinDate = userdata.joinDate;
                        const userBio = userdata.bio;
                        const pfpUrl = userdata.profilePicture;
                        const displayName = userdata.displayName;

                        const isBannedResponse = await fetch(
                            `https://api.hatch.lol/admin/user-banned/${username}`,
                            {
                                headers: {
                                    Token: localStorage.getItem("token"),
                                },
                            }
                        );
                        let isBanned;
                        if (isBannedResponse.ok) {
                            const isBannedData = await isBannedResponse.json();
                            if (isBannedData.banned === true) {
                                isBanned = "Banned";
                                document.getElementById(
                                    "displayname"
                                ).innerHTML = `${displayName} <i class="fa-solid fa-user-slash fa-xs"></i>`;
                            } else {
                                isBanned = "Not Banned";
                            }
                        } else {
                            isBanned = "Unknown";
                        }

                        document.getElementById("admin").innerHTML = `
                            <div id="adminuser">
                                <div id="adminusername">
                                    ${username} (${isBanned})
                                </div>
                                <div id="adminuserinfo">
                                    <div class="adminuserinfoitem">
                                        Created: ${userJoinDate}.
                                    </div>
                                    <div class="adminuserinfoitem">
                                        Email: <i>Unavailable</i>.
                                    </div>
                                    <div class="adminuserinfoitem">
                                        Last Login: <i>Unavailable</i>.
                                    </div>
                                </div>
                            </div>
                            <div class="spacer"></div>
                            <div id="adminnotes">
                                <div id="adminnotestitle">Notes</div>
                                <div class="spacer"></div>
                                <div id="adminnotescontent">
                                    Next time this user breaks the rules, ban them.<br /><br /><br />There's
                                    a lot of info here!!
                                </div>
                                <div class="spacer"></div>
                                <div class="adminbutton">Edit</div>
                            </div>
                            <div class="spacer"></div>
                            <div id="adminalts">
                                <div id="adminaltstitle">Alts</div>
                                <div class="spacer"></div>
                                <div id="adminaltscontent">
                                    <div class="alt">
                                        <a href="#null">wannaberose</a>&nbsp;
                                        <div class="accountbanned">(Banned)</div>
                                    </div>
                                    <div class="alt">
                                        <a href="#null">a</a>&nbsp;
                                        <div class="accountenabled">(Enabled)</div>
                                    </div>
                                </div>
                            </div>
                            <div class="spacer"></div>
                            <div id="adminalerts">
                                <div id="adminalertstitle">Alerts</div>
                                <div class="spacer"></div>
                                <div id="adminalertsgiven">
                                    <div class="adminalert">
                                        <div class="adminalerttext">
                                            Please do not insult browsers!
                                        </div>
                                        <div class="adminalertgiven">
                                            Admin: han (February 12, 2025)
                                        </div>
                                    </div>
                                    <div class="spacer"></div>
                                    <div class="adminalert">
                                        <div class="adminalerttext">
                                            Please do not insult browsers!
                                        </div>
                                        <div class="adminalertgiven">
                                            Admin: -gr (February 12, 2025)
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="spacer"></div>
                                    <div class="adminbutton">Send Alert</div>
                                </div>
                            </div>
                            <div class="spacer"></div>
                            <div id="adminbio">
                                <div id="adminbiotitle">Bio</div>
                                <div class="spacer"></div>
                                <div id="adminusersbio">${userBio}</div>
                                <div class="spacer"></div>
                                <div class="adminbutton">Edit Bio</div>
                            </div>
                            <div class="spacer"></div>
                            <div id="adminpfp">
                                <div id="adminpfptitle">Profile Picture</div>
                                <img
                                    src="https://api.hatch.lol/${pfpUrl}"
                                    id="userspfp"
                                    alt="Profile picture"
                                />
                                <div class="adminbutton">Reset Profile Picture</div>
                            </div>
                            <div class="spacer"></div>
                            <div id="admindisplayname">
                                <div id="admindisplaynametitle">Display Name</div>
                                <div class="spacer"></div>
                                <div id="adminusersdisplayname">${displayName}</div>
                                <div class="spacer"></div>
                                <div class="adminbutton">Change Display Name</div>
                            </div>
                            <div class="spacer"></div>
                            <div id="adminactions">
                                <div id="adminactionstitle">Administrative Actions</div>
                                <div class="spacer"></div>
                                <div class="adminbutton" id="adminaction-userban">Ban</div>
                                <div class="spacer"></div>
                                <div class="adminbutton" id="adminaction-userunban">Unban</div>
                                <div class="spacer"></div>
                                <div class="adminbutton">
                                    Verify User&nbsp;<i class="fa-solid fa-check"></i>
                                </div>
                                <div class="spacer"></div>
                                <div class="adminbutton" id="adminaction-changeusername">
                                    Change Username&nbsp;<i
                                        class="fa-solid fa-circle-exclamation"
                                    ></i>
                                </div>
                                <div class="spacer"></div>
                                <div class="adminbutton" id="adminaction-deleteuser">
                                    Delete&nbsp;<i
                                        class="fa-solid fa-circle-exclamation"
                                    ></i>
                                </div>
                                <div class="spacer"></div>
                                <div class="adminbutton" id="adminaction-makehatchteam">
                                    Make Hatch Team&nbsp;<i
                                        class="fa-solid fa-circle-exclamation"
                                    ></i>
                                </div>
                                <div class="spacer"></div>
                                <div class="adminbutton" id="adminaction-toggleusercomments">
                                    Toggle Comment Status <i>(Disabled)</i>
                                </div>
                            </div>
                        </div>
                        `;

                        let adminPanelElement =
                            document.getElementById("admin");
                        document.addEventListener("keydown", (event) => {
                            if (event.key === "a") {
                                if (
                                    adminPanelElement.style.display === "none"
                                ) {
                                    adminPanelElement.style.display = "block";
                                    console.log("admin panel opened");
                                } else {
                                    adminPanelElement.style.display = "none";
                                    console.log("admin panel closed");
                                }
                            }
                        });

                        document
                            .getElementById("adminaction-userban")
                            .addEventListener("click", async () => {
                                try {
                                    const response = await fetch(
                                        `https://api.hatch.lol/admin/ip-ban/${username}`,
                                        {
                                            method: "POST",
                                            headers: {
                                                Token: localStorage.getItem(
                                                    "token"
                                                ),
                                            },
                                        }
                                    );
                                    const data = await response.json();
                                    console.log(data);
                                    alert("banned: " + data["banned"]);
                                    window.location.reload();
                                } catch (error) {
                                    console.error("Error! ", error);
                                    alert(
                                        "An error occurred banning this user."
                                    );
                                }
                            });
                    }
                    document
                        .getElementById("adminaction-userunban")
                        .addEventListener("click", async () => {
                            try {
                                const response = await fetch(
                                    `https://api.hatch.lol/admin/ip-unban/${username}`,
                                    {
                                        method: "POST",
                                        headers: {
                                            Token: localStorage.getItem(
                                                "token"
                                            ),
                                        },
                                    }
                                );
                                const data = await response.json();
                                console.log(data);
                                alert("banned: " + data["banned"]);
                                window.location.reload();
                            } catch (error) {
                                console.error("Error! ", error);
                                alert("An error occurred unbanning this user.");
                            }
                        });
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
});
