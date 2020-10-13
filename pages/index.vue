<template>
<div class="container">
    <TopJumbotron />
    <Main />
</div>
</template>

<script>
import Main from "@/components/Main";
import TopJumbotron from "@/components/TopJumbotron";
export default {
    components: {
        TopJumbotron,
    },
};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
}
</style>
