(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{186:function(e,t,o){var content=o(190);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("922bac38",content,!0,{sourceMap:!1})},187:function(e,t,o){"use strict";o.r(t);var n={name:"Video",data:function(){return{original_duration:0,duration:0,video:null}},mounted:function(){console.log(this.$store)},methods:{viewVideo:function(video){this.$router.push("/video/"+video)}}},r=(o(189),o(15)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{on:{click:function(t){return e.viewVideo("C0237_1_1_k2ehp5.mp4")}}},[o("div",{staticClass:"video"},[o("div",{staticClass:"video__poster",style:{backgroundImage:"url(https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,h_1982,q_68/v1602560055/endsar_5_dgrmb8.jpg)"}},[o("span",[e._v(e._s("2:21"))])])])])])}),[],!1,null,null,null);t.default=component.exports},189:function(e,t,o){"use strict";var n=o(186);o.n(n).a},190:function(e,t,o){(t=o(43)(!1)).push([e.i,".video{position:relative;height:30rem;width:50rem;cursor:pointer}@media only screen and (max-width:37.5em){.video{width:100vw}}.video__poster{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;display:flex;background-size:cover;background-position:bottom;justify-content:center;align-items:center}.video__poster span{color:#fff;font-size:1.6rem;background:#000;padding:.1rem 1rem;position:absolute;right:1rem;bottom:1rem}",""]),e.exports=t},218:function(e,t,o){"use strict";o.r(t);var n={head:function(){return{script:[{src:"https://unpkg.com/plyr@3"}],link:[{rel:"stylesheet",href:"https://unpkg.com/plyr@3/dist/plyr.css"}]}},components:{Video:o(187).default}},r=o(15),component=Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"videos"},[t("Video")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Video:o(187).default})}}]);