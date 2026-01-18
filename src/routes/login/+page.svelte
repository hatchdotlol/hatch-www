<script lang="ts">
  import { page } from "$app/state";

  let error = $state("");

  let username = $state("");
  let password = $state("");

  let thinking = $state(false);
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Mona+Sans:wdth,wght@87.5,700&display=swap"
    rel="stylesheet"
  />
  <!-- this is the github font, but it only imports the bold (700) weight and the 87.5 semicondensed width. it is used in the <span> of the github button -->
</svelte:head>

<div id="login">
  <h1>Welcome back</h1>
  {#if error}
    <p class="loginerror">Error: {error}</p>
  {:else}
    <p class="loginerror" style="display: none"></p>
  {/if}
  <button
    id="github"
    aria-label="Log in with GitHub"
    onclick={() => {
      window.open("https://api.hatch.lol/auth/github/login", "_blank", "width=600,height=700");
    }}><i class="fa-brands fa-github"></i>&ensp;Continue with <span>GitHub</span></button
  >
  <form
    onsubmit={async (event) => {
      event.preventDefault();
      if (username.trim() === "" || password.trim() === "") {
        error = "Please provide a username and password.";
        return;
      }

      const resp = await fetch("https://api.hatch.lol/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      thinking = false;

      if (resp.status === 400 || resp.status === 500) {
        error = await resp.text();
        return;
      }

      localStorage.setItem("token", (await resp.json()).token);
      const redirect = page.url.searchParams.get("redirect");
      if (redirect) {
        window.location.pathname = redirect;
      } else {
        window.location.pathname = "/";
      }
    }}
  >
    <p>
      <label for="username">Username</label><input
        type="text"
        bind:value={username}
        disabled={thinking}
      />
    </p>
    <p>
      <label for="password">Password</label><input
        type="password"
        bind:value={password}
        disabled={thinking}
      />
    </p>
    <input type="submit" value="Submit" class="pill-btn" />
  </form>
</div>

<style>
  #login {
    background-color: var(--block1);
    margin: auto;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #login h1 {
    font-size: 2.5em;
    margin-bottom: 1rem;
  }
  input[type="text"],
  input[type="password"] {
    width: 16rem;
  }
  .loginerror {
    padding: 0.5rem 0.75rem;
    background-color: #c9131355 !important;
    border: 2px solid #c91313 !important;
    border-radius: 1rem;
    width: 16rem;
    margin-bottom: 0;
  }
  #github {
    font: inherit;
    width: 16rem;
    padding: 0.5rem 0.75rem;
    border-radius: 2rem;
    background-color: #101411;
    color: #fff;
    border: 2px solid #fff;
    cursor: pointer;
  }
  #github span {
    font-family: "Mona Sans";
  }
  form > p {
    margin: 0.75rem 0;
  }
</style>
