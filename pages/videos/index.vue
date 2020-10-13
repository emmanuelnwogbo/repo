<template>
<div class="videos">
    <Video />
</div>
</template>

<script>
import Video from "@/components/Video";
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
    components: {
        Video,
    },
};
</script>

<style>
</style>
