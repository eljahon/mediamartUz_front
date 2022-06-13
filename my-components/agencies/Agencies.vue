<template>
<div>
  <section class="bg-white" style="padding: 3rem 0 1rem 0 ">
<!--    <div class="container">-->
      <div class="section-title center-block text-center">
        <h2>Latest Listings</h2>
        <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
      </div>
      <div id="myCarousel1" class=" owl-carousel-icons2">
        <Carousel>
          <div v-for="(item, index) in 4" :key="index" class="container">
            <div class="item agents-wrapper">
              <div class="card mb-0 overflow-hidden">
                <div class="power-ribbon power-ribbon-top-left text-warning"><span class="bg-warning"><i
                  class="fa fa-bolt"></i></span></div>
                <div class="item-card2-img">
                  <a href="business.html" class="absolute-link"></a>
                  <img src="~/assets/images/products/products/f1.jpg" alt="img" class="cover-image">
                  <div class="item-card2-icons">
                    <a href="business.html" class="item-card2-icons-l"><i class="fa fa-cutlery"></i></a>
                    <a class="item-card2-icons-r"><i class="fa fa fa-heart-o"></i></a>
                  </div>
                  <div class="blog--category">Restaurant</div>
                </div>
                <div class="card-body pb-0">
                  <div class="item-card2">
                    <div class="item-card2-desc">
                      <div class="item-card2-text">
                        <a href="business.html" class="text-dark">
                          <h4 class="mb-0">Somik Restaurant</h4>
                        </a>
                      </div>
                      <div class="pt-3">
                        <a href="mb-1">
                          <p class="pb-0 pt-0 mb-2 mt-2"><i class="fa fa-map-marker me-2"></i>Florida,
                            USA</p>
                        </a>
                        <a href="mb-1">
                          <p class="pb-0 pt-0 mb-2 mt-2"><i class="fa fa-phone me-2"></i>+63
                            658-865-965</p>
                        </a>
                        <p class="pb-0 pt-0 mb-2 mt-2"><i class="fa fa-clock-o me-2"></i>10am - 9pm<a>
                          <span class="badge badge-success ms-2 fs-13">Open Now</span></a></p>
                      </div>
                      <p class="">Lorem ipsum dolor sit amet, quis int nostrum exercitationem </p>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="item-card2-footer">
                    <div class="item-card2-footer-u">
                      <div class="d-flex">
                        <div class="d-inline-flex">
                          <div class="rating-star sm my-rating-5" data-rating="4">
                          </div> (25 Reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
<!--    </div>-->
  </section>
</div>
</template>

<script>
import Carousel from "@/my-components/carousel/Carousel";
export default {
  name: "Agencies",
  components: {Carousel}
}
</script>

<style scoped>
.agents-wrapper {
  width: 300px;
  margin: auto;
}
</style>
