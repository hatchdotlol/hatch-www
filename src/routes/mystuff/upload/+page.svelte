<script lang="ts">
  let { data } = $props();
  let currentUser = $state(data.user);
</script>

{#if currentUser}
  <h1 style="margin-bottom:0.5rem;">Upload a new project</h1>
  <div class="settingspanel">
    <input type="file" accept=", .sb, .sb2, .sb3">
  </div>
  <div class="settingspanel">
    <h4>Project Details</h4>

    <div class="split-in-half">
      <div class="settingspanel" style="height: 212px;">
        <img
          src="https://placehold.co/1280x720"
          alt="Project Thumbnail"
          class="svelte-4pgesh"
          style="height:128px"
        />
        <input
          type="text"
          id="display-name"
          class="expandable-input"
          placeholder="Project Title"
          value="Untitled-{currentUser.projectCount + 1}"
        />
      </div>
      <div class="settingspanel" style="height: 212px; flex: 1;">
        <h4>Description</h4>
        <textarea class="largetextinput"
          >This is some sample text ! &NewLine;this will get interesting :3</textarea
        >
        <p style="font-size: 0.75rem; color: var(--accent);">max length: 300 characters.</p>
      </div>
    </div>
    <div class="buttons-sbs">
      <button class="pill-btn"><i class="fa-solid fa-plus"></i>&ensp;Change Thumbnail</button>
      <button class="pill-btn"><i class="fa-solid fa-x"></i>&ensp;Remove Thumbnail</button>
      <select class="expandable-input">
        <option value="">N/A (Hatch Team decides age group)</option>
        <option value="E">Safe (Everyone)</option>
        <option value="7+">Light (7+)</option>
        <option value="9+">Moderate (9+)</option>
        <option value="13+">Restricted (13+)</option>
      </select>
    </div>
  </div>

  <div class="settingspanel">
    <h4>NOTICE</h4>
    <p>
      This project will be uploaded as an unshared project under the account @{currentUser.name}.
    </p>
    <b
      >The project should not break any of the
      <a href="/about/guidelines">Community Guidelines</a>.</b
    >
  </div>
  <button class="pill-btn"><i class="fa-solid fa-check"></i>&ensp;Upload Project</button>
{/if}

<style>
  .split-in-half {
    display: flex;
    gap: 1rem;
  }
  .expandable-input {
    min-width: 45%;
  }
  .settingspanel {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0 0 1rem 0;
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: var(--block1);
    border: 1px solid #ffbd59;
    height: fit-content;
  }
  input[type="file"]::file-selector-button {
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
  .split-in-half > .settingspanel {
    margin: 0;
  }
  .buttons-sbs {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 0 0.5rem;
  }

  @media (max-width: 768px) {
    .buttons-sbs {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-end;
    }
  }
  h4 {
    font-size: 1.5rem;
    margin: 0;
  }
  p {
    margin: 0;
  }
  .largetextinput {
    width: 100%;
    height: 2.5rem;
    height: 60%;
    font-size: 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    resize: none;
    padding-bottom: 0rem;
    font-family: "Outfit", sans-serif;
  }
</style>
