<template>
  
    <VueSlickCarousel v-bind="settings">
      <slot></slot>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "@/assets/settings.scss";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Carousel",
  components: { VueSlickCarousel },
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
        slideToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      },
    };
  },
};
</script>

<style scoped>
.slick-next:before,
.slick-prev:before {
  color: black;
}
</style>
