<template>
<div class="topjumbotron" v-bind:style="{
        backgroundImage: `url(https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,h_1982,q_68/v1602560055/endsar_5_dgrmb8.jpg)`,
      }"></div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
    name: "TopJumbotron",
    components: {
        VLazyImage
    },
}
</script>

<style lang="scss">
.topjumbotron {
    height: 40rem;
    background-size: cover;
    background-position: bottom;
    background-color: #000000
}
</style>
