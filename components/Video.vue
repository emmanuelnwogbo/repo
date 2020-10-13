<template>
<div>
    <div @click="viewVideo('C0237_1_1_k2ehp5.mp4')">
        <div class="video">
            <div class="video__poster" v-bind:style="{
            backgroundImage: `url(https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,h_1982,q_68/v1602560055/endsar_5_dgrmb8.jpg)`,
          }">
                <span>{{ "2:21" }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Video",
    data() {
        return {
            original_duration: 0,
            duration: 0,
            video: null,
        };
    },
    mounted() {
        console.log(this.$store);
    },
    methods: {
        viewVideo(video) {
            this.$router.push('/video/' + video)
        }
    }
}
</script>

<style lang="scss">
.video {
    position: relative;
    height: 30rem;
    width: 50rem;
    cursor: pointer;

    @include respond(phone) {
        width: 100vw;
    }

    &__poster {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;

        background-size: cover;
        background-position: bottom;
        justify-content: center;

        align-items: center;

        & span {
            color: #fff;
            font-size: 1.6rem;
            background: #000000;
            padding: 0.1rem 1rem;
            position: absolute;
            right: 1rem;
            bottom: 1rem;
        }
    }
}
</style>
