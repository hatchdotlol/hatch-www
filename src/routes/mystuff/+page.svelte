<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
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
      <div id="fbox-top">
       You have {currentUser.projectCount} projects.    <div style="font-size: 0.6rem; margin-top: 0.4rem;">{#if currentUser.projectCount === 0}...how depressing.{/if}</div>
      </div>
      <div id="fbox-bottom">
        <a href="https://hatch.rayne.page/" class="pill-btn"><i class="fa-solid fa-plus"></i>&ensp;Create new project</a>
        <a href="mystuff/upload" class="pill-btn"><i class="fa-solid fa-upload"></i>&ensp;Upload new project</a>
        <div class="grid" style="margin-top:1rem;">
          {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as i}
            <ProjectCard
              author={""}
              downvotes={0}
              id={i}
              name={"Example Project"}
              upvotes={0}
              shared={i % 2 === 0}
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem 6rem;
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
