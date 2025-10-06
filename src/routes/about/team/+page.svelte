<script lang="ts">
  type Member = {
    avatar: string,
    description?: string,
    name: string,
    position: string,
    scratch?: string,
    username?: string
  };

  const team: Member[] = [
    {
      name: "Jabin",
      description: "I make cool things for fun! I mostly do stuff on the front end, like websites and clients for stuff, but I also make Discord bots and do some media stuff like video editing.",
      position: "CEO, Frontend",
      avatar: "https://avatars.githubusercontent.com/u/118082374",
      scratch: "-gr",
      username: "jab11n"
    },
    {
      name: "AJ",
      description: "I like brainstorming interesting ideas, and some of them stick and become a thing.",
      position: "Backend",
      avatar: "https://avatars.githubusercontent.com/u/81255936",
      scratch: "ajskateboarder",
      username: "aj"
    },
    {
      name: "Eliza",
      description: "I mostly do work in other languages, but sometimes I use scratch to challenge myself or to prototype things ^w^",
      position: "Frontend",
      avatar: "https://avatars.githubusercontent.com/u/206014671",
      scratch: "ElizaDoesScratch",
      username: "ElizaDoesStuff"
    },
    {
      name: "Kat",
      description: "I started out with programming in Scratch, then went on to start working in HTML/CSS (No JS) and Godot.",
      position: "Frontend",
      avatar: "https://avatars.githubusercontent.com/u/100965627",
      scratch: "autofirejm",
      username: "kat"
    },
    {
      name: "Kiwi",
      description: "Male, teenager, BOXBOY WIKI! admin, and proud Antarctica Citizen.",
      position: "Proofreading, Waffle Distribution",
      avatar: "https://boxboy.wiki/mw/images/thumb/0/05/Kiwi_logo.png/400px-Kiwi_logo.png",
      username: "kiwi"
    },
    {
      name: "Randomguy",
      description: "I am a Scratch forumer and a 15 year old male! (2000+ posts)",
      position: "Design",
      avatar: "https://uploads.scratch.mit.edu/get_image/user/46100465_500x500.png",
      scratch: "randomguy3513",
      username: "rand"
    },
    {
      name: "Rayne Cloudy",
      description: "i'm a teenage software engineer and high school sophomore who likes the color pink a lot. i'm going to major in computer science when i go to college, but that's not for another few years, haha....",
      position: "Frontend, Forums",
      avatar: "https://avatars.githubusercontent.com/u/129226914",
      scratch: "breakfast_for_dinner",
      username: "r"
    },
    {
      name: "Salad",
      description: "My name is Salad, TrioSALAD for long, or 7s3s for short. I like to play various games, and I despise New Jersey. They call me a Developer but I don't know how to code. Life is rad.",
      position: "Developer, Moderator",
      avatar: "https://uploads.scratch.mit.edu/get_image/user/70588619_500x500.png",
      scratch: "7salad3salad",
      username: "salad"
    },
    {
      name: "Strawberry",
      position: "Moderator",
      avatar: "https://avatars.githubusercontent.com/u/70533713",
      scratch: "misaPuding",
      username: "strawberry"
    }
  ];

  const testers: Member[] = [
    {
      name: "Abigail",
      description: "queer programmer-artist beegirl furry",
      position: "Tester",
      avatar: "https://avatars.githubusercontent.com/u/138245554",
      scratch: "KitsunLilly",
      username: "b"
    },
    {
      name: "AtomicBolts",
      description: "I enjoy coding in C++, Java, Html, JavaScript, and Python. I'm the owner of Bark Coding :D",
      position: "Tester",
      avatar: "https://uploads.scratch.mit.edu/get_image/user/119088399_500x500.png",
      scratch: "mariocraft987",
      username: "mariocraft"
    },
    {
      name: "DuWeido",
      description: "Pronounced \"duh-WEE-doe\" or \"doo-WEE-doe\"",
      position: "Tester",
      avatar: "https://uploads.scratch.mit.edu/get_image/user/80219067_500x500.png",
      scratch: "DuWeido",
      username: "DuWeido"
    },
    {
      name: "Esben",
      position: "Tester",
      avatar: "https://api.wasteof.money/users/esben/picture",
      username: "esben"
    },
    {
      name: "fungifungus",
      position: "Tester",
      avatar: "https://api.wasteof.money/users/94/picture",
      scratch: "fungifungus",
      username: "f"
    },
    {
      name: "Jeffalo",
      description: "i really like space and making games on scratch!",
      position: "Tester",
      avatar: "https://uploads.scratch.mit.edu/get_image/user/34018398_500x500.png",
      scratch: "jeffalo",
      username: "jeffalo"
    },
    {
      name: "JustASeaCow",
      position: "Tester",
      avatar: "/hatchling.webp",
      scratch: "davidtheplatform",
      username: "seacow"
    },
    {
      name: "MrFluffyPenguins",
      position: "Tester",
      avatar: "https://uploads.scratch.mit.edu/get_image/user/16170417_500x500.png",
      scratch: "MrFluffyPenguins",
      username: "MrFluffyPenguins"
    },
    {
      name: "Noodles",
      position: "Tester",
      avatar: "/hatchling.webp",
      username: "noodles"
    },
    {
      name: "Skood",
      position: "Tester",
      avatar: "/hatchling.webp",
      username: "skood"
    },
  ];
</script>

<style>
  td:nth-child(1) {
    width: 10rem;
  }

  td {
    padding: 0.6rem;
  }

  td > img {
    width: 100%;
    border-radius: 20%;
    aspect-ratio: 1 / 1;
  }

  td > h3 {
    margin: 0.7rem 0;
  }

  td > div {
    height: 100%;
  }
</style>

<h1>Hatch Team</h1>
<p>Meet the team behind Hatch.lol!</p>
<h2>Members</h2>
<table>
  <tbody>
    {#each team as member}
      <tr>
        <td><img src={member.avatar} alt={member.name}><h3>{member.name}</h3>{member.position}</td>
        <td>
          <div>{member.description ?? "No description provided."}</div>
          <p>
            {#if member.username}
              <a href="/user/{member.username}">Hatch (@{member.username})</a>
            {/if}
            {#if member.scratch}
              <br><a href="//scratch.mit.edu/users/{member.scratch}">Scratch (@{member.scratch})</a>
            {/if}
          </p>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
<h2>Pre-release Testers</h2>
<p>These people tested Hatch to ensure quality before its initial release.</p>
<table>
  <tbody>
    {#each testers as member}
      <tr>
        <td><img src={member.avatar} alt={member.name}><h3>{member.name}</h3>{member.position}</td>
        <td>
          <div>{member.description ?? "No description provided."}</div>
          <p>
            {#if member.username}
              <a href="/user/{member.username}">Hatch (@{member.username})</a>
            {/if}
            {#if member.scratch}
              <br><a href="//scratch.mit.edu/users/{member.scratch}">Scratch (@{member.scratch})</a>
            {/if}
          </p>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
<h2>Former Members</h2>
<p>We thank these people for being a part of Hatch's growth.</p>
<p>Han</p>
