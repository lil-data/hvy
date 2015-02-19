/*
 Copyright (c) 2013 Yendif! Technologies Ltd.
 @license         GNU/GPL http://www.gnu.org/licenses/gpl-2.0.html
 @link            http://www.yendifplayer.com
 @version         Version 5.0.0
*/
(function(d,k,g){function w(a,b){this.$el=d(a);this.config=b;++pid;var c=(new Date).getTime().toString()+""+pid;this.yendif={id:this.$el.attr("id")||c,uid:c,index:0,media:"video",engine:b.engine,volume:b.volume,playlistPosition:b.playlistPosition,l:b.logo,lc:b.license,isL:!1,isER:!1,isW:!1,isP:!1,isFS:!1,isR:!0,markup:"",status:A,interval:[]};this.yendif.id.replace("yf","");this.playlist={};this.init();return this}function B(a,b){var c,e,h;function f(a){d("body").addClass("noselect");var b=parseInt(n.obj.css(t),
10);c=u?a.pageX:a.pageY;e="auto"==b?0:b;touchEvents?(g.ontouchmove=function(a){a.preventDefault();v(a.touches[0])},g.ontouchend=k):(d(g).bind("mousemove",v),d(g).bind("mouseup",k),n.obj.bind("mouseup",k));a.preventDefault()}function v(a){1>m.ratio&&(h=touchEvents?Math.min(p[b.axis]-n[b.axis],Math.max(0,e+(c-(u?a.pageX:a.pageY)))):Math.min(p[b.axis]-n[b.axis],Math.max(0,e+((u?a.pageX:a.pageY)-c))),q=h*s.ratio,m.obj.css(t,-q),n.obj.css(t,h));a.preventDefault()}function k(){d("body").removeClass("noselect");
d(g).unbind("mousemove",v);d(g).unbind("mouseup",k);n.obj.unbind("mouseup",k);g.ontouchmove=g.ontouchend=null}var l={obj:d(".yf-viewport",a)},m={obj:d(".yf-overview",a)},s={obj:d(".yf-scrollbar",a)},p={obj:d(".yf-track",s.obj)},n={obj:d(".yf-thumb",s.obj)},u="x"===b.axis,t=u?"left":"top",r=u?"Width":"Height",q=0;h=e=0;c=void 0;this.update=function(a){l[b.axis]=l.obj[0]["offset"+r];m[b.axis]=m.obj[0]["scroll"+r];m.ratio=l[b.axis]/m[b.axis];s.obj.toggleClass("disable",1<=m.ratio);p[b.axis]=l[b.axis];
n[b.axis]=Math.min(p[b.axis],Math.max(0,p[b.axis]*m.ratio));s.ratio=m[b.axis]/p[b.axis];q="relative"===a&&1>=m.ratio?Math.min(m[b.axis]-l[b.axis],Math.max(0,q)):0;q="bottom"===a&&1>=m.ratio?m[b.axis]-l[b.axis]:isNaN(parseInt(a,10))?q:parseInt(a,10);a=r.toLowerCase();n.obj.css(t,q/s.ratio);m.obj.css(t,-q);c=n.obj.offset()[t];s.obj.css(a,p[b.axis]);p.obj.css(a,p[b.axis]);n.obj.css(a,n[b.axis])};this.update();(function(){touchEvents?l.obj[0].ontouchstart=function(a){1===a.touches.length&&(f(a.touches[0]),
a.stopPropagation())}:(n.obj.bind("mousedown",f),p.obj.bind("mouseup",v))})();return this}var x=/\.(\w{3,4})(\?.*)?$/i,r=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,C=/^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/,A=-1;script=g.getElementsByTagName("script");script=script[script.length-1].src;file=/embed.js/.test(script)?"embed.js":"yendifplayer.js";base=script.split(file)[0];focused="";pid=0;isNFS=1;device={mobile:!1};
touchEvents="ontouchstart"in g.documentElement;browser=function(){var a=navigator.appName,b=navigator.userAgent,c,e=b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);e&&null!=(c=b.match(/version\/([\.\d]+)/i))&&(e[2]=c[1]);return e=e?[e[1].toLowerCase(),e[2]]:[a,navigator.appVersion,"-?"]}();switch(browser[0]){case "chrome":case "safari":vendor="webkit";break;case "firefox":vendor="moz";break;case "msie":vendor="ms";break;case "opera":vendor="o";break;default:vendor=""}support=
{html5:!1,mp4:!1,webm:!1,ogg:!1,mpegurl:!1,mp3:!1,wav:!1,flash:!1,youtube:!1};/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&(device.mobile=!0);try{var y=g.createElement("video"),z=g.createElement("audio");if(y.canPlayType){var l=function(a){return/audio/.test(a)?"function"===typeof z.canPlayType&&""!==z.canPlayType(a)?!0:!1:""!==y.canPlayType(a)?!0:!1};support.html5=!0;support.mp4=l("video/mp4");support.webm=l("video/webm");support.ogg=l("video/ogg")||l("audio/ogg");support.mpegurl=
l("application/x-mpegurl");support.mp3=l("audio/mpeg");support.wav=l("audio/wav")}}catch(D){}try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(support.flash=!0)}catch(E){"undefined"!=typeof navigator.plugins&&"object"==typeof navigator.plugins["Shockwave Flash"]&&(support.flash=!0)}k.onYouTubeIframeAPIReady=function(){support.youtube=!0};"msie"!==browser[0]&&(k.onbeforeunload=function(){d(".yendifplayer").hide()});k.attachEvent&&k.attachEvent("onbeforeunload",function(){__flash_savedUnloadHandler=
__flash_unloadHandler=function(){}});w.prototype={init:function(){this.config.isEF?this.pM():this.iM();this.$el.attr("id",this.yendif.id).addClass("yendifplayer "+this.config.theme+" is-"+this.media).show();0===this.config.muted&&(this.yendif.volume=0);if(!this.config.origin){var a=base.split("/");this.config.origin=a[0]+"//"+a[2]+"/"}this.engine?this.engine.create(this):this.onError("error")},pM:function(){var a=this,b={};this.$media=this.$el.find("video, audio");this.media=this.$media.is("video")?
"video":"audio";b.id="yf-engine-"+this.yendif.uid;"video"===this.media&&(b["x-webkit-airplay"]="allow");!0===device.mobile&&(b.controls=!0);this.$media.attr(b).addClass("yf-engine");this.$clone=this.$el.html();this.playlist.poster=this.config.poster;(src=this.config.src)?(b=src.split(x)[1],b=/flv|f4v|mov/.test(b)?"flash":/mp4|m4v/.test(b)?"mp4":b,this.playlist[b]=src):this.$el.find("source").each(function(){var b=d(this).attr("src"),e=d(this).attr("type")||b.split(x)[1],e=/mpegurl/.test(e)?"mpegurl":
/mpeg/.test(e)?"mp3":e.replace(a.media+"/","");"m4v"===e&&(e="mp4");switch(e){case "flash":a.playlist.flash=b;a.playlist.rtmp=d(this).attr("data-rtmp")||"";break;case "youtube":a.pY.apply(a,[b]);break;default:a.playlist[e]=b}});this.$track=this.$el.find("track:first");this.$track.length&&(this.playlist.captions=this.$track.attr("src"),this.pVTT(this.playlist.captions));this.sE(this.yendif.engine)},iM:function(){this.media=this.config.videos?"video":"audio";this.yendif.playlist=this.config[this.media+
"s"]||"";this.gPD(-1)},gPD:function(a){var b=tracks="";if(this.playlist=this.yendif.playlist){0>a?(a="[object Array]"===Object.prototype.toString.call(this.playlist)?!0:!1,a&&(this.yendif.isP=!0,this.playlist=this.playlist[0],this.config.loop=0)):(this.yendif.index=a,this.yendif.status=2,this.playlist=this.playlist[a],this.config.autoplay=1,this.$el.addClass("is-playing").removeClass("is-paused is-embed"));for(var c in this.playlist)switch(a=this.playlist[c],c){case "flash":b+='<source type="video/flash" src="'+
a+'" data-rtmp="'+this.playlist.rtmp+'">';break;case "youtube":this.pY(a);b+='<source type="video/youtube" src="'+a+'">';break;case "captions":tracks+='<track src="'+a+'" kind="subtitles">';break;default:/mp4|webm|ogg|mpegurl|mp3|wav/.test(c)&&(type="mpegurl"==c?"application/x-mpegurl":"mp3"==c?"audio/mpeg":this.media+"/"+c,b+='<source type="'+type+'" src="'+a+'">')}}c="";"video"===this.media&&(c+=' x-webkit-airplay="allow"');!0===device.mobile&&(c+=' controls="true"');this.$clone="<"+this.media+
' id="yf-engine-'+this.yendif.uid+'" class="yf-engine"'+c+">"+b+tracks+"</"+this.media+">";this.playlist.captions&&this.pVTT(this.playlist.captions);this.sE(this.yendif.engine)},pY:function(a){this.yendif.engine="youtube";this.playlist.yID=a.match(r)[2];this.playlist.poster=this.playlist.poster||"http://img.youtube.com/vi/"+this.playlist.yID+"/0.jpg"},pVTT:function(a){function b(a){a=a.split(":");2==a.length&&a.unshift(0);return 3600*a[0]+60*a[1]+parseFloat(a[2].replace(",","."))}if(a){var c=this;
this.playlist.subtitles=[];d.get(a,function(a,h){var f=a.split("\n"),g=f.length;for(i=0;i<g;i++)if(timecode=C.exec(f[i])){for(text="<p>"+f[++i]+"</p><br/>";d.trim(f[++i])&&i<g;)text+="<p>"+f[i]+"</p><br/>";c.playlist.subtitles.push({start:b(timecode[1]),end:b(timecode[2]||timecode[3]),content:text})}})}},sE:function(a){var b=isFlash=!1;if(!0===support.html5)for(var c="mp4 mpegurl mp3 webm ogg wav".split(" "),d=0;6>d;d++)if(format=c[d],this.playlist[format]&&support[format]){this.playlist.html5=this.playlist[format];
b=!0;break}!0===support.flash&&(this.playlist.flash||this.playlist.mp4||this.playlist.mp3)&&(isFlash=!0);switch(a){case "flash":this.engine=!0===isFlash?this.flash:!0===b?this.html5:null;break;case "youtube":this.engine=200>this.$el.width()||200>this.yendif.height?null:!0===support.flash?this.flash:this.youtube;break;default:this.engine=!0===b?this.html5:!0===isFlash?this.flash:null}},html5:{create:function(a){a.yendif.engine="html5";!0===device.mobile?(a.iSC(),a.$media[0].loop=!1,"video"===a.media&&
(a.$media[0].poster=a.playlist.poster),a.$media[0].src=a.playlist.currentSrc=a.playlist.html5):(a.iCC(),a.$media[0].controls=!1,a.$media[0].poster="",a.$media[0].autoplay=a.config.autoplay,a.$media[0].loop=a.config.loop);a.yendif.isER=!0;a.$media[0].volume=a.config.volume;a.$media[0].load();if(!0===device.mobile)a.config.autoplay&&a.$media[0].play(),a.$media.on("play",function(){obj=["Media Plays",a.playlist.currentSrc];a.tE.apply(a,[obj])}),a.$media.on("ended",function(){obj=["Media Completes",a.playlist.currentSrc];
a.tE.apply(a,[obj]);a.config.loop&&a.$media[0].play()}),a.$media.on("error",function(b){err=a.$media[0].networkState;3<=err&&a.onError.apply(a,[err])});else if(a.$media.on("play",function(){a.onPlay.apply(a)}),a.$media.on("pause",function(){a.onPause.apply(a)}),a.$media.on("ended",function(){a.onEnded.apply(a)}),a.$media.on("volumechange",function(){a.config.volumebtn&&a.onVolumeChange.apply(a)}),d("source:last",a.$el).on("error",function(b){err=a.$media[0].networkState;3<=err&&a.onError.apply(a,
[err])}),0<a.$media[0].readyState)a.html5.onMetadataLoaded.apply(a);else a.$media.on("loadedmetadata",function(){a.html5.onMetadataLoaded.apply(a)})},onMetadataLoaded:function(){var a=this;this.yendif.interval[0]=k.setInterval(function(){0<a.$media[0].readyState&&(clearInterval(a.yendif.interval[0]),a.$el.trigger("onPlayerReady"),a.playlist.currentSrc=a.$media[0].currentSrc,a.playlist.duration=a.$media[0].duration,a.config.duration&&a.$durationDock.html(a.timeFormat(a.playlist.duration)),a.volumeTo(-1))},
500)},play:function(){2>this.yendif.status&&(this.yendif.status=2,this.sCtrls());this.$media[0].paused&&this.$media[0].play()},pause:function(){this.$media[0].paused||this.$media[0].pause()},time:function(){var a=this.$media[0].currentTime,b=this.playlist.seekedTime;Math.round(a)==Math.round(b)&&(this.playlist.seekedTime=b=-1);return b&&-1!==b?b:a},buffered:function(){var a=this.$media[0].seekable;return a&&0<a.length?(a=parseInt(100*a.end(0),10)/parseInt(this.$media[0].duration,10),Math.min(100,
a)):100},seekTo:function(a){if(!(0>=this.$media[0].readyState)){var b=this.$media[0].seekable;b&&0<b.length&&(b=b.end(0),a>b&&(this.playlist.currentTime=a=b));this.$media[0].currentTime=this.playlist.seekedTime=a;this.$media[0].paused&&this.$media[0].play()}},setVolume:function(a){this.$media[0].volume=a},muted:function(a){this.$media[0].muted=a},onEnded:function(){this.$media[0].currentTime=0;this.$media[0].pause()},destroy:function(){!0===this.yendif.isER&&(this.$media.off("pause"),this.$media[0].pause())},
changeVideo:function(a){var b=this;!1===device.mobile&&(this.$media[0].poster="",this.sL(),this.rC(),this.$media.off("error").on("error",function(a){err=b.$media[0].networkState;3<=err&&b.onError.apply(b,[err])}));this.$media[0].src=this.playlist.currentSrc=this.playlist.html5;this.$media[0].load();this.$media[0].play()}},flash:{create:function(a){a.yendif.engine="flash";a.yendif.isFS&&a.sFSE(!1);var b=(new Date).getTime().toString(),c=a.config.swf||base+"player.swf",e={id:a.yendif.id,theme:a.config.theme,
analytics:a.config.analytics||"",baseref:base,origin:a.config.origin,license:a.config.license||"",logo:a.config.logo||"",poster:a.playlist.poster||"",flash:a.playlist.flash||"",server:a.playlist.rtmp||"",youtubeID:a.playlist.yID||"",mp4:a.playlist.mp4||"",webm:a.playlist.webm||"",ogg:a.playlist.ogg||"",mp3:a.playlist.mp3||"",captions:a.playlist.captions||"",autoplay:a.config.autoplay,loop:a.config.loop,autoplaylist:a.config.autoplaylist,volume:a.yendif.volume,playbtn:a.config.playbtn,controlbar:a.config.controlbar,
playpause:a.config.playpause,currenttime:a.config.currenttime,progressbar:a.config.progress,duration:a.config.duration,volumebtn:a.config.volumebtn,fullscreen:a.config.fullscreen,embed:a.config.embed,keyboard:a.config.keyboard,browser:browser[0]},c=c+("?"+b),h;h='<object width="100%" height="100%" id="yf-engine-'+b+'" name="yf-engine-'+b+'" class="yf-engine"'+("msie"===browser[0]?' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">':' data="'+c+'"');h+=' type="application/x-shockwave-flash">';
var c={movie:c,name:"yf-engine-"+b,width:"100%",height:"100%",allowscriptaccess:"always",allowfullscreen:"true",quality:"high",wmode:"transparent",flashvars:""},f;for(f in e)""!==e[f]&&(c.flashvars+=f+"="+e[f]+"&");for(f in c)h+='<param name="'+f+'" value="'+c[f]+'"/>';h+="</object>";a.yendif.isW?a.$mediaCon.html(h):(a.$el.html('<div id="yf-media-'+b+'" class="yf-media">'+h+"</div>"),a.$mediaCon=d("#yf-media-"+b),a.lP(),a.yendif.isW=!0);a.$media=d("#yf-engine-"+b)},destroy:function(){!0===this.yendif.isER&&
(this.yendif.volume=this.$media[0].getVolume())},changeVideo:function(a){this.yendif.engine="flash";a.youtube&&(a.youtubeID=a.yID||a.youtube.match(r)[2]);this.$media[0].updateVideo(a)}},youtube:{create:function(a){a.yendif.engine=a.config.engine;if(support.html5||support.flash){if(!support.youtube){var b=g.createElement("script");b.src="https://www.youtube.com/iframe_api";var c=g.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}a.yendif.interval[1]=k.setInterval(function(){if(support.youtube){clearInterval(a.yendif.interval[1]);
var b={autoplay:a.config.autoplay,rel:0,showinfo:0,iv_load_policy:0,wmode:"opaque",modestbranding:1};!1===device.mobile?(a.iCC(),b.controls=0,a.config.loop&&(b.loop=a.config.loop,b.playlist=a.playlist.yID),_events={onReady:function(b){a.yendif.isER=!0;a.playlist.currentSrc=a.playlist.yID;a.$el.trigger("onPlayerReady");a.volumeTo(-1)},onStateChange:function(b){switch(b.data){case YT.PlayerState.ENDED:a.onEnded.apply(a);break;case YT.PlayerState.PLAYING:a.playlist.duration=a.$media.getDuration();a.config.duration&&
a.$durationDock.html(a.timeFormat(a.playlist.duration));a.onPlay.apply(a);break;case YT.PlayerState.CUED:a.onPlay.apply(a)}},onError:function(b){150!=b.data&&a.onError.apply(a,[b.data])}}):(a.iSC(),b.controls=1,_events={onReady:function(b){a.playlist.currentSrc=a.playlist.yID},onStateChange:function(b){switch(b.data){case YT.PlayerState.ENDED:obj=["Media Completes",a.playlist.currentSrc];a.tE.apply(a,[obj]);a.config.loop&&a.$media.playVideo();break;case YT.PlayerState.PLAYING:a.yendif.isER=!0,obj=
["Media Plays",a.playlist.currentSrc],a.tE.apply(a,[obj])}},onError:function(b){150!==b.data&&a.onError.apply(a,[b.data])}});a.$media=new YT.Player("yf-engine-"+a.yendif.uid,{height:"100%",width:"100%",playerVars:b,videoId:a.playlist.yID,events:_events})}},500)}else a.engine=null,a.onError()},play:function(){2>this.yendif.status&&(this.yendif.status=2,this.sCtrls());this.$media.playVideo();this.onPlay()},pause:function(){this.$media.pauseVideo();this.onPause()},time:function(){var a=this.$media.getCurrentTime(),
b=this.playlist.seekedTime;Math.round(a)==Math.round(b)&&(this.playlist.seekedTime=b=-1);return b&&-1!==b?b:a},buffered:function(){return 100},seekTo:function(a){this.playlist.seekedTime=a;this.$media.seekTo(a);this.youtube.play.apply(this)},setVolume:function(a){this.$media.setVolume(100*a);this.onVolumeChange()},muted:function(a){a?this.$media.mute():this.$media.unMute();this.onVolumeChange()},onEnded:function(){},destroy:function(){!0===this.yendif.isER&&this.$media.destroy()},changeVideo:function(a){if(support.html5||
support.flash)!1===device.mobile&&this.rC(),this.yendif.engine=this.config.engine,a.yID=this.playlist.currentSrc=a.yID||a.youtube.match(r)[2],this.$media.loadVideoById(a.yID);else this.onError("error")}},iSC:function(){uid=this.yendif.uid;!1===this.yendif.isW?(this.$el.html('<div id="yf-media-'+uid+'" class="yf-media">'+this.$clone+"</div>"),this.$mediaCon=d("#yf-media-"+uid),this.lP(),this.yendif.isW=!0):this.$mediaCon.html(this.$clone);this.$media=d("#yf-engine-"+uid)},iCC:function(){var a=this.yendif.uid;
if(""===this.yendif.markup){"audio"===this.media&&(this.config.playbtn=this.config.embed=this.config.fullscreen=0);for(var b="playbtn controlbar playpause currenttime progress duration volumebtn fullscreen embed".split(" "),c=browser[0].match(/msie/)?" is-"+browser[0]:"",c=c+(0===this.config.autoplay?" is-paused":" is-playing"),e=0;9>e;e++){var h=b[e];0==this.config[h]&&(c+=" no-"+h)}this.yendif.markup+='<div id="yf-skin-'+a+'" class="yf-skin">';"video"==this.media&&(this.yendif.markup+='<div id="yf-poster-'+
a+'" class="yf-poster"></div>',this.yendif.markup+='<div id="yf-loading-'+a+'" class="yf-loading"></div>');this.config.playbtn&&(this.yendif.markup+='<div id="yf-playbtn-'+a+'" class="yf-playbtn"></div>');"video"==this.media&&(this.yendif.markup+='<div id="yf-screen-'+a+'" class="yf-screen transparent"></div>');this.yendif.markup+='<div id="yf-controls-'+a+'" class="yf-controls">';this.config.playpause&&(this.yendif.markup+='<a id="yf-playpause-'+a+'" class="yf-playpause"></a>');"audio"==this.media&&
(this.yendif.markup+='<div id="yf-loading-'+a+'" class="yf-loading" style="display:none;"></div>');this.config.currenttime&&(this.yendif.markup+='<div id="yf-currenttime-'+a+'" class="yf-currenttime">00:00</div>');this.config.progress&&(this.yendif.markup+='<div id="yf-timeline-'+a+'" class="yf-timeline">',this.yendif.markup+='<div id="yf-buffer-'+a+'" class="yf-buffer"></div><div id="yf-progress-'+a+'" class="yf-progress"></div>',this.yendif.markup+="</div>");this.config.duration&&(this.yendif.markup+=
'<div id="yf-duration-'+a+'" class="yf-duration">00:00</div>');this.config.volumebtn&&(this.yendif.markup+='<div id="yf-volume-'+a+'" class="yf-volume">',this.yendif.markup+='<a id="yf-mute-'+a+'" class="yf-mute"></a>',this.yendif.markup+='<div id="yf-volumeslider-'+a+'" class="yf-volumeslider"><div id="yf-volumelevel-'+a+'" class="yf-volumelevel"></div></div>',this.yendif.markup+="</div>");this.config.fullscreen&&(this.yendif.markup+='<a id="yf-fullscreen-'+a+'" class="yf-fullscreen"></a>');this.yendif.markup+=
"</div>";"video"===this.media&&(this.yendif.markup+='<div id="yf-captions-'+a+'" class="yf-captions"></div>');this.config.embed&&(this.yendif.markup+='<div id="yf-embedbtn-'+a+'" class="yf-embedbtn"></div>',this.yendif.markup+='<div id="yf-embed-'+a+'" class="yf-embed"><span class="yf-overlay"></span><span class="yf-box">',this.yendif.markup+='<span class="yf-title">Paste this code in your HTML page</span><span class="yf-code"><input id="yf-input-'+a+'" type="text" />',this.yendif.markup+='<span id="yf-select-'+
a+'" class="yf-select">Select</span></span></span></div>');if("video"===this.media){b=function(a){for(var b="",c=a.length-1;0<=c;c--)b+=a[c];return b};h=document.createElement("a");h.href=this.config.origin;_d=h.hostname.replace("www.","");_totd=_d.length;_k=(""+this.yendif.lc).substring(1,11);_e=0;for(e=_totd-1;0<=e;e--)_e+=9187263540*_d.charCodeAt(e);_e=(""+_e).substring(0,10);_r=Math.random().toString(36).slice(2);_l=this.yendif.l;_k!==_e?(this.yendif.markup+="<a href='"+b("/moc.reyalpfidney//:ptth")+
"' class='"+_r+"' style='"+b(";retniop:rosruc;9999999:xedni-z;7.0:yticapo;7.0:yticapo-zom-;xp01:tfel;xp63:mottob;enon:noitaroced-txet;cilati:elyts-tnof;xp21:ezis-tnof;SM tehcuberT:ylimaf-tnof;FFF#:roloc;xp6 xp5:gniddap;B2D43E#:roloc-dnuorgkcab;etulosba:noitisop;tnatropmi!kcolb-enilni:yalpsid")+"'>"+b("! fidneY yb derewoP")+"</a>",this.yendif.l="."+_r):_l&&(this.yendif.markup+="<img src='"+_l+"' class='yf-wm' onclick=\"window.location='"+h.href+"'\" />",this.yendif.l=".yf-wm")}this.yendif.markup+=
"</div>";this.config.isEF?this.$el.addClass(c).append(this.yendif.markup).wrapInner('<div id="yf-media-'+a+'" class="yf-media"></div>'):this.$el.addClass(c).html('<div id="yf-media-'+a+'" class="yf-media">'+this.$clone+this.yendif.markup+"</div>");c="poster";this.$mediaCon=d("#yf-media-"+a);this.$skin=d("#yf-skin-"+a);this.lP();this.yendif.isW=!0}else this.$mediaCon.html(this.$clone+this.yendif.markup);this.$media=d("#yf-engine-"+a);this.bPE()},lP:function(){if(this.yendif.isP){var a=this,b=this.yendif.playlist,
c=this.yendif.uid,e="";list='<div id="yf-scrollbar-'+c+'" class="yf-scrollbar">';"webkit"!==vendor?list+='<div class="yf-track"><div class="yf-thumb"></div></div>':e=' style="overflow-x:hidden; overflow-y:auto;"';list+='</div><div id="yf-viewport-'+c+'" class="yf-viewport"'+e+'><ul class="yf-overview">';for(var h=b.length,f=0;f<h;f++)e=0===f?' class="active first"':f===h-1?' class="last"':"",list+="<li>",list+='<a id="'+c+"_item"+f+'" data-index="'+f+'"'+e+">",e="yf-pcontent",poster=b[f].poster,duration=
b[f].duration,b[f].youtube&&!poster&&(yID=b[f].youtube.match(r)[2],poster="http://img.youtube.com/vi/"+yID+"/0.jpg"),poster?(list+='<div class="yf-pimage" style="background-image:url('+poster+')">',duration&&(list+='<span class="yf-ptime">'+duration+"</span>"),list+="</div>"):(e+=" yf-noimage","audio"===a.media&&(list+='<div class="yf-waves"></div>')),duration||(e+=" yf-nodur"),list+='<div class="'+e+'">',b[f].title&&(list+='<div class="yf-ptitle">'+b[f].title+"</div>"),b[f].description&&(list+='<div class="yf-pdesc">'+
b[f].description+"</div>"),!poster&&duration&&(list+='<div class="yf-ptime">'+duration+"</div>"),list+="</div>",list+='<div class="yf-clear"></div>',list+="</a>",list+="</li>";list+="</ul></div>";e="is-playlist";if("audio"===this.media||400>this.$el.width())this.yendif.playlistPosition="bottom";"bottom"===this.yendif.playlistPosition&&(e+=" playlist-bottom");this.$el.addClass(e).append('<div id="yf-playlist-'+c+'" class="yf-playlist">'+list+"</div>");this.$playlist=d("#yf-playlist-"+c);this.$playlistItem=
d("a",this.$playlist);this.$playlistScrollbar=d("#yf-scrollbar-"+c);this.$playlistViewport=d("#yf-viewport-"+c);this.$playlist.on("click","a",function(b){b.preventDefault();b.stopPropagation();b=d(this).attr("data-index");b!=a.yendif.index&&a.lPI.apply(a,[b])})}this.sPD()},lPI:function(a){if(this.yendif.isP){a>=this.yendif.playlist.length&&(this.yendif.index=a=0);this.cAI();this.playlist=[];var b=this.engine;this.gPD(a);if(null!==b&&"msie"!==browser[0]&&b===this.engine&&!0===this.yendif.isER)files=
this.yendif.playlist,b.changeVideo.apply(this,[files[a]]);else if(b?b.destroy.apply(this):this.sE(this.yendif.engine),this.engine)this.yendif.isER=!1,this.engine.create(this);else this.onError("error");this.$playlistItem.removeClass("active");d("#"+this.yendif.uid+"_item"+a).addClass("active")}},sPD:function(){var a=this,b=this.$el.width(),c=device.mobile&&"flash"!==this.yendif.engine?36:26,e=this.yendif.isP&&"bottom"===this.yendif.playlistPosition?this.config.playlistHeight:0;this.config.responsive?
(pWid=this.$el.parent().width(),pct=b/pWid,hei="audio"===this.media?c+e:b*this.config.ratio+e,this.$el.css({width:b+"px",height:hei+"px"}),d(k).resize(function(){if(!1!==a.yendif.isR){var b=a.$el.parent().width()*pct;a.yendif.isP&&"right"===a.config.playlistPosition&&"video"===a.media&&(400>b?"right"===a.yendif.playlistPosition&&(a.yendif.playlistPosition="bottom",a.$el.addClass("playlist-bottom")):"bottom"===a.yendif.playlistPosition&&(a.yendif.playlistPosition="right",a.$el.removeClass("playlist-bottom")));
var d=a.yendif.isP&&"bottom"===a.yendif.playlistPosition?a.config.playlistHeight:0;hei="audio"===a.media?c+d:b*a.config.ratio+d;a.$el.css({width:b+"px",height:hei+"px"});a.sPlD.apply(a,[b,hei,!1])}})):(hei="audio"===this.media?c+e:this.$el.height()||b*this.config.ratio+e,this.$el.css({width:b+"px",height:hei+"px"}));this.sPlD.apply(this,[b,hei,!0])},sPlD:function(a,b,c){this.yendif.isP&&("right"===this.yendif.playlistPosition?(this.$mediaCon.css({width:a-this.config.playlistWidth+"px",height:b+"px"}),
this.$playlist.css({width:this.config.playlistWidth+"px",height:""}),this.$playlistViewport.css("height",b+"px")):(this.$mediaCon.css({width:"",height:b-this.config.playlistHeight+"px"}),this.$playlist.css({width:"",height:this.config.playlistHeight+"px"}),this.$playlistViewport.css("height",this.config.playlistHeight+"px")),"webkit"!==vendor&&(!0===c&&this.$playlist.yendifscrollbar(),this.$playlist.yendifscrollbar("update")))},bPE:function(){var a=this,b=this.yendif.uid;this.$poster=d("#yf-poster-"+
b).hide();this.playlist.poster&&(this.$poster.css("background-image",'url("'+this.playlist.poster+'")'),0===this.config.autoplay&&this.$poster.show());this.$loading=d("#yf-loading-"+b);"video"==this.media&&(this.$playbtn=d("#yf-playbtn-"+b),this.$screen=d("#yf-screen-"+b),this.$screen.on("click",function(){a.tPP.apply(a)}));this.$controls=d("#yf-controls-"+b);"video"==this.media&&this.$controls.hide();this.config.playpause&&(this.$playpauseBtn=d("#yf-playpause-"+b),this.$playpauseBtn.on("click",function(b){b.preventDefault();
a.tPP.apply(a)}));this.config.currenttime&&(this.$currentTimeDock=d("#yf-currenttime-"+b));this.config.progress&&(this.$progressWrapper=d("#yf-timeline-"+b),this.$bufferBar=d("#yf-buffer-"+b),this.$progressBar=d("#yf-progress-"+b),this.$progressWrapper.on("mousedown",function(b){focused=a;0<a.yendif.status&&a.onProgressSeeking.apply(a,[b])}),this.$progressWrapper.on("mouseup",function(b){0<a.yendif.status&&a.onProgressSeeked.apply(a,[b])}),this.bM(this.$progressWrapper));this.config.duration&&(this.$durationDock=
d("#yf-duration-"+b));this.config.volumebtn&&(this.$volumeMuteBtn=d("#yf-mute-"+b),this.$volumeSlider=d("#yf-volumeslider-"+b),this.$volumeLevel=d("#yf-volumelevel-"+b).css("width",100*this.yendif.volume+"%"),this.$volumeMuteBtn.on("click",function(b){b.preventDefault();focused=a;0<a.yendif.status&&a.tM.apply(a)}),this.$volumeSlider.on("mousedown",function(b){focused=a;0<a.yendif.status&&a.onVolumeSeeking.apply(a,[b])}),this.$volumeSlider.on("mouseup",function(b){0<a.yendif.status&&a.onVolumeSeeked.apply(a,
[b])}));this.config.fullscreen&&(this.$fullscreenDock=d("#yf-fullscreen-"+b),this.$fullscreenDock.on("click",function(b){b.preventDefault();focused=a;a.tFS.apply(a)}));this.$captions=d("#yf-captions-"+b);this.config.embed&&(this.$embedBtn=d("#yf-embedbtn-"+b).hide(),this.$embedCode=d("#yf-input-"+b),this.$embedSelect=d("#yf-select-"+b),this.$embedBtn.on("click",function(){focused=a;embedCode=a.gEC();a.$embedCode.val(embedCode);a.$el.toggleClass("is-embed")}),this.$embedSelect.on("click",function(){a.$embedCode.select()}));
b=0!=this.config.embed?this.$embedBtn:"";this.$g=d(0!=this.config.controlbar?this.$controls:"").add(b);if("video"==this.media){if(this.$l=this.$el.find(this.yendif.l))_o=this.$l.css("opacity"),1!==_o&&this.$l.hover(function(){d(this).animate({opacity:1},100)},function(){d(this).animate({opacity:_o},100)});this.$mediaCon.on("mouseenter",function(){a.sCtrls.apply(a)});this.$mediaCon.on("mouseleave",function(){a.hCtrls.apply(a)})}this.$el.on("onPlayerReady",function(){a.hL.apply(a);1>a.yendif.status&&
(0===a.yendif.status?a.engine.play.apply(a):a.yendif.status=1)});1===this.config.autoplay&&(this.sL(),this.yendif.status=2,this.sCtrls())},gEC:function(){var a='<script src="'+base+'embed.js">\x3c/script><div style="width:640px; height:360px;" id="'+this.yendif.id+'" class="yendifplayer"',a=a+(this.playlist.poster?' data-poster="'+this.playlist.poster+'"':""),a=a+(this.config.analytics?' data-analytics="'+this.config.analytics+'"':""),a=a+(this.config.license?' data-license="'+this.config.license+
'"':""),a=a+(this.config.logo?' data-logo="'+this.config.logo+'"':""),a=a+(this.config.origin?' data-origin="'+this.config.origin+'"':""),a=a+(">"+this.$clone+"</div>");return a.replace(/^[ \t\n\r]+/gm,"").replace(/[ \n\t\r]+$/gm,"")},sCtrls:function(){1<this.yendif.status&&this.$g.stop(!0,!0).fadeIn()},hCtrls:function(){1<this.yendif.status&&!this.$el.hasClass("is-paused")&&!this.$el.hasClass("is-embed")&&this.$g.stop(!0,!0).fadeOut()},onFlash:function(){this.yendif.isER=!0;focused=""},tPP:function(){focused=
this;0<this.yendif.status?this.$el.hasClass("is-paused")?this.engine.play.apply(this):this.engine.pause.apply(this):(this.sL.apply(this),this.yendif.status=0,this.onPlay())},onPlay:function(){var a=this,b=0;2===this.yendif.status&&(this.yendif.status=3,this.tE(["Media Plays",this.playlist.currentSrc]),"video"===this.media&&this.$poster.hide());clearInterval(this.yendif.interval[2]);this.yendif.interval[2]=k.setInterval(function(){a.playlist.youtube||(b++,1===b?a.playlist.cachedTime=a.playlist.currentTime:
4===b?a.playlist.cachedTime===a.playlist.currentTime&&a.sL.apply(a):4<b&&a.playlist.cachedTime!==a.playlist.currentTime&&(b=0,a.hL.apply(a)));0<a.yendif.status&&a.onProgress.apply(a)},100);this.$el.addClass("is-playing").removeClass("is-paused")},onPause:function(){clearInterval(this.yendif.interval[2]);this.$el.removeClass("is-playing").addClass("is-paused")},onEnded:function(){3===this.yendif.status&&(this.yendif.status=2,this.tE(["Media Completes",this.playlist.currentSrc]));this.config.loop||
this.config.autoplaylist||(this.cAI(),this.engine.onEnded.apply(this),this.$el.removeClass("is-playing").addClass("is-paused"),this.config.playbtn&&this.$playbtn.removeClass("transparent"),this.playlist.poster&&this.$poster.show(),this.config.progress&&this.$progressBar.css("width","0%"),this.config.currenttime&&this.$currentTimeDock.html(this.timeFormat(this.playlist.duration)))},onProgress:function(){this.playlist.currentTime=this.engine.time.apply(this);if(this.config.progress){if("100%"!=this.$bufferBar.width()){var a=
this.engine.buffered.apply(this);this.$bufferBar.css("width",a+"%")}a=Math.min(100,100*this.playlist.currentTime/this.playlist.duration);this.$progressBar.css("width",a+"%")}this.config.currenttime&&this.$currentTimeDock.html(this.timeFormat(this.playlist.currentTime));a=this.playlist.subtitles;if("object"==typeof a){var b=a.length,c="";if(0<b){for(i=0;i<b;i++)if(this.playlist.currentTime>=a[i].start&&this.playlist.currentTime<=a[i].end){c=a[i].content;break}this.$captions.html(c)}}},onProgressSeeking:function(a){var b=
this;this.seekTo(a);d(g).bind("mousemove",function(a){b.seekTo(a)}).bind("mouseup",function(a){d(g).unbind("mousemove");d(g).unbind("mouseup");b.onProgressSeeked.apply(b,[a])})},onProgressSeeked:function(a){this.engine.seekTo.apply(this,[this.playlist.currentTime]);this.config.playbtn&&this.$playbtn.removeClass("transparent")},seekTo:function(a){this.config.playbtn&&this.$playbtn.addClass("transparent");this.engine.pause.apply(this);var b=this.$progressWrapper.offset(),c=this.$progressWrapper.width(),
d="";0<c&&(xpos="msie"===browser[0]?a.clientX+g.documentElement.scrollLeft:a.pageX,d=Math.max(0,Math.min(1,(xpos-b.left)/c)),this.$progressBar.css("width",100*d+"%"),this.playlist.currentTime=d*this.playlist.duration)},onVolumeSeeking:function(a){var b=this;this.volumeTo(a);d(g).bind("mousemove",function(a){b.volumeTo(a)}).bind("mouseup",function(a){d(g).unbind("mousemove");d(g).unbind("mouseup")})},onVolumeSeeked:function(a){this.volumeTo(a)},volumeTo:function(a){xpos="msie"===browser[0]?a.clientX+
g.documentElement.scrollLeft:a.pageX;-1<xpos&&(a=this.$volumeSlider.offset(),this.yendif.volume=Math.max(0,Math.min(1,(xpos-a.left)/this.$volumeSlider.width())));this.playlist.muted=0>=this.yendif.volume?!0:!1;this.engine.muted.apply(this,[this.playlist.muted]);this.engine.setVolume.apply(this,[this.yendif.volume])},onVolumeChange:function(){this.playlist.muted?(this.$el.addClass("is-muted"),this.$volumeLevel.css("width","0%")):(this.$el.removeClass("is-muted"),this.$volumeLevel.css("width",100*this.yendif.volume+
"%"))},tM:function(){this.playlist.muted=this.playlist.muted?!1:!0;this.engine.muted.apply(this,[this.playlist.muted]);0>=this.yendif.volume&&(this.yendif.volume=0.5,this.engine.setVolume.apply(this,[this.yendif.volume]))},tFS:function(){this.yendif.isR=!1;if(this.yendif.isFS)0===isNFS?this.sFSE(!1):g.cancelFullScreen?g.cancelFullScreen():g[vendor+"CancelFullScreen"]();else if(0===isNFS)this.sFSE(!0);else try{this.$mediaCon[0].requestFullScreen?this.$mediaCon[0].requestFullScreen():this.$mediaCon[0][vendor+
"RequestFullScreen"]()}catch(a){isNFS=0,this.sFSE(!0)}},sFSE:function(a){this.yendif.isFS=a;var b="is-fullscreen";0===isNFS&&(b+=" no-native",!1===a?d("body").css("overflow","auto"):d("body").css("overflow","hidden"));this.yendif.isFS?this.$el.addClass(b):(this.$el.removeClass(b),this.yendif.isR=!0)},sL:function(){if(!0!==this.yendif.isL)if(this.yendif.isL=!0,"audio"===this.media)this.$loading.html("Loading media ...").show(),this.$el.addClass("is-loading");else{clearInterval(this.yendif.interval[3]);
var a=this,b=0,c="";this.$loading.html("");this.$el.addClass("is-loading");this.yendif.interval[3]=k.setInterval(function(){3<b||0==b?(b=0,c=""):c+="&middot;";a.$loading.html(c);b++},300)}},hL:function(){!1!==this.yendif.isL&&(this.yendif.isL=!1,"audio"===this.media&&this.$loading.hide(),clearInterval(this.yendif.interval[3]),this.$loading.html(""),this.$el.removeClass("is-loading"))},timeFormat:function(a){var b=10>Math.floor(a/60)?"0"+Math.floor(a/60):Math.floor(a/60);return b+":"+(10>Math.floor(a-
60*b)?"0"+Math.floor(a-60*b):Math.floor(a-60*b))},bM:function(a,b){a.bind("touchstart touchmove touchend touchcancel",function(){var a=event.changedTouches[0],d="";switch(event.type){case "touchstart":d="mousedown";break;case "touchmove":d="mousemove";break;case "touchend":d="mouseup";break;default:return}var h=g.createEvent("MouseEvent");h.initMouseEvent(d,!0,!0,k,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(h);b&&event.preventDefault()})},tE:function(a){this.config.analytics&&
_gaq&&_gaq.push(["_trackEvent","Yendifplayer "+a[0],a[1],k.location]);"Media Completes"==a[0]&&this.config.autoplaylist&&this.lPI(++this.yendif.index)},onError:function(a){focused="";this.cAI();this.yendif.isFS&&this.sFSE(!1);a='<div class="yf-error"><span>Unable to play media. Media format not supported.</span></div>';var b=this.yendif.uid;this.$mediaCon?this.$mediaCon.html(a):(this.$el.html('<div id="yf-media-'+b+'" class="yf-media">'+a+"</div>"),this.$mediaCon=d("#yf-media-"+b),this.lP());this.engine=
null},rC:function(){"video"===this.media&&(this.$captions.html(""),this.playlist.poster&&(this.$poster.hide(),this.$poster.css("background-image",'url("'+this.playlist.poster+'")')));this.config.progress&&this.$progressBar.css("width","0%");this.config.currenttime&&this.$currentTimeDock.html("00:00");this.config.duration&&this.$durationDock.html("00:00");this.sCtrls()},cAI:function(){for(var a=0;3>=a;a++)clearInterval(this.yendif.interval[a])},destroy:function(){this.cAI();this.$el.removeData("_yendifPlayer");
this.$el.empty()}};d.fn.yendifplayer=function(a,b){if("object"==typeof a)b=a;else if("string"==typeof a){var c=d(this).data("_yendifPlayer");b?c[a].apply(c,[b]):c[a].apply(c);return}b=d.extend({},yendifplayer.defaults,yendifplayer.config,b||{});return this.each(function(){var a=d(this);if(!a.data("_yendifPlayer")){var c=a.find("video, audio"),f=c.yendifAttr(),g=a.yendifAttr(),f=d.extend(!0,{},b,f,g);f.isEF=c.length?!0:!1;f.volume&&(f.volume=Math.min(1,f.volume));device.mobile&&(f.volumebtn=0);_config=
"autoplay autoplaylist controlbar currenttime duration embed fullscreen keyboard loop playbtn playpause progress ratio responsive volume volumebtn playlistWidth playlistHeight".split(" ");for(c=0;18>c;c++)_key=_config[c],f[_key]="ratio"==_key||"volume"==_key?parseFloat(f[_key]):parseInt(f[_key]);c=new w(a,f);a.data("_yendifPlayer",c)}})};k.yendifplayer={defaults:{version:"5.0.0",theme:"black",engine:"flash",responsive:0,ratio:0.5625,autoplay:0,loop:0,volume:0.5,playbtn:1,controlbar:1,playpause:1,
currenttime:1,progress:1,duration:1,volumebtn:1,fullscreen:1,embed:1,playlistPosition:"right",playlistWidth:250,playlistHeight:125,autoplaylist:0,keyboard:1,analytics:""},config:{}};k.yendifcallback=function(a,b,c){d("#"+a).yendifplayer(b,c||"")};d(g).on("fullscreenchange webkitfullscreenchange mozfullscreenchange",function(a){a.stopPropagation();a=focused;"string"!==typeof a&&a.sFSE.apply(a,[!a.yendif.isFS])});d(g).keydown(function(a){var b=focused,c=a.which;if("string"!=typeof b&&!(0>=b.yendif.status)&&
b.config.keyboard)switch(-1!=[27,32,37,38,39,40,70,72,74,75,76,77,119].indexOf(c)&&a.preventDefault(),c){case 32:b.tPP.apply(b);break;case 39:case 76:case 37:case 72:b.engine.pause.apply(b);37===c||72===c?b.playlist.currentTime=Math.max(0,b.playlist.currentTime-=10):(b.playlist.currentTime+=10,b.playlist.currentTime>b.playlist.duration&&(b.playlist.currentTime=0));b.engine.seekTo.apply(b,[b.playlist.currentTime]);break;case 38:case 75:case 40:case 74:b.yendif.volume=38===c||75===c?Math.min(1,(Math.round(100*
b.yendif.volume)+5)/100):Math.max(0,(Math.round(100*b.yendif.volume)-5)/100);b.volumeTo.apply(b,[-1]);break;case 77:case 119:b.tM.apply(b);break;case 70:b.config.fullscreen&&!b.$el.hasClass("is-embed")&&b.tFS.apply(b);break;case 27:!0===b.yendif.isFS&&b.tFS.apply(b)}});d.fn.yendifAttr=function(){var a={};this.length&&d.each(this[0].attributes,function(){var b=this.name.replace("data-",""),c=this.value;switch(b){case "autoplay":case "loop":a[b]=""!==c&&0==c?0:1;break;case "muted":a[b]=0;break;case "volume":a[b]=
c;break;default:c=0==c?0:1==c?1:c,a[b]=c}});return a};d.fn.yendifscrollbar=function(a,b){if("string"===typeof a&&"update"===a)return d(this).data("ysb").update(b);var c=d.extend({},{axis:"y"},a);this.each(function(){d(this).data("ysb",new B(d(this),c))});return this};d(function(){"function"==typeof d.fn.yendifplayer&&d("video, audio").parent(".yendifplayer").yendifplayer()})})(window.jQuery,window,document);