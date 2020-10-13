<template>
<nuxt-link to="/video"></nuxt-link>
</template>

<script>
export default {
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
}
</script>

<style lang="scss">
.videoview {}
</style>
