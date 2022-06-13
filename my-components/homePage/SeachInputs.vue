<template>
<div>
  <section>
    <div class="banner-1 cover-image sptb-2 sptb-tab bg-background2">
      <div class="header-text text-1 mb-0">
        <div class="container">
          <div class="text-center text-white mb-7">
            <h1 class="mb-1">Welcome To The Biggest Business Directory</h1>
            <p>It is a long established fact that a reader will be distracted by the readable.</p>
          </div>
          <div class="row">
            <div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
              <div class="search-background py-3 px-4 bg-white-transparent">
                <div class="form row row-sm">
                  <div class="form-group col-xl-4 col-lg-3 col-md-12 mb-0">
                    <input type="text" class="form-control input-lg keywords-input" id="text4"
                           placeholder=" Phrase or Keywords">
                  </div>
                  <div class="form-group col-xl-3 col-lg-3 col-md-12 mb-0">
                    <input type="text" class="form-control input-lg location-input" id="text5"
                           placeholder="Enter Location">
                    <span><img src="../../assets/images/svgs/gps.svg" class="location-gps"
                               alt="img"></span>
                  </div>
                  <div class="form-group col-xl-3 col-lg-3 col-md-12 select2-lg mb-0">
                    <select class="form-control select2-show-search  border-bottom-0"
                            data-placeholder="Select Category">
                      <optgroup label="Categories">
                        <option>Select Category</option>
                        <option value="0">All Categories</option>
                        <option value="1">Hotels</option>
                        <option value="2">Restaurant</option>
                        <option value="3">Events</option>
                        <option value="4">Cinema</option>
                        <option value="5">Gym</option>
                        <option value="6">Shop & Store</option>
                        <option value="7">Tours & Travels</option>
                        <option value="8">Cafe</option>
                        <option value="9">Mobile Store</option>
                        <option value="10">College</option>
                      </optgroup>
                    </select>
                  </div>
                  <div class="col-xl-2 col-lg-3 col-md-12 mb-0">
                    <a href="javascript:void(0)" class="btn btn-lg btn-block btn-secondary">Search Here</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /header-text -->
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Carussel"
}
</script>

<style scoped>

</style>
