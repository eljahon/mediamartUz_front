<template>
  <section class="sptb bg-white">
    <div class="section-title text-center">
      <h2>Categories</h2>
      <p>
        Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula
      </p>
    </div>
    <div class="carousel-wrapper container mx-auto">
      <VueSlickCarousel ref="carousel" v-bind="settings">
        <div v-for="(item, index) in 12" :key="index">
          <div class="border rounded-lg card-body img-wrapper">
            <div class="cat-item text-center">
              <div class="cat-img category-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M465.775,116.467l-28.326-10.895V57.198c0-4.142-3.357-7.5-7.5-7.5H412.6V7.5c0-4.142-3.357-7.5-7.5-7.5   c-4.143,0-7.5,3.358-7.5,7.5v42.198h-17.349c-4.143,0-7.5,3.358-7.5,7.5v23.49L250.409,33.633   c-2.307-0.887-4.901-0.582-6.939,0.818c-2.037,1.399-3.254,3.711-3.254,6.182v58.769H188.95V73.769c0-4.142-3.358-7.5-7.5-7.5   s-7.5,3.358-7.5,7.5v25.633h-24.634c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h124.035l-0.001,18.132h-9.058   c-0.003,0-0.006-0.001-0.01-0.001H98.617c-0.003,0-0.006,0.001-0.01,0.001h-9.058v-18.132h29.767c4.142,0,7.5-3.358,7.5-7.5   c0-4.142-3.358-7.5-7.5-7.5H82.049c-4.142,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.358,7.5,7.5,7.5h9.068v34.701h-42.2   c-4.142,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.358,7.5,7.5,7.5h9.066v274.131c0,4.142,3.358,7.5,7.5,7.5h182.205   c0.01,0,0.019,0.001,0.029,0.001h215.366c4.143,0,7.5-3.358,7.5-7.5V123.467C470.583,120.364,468.672,117.581,465.775,116.467z    M387.751,64.698h34.698v35.105l-34.698-13.346V64.698z M455.583,128.618v17.061L255.217,68.615V51.554L455.583,128.618z    M106.117,147.534h150.665v34.701H106.117V147.534z M56.417,197.235h42.2h165.665h42.2l-0.002,18.132H56.417V197.235z    M157.382,263.502v233.496h-18.133V263.502H157.382z M172.382,263.502h18.133v233.496h-18.133V263.502z M205.515,263.502h18.134   v233.496h-18.134V263.502z M238.649,263.502h18.133v233.496h-18.133V263.502z M271.782,263.502h18.135v233.497h-18.135V263.502z    M289.917,248.502h-25.635h-33.104c-0.01,0-0.019-0.001-0.029-0.001c-0.01,0-0.019,0.001-0.029,0.001h-33.076   c-0.01,0-0.019-0.001-0.029-0.001c-0.01,0-0.019,0.001-0.029,0.001h-33.075c-0.01,0-0.019-0.001-0.029-0.001   c-0.01,0-0.019,0.001-0.029,0.001h-33.075c-0.01,0-0.019-0.001-0.029-0.001c-0.01,0-0.019,0.001-0.029,0.001H98.617H72.983v-18.133   h216.934V248.502z M106.117,263.502h18.132v233.496h-18.132V263.502z M72.983,263.502h18.134v233.497H72.983V263.502z M304.917,497   V230.367h9.064c4.142,0,7.5-3.357,7.5-7.499l0.002-33.132c0-1.989-0.79-3.897-2.196-5.304c-1.407-1.407-3.314-2.197-5.304-2.197   h-42.2v-34.701h9.067c4.142,0,7.5-3.358,7.5-7.5l0.001-33.132c0-1.989-0.79-3.896-2.196-5.303   c-1.407-1.407-3.314-2.197-5.304-2.197h-25.634V84.686l200.366,77.065V497H304.917z"
                    />
                    <path
                      d="M396.815,165.667h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.131c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.131C404.315,169.024,400.958,165.667,396.815,165.667z M389.315,198.798h-18.132v-18.131h18.132V198.798z"
                    />
                    <path
                      d="M396.815,248.499h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.132C404.315,251.857,400.958,248.499,396.815,248.499z M389.315,281.631h-18.132V263.5h18.132V281.631z"
                    />
                    <path
                      d="M396.815,331.333h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.132c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.132C404.315,334.691,400.958,331.333,396.815,331.333z M389.315,364.465h-18.132v-18.132h18.132V364.465z"
                    />
                    <path
                      d="M396.815,414.167h-33.132c-4.143,0-7.5,3.358-7.5,7.5v33.131c0,4.142,3.357,7.5,7.5,7.5h33.132c4.143,0,7.5-3.358,7.5-7.5   v-33.131C404.315,417.524,400.958,414.167,396.815,414.167z M389.315,447.298h-18.132v-18.131h18.132V447.298z"
                    />
                  </g>
                </svg>
              </div>
              <div class="cat-desc">
                <h5>Real Estate</h5>
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
  </section>
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

<style scoped>
.img-wrapper {
  width: 265px;
  min-height: 200px;
  margin: 0 12px;
  height: 100%;
}
.carousel-wrapper {
  position: relative;
  padding: 10px;
  height: 250px;
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
