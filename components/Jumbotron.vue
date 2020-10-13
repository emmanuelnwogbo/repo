<template>
<div class="jumbotron">
    <figure v-for="(item, index) in images" :key="index" v-bind:class="[index === tracker ? 'visible' : '']">
        <v-lazy-image :src="item" src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,q_10,w_378/v1602546774/VI2A6028_pregqc.jpg" />
    </figure>
</div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
    name: "Jumbotron",
    components: {
        VLazyImage,
    },
    data() {
        return {
            images: [
                "https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,h_1294,q_26,w_2007/v1602560033/endsar_2_rjnoeg.jpg",
                "https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,h_2344,q_30,w_2261/v1602560014/endsar_4_agobpv.jpg",
                "https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,h_1294,q_26,w_2007/v1602560054/endsar_zko8am.jpg",
            ],
            tracker: 0,
        };
    },
    watch: {},
    mounted() {
        setInterval(() => {
            this.tracker >= this.images.length - 1 ?
                (this.tracker = 0) :
                (this.tracker = this.tracker += 1);
        }, 6000);
    },
};
</script>

<style lang="scss">
.jumbotron {
    position: relative;
    grid-column: 1 / span 14;
    grid-row: span 10;
    background: #000;

    & figure {
        background-size: cover;
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition: all 0.5s ease-in;
        opacity: 0;

        @include respond(phone) {
            position: relative;
            height: 40rem;
            width: 100vw;
            opacity: 1;
        }

        &.visible {
            opacity: 1;
            transition: all 0.5s ease-in;
        }

        &.precede {
            opacity: 1;
        }
    }
}
</style>
