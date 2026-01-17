<script lang="ts">
  import Project from "$lib/components/Project.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const token = localStorage.getItem("token");
  });

  let { data } = $props();
  let currentUser = $state(data.user);
  let projects: {
    author: string;
    downvotes: number;
    id: number;
    name: string;
    upvotes: number;
  }[] = [
    {
      author: "hatch",
      downvotes: 10,
      id: 1,
      name: "Project Name",
      upvotes: 90
    },
        {
      author: "hatch",
      downvotes: 10,
      id: 1,
      name: "Project Name",
      upvotes: 90
    },
    {
      author: "hatch",
      downvotes: 10,
      id: 1,
      name: "Project Name",
      upvotes: 90
    },
        {
      author: "hatch",
      downvotes: 10,
      id: 1,
      name: "Project Name",
      upvotes: 90
    },
    {
      author: "hatch",
      downvotes: 10,
      id: 1,
      name: "Project Name",
      upvotes: 90
    }
  ];
</script>

{#if !currentUser}
  <img src="/assets/neon.png" id="home-neon-logo" alt="Hatch logo" />
  <div id="home-info-top">
    <h1 id="big-header" class="home-text">
      Welcome to <span>Hatch</span>
    </h1>
    <p>
      Hatch isn't out yet, but when it is, we want you to be the first to know! Join our Discord
      server and follow us on our socials to get the latest on development and hang out with the
      community.
    </p>
    <div class="home-text-btns">
      <a href="https://discord.gg/ENTDZdaGnD" class="pill-btn"
        ><i class="fa-brands fa-discord"></i>&ensp;Join our Discord</a
      >
      <a href="https://wasteof.money/users/hatch" class="home-social-btn">
        <!-- I do love me some SVGs... 
                        but it's really annoying to implement them
                        sometimes ~Kat -->

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="95.9796625"
          height="12.9898312"
          viewBox="593.5285,388.2645,188.943,94.471"
        >
          <g
            fill="#000000"
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
      <a href="https://x.com/hatch_lol" class="home-social-btn" aria-label="Twitter"
        ><i class="fa-brands fa-twitter"></i></a
      >
      <a href="https://bsky.app/profile/hatch.lol" class="home-social-btn" aria-label="Bluesky"
        ><i class="fa-brands fa-bluesky"></i></a
      >
      <a href="https://github.com/hatchdotlol" class="home-social-btn" aria-label="GitHub"
        ><i class="fa-brands fa-github"></i></a
      >
    </div>
    <h2>What is Hatch?</h2>
    <p>
      Hatch is a third-party project hosting service for projects made using Scratch and TurboWarp.
      Scratch is a great option to learn the fundamentals of programming, but it is designed for
      young children. Many Scratchers understandably find themselves outgrowing Scratch as they get
      older, and/or have distaste for new Scratch features, but they want to keep using the Scratch
      editor to create projects.
    </p>
    <p>
      Hatch was designed with this group of users in mind. While we're very similar to Scratch,
      having a close online community, we have more relaxed rules, allowing for more content types
      and genres that may not be suitable for the Scratch website.
    </p>
    <div class="home-text-btns">
      <a class="pill-btn" href="/about">
        <i class="fa-solid fa-angles-right"></i>&ensp;Learn More
      </a>
      <a class="pill-btn" href="https://wiki.hatch.lol/">
        <i class="fa-solid fa-circle-info"></i>&ensp;Visit our Wiki
      </a>
    </div>
  </div>
{/if}
<div class="title-box">
  <h2>Featured Projects</h2>
  <!-- svelte-ignore a11y_invalid_attribute -->
  <a href="#" class="see-all">See All&ensp;<i class="fa-solid fa-square-up-right"></i></a>
</div>

<div class="project-row">
  <p class="hideselectedtext">&ensp;&ensp;</p>
  {#each projects as project}
    <Project
      author={project.author}
      downvotes={project.downvotes}
      id={project.id}
      name={project.name}
      upvotes={project.upvotes}
    />
  {/each}
  <p>&ensp;&ensp;</p>
</div>
{#if !currentUser}
  <h2>Why join Hatch?</h2>
  <div class="home-why-section">
    <div class="why-reason">
      <i class="fa-regular fa-heart"></i>
      <h3>Community Features</h3>
      <p>Hatch is community focused, with social features for user pages and project pages.</p>
    </div>
    <div class="why-reason">
      <i class="fa-solid fa-wrench"></i>
      <h3>Dedicated Developers</h3>
      <p>
        Our developers work to make Hatch the best it can be based off feedback from Hatch members.
        <a href="https://forums.hatch.lol/">Check out our forums</a>
        where you can leave a suggestion!
      </p>
    </div>
    <div class="why-reason">
      <i class="fa-solid fa-file-code"></i>
      <h3>Support for Advanced Projects</h3>
      <p>
        Hatch plays projects using
        <a href="https://turbowarp.org" target="_blank">TurboWarp</a>
        which allows for more functionality than traditional Scratch projects through custom extensions
        and settings.
      </p>
    </div>
    <div class="why-reason">
      <i class="fa-solid fa-link-slash"></i>
      <h3>Less Restrictions</h3>
      <p>
        Since Hatch is aimed at ages 13 and older, we have less restrictions on content in place
        than Scratch, allowing for many genres of projects to be shared.&ast;
      </p>
    </div>
  </div>
  <p class="why-disclaimer">
    &ast;Due to some content on Hatch being unsuitable for younger audiences, please <span
      >DO NOT</span
    > speak of or link to Hatch anywhere on the Scratch website, as it would go against the Scratch Community
    Guidelines. Thanks!
  </p>
{/if}
<div class="home-news">
  <div class="title-box">
    <h2>Hatch News</h2>
    <a href="https://forums.hatch.lol" class="see-all"
      >See All&ensp;<i class="fa-solid fa-square-up-right"></i></a
    >
  </div>
  <div class="home-news-contents">
    <div class="home-news-big">
      <img
        src="https://placehold.co/1280x720"
        alt="PLACEHOLDER but it needs alt text anyway bleh"
      />
      <h3>News Title</h3>
      <p>
        Porta vehicula magna a porttitor hendrerit scelerisque nulla bibendum fringilla adipiscing
        non natoque sagittis nascetur nullam. A semper facilisi dictumst at fermentum vestibulum
        adipiscing arcu vestibulum a a a sed ante a suscipit praesent vestibulum. Ac a sem nulla
        eget hac orci nec natoque class eros consectetur varius in a a in dis scelerisque a eros
        blandit metus ut. Ac vestibulum elementum laoreet adipiscing massa felis ac fermentum lorem
        justo praesent vestibulum velit a a odio a adipiscing rhoncus ut quis tempus suspendisse
        ultrices integer facilisi. (omg this is so, like, news like.)
      </p>
      <div class="home-news-big-bottom">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="pill-btn"><i class="fa-solid fa-book"></i>&ensp;Read Forum Post</a>
        <p class="home-news-big-info">December 5, 2024 by <a href="/user?u=hatch">@hatch</a></p>
      </div>
    </div>
  </div>
</div>

<style>
  .hideselectedtext::selection {
    background-color: #0000;
  }
  .hideselectedtext {
    user-select: none;
  }
  #big-header span {
    font-weight: 800;
    background: linear-gradient(-90deg, var(--secondary) 0%, var(--primary) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .home-text {
    margin: 1rem 0;
  }

  #home-info-top {
    z-index: 2;
    position: relative;
    width: 41.875rem;
  }

  #home-neon-logo {
    z-index: 1;
    position: absolute;
    top: 4.375rem;
    right: 10%;
    width: 25rem;
    rotate: 10deg;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    #home-info-top {
      width: 100%;
    }
    #home-neon-logo {
      position: relative;
      width: 100%;
      max-width: 15rem;
      top: auto;
      right: auto;
      rotate: 0deg;
      margin: 1rem auto;
      display: block;
    }
  }

  .home-social-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    background-color: var(--primary);
    font-size: 1em;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    border-radius: 1000px;
    margin-right: 0.375rem;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .home-social-btn:hover {
    box-shadow: 0 0 1rem 0 #ffbd59cc;
  }

  @media (max-width: 768px) {
    .home-social-btn {
      width: 2rem;
      height: 2rem;
      font-size: 0.9em;
      margin-right: 0.25rem;
    }
  }

  .home-why-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .home-why-section {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }

  .why-reason {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    height: auto;
    border-radius: 10px;
    gap: 8px;
    background-color: var(--block1);
    border: 1px solid #ffbd59;
    box-shadow: 0 0 1rem 0 #ffbd5988;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
    align-items: center;
    justify-content: center;
  }

  .why-reason:hover {
    background-color: #ffbd5955;
    transform: scale(1.03);
    box-shadow: 0 0 1rem 0 #ffbd59cc;
  }

  .why-reason > * {
    padding: 0;
    margin: 0;
  }

  .why-reason h3,
  .why-reason i {
    font-size: 1.25em;
  }

  .why-reason p {
    font-size: 1em;
  }

  .why-disclaimer,
  .home-news-big-info {
    font-style: italic;
    color: #ffffff99;
  }
  .home-news-big-info {
    margin: 0;
  }
  .why-disclaimer span {
    font-weight: bold;
  }
  .home-news-contents {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }
  .home-news-big {
    margin-top: 0.75rem;
    padding: 1rem;
    box-shadow: 0 0 1rem 0 #ffbd59cc;
    border-radius: 0.75rem;
    background-color: var(--block1);
    border: 1px solid #ffbd59;
    height: fit-content;
  }
  .home-news-big h3 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  .home-news-big img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
  .home-text-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .home-news-big-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    .home-text-btns {
      flex-direction: column;
      gap: 0.75rem;
    }

    .home-text-btns a {
      width: 100%;
      text-align: center;
    }

    .home-news-big-bottom {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .home-news-big-info {
      font-size: 0.85em;
    }
  }
</style>
