<script lang="ts">
  import Project from "$lib/components/Project.svelte";
  const { data } = $props();
</script>

<svelte:head>
  <title>{data.user.displayName}'s Projects - Hatch</title>
</svelte:head>

<main>
  <h1>{data.user.displayName}'s projects</h1>
  <div id="fbox">
    <div id="fbox-top">
    </div>
    <div id="fbox-bottom">
      <div class="grid">
        {#each data.projects as project}
          <Project
            author={project.author.username}
            downvotes={project.downvotes}
            id={project.id}
            name={project.title}
            upvotes={project.upvotes}
          />
        {/each}
      </div>
    </div>
  </div>
</main>

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
