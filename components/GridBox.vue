<template>
<div class="gridbox">
    <figure ref="figure" v-bind:style="{
        backgroundImage: `url(${thumbnail})`,
      }" v-bind:class="[
        visible === true ? 'isloaded' : '',
      ]"></figure>
</div>
</template>

<script>
export default {
    name: "Gridbox",
    props: {
        thumbnail: String,
        url: String,
        visible: false
    },
    mounted() {
        console.log(this.thumbnail)
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    //console.log('is intersection');
                    //this.visible = true;
                }
            });
        });

        imageObserver.observe(this.$refs.figure);
    }
};
</script>

<style lang="scss">
.gridbox {
    position: relative;
    grid-column: span 7;
    grid-row: span 5;
    overflow: hidden;

    @include respond(phone) {
        height: 40rem;
        width: 60rem;
    }

    &:hover {
        & figure {
            transform: scale(1.2);
            backface-visibility: hidden;
        }
    }

    & figure {
        //opacity: 0;
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        backface-visibility: hidden;

        &:hover {
            transform: scale(1.2);
            backface-visibility: hidden;
        }

        &.isloaded {
            opacity: 1
        }
    }
}
</style>
