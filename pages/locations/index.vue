<template>
<div class="locations">
    <div class="locations__maps">
        <div class="locations__map">
            <gmap-map :center="center" :zoom="10" style="width:100%;  height: 50rem; margin: 3rem 0">
                <gmap-marker :key="index" v-for="(m, index) in markers" :position="m" @click="triggerMarker(m)"></gmap-marker>
            </gmap-map>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            center: {
                lat: 6.5730,
                lng: 3.3193
            },
            markers: [{
                lat: 6.5730,
                lng: 3.3193
            }, {
                lat: 6.612282,
                lng: 3.358426
            }],
        };
    },
    methods: {
        triggerMarker(pos) {
            this.center = pos
            console.log(pos)
            axios
                .get(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=AIzaSyDFdPqz2fYoM39ld7gTxES1zvTuJYyc9S4`
                ).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
        },
        geolocate: function () {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });

        }
    },
    mounted() {
        this.geolocate();
    }
}
</script>

<style lang="scss">
.locations {
    &__maps {
        @include respond(phone) {
            margin-top: 12rem;
        }
    }
}
</style>
