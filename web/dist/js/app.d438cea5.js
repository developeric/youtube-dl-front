(function(t){function e(e){for(var o,s,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"40a1":function(t,e,n){t.exports=n.p+"img/link.67f04a65.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("034f"),n("2877")),r={},l=Object(s["a"])(r,i,a,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Header",{on:{clicked:t.getNewItem}}),n("div",{staticClass:"d-flex justify-content-center",staticStyle:{"margin-top":"75px"}},[t.items.length>0?n("div",t._l(t.items,(function(e,o){return n("VideoListItem",{key:o,attrs:{data:e},on:{deleted:t.removeDeletedItem}})})),1):n("div",[n("h2",[t._v("No downloads here")])])])],1)},f=[],p=(n("4160"),n("a434"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"d-flex justify-content-center"},[n("div",{staticStyle:{position:"relative"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.options.url,expression:"options.url"}],attrs:{placeholder:"https://www.youtube.com/",type:"url"},domProps:{value:t.options.url},on:{blur:t.getInfo,input:function(e){e.target.composing||t.$set(t.options,"url",e.target.value)}}}),t.isDownloading&&t.canDownload?n("button",{attrs:{disabled:""}},[t._v("Downloading..")]):t.canDownload&&!t.isDownloading?n("button",{on:{click:t.sendUrl}},[t._v("Download")]):t.isFetchingInfo?n("button",{attrs:{disabled:""}},[t._v("Loading..")]):t.canDownload?t._e():n("button",{attrs:{disabled:""}},[t._v("Download")])]),n("div",[t.options.audioOnly&&!t.isDownloading?n("button",{staticClass:"audio-button",attrs:{id:"audio-button-active"},on:{click:t.selectAudioOnly}},[t._v("Audio")]):t.options.audioOnly||!t.options.audioOnly&&t.isDownloading?n("button",{staticClass:"audio-button",attrs:{id:"audio-disabled-button",disabled:""}},[t._v("Audio")]):t._e(),t.options.audioOnly||t.isDownloading?t._e():n("button",{staticClass:"audio-button",on:{click:t.selectAudioOnly}},[t._v("Audio")])]),!t.info||t.isDownloading||t.options.audioOnly?n("select",{directives:[{name:"model",rawName:"v-model",value:t.options.videoQuality,expression:"options.videoQuality"}],attrs:{disabled:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options,"videoQuality",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",selected:""}},[t._v("Quality")])]):n("select",{directives:[{name:"model",rawName:"v-model",value:t.options.videoQuality,expression:"options.videoQuality"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options,"videoQuality",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",selected:""}},[t._v("Quality")]),t._l(t.getFormats,(function(e,o){return n("option",{key:o,domProps:{value:e.formatId}},[t._v(t._s(e.formatNote))])}))],2)])}),m=[],h=(n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("bc3a")),v=n.n(h),g={name:"Header",data:function(){return{info:null,options:{playlist:!1,url:"",videoQuality:"",soundQuality:null,audioOnly:!1},isDownloading:!1,canDownload:!1,isFetchingInfo:!1}},methods:{sendUrl:function(){var t=this;this.isDownloading=!0,this.options.audioOnly||this.options.playlist||(this.options.soundQuality=this.getBestAudio),v.a.post("/download",this.options).then((function(e){t.$emit("clicked",e.data),t.isDownloading=!1,t.options.url=""}))},getInfo:function(){var t=this;if(""!==this.options.url)if(this.options.audioOnly)this.canDownload=!0;else try{var e=null;if(this.isPlaylist(this.options.url))return this.options.playlist=!0,this.canDownload=!1,this.options.url="",void alert("Playlists downloads are not available. (yet)");this.isFetchingInfo=!0;var n=this.options.url.match(/v=([0-9a-zA-Z$-_.+!*'(),]+)/);e=n[1],v.a.get("/info/video/".concat(e)).then((function(t){return t.data})).then((function(e){t.info=e,t.isFetchingInfo=!1,t.canDownload=!0})).catch((function(e){console.log(e),t.canDownload=!0,t.isFetchingInfo=!1}))}catch(o){alert("invalid youtube url"),this.isFetchingInfo=!1,console.warn(o)}else this.canDownload=!1},selectAudioOnly:function(){this.options.audioOnly?this.options.audioOnly=!1:this.options.audioOnly=!0},isPlaylist:function(t){return RegExp(/list=([0-9a-zA-Z$-_.+!*'(),]+)/).test(t)}},computed:{getBestAudio:function(){for(var t=null,e=0;e<this.info.formats.length;e++){var n=this.info.formats[e];"m4a"==n.ext&&(t=n.format_id)}return t},getFormats:function(){for(var t=[],e=0;e<this.info.formats.length;e++){var n=this.info.formats[e];if("mp4"==n.ext){0===t.length&&t.push({formatNote:n.format_note,tbr:n.tbr,formatId:n.format_id});for(var o=!1,i=0;i<t.length;i++)if(n.format_note===t[i].formatNote){o=!0,n.tbr>t[i].tbr&&t.splice(i,1,{formatNote:n.format_note,tbr:n.tbr,formatId:n.format_id});break}o||t.push({formatNote:n.format_note,tbr:n.tbr,formatId:n.format_id})}}return console.log(this.bestAudioID),t}}},b=g,y=(n("8081"),Object(s["a"])(b,p,m,!1,null,"2c58de84",null)),_=y.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"d-flex"},["mp3"==t.data.extention?o("img",{staticClass:"media-type-icon",staticStyle:{height:"25px !important"},attrs:{src:n("f079"),alt:"Audio"}}):o("img",{staticClass:"media-type-icon",staticStyle:{height:"25px !important"},attrs:{src:n("f3b6"),alt:"Video"}}),o("img",{staticClass:"yt-image",attrs:{alt:"image",src:t.imageLink}}),o("figcaption",[o("div",{staticClass:"d-flex"},[o("strong",[o("router-link",{attrs:{to:{name:"Watch",params:{id:t.data.id}}}},[t._v(" "+t._s(t.data.title)+" ")])],1)]),o("div",{staticClass:"d-flex justify-content-between"},[o("div",[o("span",[o("a",{attrs:{target:"_blank",href:t.data.uploaderUrl}},[t._v(t._s(t.data.uploader))])])]),o("div",[o("img",{staticClass:"icon",staticStyle:{height:"20px !important"},attrs:{src:n("af22"),alt:"Download"},on:{click:function(){t.deleteItem(t.data.id)}}}),o("a",{attrs:{target:"_blank",href:t.data.videoUrl}},[o("img",{staticClass:"icon",attrs:{src:n("40a1"),alt:"Link"}})]),o("a",{attrs:{target:"_blank",href:"/file/"+t.data.id}},[o("img",{staticClass:"icon",staticStyle:{height:"20px !important"},attrs:{src:n("f28e"),alt:"Download"}})])])]),o("p",[t._v(" "+t._s(t.data.description)+" ")])])])},x=[],O={name:"VideoListItem",props:{data:Object},methods:{deleteItem:function(t){var e=this;v.a.delete("/items/".concat(t)).then((function(){e.$emit("deleted",e.data)}))}},computed:{imageLink:function(){var t=null;return 0===this.data.thumbnails.length?t="@/assets/no-image.png":this.data.thumbnails.forEach((function(e){t=e.url})),t}}},D=O,k=(n("5f5b"),Object(s["a"])(D,w,x,!1,null,"3631700b",null)),I=k.exports,j={name:"Home",mounted:function(){this.loadData()},components:{Header:_,VideoListItem:I},data:function(){return{items:[],sortedItems:[]}},methods:{getNewItem:function(t){this.loadData(),console.log(t)},loadData:function(){var t=this;v.a.get("/items").then((function(e){t.items=e.data.videos,t.items.reverse()}))},removeDeletedItem:function(t){var e=this;console.log(t.id),this.items.forEach((function(n,o){n.id===t.id&&e.items.splice(o,1)}))}}},C=j,S=Object(s["a"])(C,d,f,!1,null,null,null),A=S.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("header",[o("router-link",{attrs:{to:{name:"Home"}}},[o("img",{attrs:{src:n("a38b"),alt:"Back"}})])],1),this.item?o("div",{staticClass:"d-flex justify-content-center",staticStyle:{"margin-top":"80px"}},[o("div",{staticStyle:{width:"1024px"}},["mp3"!=this.item.extention?o("video",{attrs:{src:"/media/videos/"+this.item.fileName,controls:""}}):o("video",{style:"background: url("+t.item.thumbnails[4].url+"); background-size:cover;",attrs:{src:t.serverUrl+"/media/music/"+this.item.fileLocation,controls:""}}),o("h3",{staticStyle:{"margin-bottom":"0"}},[t._v(t._s(this.item.title))]),o("strong",[t._v(t._s(this.item.uploader))]),o("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(this.item.description))])])]):t._e()])},N=[],P={name:"Watch",mounted:function(){var t=this;v.a.get("/items/".concat(this.$route.params.id)).then((function(e){t.item=e.data}))},data:function(){return{item:null}}},Q=P,E=(n("b286"),Object(s["a"])(Q,$,N,!1,null,"81421ce8",null)),F=E.exports;o["a"].use(u["a"]);var L=[{path:"/",name:"Home",component:A},{path:"/watch/:id",name:"Watch",component:F}],H=new u["a"]({routes:L}),U=H;o["a"].config.productionTip=!1,new o["a"]({router:U,render:function(t){return t(c)}}).$mount("#app")},"5f5b":function(t,e,n){"use strict";var o=n("bc30"),i=n.n(o);i.a},8081:function(t,e,n){"use strict";var o=n("95f3"),i=n.n(o);i.a},"85ec":function(t,e,n){},"8a27":function(t,e,n){},"95f3":function(t,e,n){},a38b:function(t,e,n){t.exports=n.p+"img/arrowleft.612cbcbd.svg"},af22:function(t,e,n){t.exports=n.p+"img/trash.46df62da.svg"},b286:function(t,e,n){"use strict";var o=n("8a27"),i=n.n(o);i.a},bc30:function(t,e,n){},f079:function(t,e,n){t.exports=n.p+"img/note.65fc3c34.svg"},f28e:function(t,e,n){t.exports=n.p+"img/download.28aa1a76.svg"},f3b6:function(t,e,n){t.exports=n.p+"img/videocamera.c14fd336.svg"}});
//# sourceMappingURL=app.d438cea5.js.map