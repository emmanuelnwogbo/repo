import Vue from 'vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDFdPqz2fYoM39ld7gTxES1zvTuJYyc9S4",
      libraries: "places" // necessary for places input
    }
  });