<template>
<div class="header">
    <div class="header__sidenav" v-bind:class="[sidenavopen ? 'opensidenav' : 'closedsidenav']" @click="togglesidenav">
        <div class="header__sidenav--body">
            <nuxt-link v-for="(item, index) in menu" :key="index" @click="triggerMenu(item)" v-bind:class="[item === currentMenu ? 'clicked' : '']" :to="routeName[index]"><span>{{ item }}</span></nuxt-link>
        </div>
    </div>
    <div class="header__burger" @click="togglesidenav">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="29.9639587px" height="19.9589844px" viewBox="0 0 29.9639587 19.9589844" style="
          enable-background: new 0 0 29.9639587 19.9589844;
          enable-background: new 0 0 29.9639587 19.9589844;
        " xml:space="preserve" class="header__group-img" gi-icon="unisporkal/getty/hamburger">
            <g>
                <rect width="29.9639587" height="2.9716384"></rect>
                <rect y="8.7377119" width="29.9639587" height="2.9716384"></rect>
                <rect y="16.9873466" width="29.9639587" height="2.9716384"></rect>
            </g>
        </svg>
    </div>

    <div class="header__name">endsarsmovement</div>

    <div class="header__menu">
        <nuxt-link v-for="(item, index) in menu" :key="index" @click="triggerMenu(item)" v-bind:class="[item === currentMenu ? 'clicked' : '']" :to="routeName[index]"><span>{{ item }}</span></nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            menu: ["photos", "videos",
                /*"locations", "social media"*/
            ],
            routeName: ["/", "/videos", "/locations", "/socialmedia"],
            currentMenu: "photos",
            sidenavopen: false,
        };
    },
    methods: {
        triggerMenu(item) {
            this.currentMenu = item;
        },
        togglesidenav() {
            this.sidenavopen ? (this.sidenavopen = false) : (this.sidenavopen = true);
        },
    },
};
</script>

<style lang="scss">
.header {
    background: #000;
    color: #fff;
    height: 8rem;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;

    @include respond(tab-land) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 3;
    }

    &__name {
        font-size: 2.4rem;
        padding-left: 3rem;
        font-weight: 700;
    }

    &__burger {
        cursor: pointer;
        display: none;

        @include respond(tab-land) {
            display: block;
        }

        & svg {
            fill: #fff;
        }
    }

    &__menu {
        margin: 0 auto;
        font-size: 1.7rem;
        font-weight: 400;
        transform: translateX(-11rem);

        @include respond(tab-land) {
            display: none;
        }

        & a span {
            position: relative;
            display: inline-block;
            margin: 0 5rem;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.5s ease-in;

            &.clicked {
                &::before {
                    content: "";
                    position: absolute;
                    top: 2.6rem;
                    left: 0;
                    background: #fff;
                    width: 100%;
                    height: 0.4rem;
                }
            }
        }
    }

    &__sidenav {
        position: fixed;
        top: 8rem;
        height: 80rem;
        width: 60rem;
        background: transparent;
        left: 0;

        font-size: 2.5rem;
        text-transform: uppercase;

        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

        &--body {
            width: 30rem;
            background: #000000;
            padding-left: 2rem;
            display: flex;
            flex-direction: column;
            padding-top: 2rem;
            height: 100rem;
        }

        & span {
            display: inline-block;
            margin: 1rem 0;
            border: .2rem solid #fff;
            padding: 1rem 3rem;
            margin: 2rem 1rem;
            font-size: 2rem;
        }
    }
}

.closedsidenav {
    transform: translateX(-100%);
}
</style>
