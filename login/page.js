document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const username = document.getElementById("username");
    const password = document.getElementById("password");
  
    username.disabled = true;
    password.disabled = true;
  
    if (username.value === "" || password.value === "") {
      username.disabled = false;
      password.disabled = false;
      document.getElementById("error").innerText = "Username and password is required.";
      return;
    }
  
    const resp = await fetch("https://api.hatch.lol/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });
  
    if (resp.status === 400 || resp.status === 500) {
      username.disabled = false;
      password.disabled = false;
      document.getElementById("error").innerText = await resp.text();
      return;
    }
  
    username.disabled = false;
    password.disabled = false;
  
    localStorage.setItem("token", json.token);
    window.location.href = "/";
  });
});
