<template>
<div class="videopage" v-bind:class="[
        visible === true ? 'visible' : 'invisible',
      ]">
    <div class="videopage__container">
        <video ref="video" controls playsinline>
            <source :src="video_url" type="video/mp4" />
        </video>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            base_url: "https://res.cloudinary.com/dnsj71rid/video/upload/v1602557888",
            video_url: null,
            visible: false
        };
    },
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
    mounted() {
        this.video_url = `${this.base_url}/${this.id}`
        this.video = this.$refs.video;
        const player = new Plyr("video", {
            captions: {
                active: true,
            },
        });

        this.visible = true;
    },
};
</script>

<style lang="scss">
:root {
    --plyr-color-main: #000000;
    --plyr-control-icon-size: 2.2rem;
    --plyr-control-padding: 6rem
}

.videopage {
    transition: all .3s ease;
    position: absolute;
    top: 8rem;
    height: 76rem;
    width: 100vw;
    background: #000000;

    @include respond(phone) {
        height: 100rem;
    }

    &__container {
        margin: 3rem auto;
        width: 120rem;
        height: 60rem;

        @include respond(phone) {
            width: 100vw;
            height: 40rem;
        }
    }
}

.visible {
    opacity: 1
}

.invisible {
    opacity: 0
}
</style>
