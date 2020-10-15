<template>
<div class="donationlinks">hello donat</div>
</template>

<script>
export default {
    name: 'DonationLinks',
    data() {
        return {
            linksNames: ["feministcoalition2020.com", "videos", "donation links",
                /*"locations", "social media"*/
            ],
            externalLinks: ["https://feministcoalition2020.com/", "/videos", "/donationlinks", "/locations", "/socialmedia"],
            twitter: ['@feminist_co', '@fkabudu']
        };
    },
}
</script>

<style lang="scss">
.donationlinks {
    min-height: 100vh;
    background: #fff;
    color: #000000;
    font-weight: 500;
    padding: 5rem;
    font-size: 2rem;
}
</style>
