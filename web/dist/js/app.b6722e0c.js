(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"40a1":function(t,e,o){t.exports=o.p+"img/link.67f04a65.svg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],s=(o("034f"),o("2877")),r={},l=Object(s["a"])(r,i,a,!1,null,null,null),c=l.exports,u=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("Header",{on:{clicked:t.getNewItem}}),o("div",{staticClass:"d-flex justify-content-center",staticStyle:{"margin-top":"75px"}},[t.items.length>0?o("div",t._l(t.items,(function(e,n){return o("VideoListItem",{key:n,attrs:{data:e},on:{deleted:t.removeDeletedItem}})})),1):o("div",[o("h2",[t._v("No downloads here")])])])],1)},f=[],p=(o("4160"),o("a434"),o("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"d-flex justify-content-center"},[o("div",{staticStyle:{position:"relative"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.url,expression:"options.url"}],attrs:{placeholder:"https://www.youtube.com/",type:"url"},domProps:{value:t.options.url},on:{blur:t.getInfo,input:function(e){e.target.composing||t.$set(t.options,"url",e.target.value)}}}),t.isDownloading&&t.canDownload?o("button",{attrs:{disabled:""}},[t._v("Downloading..")]):t.canDownload&&!t.isDownloading?o("button",{on:{click:t.sendUrl}},[t._v("Download")]):t.isFetchingInfo?o("button",{attrs:{disabled:""}},[t._v("Loading..")]):t.canDownload?t._e():o("button",{attrs:{disabled:""}},[t._v("Download")])]),o("div",[t.options.audioOnly&&!t.isDownloading?o("button",{staticClass:"audio-button",attrs:{id:"audio-button-active"},on:{click:t.selectAudioOnly}},[t._v("Audio")]):t.options.audioOnly||!t.options.audioOnly&&t.isDownloading?o("button",{staticClass:"audio-button",attrs:{id:"audio-disabled-button",disabled:""}},[t._v("Audio")]):t._e(),t.options.audioOnly||t.isDownloading?t._e():o("button",{staticClass:"audio-button",on:{click:t.selectAudioOnly}},[t._v("Audio")])]),!t.info||t.isDownloading||t.options.audioOnly?o("select",{directives:[{name:"model",rawName:"v-model",value:t.options.videoQuality,expression:"options.videoQuality"}],attrs:{disabled:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options,"videoQuality",e.target.multiple?o:o[0])}}},[o("option",{attrs:{disabled:"",selected:""}},[t._v("Quality")])]):o("select",{directives:[{name:"model",rawName:"v-model",value:t.options.videoQuality,expression:"options.videoQuality"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options,"videoQuality",e.target.multiple?o:o[0])}}},[o("option",{attrs:{disabled:"",selected:""}},[t._v("Quality")]),t._l(t.getFormats,(function(e,n){return o("option",{key:n,domProps:{value:e.formatId}},[t._v(t._s(e.formatNote))])}))],2)])}),m=[],h=(o("4d63"),o("ac1f"),o("25f0"),o("466d"),o("bc3a")),v=o.n(h),g={name:"Header",data:function(){return{info:null,options:{playlist:!1,url:"",videoQuality:"",soundQuality:null,audioOnly:!1},isDownloading:!1,canDownload:!1,isFetchingInfo:!1}},methods:{sendUrl:function(){var t=this;this.isDownloading=!0,this.options.audioOnly||this.options.playlist||(this.options.soundQuality=this.getBestAudio),v.a.post("/download",this.options).then((function(e){t.$emit("clicked",e.data),t.isDownloading=!1,t.options.url=""}))},getInfo:function(){var t=this;if(""!==this.options.url)if(this.options.audioOnly)this.canDownload=!0;else try{var e=null;if(this.isPlaylist(this.options.url))return this.options.playlist=!0,this.canDownload=!1,this.options.url="",void alert("Playlists downloads are not available. (yet)");this.isFetchingInfo=!0;var o=this.options.url.match(/v=([0-9a-zA-Z$-_.+!*'(),]+)/);e=o[1],v.a.get("/info/video/".concat(e)).then((function(t){return t.data})).then((function(e){t.info=e,t.isFetchingInfo=!1,t.canDownload=!0})).catch((function(e){console.log(e),t.canDownload=!0,t.isFetchingInfo=!1}))}catch(n){alert("invalid youtube url"),this.isFetchingInfo=!1,console.warn(n)}else this.canDownload=!1},selectAudioOnly:function(){this.options.audioOnly?this.options.audioOnly=!1:this.options.audioOnly=!0},isPlaylist:function(t){return RegExp(/list=([0-9a-zA-Z$-_.+!*'(),]+)/).test(t)}},computed:{getBestAudio:function(){for(var t=null,e=0;e<this.info.formats.length;e++){var o=this.info.formats[e];"m4a"==o.ext&&(t=o.format_id)}return t},getFormats:function(){for(var t=[],e=0;e<this.info.formats.length;e++){var o=this.info.formats[e];if("mp4"==o.ext){0===t.length&&t.push({formatNote:o.format_note,tbr:o.tbr,formatId:o.format_id});for(var n=!1,i=0;i<t.length;i++)if(o.format_note===t[i].formatNote){n=!0,o.tbr>t[i].tbr&&t.splice(i,1,{formatNote:o.format_note,tbr:o.tbr,formatId:o.format_id});break}n||t.push({formatNote:o.format_note,tbr:o.tbr,formatId:o.format_id})}}return console.log(this.bestAudioID),t}}},b=g,y=(o("8081"),Object(s["a"])(b,p,m,!1,null,"2c58de84",null)),_=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"d-flex"},["mp3"==t.data.extention?n("img",{staticClass:"media-type-icon",staticStyle:{height:"25px !important"},attrs:{src:o("f079"),alt:"Audio"}}):n("img",{staticClass:"media-type-icon",staticStyle:{height:"25px !important"},attrs:{src:o("f3b6"),alt:"Video"}}),n("img",{staticClass:"yt-image",attrs:{alt:"image",src:t.data.thumbnails[3].url}}),n("figcaption",[n("div",{staticClass:"d-flex"},[n("strong",[n("router-link",{attrs:{to:{name:"Watch",params:{id:t.data.id}}}},[t._v(" "+t._s(t.data.title)+" ")])],1)]),n("div",{staticClass:"d-flex justify-content-between"},[n("div",[n("span",[n("a",{attrs:{target:"_blank",href:t.data.uploaderUrl}},[t._v(t._s(t.data.uploader))])])]),n("div",[n("img",{staticClass:"icon",staticStyle:{height:"20px !important"},attrs:{src:o("af22"),alt:"Download"},on:{click:function(){t.deleteItem(t.data.id)}}}),n("a",{attrs:{target:"_blank",href:t.data.videoUrl}},[n("img",{staticClass:"icon",attrs:{src:o("40a1"),alt:"Link"}})]),n("a",{attrs:{target:"_blank",href:"/file/"+t.data.id}},[n("img",{staticClass:"icon",staticStyle:{height:"20px !important"},attrs:{src:o("f28e"),alt:"Download"}})])])]),n("p",[t._v(" "+t._s(t.data.description)+" ")])])])},x=[],O={name:"VideoListItem",props:{data:Object},methods:{deleteItem:function(t){var e=this;v.a.delete("/items/".concat(t)).then((function(){e.$emit("deleted",e.data)}))}},computed:{imageLink:function(){return this.data.thumbnails[3].url.match(/(\w\B.+)\?sqp=/)[1]}}},D=O,k=(o("916e"),Object(s["a"])(D,w,x,!1,null,"7ede389b",null)),I=k.exports,j={name:"Home",mounted:function(){this.loadData()},components:{Header:_,VideoListItem:I},data:function(){return{items:[],sortedItems:[]}},methods:{getNewItem:function(t){this.loadData(),console.log(t)},loadData:function(){var t=this;v.a.get("/items").then((function(e){t.items=e.data.videos,t.items.reverse()}))},removeDeletedItem:function(t){var e=this;console.log(t.id),this.items.forEach((function(o,n){o.id===t.id&&e.items.splice(n,1)}))}}},C=j,S=Object(s["a"])(C,d,f,!1,null,null,null),A=S.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("header",[n("router-link",{attrs:{to:{name:"Home"}}},[n("img",{attrs:{src:o("a38b"),alt:"Back"}})])],1),this.item?n("div",{staticClass:"d-flex justify-content-center",staticStyle:{"margin-top":"80px"}},[n("div",{staticStyle:{width:"1024px"}},["mp3"!=this.item.extention?n("video",{attrs:{src:"/media/videos/"+this.item.fileName,controls:""}}):n("video",{style:"background: url("+t.item.thumbnails[4].url+"); background-size:cover;",attrs:{src:t.serverUrl+"/media/music/"+this.item.fileLocation,controls:""}}),n("h3",{staticStyle:{"margin-bottom":"0"}},[t._v(t._s(this.item.title))]),n("strong",[t._v(t._s(this.item.uploader))]),n("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(this.item.description))])])]):t._e()])},N=[],P={name:"Watch",mounted:function(){var t=this;v.a.get("/items/".concat(this.$route.params.id)).then((function(e){t.item=e.data}))},data:function(){return{item:null}}},Q=P,F=(o("b286"),Object(s["a"])(Q,$,N,!1,null,"81421ce8",null)),E=F.exports;n["a"].use(u["a"]);var L=[{path:"/",name:"Home",component:A},{path:"/watch/:id",name:"Watch",component:E}],H=new u["a"]({routes:L}),U=H;n["a"].config.productionTip=!1,new n["a"]({router:U,render:function(t){return t(c)}}).$mount("#app")},8081:function(t,e,o){"use strict";var n=o("95f3"),i=o.n(n);i.a},"85ec":function(t,e,o){},"8a27":function(t,e,o){},"8cb8":function(t,e,o){},"916e":function(t,e,o){"use strict";var n=o("8cb8"),i=o.n(n);i.a},"95f3":function(t,e,o){},a38b:function(t,e,o){t.exports=o.p+"img/arrowleft.612cbcbd.svg"},af22:function(t,e,o){t.exports=o.p+"img/trash.46df62da.svg"},b286:function(t,e,o){"use strict";var n=o("8a27"),i=o.n(n);i.a},f079:function(t,e,o){t.exports=o.p+"img/note.65fc3c34.svg"},f28e:function(t,e,o){t.exports=o.p+"img/download.28aa1a76.svg"},f3b6:function(t,e,o){t.exports=o.p+"img/videocamera.c14fd336.svg"}});
//# sourceMappingURL=app.b6722e0c.js.map