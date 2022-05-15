<template>
    <div>
<VueSlickCarousel v-bind="settings">
<slot></slot>
</VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
        components: {VueSlickCarousel},
        data () {
            return {
                settings: {
        dots: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        focusOnSelect:true,
        speed: 500,
		infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      },
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>