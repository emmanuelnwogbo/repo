(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{224:function(t,e,n){var content=n(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("49875140",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";var o=n(224);n.n(o).a},241:function(t,e,n){(e=n(24)(!1)).push([t.i,".locations{color:#000;background:#fff}.locations h1{text-align:center;text-transform:uppercase;padding:2rem 4rem 0}@media only screen and (max-width:37.5em){.locations h1{transform:translateY(10rem)}}@media only screen and (max-width:37.5em){.locations__maps{margin-top:12rem}}.locations__text{display:grid;grid-template-columns:repeat(28,1fr);grid-template-rows:repeat(5,7rem);grid-auto-rows:7rem}@media only screen and (max-width:37.5em){.locations__text{display:flex;flex-direction:column}}.locations__text--local{padding:2rem 4rem;grid-column:span 7;grid-row:span 5;display:flex;flex-direction:column;font-size:2rem}.locations__text--local h2{font-size:1.8rem;margin-bottom:2rem;text-transform:uppercase;text-decoration:underline}.locations__text--local span{display:inline-block;margin:.5rem 0}",""]),t.exports=e},257:function(t,e,n){"use strict";n.r(e);var o=n(135),l=n.n(o),r={data:function(){return{center:{lat:6.573,lng:3.3193},markers:[{lat:6.573,lng:3.3193},{lat:6.612282,lng:3.358426},{lat:6.573,lng:3.3193},{lat:6.612282,lng:3.358426},{lat:6.6209523,lng:3.5025774},{lat:6.556090499999998,lng:3.3880984},{lat:6.573109400000001,lng:3.3226412},{lat:7.398023699999998,lng:3.912658799999999},{lat:7.338137,lng:3.877183399999999},{lat:7.423788999999999,lng:3.909855899999999},{lat:6.334002400000001,lng:5.622510900000001},{lat:6.3331293,lng:5.622467500000001},{lat:10.5392474,lng:7.4363065}],places:[{state:"Lagos",places:["Brt terminal Ikorodu garage","Deeper life church bustop gbagada","International  Airport  road"]},{state:"Ibadan",places:["NTA  complex agodi gate","Challenge round about","State secretariat"]},{state:"Benin",places:["Ring road benin city","Edha , Kingsquare benin"]},{state:"Kaduna",places:["Luggard roundabout 9am"]}],currentPlace:null}},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var marker={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push(marker),this.places.push(this.currentPlace),this.center=marker,this.currentPlace=null,console.log(this.markers)}},triggerMarker:function(t){this.center=t,console.log(t),l.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t.lat,",").concat(t.lng,"&key=AIzaSyDFdPqz2fYoM39ld7gTxES1zvTuJYyc9S4")).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}}))}},mounted:function(){this.geolocate()}},c=(n(240),n(4)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"locations"},[n("h1",[t._v("protest locations")]),t._v(" "),n("div",{staticClass:"locations__maps"},[n("div",{staticClass:"locations__map"},[n("gmap-map",{staticStyle:{width:"100%",height:"50rem",margin:"2rem 0"},attrs:{center:t.center,zoom:6}},t._l(t.markers,(function(e,o){return n("gmap-marker",{key:o,attrs:{position:e},on:{click:function(n){return t.triggerMarker(e)}}})})),1)],1)]),t._v(" "),n("div",{staticClass:"locations__text"},t._l(t.places,(function(e,o){return n("div",{key:o,staticClass:"locations__text--local"},[n("h2",[t._v(t._s(e.state))]),t._v(" "),t._l(e.places,(function(e,o){return n("span",{key:o},[t._v("* "+t._s(e))])}))],2)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);