<template>
  <div>
    <SeachInputs data-aos="zoom-in" data-aos-duration="1000"/>
    <CategoriesCarussel data-aos="fade-up" data-aos-duration="1000"/>
    <Agencies data-aos="zoom-in-up" data-aos-duration="1000" />
    <Staticticka data-aos="zoom-in-up" data-aos-duration="1000"/>
    <Latestblog data-aos="zoom-in-up" data-aos-duration="1000"/>
    <Influencers/>
    <!--    <LeafletMaps data-aos="zoom-in" data-aos-duration="1000"/>-->
  </div>

</template>

<script>
import MixinsAos from '@/mixns.js/aos'
import CategoriesCarussel from "@/my-components/homePage/CategoriesCarussel";
import SeachInputs from "@/my-components/homePage/SeachInputs";
import Staticticka from "@/my-components/homePage/Staticticka";
import Agencies from "@/my-components/agencies/Agencies.vue"
import Latestblog from "@/my-components/latestblog/Latestblog";
import Influencers from "@/my-components/influencers/Influencers";
export default {
  components: {Staticticka, CategoriesCarussel,Agencies, SeachInputs, Latestblog, Influencers},
  mixins: [MixinsAos]
}
</script>

<style lang="scss" scoped>

</style>
