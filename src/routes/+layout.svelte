<script lang="ts">
  import { page } from "$app/state";
  import favicon from "$lib/assets/favicon.svg";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  let { children, data } = $props();

  let currentUser = $state(data.user);
  let popupOpen = $state(false);

  onMount(() => {
    const navLinks = document.getElementById("nav-links");
    const bubble = document.getElementById("nav-bubble");
    const links = navLinks?.querySelectorAll("a");
    if (!navLinks || !links || !bubble) return;

    function moveBubble(target: Element) {
      if (!navLinks || !links || !bubble) return;
      bubble.classList.remove("hidden");
      const rect = target.getBoundingClientRect();
      const parentRect = navLinks.getBoundingClientRect();
      bubble.style.width = rect.width + 16 + "px";
      bubble.style.height = rect.height + 8 + "px";
      bubble.style.left = rect.left - parentRect.left - 8 + "px";
      bubble.style.top = rect.top - parentRect.top - 4 + "px";
    }
    $effect(() => {
      links.forEach((link) => {
        if (
          link.href === page.url.href ||
          link.href === page.url.href.slice(0, page.url.href.length - 1)
        )
          link.classList.add("nav-link-cur");
        else link.classList.remove("nav-link-cur");
        link.addEventListener("mouseenter", () => moveBubble(link));
        link.addEventListener("focus", () => moveBubble(link));
      });
    });

    const cur = navLinks.querySelector(".nav-link-cur");
    if (cur) moveBubble(cur);

    navLinks.addEventListener("mouseleave", () => {
      if (cur) moveBubble(cur);
      else bubble.classList.add("hidden");
    });
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header>
  <div class="nav-logo">
    <img src="/assets/icon-transparent-yellow.png" alt="Hatch" />
    <a href="/">hatch</a>
  </div>
  <input id="nav-searchbar" type="text" placeholder="Search..." />
  <div id="nav-links">
    <div id="nav-bubble"></div>
    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/explore">Explore</a>
    <a class="nav-link" href="/about">About</a>
    <a class="nav-link" href="https://hatch.rayne.page">Editor</a>
    <a class="nav-link" href="https://wiki.hatch.lol">Wiki</a>
    <a class="nav-link" href="https://forums.hatch.lol">Forums</a>
  </div>
  {#if currentUser}
    <!-- svelte-ignore a11y_invalid_attribute -->
    <button id="nav-user" onclick={() => (popupOpen = !popupOpen)}>
      <div class="h-notifs">
        <i class="fa-solid fa-bell"></i>&nbsp;<span>5</span>
      </div>
      <img src="https://api.hatch.lol/users/{currentUser.name}/pfp" alt="Your profile" />
    </button>
  {:else}
    <div id="nav-login">
      <a href="/login" id="nav-login-btn">Log In</a>
      <a href="/signup" id="nav-signup-btn">Sign Up</a>
    </div>
  {/if}
</header>
{#if currentUser && popupOpen}
  <userbox transition:fly={{ duration: 100, y: "-0.5rem" }}>
    <div id="userbox-inner">
      <div>
        <p id="ub-name">Hello, {currentUser.displayName}!</p>
        <p id="ub-notifs-top">
          <i class="fa-solid fa-circle fa-xs"></i>&ensp;<span>5 new</span>
        </p>
      </div>
      <div id="ub-notifs">
        <div class="ub-notif ub-notif-alert">
          <p class="notif-alert-top">From the Hatch Team:</p>
          <p class="notif-alert-content">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit
            quisque faucibus ex sapien vitae.
          </p>
          <button class="notif-alert-dismiss">Dismiss</button>
        </div>
        <div class="ub-notif ub-notif-comment">
          <img src="/hatchling.webp" alt="Profile" />
          <div class="ub-notif-comment-inside">
            <p class="ub-notif-comment-top">
              <a href="/">@username</a> left a <a href="/">comment</a> on
              <a href="/">Project Name</a>
            </p>
            <p class="ub-notif-comment-content">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit
              quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
              Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo
              eu aenean.
            </p>
          </div>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-user"></i>
          <p><a href="/">@username</a> is now following you.</p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
        <div class="ub-notif ub-notif-short">
          <i class="fa-solid fa-envelope"></i>
          <p>
            There are new posts in your forum topic "<a href="/">Forum Topic</a>".
          </p>
        </div>
      </div>
      <div id="ub-uploads">
        <a
          href="/mystuff/upload"
          aria-label="upload"
          class="ub-upload"
          onclick={() => {
            popupOpen = !popupOpen;
          }}
        >
          <i class="fa-solid fa-plus"></i>
          &ensp;Upload Project
        </a>
        <a
          href="/mystuff"
          aria-label="my stuff"
          class="ub-mystuff"
          onclick={() => {
            popupOpen = !popupOpen;
          }}
        >
          <i class="fa-solid fa-folder"></i>
          &ensp;My Stuff
        </a>
      </div>
      <div id="ub-links">
        <a
          href="/users/{currentUser.name}"
          aria-label="Profile"
          class="ub-profile"
          onclick={() => {
            popupOpen = !popupOpen;
          }}
        >
          <i class="fa-solid fa-user"></i>
        </a>
        <a
          href="/settings"
          aria-label="Settings"
          class="ub-settings"
          onclick={() => {
            popupOpen = !popupOpen;
          }}><i class="fa-solid fa-gear"></i></a
        >
        <button
          aria-label="Log out"
          id="ub-logout"
          class="ub-logout"
          onclick={async () => {
            const logoutToken = localStorage.getItem("token");
            const res = await fetch("https://api.hatch.lol/auth/logout", {
              headers: logoutToken ? { Token: logoutToken } : undefined
            });
            localStorage.removeItem("token");
            if (res.ok) {
              window.location.reload();
            } else {
              console.log(
                "an error occurred while signing out, your token was probably invalid. you're logged out anyway and your stored token has been cleared. i just put this message here in case. i really don't know."
              );
            }
          }}
        >
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </div>
  </userbox>
{/if}
<main>
  {@render children?.()}
</main>
<footer>
  <div class="foot-top">
    <img src="/assets/icon-transparent-yellow.png" alt="Hatch" />
    <a href="/">hatch</a>
  </div>
  <div class="foot-links">
    <div class="foot-link-cat">
      <h4>About Hatch</h4>
      <a href="/about/">About</a>
      <a href="/about/contact/">Contact Us</a>
      <a href="https://github.com/hatchdotlol">Open Source</a>
      <a href="/about/team/">Hatch Team</a>
    </div>
    <div class="foot-link-cat">
      <h4>Community</h4>
      <a href="/explore/">Explore</a>
      <a href="https://forums.hatch.lol/">Forums</a>
      <a href="https://discord.gg/ENTDZdaGnD">Discord</a>
      <a href="https://wasteof.money/users/hatch">wasteof.money</a>
    </div>
    <div class="foot-link-cat">
      <h4>Resources</h4>
      <a href="/about/guidelines/">Guidelines</a>
      <a href="/about/terms/">Terms of Use</a>
      <a href="/about/privacy/">Privacy Policy</a>
      <a href="https://wiki.hatch.lol/">Wiki</a>
    </div>
  </div>
  <div class="foot-social">
    <a href="https://wasteof.money/users/hatch" target="_blank" aria-label="Wasteof"
      ><svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="30"
        height="14"
        viewBox="593.5285,388.2645,188.943,94.471"
      >
        <g
          fill="#ffbd59"
          fill-rule="evenodd"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
        >
          <path
            d="M593.5285,388.2645h188.943v94.471h-188.943zM605.3365,
                                    411.8825l12.907,47.271h13.897l8.152,-29.737h0.58l8.152,
                                    29.737h13.925l12.878,-47.271h-13.274l-7.232,31.57h-0.396l-7.784,
                                    -31.57h-13.062l-7.656,31.754h-0.425l-7.359,-31.754z"
            id="CompoundPath 1"
          />
        </g>
      </svg>
    </a>
    <a href="https://x.com/hatch_lol" target="_blank" aria-label="Twitter">
      <i class="fa-brands fa-twitter"></i>
    </a>
    <a href="https://bsky.app/profile/hatch.lol" target="_blank" aria-label="Bluesky">
      <i class="fa-brands fa-bluesky"></i>
    </a>
    <a href="https://discord.gg/ENTDZdaGnD" target="_blank" aria-label="Discord">
      <i class="fa-brands fa-discord"></i>
    </a>
  </div>
  <div class="foot-copyright">
    <p>&copy; 2024-2026 Hatch.lol</p>
  </div>
</footer>

<style>
  :root {
    --block1: #29272555;
    --block2: #8d857e55; /* for lighter foreground elements on top of --block1 or something */
    --bodyText: #fff;
    --links: #889aff;
    --primary: #ffbd59;
    --secondary: #ffe159;
    --sub: #979797;

    --themeGradient: linear-gradient(90deg, var(--secondary) 0%, var(--primary) 100%);

    --bgGradient: radial-gradient(circle at top left, #42331b 00%, #000 45%);
    --bgDots: radial-gradient(#7a7a7a 0.0625rem, transparent 0.0625rem);

    /* header specific colors */
    --headerBack: #1b1b1bcc;
    --navBubble: #dddddd33; /* the floaty bubble thing over nav links */
    --navLogin: #ffbd5944; /* used for outline around log in button in nav and search bar and other stuff */

    color-scheme: dark;
  }

  :global(*) {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  :global(body) {
    background: var(--bgGradient);
    font-family: "Outfit", sans-serif;
    color: var(--bodyText);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    padding-top: 1.25rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    :global(body) {
      padding-top: 0;
    }
  }

  :global(body::before) {
    content: "";
    position: absolute;
    inset: 0;
    background-image: var(--bgDots);
    background-size: 1.25rem 1.25rem;
    opacity: 0.25;
    pointer-events: none;
    z-index: -1;
  }

  :global(label) {
    display: block;
    width: fit-content;
    padding-bottom: 0.3rem;
  }

  main {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    max-width: 52rem;
    margin-left: auto;
    margin-right: auto;
  }

  header {
    position: sticky;
    top: 1.25rem;
    border-radius: 1000rem;
    background-color: var(--headerBack);
    gap: 1.25rem;
    display: flex;
    width: 100%;
    max-width: 51rem;
    margin-left: auto;
    margin-right: auto;
    height: 3rem;
    backdrop-filter: blur(0.7rem);
    justify-content: center;
    align-items: center;
    z-index: 1000;
    margin-bottom: 1.25rem;
    padding: 0.25rem 1rem;
  }

  @media (max-width: 768px) {
    header {
      max-width: 100%;
      border-radius: 0;
      top: 0 !important;
      margin-bottom: 1rem;
      height: auto;
      flex-wrap: wrap;
      padding: 0.5rem;
      gap: 0.5rem;
    }
    main {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      max-width: 100%;
    }
  }

  :global(a) {
    color: var(--links);
    text-decoration: underline;
  }

  .nav-logo {
    display: flex;
    gap: 0;
    align-items: center;
    height: 2.5rem;
  }

  .nav-logo img {
    height: 2.7rem;
  }

  .nav-logo a {
    font-family: "Comic Sans MS", "Comic Sans", "Comic Neue", sans-serif;
    color: var(--primary);
    font-size: 1.8em;
    font-weight: bold;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .nav-logo {
      height: 2rem;
      order: 1;
      float: left;
    }
    .nav-logo img {
      height: 2rem;
    }
    .nav-logo a {
      font-size: 1.4em;
    }
  }

  #nav-links {
    position: relative;
    align-items: center;
    justify-content: center;
    padding-left: 0.125rem;
    display: flex;
    gap: 1rem;
    opacity: 1;
    visibility: visible;
    width: 23rem;
    transition:
      opacity 0.3s cubic-bezier(0.4, 0.2, 0.2, 1),
      width 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
    overflow: hidden;
    padding: 0.5rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    #nav-links {
      width: auto;
      gap: 0.5rem;
      order: 4;
      flex-basis: 100%;
      padding: 0.25rem;
      justify-content: space-between;
      overflow-x: auto;
      overflow-y: hidden;
    }
    #nav-links a {
      font-size: 0.9em;
      padding: 0.25rem 0.5rem;
    }
    #nav-bubble {
      display: none;
    }
  }

  #nav-links a:focus-visible {
    outline: none;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    :has(#nav-searchbar:focus) #nav-links {
      opacity: 0;
      pointer-events: none;
      width: 0;
    }
  }

  #nav-bubble {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    background-color: var(--navBubble);
    border-radius: 1000rem;
    z-index: 0;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
    pointer-events: none;
    opacity: 1;
  }

  :global(#nav-bubble.hidden) {
    opacity: 0;
  }

  #nav-login {
    height: 2.4em;
    display: flex;
    border-radius: 1000rem;
    outline: 0.125rem solid var(--navLogin);
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  #nav-signup-btn {
    height: 2.4em;
    padding: 0.5rem 0.75rem;
    background: var(--secondary);
    background: var(--themeGradient);
    border-radius: 1000rem;
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }

  #nav-login-btn {
    height: 2.4em;
    padding: 0.5rem 0.75rem;
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    #nav-login {
      order: 2;
      height: 2rem;
      margin-left: auto;
    }
    #nav-signup-btn,
    #nav-login-btn {
      height: 2rem;
      padding: 0.35rem 0.5rem;
      font-size: 0.85em;
    }
  }

  #nav-user {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
    height: fit-content;
    background-color: var(--block1);
    padding: 0;
    padding-left: 0.4rem;
    border-radius: 1000px;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
    outline: 0.125rem solid var(--navLogin);
    position: relative;
    border: 0;
    font: inherit;
    cursor: pointer;
  }

  #nav-user:is(:hover, :focus-visible) {
    background-color: #dddddd33;
  }

  #nav-user img {
    border-radius: 50%;
    width: 1.875rem;
    aspect-ratio: 1 / 1;
  }

  @media (max-width: 768px) {
    #nav-user {
      order: 2;
      margin-left: auto;
      height: 2rem;
      padding-left: 0.25rem;
      gap: 0.25rem;
      font-size: 0.85em;
    }
    #nav-user img {
      width: 1.5rem;
    }
    .h-notifs {
      display: none;
    }
  }

  #nav-searchbar {
    font-family: "Outfit", sans-serif;
    height: 2.4em;
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.75rem;
    background-color: var(--block1);
    outline: 0.125rem solid var(--navLogin);
    border-radius: 1000rem;
    color: #fff;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  @media (max-width: 768px) {
    #nav-searchbar {
      order: 3;
      flex-basis: 100%;
      height: 2.2rem;
      font-size: 0.9em;
    }
  }

  :global(h1:not(.comment h1)) {
    padding: 0;
    margin: 0;
    font-size: 5em;
    font-weight: 600;
  }

  :global(h2) {
    font-size: 2em;
    font-weight: normal;
  }

  @media (max-width: 768px) {
    :global(h1:not(.comment h1)) {
      font-size: 2.5em;
    }
    :global(h2) {
      font-size: 1.5em;
    }
  }

  :global(.pill-btn) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    padding: 0;
    background-color: var(--primary);
    background-image: var(--themeGradient);
    font-size: 1em;
    color: #000;
    font: inherit;
    border: none;
    font-weight: bold;
    text-decoration: none;
    border-radius: 1000rem;
    margin-right: 0.375rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
    cursor: pointer;
  }

  :global(.pill-btn:hover) {
    box-shadow: 0 0 1rem 0 #ffbd59cc;
  }

  @media (max-width: 768px) {
    :global(.pill-btn) {
      height: 2rem;
      padding: 0.35rem 0.75rem;
      font-size: 0.9em;
      margin-right: 0.25rem;
    }
  }

  .nav-link {
    text-decoration: none;
    color: #fff;
  }

  :global(.nav-link-cur) {
    text-decoration: none;
    color: var(--primary) !important;
    font-weight: bold;
    border-radius: 1000rem;
  }

  :global(p) {
    margin: 1rem 0;
  }

  :global(td) {
    padding: 0.3rem;
  }
  /* scrollbar styles
 * thanks https://codepen.io/stephenpaton-tech/full/JjRvGmY for the tool
 * signed, jab11n
 */

  /* Firefox */
  :global(*) {
    scrollbar-width: auto;
    scrollbar-color: var(--primary) #1b1b1b;
  }

  /* Chrome, Edge, and Safari */
  :global(*::-webkit-scrollbar) {
    width: 1rem;
  }

  :global(*::-webkit-scrollbar-track) {
    border-radius: 0.625rem;
  }

  :global(*::-webkit-scrollbar-thumb) {
    background-color: var(--primary);
    border-radius: 0.625rem;
    border: 0.1875rem solid #1b1b1b;
  }

  /*end scrollbar styles
    begin header styles
*/

  .h-notifs {
    display: flex;
    flex-direction: row;
    gap: 2px;
    align-items: center;
    justify-content: center;
  }

  userbox {
    display: block;
    width: 51rem;
    margin-left: auto;
    margin-right: auto;
    position: sticky;
    top: 5.5rem;
    height: fit-content;
    padding-left: 29rem;
    z-index: 100;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    userbox {
      width: 100%;
      padding-left: 0;
      top: auto;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  #userbox-inner {
    pointer-events: all;
    position: absolute;
    width: auto;
    height: inherit;
    background-color: #1b1b1bcc;
    backdrop-filter: blur(0.7rem);
    border-radius: 1.5rem;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    #userbox-inner {
      position: fixed;
      width: 100%;
      max-height: 70vh;
      border-radius: 1.5rem 1.5rem 0 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem;
    }
  }

  #ub-name,
  #ub-notifs-top,
  .ub-notif-alert > p,
  .ub-notif-comment-inside > p {
    margin: 0;
  }

  #ub-name,
  #ub-notifs-top {
    text-align: center;
  }

  #ub-notifs-top {
    color: #8a8a8a;
  }

  #ub-notifs {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 22rem;
  }

  @media (max-width: 768px) {
    #ub-notifs {
      max-height: 60dvh;
    }
  }

  .ub-notif-short i {
    min-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ub-notif {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.4rem;
    border-radius: 0.8rem;
    background-color: #36363655;
    backdrop-filter: blur(0.7rem);
  }

  .ub-notif-alert {
    flex-direction: column !important;
    gap: 0.25rem !important;
    background-color: #c9131355 !important;
    border: 2px solid #c91313 !important;
  }

  .notif-alert-dismiss {
    background-color: #2b2b2b00;
    color: #fff;
    border: 2px solid #c91313;
    border-radius: 10000px;
    width: fit-content;
    padding: 0.25rem;
    cursor: pointer;
  }

  .notif-alert-top {
    font-weight: bold;
  }

  .ub-notif-comment-inside {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .ub-notif-comment > img {
    margin-top: 0.2rem;
    height: 1.875rem;
    width: 1.875rem;
    border-radius: 50%;
  }

  .ub-notif-short {
    align-items: center;
  }

  .ub-notif-short > p {
    margin: 0;
  }

  #ub-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  #ub-links > * {
    flex: 1;
    text-align: center;
    color: #fff;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
    border-radius: 0.8rem;
    padding: 0.5rem;
  }

  .ub-profile {
    background-color: #ffbd5955;
    border: 2px solid #ffbd59;
  }
  .ub-profile:hover {
    box-shadow: 0 0 1rem 0 #ffbd59cc;
  }

  .ub-settings {
    background-color: #6666ff55;
    border: 2px solid #6666ff;
  }
  .ub-settings:hover {
    box-shadow: 0 0 1rem 0 #6666ffcc;
  }

  .ub-logout {
    background-color: #c9131355;
    border: 2px solid #c91313;
    cursor: pointer;
  }
  .ub-logout:hover {
    box-shadow: 0 0 1rem 0 #c91313cc;
  }

  #ub-uploads {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  #ub-uploads > * {
    flex: 1;
    text-align: center;
    color: #fff;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
    border-radius: 0.8rem;
    padding: 0.5rem;
    text-decoration: none;
  }

  .ub-upload {
    background-color: #ffffff33;
    border: 2px solid #ffffff;
  }
  .ub-upload:hover {
    box-shadow: 0 0 1rem 0 #ffffffcc;
  }

  .ub-mystuff {
    background-color: #ddddaa55;
    border: 2px solid #ddddaa;
  }
  .ub-mystuff:hover {
    box-shadow: 0 0 1rem 0 #ddddaacc;
  }

  /*footer!*/

  footer {
    margin-top: 10rem;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-image: linear-gradient(0deg, #ffbd5955 0%, rgba(0, 0, 0, 0) 60%);
  }

  @media (max-width: 768px) {
    footer {
      margin-top: 2rem;
      gap: 1.5rem;
    }
  }

  .foot-top {
    display: flex;
    gap: 0;
    align-items: center;
    height: 2.5rem;
  }

  .foot-top img {
    height: 5rem;
  }

  .foot-top a {
    font-family: "Comic Sans MS", "Comic Sans", "Comic Neue", sans-serif;
    color: var(--primary);
    font-size: 3rem;
    font-weight: bold;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .foot-top {
      height: 2rem;
    }
    .foot-top img {
      height: 2.5rem;
    }
    .foot-top a {
      font-size: 1.8rem;
    }
  }

  .foot-links {
    display: flex;
    flex-direction: row;
    gap: 5rem;
  }

  .foot-link-cat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .foot-link-cat h4 {
    margin: 0.35rem 0;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    .foot-links {
      flex-direction: row;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .foot-link-cat {
      flex: 1 1 calc(50% - 0.75rem);
      min-width: 150px;
    }
    .foot-link-cat h4 {
      font-size: 1rem;
      margin: 0.25rem 0;
    }
    .foot-link-cat a {
      font-size: 0.9em;
    }
  }

  .foot-link-cat a {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 2px solid #ffbd5900;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .foot-link-cat a:hover {
    border-bottom: 2px solid #ffbd59;
  }

  .foot-social {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color: var(--primary);
    text-decoration: none;
  }
  .foot-social a {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    .foot-social {
      gap: 1rem;
    }
    .foot-social a {
      font-size: 1.3em;
    }
    .foot-social svg {
      width: 1.3em;
      height: 1.3em;
    }
  }

  .foot-copyright {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: linear-gradient(0deg, #ffbd59 0%, rgba(0, 0, 0, 0) 20%);
  }

  :global(input:where([type="text"], [type="password"], [type="email"]), select) {
    font: inherit;
    border: none;
    border-radius: 2rem;
    outline: 0.125rem solid #ffbd5944;
    background-color: var(--block1);
    padding: 0.5rem 0.75rem;
  }

  :global(.pfp) {
    border-radius: 30%;
    width: 3rem;
    height: 3rem;
    aspect-ratio: 1 / 1;
  }

  :global(a.user, a .user) {
    color: var(--primary);
  }

  :global(sub) {
    font-size: 0.9rem;
    color: var(--sub);
  }

  :global(.action-row) {
    display: flex;
    overflow-y: visible !important;
    align-items: center;
  }

  :global(.action-row > :is(a, button)) {
    flex: 1 0;
  }

  :global(.title-box) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    position: relative;
  }

  :global(.see-all) {
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  :global(.see-all:hover) {
    color: var(--primary);
    font-weight: bold;
    text-shadow:
      0 0 0.5rem #ffe15955,
      0 0 0.75rem #ffbd5955,
      0 0 1rem #ffbd5955;
  }

  @media (max-width: 768px) {
    :global(.see-all) {
      font-size: 1em;
    }
  }

  :global(.project-row) {
    width: 100%;
    height: 12.5rem;
    border-radius: 1.25rem;
    overflow-x: auto;
    overflow-y: hidden;
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background-color: var(--block1);
  }

  @media (max-width: 768px) {
    :global(.project-row) {
      height: auto;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
