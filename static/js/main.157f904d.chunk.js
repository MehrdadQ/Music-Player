(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(11),c=a.n(i),s=a(10),o=a.n(s),u=a(12),d=a(3),b=a(6),l=(a(19),a(4)),g=a(5),j=function(e,t){if(e){var a=t.current.play();void 0!==a&&a.then((function(e){t.current.play()}))}},m=a(0),p=function(e){var t=e.audioRef,a=e.currentSong,r=e.isPlaying,i=e.setIsPlaying,c=e.songInfo,s=e.setSongInfo,o=e.songs,u=e.setCurrentSong,b=e.setSongs;Object(n.useEffect)((function(){var e=o.map((function(e){return e.id===a.id?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));b(e)}),[a]);var p=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},v=function(e){var n=o.findIndex((function(e){return e.id===a.id}));"skip-forward"===e?u(o[(n+1)%o.length]):(n-1)%o.length===-1?u(o[o.length-1]):u(o[(n-1)%o.length]),j(r,t)},O={transform:"translateX(".concat(c.animationPercentage,"%)")};return Object(m.jsxs)("div",{className:"player-container",children:[Object(m.jsxs)("div",{className:"time-control",children:[Object(m.jsx)("p",{children:c.currentTime?p(c.currentTime):"0:00"}),Object(m.jsxs)("div",{className:"track",style:{backgroundColor:a.color[1]},children:[Object(m.jsx)("input",{min:0,max:c.duration||0,value:c.currentTime,type:"range",onChange:function(e){s(Object(d.a)(Object(d.a)({},c),{},{currentTime:e.target.value})),t.current.currentTime=e.target.value}}),Object(m.jsx)("div",{className:"animate-track",style:O})]}),Object(m.jsx)("p",{children:c.duration?p(c.duration):"0:00"})]}),Object(m.jsxs)("div",{className:"play-control",children:[Object(m.jsx)(l.a,{onClick:function(){return v("skip-back")},className:"skip-b",icon:g.a,size:"2x"}),Object(m.jsx)(l.a,{onClick:function(){r?(t.current.pause(),i(!r)):(t.current.play(),i(!r))},className:"play",icon:r?g.d:g.e,size:"2x"}),Object(m.jsx)(l.a,{onClick:function(){return v("skip-forward")},className:"skip-f",icon:g.b,size:"2x"})]})]})},v=function(e){var t=e.currentSong;return Object(m.jsxs)("div",{className:"song-container",children:[Object(m.jsx)("img",{src:t.cover,alt:"song cover"}),Object(m.jsx)("h2",{children:t.name}),Object(m.jsx)("h3",{children:t.artist})]})},O=function(e){var t=e.song,a=e.songs,n=e.setCurrentSong,r=e.id,i=e.audioRef,c=e.isPlaying,s=e.setSongs;return Object(m.jsxs)("div",{className:"library-song ".concat(t.active?"selected":""),onClick:function(){n(t);var e=a.map((function(e){return e.id===r?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));s(e),j(c,i)},children:[Object(m.jsx)("img",{src:t.cover,alt:"song cover"}),Object(m.jsxs)("div",{className:"song-description",children:[Object(m.jsx)("h3",{children:t.name}),Object(m.jsx)("h4",{children:t.artist})]})]})},h=function(e){var t=e.songs,a=e.setCurrentSong,n=e.isPlaying,r=e.audioRef,i=e.setSongs,c=e.libraryStatus,s=e.currentSong;return Object(m.jsxs)("div",{className:"library ".concat(c?"active-library":""),style:{backgroundColor:s.color[2]},children:[Object(m.jsx)("h2",{children:"Library"}),Object(m.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(m.jsx)(O,{songs:t,song:e,setCurrentSong:a,id:e.id,audioRef:r,isPlaying:n,setSongs:i},e.id)}))})]})},f=a(13),x=function(e){var t=e.libraryStatus,a=e.setLibraryStatus;return Object(m.jsxs)("nav",{children:[Object(m.jsx)("a",{href:"https://github.com/MehrdadQ/Music-Player",target:"blank",children:Object(m.jsx)(l.a,{icon:f.a,size:"2x"})}),Object(m.jsx)("button",{onClick:function(){return a(!t)},children:Object(m.jsx)(l.a,{icon:g.c,size:"2x"})})]})},y=a(28);var S=function(){return[{name:"Calm River",artist:"Lesfm",cover:"https://i.pinimg.com/originals/d6/18/78/d61878a7cfd287a204e645118f7c22fb.jpg",id:Object(y.a)(),active:!0,color:["rgb(120,218,239)","rgb(28,138,169)","rgb(180,218,239)"],audio:"https://cdn.pixabay.com/audio/2021/08/11/audio_be8e122dc7.mp3"},{name:"Physical",artist:"Mepa ExyZ",cover:"https://i1.sndcdn.com/artworks-000641681800-manbde-t500x500.jpg",id:Object(y.a)(),active:!1,color:["rgb(179,164,194)","rgb(120, 90, 130)","rgb(132,161,203)"],audio:"https://cdn.pixabay.com/audio/2021/09/06/audio_555a888e1b.mp3"},{name:"Where are we now",artist:"beetpro",cover:"https://assets.pinshape.com/uploads/user/avatar/1218825/cover_1551241507.png",id:Object(y.a)(),active:!1,color:["rgb(201,149,99)","rgb(29,19,82)","rgb(104,182,231)"],audio:"https://cdn.pixabay.com/audio/2021/03/07/audio_1d411f3a4c.mp3"},{name:"Cosy",artist:"Prigida",cover:"https://cdn.musicvine.com/images/prigida-avatar-v1_6180582698519834.jpg",id:Object(y.a)(),active:!1,color:["rgb(85,148,161)","rgb(30,66,71)","rgb(175,180,146)"],audio:"https://cdn.uppbeat.io/audio-output/258/5856/main-version/streaming-previews/STREAMING-cosy-prigida-main-version-02-58-17021.mp3"},{name:"Dream Slow",artist:"Wisanga",cover:"https://cdn.uppbeat.io/images/Wisanga_Avatar_4157365593534235.jpg",id:Object(y.a)(),active:!1,color:["rgb(143,197,220)","rgb(1,38,72)","rgb(212,160,204)"],audio:"https://cdn.uppbeat.io/audio-output/471/6799/main-version/streaming-previews/STREAMING-dream-slow-wisanga-main-version-02-19-20578.mp3"},{name:"Lucidity",artist:"FE77A",cover:"https://cdn.musicvine.com/images/fe77a-avatar_8827208227206825.jpg",id:Object(y.a)(),active:!1,color:["rgb(114,134,172)","rgb(72,64,74)","rgb(176,166,131)"],audio:"https://cdn.uppbeat.io/audio-output/432/1113/main-version/streaming-previews/STREAMING-lucidity-fe77a-main-version-02-28-3710.mp3"},{name:"4am",artist:"noxz",cover:"https://cdn.musicvine.com/images/noxz-avatar-v1_5269450939293254.jpg",id:Object(y.a)(),active:!1,color:["rgb(170,170,176)","rgb(90,91,95)","rgb(217,220,167)"],audio:"https://cdn.uppbeat.io/audio-output/249/1657/main-version/streaming-previews/STREAMING-4am-noxz-main-version-02-20-5868.mp3"},{name:"Snowfall",artist:"walz",cover:"https://cdn.musicvine.com/images/walz-avatar-v2_8353515061791827.jpg",id:Object(y.a)(),active:!1,color:["rgb(252,211,182)","rgb(63,52,41)","rgb(241,238,236)"],audio:"https://cdn.uppbeat.io/audio-output/240/5935/main-version/streaming-previews/STREAMING-snowfall-walz-main-version-02-12-17217.mp3"},{name:"Selfless",artist:"SENSHO",cover:"https://cdn.musicvine.com/images/Sensho_Avatar_1955111997031914.jpg",id:Object(y.a)(),active:!1,color:["rgb(243,222,172)","rgb(70,86,196)","rgb(163,183,109)"],audio:"https://cdn.uppbeat.io/audio-output/395/190/main-version/streaming-previews/STREAMING-selfless-sensho-main-version-02-14-883.mp3"}]};var k=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(S()),a=Object(b.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(r[0]),s=Object(b.a)(c,2),l=s[0],g=s[1],j=Object(n.useState)(!1),O=Object(b.a)(j,2),f=O[0],y=O[1],k=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(b.a)(k,2),N=w[0],C=w[1],T=Object(n.useState)(!1),I=Object(b.a)(T,2),M=I[0],P=I[1],R=function(e){var t=e.target.currentTime,a=e.target.duration,n=Math.round(t),r=Math.round(a),i=Math.round(100*n/r);C(Object(d.a)(Object(d.a)({},N),{},{currentTime:t,duration:a,animationPercentage:i}))},E=function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.findIndex((function(e){return e.id===l.id})),t.next=3,g(r[(a+1)%r.length]);case 3:f&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"biggest",style:{backgroundColor:l.color[0],transition:"all 0.5s ease"},children:[Object(m.jsxs)("div",{className:"App ".concat(M?"library-active":""),style:{backgroundColor:l.color[0]},children:[Object(m.jsx)(x,{libraryStatus:M,setLibraryStatus:P}),Object(m.jsx)(v,{currentSong:l}),Object(m.jsx)(p,{audioRef:e,isPlaying:f,setIsPlaying:y,currentSong:l,setSongInfo:C,songInfo:N,songs:r,setCurrentSong:g,setSongs:i}),Object(m.jsx)(h,{audioRef:e,isPlaying:f,songs:r,setCurrentSong:g,setSongs:i,libraryStatus:M,currentSong:l}),Object(m.jsx)("audio",{onTimeUpdate:R,onLoadedMetadata:R,ref:e,src:l.audio,onEnded:E})]}),Object(m.jsx)("div",{className:"filler",style:{backgroundColor:l.color[0]}})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),w()}},[[26,1,2]]]);
//# sourceMappingURL=main.157f904d.chunk.js.map