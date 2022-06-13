<template>
  <div class="page page-h">
    <div class="page-content z-index-10">
      <div class="container text-center">
        <div class="display-1 text-white mb-5">400</div>
        <h1 class="h2 text-white  mb-3">Page Not Found</h1>
        <p class="h4 font-weight-normal mb-7 leading-normal text-white">Oops!!!! you tried to access a page
          which is not available. go back to Home</p>
        <nuxt-link :to="localePath('/')" class="btn btn-secondary">
          Back To Home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "erorrPage",
  layout: 'error'
}
</script>

<style scoped>

</style>
