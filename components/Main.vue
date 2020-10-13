<template>
<div class="main">
    <Jumbotron />
    <Gridbox v-for="(item, index) in images" :key="index" :thumbnail="item.thumb_url" :url="item.url" />
</div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron";
import Gridbox from "@/components/Gridbox";
export default {
    name: "Main",
    components: {
        Jumbotron,
        Gridbox,
    },
    data() {
        return {
            images: [{
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A6004_wgukic.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546784/VI2A6004_wgukic.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5947_kuocae.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546781/VI2A5947_kuocae.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A6028_pregqc.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546774/VI2A6028_pregqc.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A6030_azy5v1.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546769/VI2A6030_azy5v1.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5983_nbxgrw.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546756/VI2A5983_nbxgrw.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5981_sbnpii.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546753/VI2A5981_sbnpii.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A6023_b6ydyv.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546752/VI2A6023_b6ydyv.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5999_crtrap.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546752/VI2A5999_crtrap.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5995_jrhray.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546735/VI2A5995_jrhray.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5959_xxhrih.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546732/VI2A5959_xxhrih.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5912_abnfqd.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546724/VI2A5912_abnfqd.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5945_rcd0ox.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546691/VI2A5945_rcd0ox.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5977_rqhjfb.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546687/VI2A5977_rqhjfb.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5902_seqjun.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546686/VI2A5902_seqjun.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5941_nc81zu.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546627/VI2A5941_nc81zu.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5938_husenr.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546623/VI2A5938_husenr.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5885_gnzjrd.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546622/VI2A5885_gnzjrd.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A6051_lqaflz.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546597/VI2A6051_lqaflz.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5889_vsnron.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546592/VI2A5889_vsnron.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5903_iun3ix.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546562/VI2A5903_iun3ix.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5895_igoufk.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546523/VI2A5895_igoufk.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A6114_kdsxog.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546522/VI2A6114_kdsxog.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A6102_a8dl3t.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546507/VI2A6102_a8dl3t.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A5881_cqldkg.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546505/VI2A5881_cqldkg.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A6135_df6dlm.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546499/VI2A6135_df6dlm.jpg",
                },
                {
                    thumb_url: "https://res.cloudinary.com/dnsj71rid/image/upload/q_7/VI2A6129_tzk38v.jpg",
                    url: "https://res.cloudinary.com/dnsj71rid/image/upload/v1602546473/VI2A6129_tzk38v.jpg",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.main {
    display: grid;
    min-height: 70rem;
    grid-template-columns: repeat(28, 1fr);
    grid-template-rows: repeat(5, 7rem);
    grid-auto-rows: 7rem;
    background: #000000;

    @include respond(tab-land) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
