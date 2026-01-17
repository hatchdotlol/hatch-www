<script lang="ts">
  import Project from "$lib/components/Project.svelte";
  import { error } from "@sveltejs/kit";
  const { data } = $props();
  let currentUser = $state(data.user);
</script>

<svelte:head>
  <title>Your Stuff - Hatch</title>
</svelte:head>

<main>
  {#if currentUser}
    <h1>Your's projects</h1>
    <div id="fbox">
      <div id="fbox-top"></div>
      <div id="fbox-bottom">
        <div class="grid">
         {#each [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10] as i}
          <Project
            author={currentUser.name}
            downvotes={0}
            id={0}
            name={"Example Project"}
            upvotes={0}
          />
        {/each}
        </div>
      </div>
    </div>
  {/if}
</main>

<!-- css below -->

<style>
  h1 {
    font-size: 3em !important;
  }
  #fbox {
    background-color: var(--block1);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 1rem;
    gap: 1rem;
  }
  .grid {
    display: grid;
    gap: 1rem 6rem;
    grid-template-columns: repeat(auto-fill, 6rem);
    justify-content: start;
  }
  #fbox-top {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fill, 5rem);
      gap: 1rem;
      justify-content: space-between;
    }
  }
</style>
