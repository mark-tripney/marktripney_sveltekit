<script>
  export let title;
  export let date;
  export let categories;
</script>

<div class="content-wrapper">
  <h1 class="post-title">{title}</h1>
  <p>Published: {date}</p>
  <slot/>
  {#if categories.length}
    <aside>
      <h2>Posted in:</h2>
      <ul>
        {#each categories as category}
          <li>
            <a href="/blog/categories/{category}">
              {category}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</div>

<style>
  .post-title {
    margin-top: 3rem;
  }
</style>
