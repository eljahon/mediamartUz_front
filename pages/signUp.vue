<template>
    <div>
<SignUp data-aos="fade-up" data-aos-duration="1000"/>
    </div>
</template>
<script>
import SignUp from "@/my-components/signUp/signUp";
import Mixins from "@/mixns.js/aos"
    export default {
      layout: 'SignUp',
      components: {SignUp},
      mixins: [Mixins]
    }
</script>

<style lang="scss" scoped>

</style>
