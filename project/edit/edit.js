const submit = document.getElementById("submit");
const id = new URLSearchParams(window.location.search).get("id");

fetch(`https://api.hatch.lol/projects/${id}`).then((res) => {
  if (res.status === 200) {
    res.json().then((data) => {
      document.getElementById("upload-title").value = data.title;
      document.getElementById("upload-description").value = data.description;
      document.getElementById("version-change").innerText =
        `version ${data.version} ➜ ${data.version + 1}`;
    });
  } else {
    window.location.href = "/404/";
  }
});

// this is template code someone pls fix :agony: (i know zero js i just need something here for testing, but this code probably sucks)
submit.addEventListener("click", function () {
  const title = document.getElementById("upload-title").value;
  const description = document.getElementById("upload-description").value;
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];
  const id = new URLSearchParams(window.location.search).get("id");

  const touChecked = document.getElementById("tou").checked;
  if (!touChecked) {
    alert("You must agree to the terms of use.");
    return;
  }

  const token = localStorage.getItem("token");

  const fileBlob = new Blob([file], { type: "application/zip" });

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  if (file) {
    formData.append("file", fileBlob, file.name);
  }

  submit.disabled = true;
  fetch(`https://api.hatch.lol/projects/${id}/update`, {
    method: "POST",
    headers: {
      Token: token,
    },
    body: formData,
  })
    .then(async (response) => {
      const resp = await response.json();

      if (!response.ok) {
        alert("Error: " + (await response.text()));
        return;
      }

      window.location.href = `/project/?id=${id}`;
    })
    .catch((error) => {
      submit.disabled = false;
      console.error("Error:", error);
      alert("There was an error updating the project.");
    });
});

fetch("https://api.hatch.lol/auth/me", {
  headers: {
    Token: localStorage.getItem("token"),
  },
}).then((res) => {
  if (res.status !== 200) {
    window.location.href = "/login/";
  }
});
