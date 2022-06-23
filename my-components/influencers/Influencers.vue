<template>
  <div class="pb-12 container">
    <h3 class="widget-title mt-7 text-3xl text-center">Employers</h3>
    <hr class="widget-hr" />
    <div class="carousel-wrapper p-0 bg-white rounded-lg">
      <VueSlickCarousel ref="carousel" v-bind="settings">
        <div class="img-wrapper" v-for="(item, index) in 6" :key="index">
          <div class="item">
            <!--          <div class="card mb-0">-->
            <div class="card-body">
              <img
                src="~/assets/images/faces/male/1.jpg"
                alt="img"
                class="avatar avatar-xxl brround mx-auto"
              />
              <div class="item-card2">
                <div class="item-card2-desc text-center">
                  <div class="item-card2-text mt-3">
                    <a href="company-list.html" class="text-dark"
                      ><h4 class="font-weight-bold">Sid Quebedeaux</h4></a
                    >
                  </div>
                  <p class="">Web Developer (6 Yrs Exp)</p>
                  <a href="company-details.html" class="btn btn-white btn-sm"
                    >View Details</a
                  >
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-filter-desc">
                <div class="product-filter-icons text-center">
                  <a class="border text-secondary p-0"
                    ><i class="fa fa-phone"></i
                  ></a>
                  <a class="border text-secondary p-0"
                    ><i class="fa fa-envelope"></i
                  ></a>
                  <a class="border text-secondary p-0"
                    ><i class="fa fa-comment"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
      <button class="button button-left" @click="showPrev">
        <PrevButtonSvg class="w-1 h-2" />
      </button>
      <button class="button button-right" @click="showNext">
        <NextButtonSvg class="w-1 h-2s" />
      </button>
    </div>
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
        adaptiveHeight: true,
        arrows: false,
        focusOnSelect: true,
        speed: 500,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
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
