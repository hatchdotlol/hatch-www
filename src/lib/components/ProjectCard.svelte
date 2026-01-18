<script lang="ts">
  const {
    author,
    downvotes,
    id,
    name,
    upvotes,
    shared
  }: {
    author: string;
    downvotes: number;
    id: number;
    name: string;
    upvotes: number;
    shared: boolean;
  } = $props();
</script>

<a href="/project/{id}">
  <img src="https://placehold.co/1280x720" alt="Project Thumbnail" />
  <div class="info">
    <p>{name}</p>
    {#if author != ""}<div class="author">By @{author}</div>{/if}
    <div class="stats">
      {#if shared}
        <p><i class="fa-solid fa-eye"></i> 2500 Views</p>
        <p>
          <i class="fa-solid fa-up-down"></i>
          {upvotes}/{downvotes}
          {#if upvotes > 0 || downvotes > 0}
            ({Math.round((upvotes / (upvotes + downvotes)) * 100)}%)
          {/if}
        </p>{/if}
      <p>Project ID: {id}</p>
    </div>
  </div>
  <div class="edit">
    <i style="font-size:0.7em;">Last edited some time ago</i>
    <button><i class="fa-solid fa-pen-to-square"></i> Edit</button>
    <button><i class="fa-regular fa-window-maximize"></i> View page</button>
  </div>
  <div class="actions">
    {#if shared}
      <button><i class="fa-solid fa-eye-slash"></i> Unshare</button>
    {:else}
      <button><i class="fa-solid fa-eye"></i> Share</button>
    {/if}
    <button><i class="fa-solid fa-download"></i> Download</button>
    <button  id="delete"><i class="fa-solid fa-trash"></i> Delete</button>
  </div>
</a>

<style>
  .info {
    width: 50%;
  }
  .actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.25rem;
    float: right;
    width: 14%;
  }
  .edit {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.25rem;
    float: right;
    width: 20%;
    color:#ccc;
    font-size: 0.8em;
  }
  .actions button {
    background-color: var(--block1);
    border: 1px solid var(--primary);
    color: #ccc;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.8em;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  }
  .actions button:hover {
    background-color: var(--primary);
    color: #000;
  }
  .actions button#delete:hover {
    background-color: #f22;
    color: #000;
  }
  img {
    height: 6rem;
    width: 10.67rem;
    aspect-ratio: 16/9;
    border-radius: 0.5rem;
  }
  a:has(img) {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.25rem;
    box-sizing: content-box;
    text-decoration: none;
    width: 99%;
    background-color: var(--block1);
    border-radius: 0.625rem;
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
    z-index: 2;
    border: 1px solid var(--primary);
  }

  a:has(img) > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  a:has(img):hover {
    background-color: var(--block1);
    box-shadow: 0 0 1rem 0 #ffbd59cc;
  }

  p {
    margin: 0;
    font-size: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: inherit;
    text-wrap: nowrap;
    color: var(--primary);
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
    white-space: nowrap;
  }

  .author {
    font-size: 0.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
    white-space: nowrap;
    width: inherit;
    color: var(--text);
  }

  .stats,
  .stats p {
    font-size: 0.8em;
    color: #ccc;
  }

  @media (max-width: 768px) {
    img {
      height: 5rem;
      width: 8.89rem;
    }

    a:has(img) {
      width: 8.89rem;
    }

    p {
      font-size: 0.9em;
    }

    .author,
    .stats {
      font-size: 0.75em;
    }
  }
</style>
