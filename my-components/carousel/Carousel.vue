<template>
  <VueSlickCarousel v-bind="settings">
    <slot></slot>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import "@/assets/settings.scss"
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "Carousel",
  components: {VueSlickCarousel},
  data () {
    return {
      settings: {
        dots: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        adaptiveHeight: true,
        focusOnSelect:true,
        speed: 500,
        infinite: true,
        responsive: [
          {
            breakpoint: 2048,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }},
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }},
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
            },},
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },}
        ],
        slidesToScroll: 1,
        autoplay: true,
      },
    }
  }
}
</script>

<style scoped>
.slick-next:before, .slick-prev:before {
  color: black;
}
</style>
