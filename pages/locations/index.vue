<template>
<div class="locations">
    <h1>protest locations</h1>
    <div class="locations__maps">
        <div class="locations__map">
            <!--<gmap-autocomplete @place_changed="setPlace">
                </gmap-autocomplete>
                <button @click="addMarker">Add</button>-->
            <gmap-map :center="center" :zoom="6" style="width:100%;  height: 40rem; margin: 2rem 0">
                <gmap-marker :key="index" v-for="(m, index) in markers" :position="m" @click="triggerMarker(m)"></gmap-marker>
            </gmap-map>
        </div>
    </div>

    <div class="locations__text">
        <div class="locations__text--local" v-for="(item, index) in places" :key="index">
            <h2>{{ item.state }}</h2>
            <span v-for="(place, index) in item.places" :key="index">* {{ place }}</span>
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
                }, {
                    lat: 6.573,
                    lng: 3.3193
                },
                {
                    lat: 6.612282,
                    lng: 3.358426
                },

                {
                    lat: 6.6209523,
                    lng: 3.5025774
                },

                {
                    lat: 6.556090499999998,
                    lng: 3.3880984
                },

                {
                    lat: 6.573109400000001,
                    lng: 3.3226412
                },

                {
                    lat: 7.398023699999998,
                    lng: 3.912658799999999
                },

                {
                    lat: 7.338137,
                    lng: 3.877183399999999
                },

                {
                    lat: 7.423788999999999,
                    lng: 3.909855899999999
                },

                {
                    lat: 6.334002400000001,
                    lng: 5.622510900000001
                },

                {
                    lat: 6.3331293,
                    lng: 5.622467500000001
                },

                {
                    lat: 10.5392474,
                    lng: 7.4363065
                },
            ],
            places: [{
                    state: "Lagos",
                    places: [
                        'Brt terminal Ikorodu garage',
                        'Deeper life church bustop gbagada',
                        'International  Airport  road'
                    ]
                },
                {
                    state: "Ibadan",
                    places: [
                        'NTA  complex agodi gate',
                        'Challenge round about',
                        'State secretariat'
                    ]
                },
                {
                    state: "Benin",
                    places: [
                        'Ring road benin city',
                        'Edha , Kingsquare benin'
                    ]
                },
                {
                    state: "Kaduna",
                    places: [
                        'Luggard roundabout 9am'
                    ]
                }
            ],
            currentPlace: null
        };
    },
    methods: {
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng()
                };
                this.markers.push(marker);
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
                console.log(this.markers)
            }
        },
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
    color: #000000;
    background: #fff;

    & h1 {
        padding: 0rem 4rem;
        text-align: center;
        text-transform: uppercase;
        padding-top: 2rem;

        @include respond(phone) {
            transform: translateY(10rem);
        }

    }

    &__maps {
        @include respond(phone) {
            margin-top: 12rem;
        }
    }

    &__text {
        display: grid;
        grid-template-columns: repeat(28, 1fr);
        grid-template-rows: repeat(5, 7rem);
        grid-auto-rows: 7rem;

        @include respond(phone) {
            display: flex;
            flex-direction: column
        }

        &--local {
            padding: 2rem 4rem;
            grid-column: span 7;
            grid-row: span 5;
            display: flex;
            flex-direction: column;
            font-size: 2rem;

            & h2 {
                font-size: 1.8rem;
                margin-bottom: 2rem;
                text-transform: uppercase;
                text-decoration: underline;
            }

            & span {
                display: inline-block;
                margin: .5rem 0;
            }
        }
    }
}
</style>
