<template>
<div>
  <section>
    <div class="about-1 cover-image sptb bg-background-color"
         data-bs-image-src="../assets/images/banners/banner5.jpg">
      <div class="content-text mb-0 text-white info">
        <div class="container">
          <div class="row text-center">
            <div v-for="(item, index) in 4" :key="index" class="col-lg-3 col-md-6 mt-2">
              <div class="counter-status status md-lg-0">
                <div class="counter-icon text-secondary">
                  <i class="icon icon-docs"></i>
                </div>
                <h5>Total Listings</h5>
                <h2 class="counter mb-0">17,846</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Staticticka"
}
</script>

<style scoped>
. categoriy_list {

}
</style>
