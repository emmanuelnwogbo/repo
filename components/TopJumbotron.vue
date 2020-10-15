<template>
<div class="topjumbotron" v-bind:style="{
      backgroundImage: `url(https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,h_1982,q_68/v1602560055/endsar_5_dgrmb8.jpg)`,
    }">
    <div class="topjumbotron__copy">
        <p>
            For decades the Nigerian police especially the Special Anti Robbery
            Squad (SARS) have terrorized Nigerian youths. The #EndSARS movement is a
            movement by Nigeria youth for Nigerian youth to tackle police brutality
            and the systemic decay evident in the Nigerian police force. In light of
            this, thousands of youth across the nation have several peaceful
            protests to allay their grievances to the Nigerian Government. The
            <nuxt-link to="/">endSARSmovement.com</nuxt-link> is a media repository dedicated to document and
            display the journey of Nigerian youths on their quest for real
            transformation and change.
        </p>
    </div>
    <div class="topjumbotron__intro">
        <button class="topjumbotron__intro--btn" @click="viewVideo('C0237_1_1_k2ehp5.mp4')">watch</button>
    </div>
</div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
    name: "TopJumbotron",
    head() {
        return {
            script: [{
                src: "https://unpkg.com/plyr@3",
            }, ],
            link: [{
                rel: "stylesheet",
                href: "https://unpkg.com/plyr@3/dist/plyr.css",
            }, ],
        };
    },
    components: {
        VLazyImage,
    },
    methods: {
        viewVideo(video) {
            this.$router.push('/video/' + video)
        }
    }
};
</script>

<style lang="scss">
.topjumbotron {
    position: relative;
    height: 40rem;
    background-size: cover;
    background-position: bottom;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include respond(phone) {
        height: auto;
        display: flex;
        align-items: flex-start;
        padding: 3rem 0;
        flex-direction: column;
        margin-top: 8rem;
    }

    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, .7)
    }

    &__copy {
        line-height: 3.1rem;
        color: #fff;
        z-index: 2;
        font-size: 1.9rem;
        padding: 1rem 6rem;
        width: 84rem;
        position: relative;
        left: 0;

        @include respond(phone) {
            position: relative;
            line-height: 3.6rem;
            font-size: 2.2rem;
            padding: 0 2rem;
            width: 100vw;
            bottom: 0;
            left: 0;
            text-align: left;
            height: auto;
            margin-bottom: 2rem
        }
    }

    &__intro {
        padding: 1rem 6rem;
        z-index: 2;

        @include respond(phone) {
            padding: 1rem 2rem;
        }

        &--btn {
            padding: 1rem 3rem;
            color: #fff;
            background: transparent;
            outline: none;
            border: .2rem solid #fff;
            cursor: pointer;
            text-transform: uppercase;

            @include respond(phone) {
                padding: 1rem 3rem;
            }
        }
    }
}
</style>
