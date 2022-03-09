<script>
  export let title;
  export let date;
</script>


<div class="content-wrapper">
  <h1 class="post-title">{title}</h1>
  <p>Published: {date}</p>
  <slot/>
</div>

<style>
  .post-title {
    margin-top: 3rem;
  }
</style>
