<template>
  <div>
    <section class="bg-white" style="padding: 3rem 0 1rem 0">
      <!--    <div class="container">-->
      <div class="section-title center-block text-center">
        <h2>Latest Listings</h2>
        <p>
          Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula
        </p>
      </div>
      <div id="myCarousel1" class=" owl-carousel-icons2">
<!--        <Carousel>-->
          <div v-for="(item, index) in 4" :key="index" class="container">
            <div class="item agents-wrapper">
              <div class="card overflow-hidden">
                <div class="power-ribbon power-ribbon-top-left text-warning">
                  <span class="bg-warning"><i class="fa fa-bolt"></i></span>
                </div>
                <div class="item-card2-img">
                  <a href="business.html" class="absolute-link"></a>
                  <img
                    src="~/assets/images/products/products/f1.jpg"
                    alt="img"
                    class="cover-image"
                  />
                  <div class="item-card2-icons">
                    <a href="business.html" class="item-card2-icons-l"
                      ><i class="fa fa-cutlery"></i
                    ></a>
                    <a class="item-card2-icons-r"
                      ><i class="fa fa fa-heart-o"></i
                    ></a>
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
                          <p class="pb-0 pt-0 mb-2 mt-2">
                            <i class="fa fa-map-marker me-2"></i>Florida, USA
                          </p>
                        </a>
                        <a href="mb-1">
                          <p class="pb-0 pt-0 mb-2 mt-2">
                            <i class="fa fa-phone me-2"></i>+63 658-865-965
                          </p>
                        </a>
                        <p class="pb-0 pt-0 mb-2 mt-2">
                          <i class="fa fa-clock-o me-2"></i>10am - 9pm<a>
                            <span class="badge badge-success ms-2 fs-13"
                              >Open Now</span
                            ></a
                          >
                        </p>
                      </div>
                      <p class="">
                        Lorem ipsum dolor sit amet, quis int nostrum
                        exercitationem
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="item-card2-footer">
                    <div class="item-card2-footer-u">
                      <div class="d-flex">
                        <div data-rating="4"></div>
                        (25 Reviews)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< Updated upstream
        </VueSlickCarousel>
        <button class="button button-left" @click="showPrev">
          <PrevButtonSvg class="w-1 h-2" />
        </button>
        <button class="button button-right" @click="showNext">
          <NextButtonSvg class="w-1 h-2s" />
        </button>
=======
<!--        </Carousel>-->
>>>>>>> Stashed changes
      </div>
      <!--    </div>-->
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import PrevButtonSvg from "../../components/PrevButtonSvg.vue";
import NextButtonSvg from "../../components/NextButtonSvg.vue";
export default {
  components: {
    VueSlickCarousel,
    PrevButtonSvg,
    NextButtonSvg,
  },
  data() {
    return {
      settings: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        adaptiveHeight: true,
        arrows: false,
        focusOnSelect: true,
        speed: 500,
        infinite: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 2048,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
        ],
        slidesToScroll: 1,
        autoplay: true,
      },
    };
  },
  methods: {
    handlePaging(value) {
      this.activeSlide = value;
    },
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style>
.carousel-wrapper {
  position: relative;
  height: 100%;
  min-height: 150px;
}
.button {
  padding: 13px 17px;
  border-radius: 50%;
  z-index: 10;
  border: 1px solid #e6e6eb;
  top: 45%;
  box-shadow: 0 4px 15px rgb(67 67 67 / 15%);
  background-color: #f7f7fb;
  position: absolute !important;
  transform: translateY(-50%);
}
.button-left {
  left: 0;
}
.button-right {
  right: 0;
}
</style>
