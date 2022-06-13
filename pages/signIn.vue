<template>
  <SignIn data-aos="zoom-in" data-aos-duration="1000"/>
</template>

<script>
    import SignIn from "@/my-components/signIn/signIn";
    import Mixins from '@/mixns.js/aos'
    export default {
      layout: 'signIn',
      mixins: [Mixins],
      components: {SignIn},

    }
</script>

<style lang="scss" scoped>

</style>
