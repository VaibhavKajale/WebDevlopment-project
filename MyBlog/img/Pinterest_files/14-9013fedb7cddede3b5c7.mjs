(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[14],{"9pre":function(e,t,a){a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return r}));const i=2,s="V_HLSV3_MOBILE",r=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]},Lic6:function(e,t,a){a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return d}));var i=a("7w6Q"),s=a("LrsS");const r=["isCellular","videoUrl","sessionMark"];let n={},o="";const l=e=>{const{browserName:t,browserVersion:a,country:i,isAuthenticated:s,isBot:r,isMobile:l,isSocialBot:h,view:d="unknown",viewParameter:c="unknown"}=e;o=(h?"socialBot":r&&"bot")||"nonbot";const u=(e=>{switch(e){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";default:return"OTHER"}})(i);n={browserName:t,browserVersion:(null==a?void 0:a.split(".")[0])||"0",isAuthenticated:s,isMobile:l,region:u,view:d,viewParameter:c}};function h(e,t,a,s={}){const r=a?"closeup":"nonCloseup",l=t?"hls":"nonHls",h={...s,...n},d=`web.video.${l}.${o}.${r}.${e}`;i.a.increment(d,1,h)}function d(e,t,a,l={}){const h=a?"closeup":"nonCloseup",d=t?"hls":"nonHls",c=e.sessionMark===s.f?"sessionStart":"sessionEnd",u={...l,...n};if(Object.entries(e).forEach(([t,a])=>{const s=`web.video.${d}.${o}.${h}.${c}.${t}`,n=parseInt(a,10),l="number"==typeof n?n:-1;var p;if(!r.includes(t))if(t.includes("fatalError")&&!0===a){const{errorCode:t,errorName:a,errorReason:r}=e;i.a.increment(s,1,{errorCode:t,errorName:a,errorReason:r,...u})}else if(t.includes("Width")||t.includes("Height")){const e=(p=l)<0?"negative":0===p?"zero":p<200?"xs":p<400?"s":p<600?"m":p<800?"l":p<1e3?"xl":p<1200?"xxl":"over1200";i.a.increment(s,1,{dimensionBucket:e,...u})}else if("numberOfStalls"===t){let e=a;l>1e3?e="over1000":l>10?e="over10":l<0&&(e="negative"),i.a.increment(s,1,{numberOfStalls:e,...u})}else"screenPixelScale"===t?i.a.increment(s,1,{screenPixelScale:a||-1,...u}):l>=0?(0===l&&i.a.increment(s+".zero",1,u),i.a.timing(s,l,1),i.a.timing(s+"_with_tags",l,1,u)):l<0&&i.a.increment(s+".negative",1,u)}),e.sessionMark!==s.f){const{rebufferRate:t,screenPixelScale:a,startupLatencyMs:s,startupVariantWidth:r,startupPlayerWidth:n}=e,l=`web.video.${d}.${o}.${h}.${c}`;if("number"==typeof r&&"number"==typeof n&&"number"==typeof a){const e=1.5*r>a*n;i.a.increment(`${l}.upscaled.${e?"good":"bad"}`,1,u)}"number"==typeof s&&i.a.increment(`${l}.startupLatency.${s<500?"good":"bad"}`,1,u),"number"==typeof t&&i.a.increment(`${l}.rebufferRate.${t<.01?"good":"bad"}`,1,u)}}},LrsS:function(e,t,a){a.d(t,"f",(function(){return s})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"g",(function(){return h})),a.d(t,"d",(function(){return d})),a.d(t,"i",(function(){return c})),a.d(t,"h",(function(){return u}));var i=a("7Cbv");const s=1,r=2,n=1e3,o=1e3,l=1e3,h=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),d=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4});function c(e){return e+"-"+Object(i.a)()}function u(){return Object(i.a)()}},aFfM:function(e,t,a){var i=a("q1tI"),s=a("ulZh"),r=a.n(s),n=a("xkL+"),o=a("U4JR"),l=a("pLLR"),h=a("n6mq"),d=a("Lic6"),c=a("LrsS"),u=a("nKUr");function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class m extends i.PureComponent{constructor(...e){super(...e),p(this,"state",{canPlayVideo:!1,isManifestParsed:!1,playbackState:c.g.DEFAULT}),p(this,"errorRetryCount",1),p(this,"firstFragBuffered",!1),p(this,"hasPlaybackStarted",!1),p(this,"hasVideoSessionStarted",!1),p(this,"hasVideoSessionEnded",!1),p(this,"hls",null),p(this,"fragStartupTime",{}),p(this,"lastLevelSwitchKbps",null),p(this,"lastStallTime",null),p(this,"logSessionStartOnNextPlay",!1),p(this,"playerId",""),p(this,"videoSessionId",""),p(this,"videoVisibleTime",null),p(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",downloadedKiloBytes:0,errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:"string"==typeof this.props.src?this.props.src:this.props.src[0].src,totalStallDurationMs:0,videoCreatedTime:null}),p(this,"initializeHls",()=>{this.destroyHls();const{src:e,hlsConfig:t}=this.props,a=new r.a(t);a.loadSource(e),this.videoPlayerRef&&a.attachMedia(this.videoPlayerRef.video),a.on(r.a.Events.FRAG_BUFFERED,this.handleHlsFragBuffered),a.on(r.a.Events.FRAG_CHANGED,this.handleHlsFragChanged),a.on(r.a.Events.FRAG_LOADING,this.handleHlsFragLoading),a.on(r.a.Events.FRAG_LOADED,this.handleHlsFragLoaded),a.on(r.a.Events.MANIFEST_PARSED,()=>{this.setState({isManifestParsed:!0})}),a.on(r.a.Events.LEVEL_SWITCHED,this.handleHlsLevelSwitched),a.on(r.a.Events.ERROR,this.handleHlsError),this.hls=a}),p(this,"destroyHls",()=>{const{hls:e}=this;e&&e.destroy()}),p(this,"addSegment",e=>{const{segments:t}=this.playbackPerformance,a=t&&t[t.length-1];if(this.hls&&t.length&&a&&a.uri!==e.url){this.updateWatchDurationForCurrentSegment();const a=this.videoPlayerRef&&this.videoPlayerRef.video,i=this.hls&&this.hls.levels||{},s="number"==typeof e.level?i[e.level]:{},r=this.fragStartupTime[e.url];let n=-1;r&&r.startLoadTime&&r.endLoadTime&&(n=r.endLoadTime-r.startLoadTime);const o={indicatedKbps:s.bitrate/c.a,duration:e.duration,level:e.level,lastStartPlayTime:this.getCurrentVideoTime(),numServerAddressChange:-1,observedKbps:this.hls&&this.hls.bandwidthEstimate/c.a||-1,playbackStartDate:Date.now(),serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:n,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a&&a.clientWidth||-1,viewportHeight:a&&a.clientHeight||-1,watchedDurationMs:0};t.push(o)}}),p(this,"initializeSegments",e=>{const{contextLogData:t={}}=this.props,{is_closeup_video:a=!1}=t,{segments:i}=this.playbackPerformance;if(!i.length)if(this.hls&&this.videoPlayerRef&&this.videoPlayerRef.video&&e){if(!i.length&&"number"==typeof e.level){const t=this.videoPlayerRef&&this.videoPlayerRef.video,a=this.hls.levels,s="number"==typeof e.level?a[e.level]:{},r=this.fragStartupTime[e.url];let n=-1;r&&r.startLoadTime&&r.endLoadTime&&(n=r.endLoadTime-r.startLoadTime),this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/c.a;const o={indicatedKbps:s.bitrate/c.a,duration:e.duration,level:e.level,lastStartPlayTime:null,numServerAddressChange:-1,observedKbps:this.hls.bandwidthEstimate/c.a||-1,playbackStartDate:null,serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:n,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:t.clientWidth,viewportHeight:t.clientHeight,watchedDurationMs:0};i.push(o)}}else Object(d.c)("initializeSegmentsFailed",!0,a)}),p(this,"getCurrentVideoTime",()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*c.c:null),p(this,"handleCanPlayVideo",e=>{const{contextLogData:t={},onReady:a,playing:i}=this.props,{is_closeup_video:s=!1}=t,{canPlayVideo:r}=this.state;Object(d.c)("handleCanPlayVideo",!0,s,{firstCanPlayEvent:!r,playing:i}),this.playbackPerformance.hasFatalError=!1,r||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),a&&a(e)}),p(this,"handleEnded",e=>{const{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,s=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),s&&(s.lastStartPlayTime=0),this.fragStartupTime={}):t||this.logPlaybackPerformance(c.e,{initiator:"videoEnded",loop:t}),this.setState({playbackState:c.g.ENDED}),a&&a(e)}),p(this,"handleHlsError",(e,t)=>{var a;const{contextLogData:i={}}=this.props,{is_closeup_video:s=!1}=i;if(this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${t.details}`,t.fatal){var n,o,l,h;this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.errorName=t.type,this.playbackPerformance.errorReason=t.details,this.playbackPerformance.errorCode=t.response&&t.response.code?t.response.code:0;const e={errorName:t.type,errorReason:t.details,errorRetryCount:this.errorRetryCount,errorMessage:(null===(n=t.err)||void 0===n||null===(o=n.message)||void 0===o?void 0:o.slice(0,50))||"unknown",errorResponse:(null===(l=t.response)||void 0===l||null===(h=l.text)||void 0===h?void 0:h.slice(0,50))||"unknown",playbackState:this.state.playbackState};if(Object(d.c)("fatalError",!0,s,e),this.errorRetryCount>0)switch(this.errorRetryCount-=1,t.type){case r.a.ErrorTypes.NETWORK_ERROR:if(t.details===r.a.ErrorDetails.MANIFEST_LOAD_ERROR||t.details===r.a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||t.details===r.a.ErrorDetails.MANIFEST_LOAD_PARSING_ERROR){var u;const{src:e}=this.props;null===(u=this.hls)||void 0===u||u.loadSource(e)}else{var p;null===(p=this.hls)||void 0===p||p.startLoad()}break;case r.a.ErrorTypes.MEDIA_ERROR:null===(a=this.hls)||void 0===a||a.recoverMediaError()}}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:c.g.FAILED})}),p(this,"handleHlsFragBuffered",(e,t)=>{this.firstFragBuffered||(this.initializeSegments(t.frag),this.firstFragBuffered=!0)}),p(this,"handleHlsFragChanged",(e,t)=>{this.addSegment(t.frag)}),p(this,"handleHlsFragLoading",(e,t)=>{var a;const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&!this.fragStartupTime[i]&&(this.fragStartupTime[i]={startLoadTime:new Date})}),p(this,"handleHlsFragLoaded",(e,t)=>{var a;t.frag&&t.frag.loaded&&(this.playbackPerformance.downloadedKiloBytes+=t.frag.loaded/c.b);const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&this.fragStartupTime[i]&&this.fragStartupTime[i].startLoadTime&&(this.fragStartupTime[i].endLoadTime=new Date)}),p(this,"handleHlsLevelSwitched",()=>{this.hls&&this.hls.bandwidthEstimate&&(this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/c.a)}),p(this,"handleLoadedMetadata",()=>{this.setState({playbackState:c.g.LOADED_METADATA})}),p(this,"handleLoadStart",()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:c.g.LOAD_START})}),p(this,"handleLoadedData",()=>{this.setState({playbackState:c.g.LOADED_DATA})}),p(this,"handlePlaying",()=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.setState({playbackState:c.g.PLAYING})}),p(this,"handlePause",()=>{this.state.playbackState!==c.g.STALLING&&this.state.playbackState!==c.g.SEEKING&&(this.updateWatchDurationForCurrentSegment(),this.updateStallDuration()),this.setState({playbackState:c.g.PAUSED})}),p(this,"handleSeeking",()=>{this.playbackPerformance.numberOfSeeks+=1;const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==c.g.ENDED&&this.setState({playbackState:c.g.SEEKING})}),p(this,"handleStalled",()=>{null===this.lastStallTime&&this.state.playbackState!==c.g.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1),this.setState({playbackState:c.g.STALLING})}),p(this,"handleTimeUpdate",e=>{const{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===c.g.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())}),p(this,"resetPlaybackMetrics",()=>{this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastLevelSwitchKbps=null,this.lastStallTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;const e={...this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],lastStartPlayTime:null,playbackStartDate:null,switchBitrateKbps:-1,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.downloadedKiloBytes=0,this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[e]}),p(this,"setLastSegmentStartPlayTime",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())}),p(this,"setLastSegmentPlaybackStartDate",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())}),p(this,"setPlaybackStartTime",()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)}),p(this,"setVideoPlayerRef",e=>{const{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){const e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handlePause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}}),p(this,"updateStallDuration",()=>{null!==this.lastStallTime&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.lastStallTime,this.lastStallTime=null)}),p(this,"updateWatchDurationForCurrentSegment",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){const e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}}),p(this,"logPlaybackPerformance",(e,t)=>{const{contextLogData:a={},userId:i}=this.props,{is_closeup_video:s=!1}=a,{canPlayTime:r,detailedErrors:n,downloadedKiloBytes:l,errorCode:h,errorName:u,errorReason:p,hasFatalError:m,playbackStartTimestamp:b,segments:y,srcString:S,loadStartTime:f,numberOfStalls:g,numberOfSeeks:v}=this.playbackPerformance,P=this.videoPlayerRef&&this.videoPlayerRef.video,D=e===c.f,k=D&&!this.hasVideoSessionStarted,E=!D&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(this.hls&&P&&(k||E)){var L;let k=-1;r&&f&&(k=r>f?r-f:0);let E=-1;r&&this.videoVisibleTime&&(E=r>this.videoVisibleTime?r-this.videoVisibleTime:0);const T={averageVideoKbps:-1,detailedErrors:n,downloadedKiloBytes:l,isCellular:!1,errorCode:h,errorName:u,errorReason:p,fatalError:m,nativeVideoDurationMs:P.duration*c.c||-1,numberOfStalls:g,numberOfSeeks:v,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:b||-1,segments:[],sessionMark:e,screenPixelScale:null!==(L=window)&&void 0!==L&&L.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:P.clientWidth,startupPlayerHeight:P.clientHeight,startupTimeMs:k,startupLatencyMs:E,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:P.videoWidth,startupVariantHeight:P.videoHeight,videoUrl:S};if(D)this.videoSessionId=Object(c.i)(i),this.playerId=this.playerId||Object(c.h)();else if(y.length>0){const e=this.hls.levels,t=y[0];this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();const a=y.reduce((t,a)=>{if(a&&"number"==typeof a.level&&e&&e.length>0){return t+(e[a.level]||{}).bitrate*(a.watchedDurationMs||0)/c.c}return t},0),i=y.reduce((e,t)=>e+(t.watchedDurationMs||0),0);let s=null,r=0,n=0;do{r+=y[n].watchedDurationMs,s=s||y[n].level,n+=1}while(n<y.length&&y[n].level===s);T.startupVariantKbps=t.indicatedKbps,T.startupVariantWatchedDurationMs=r,T.startupVariantWidth=t.sourceWidth,T.startupVariantHeight=t.sourceHeight,T.startupPlayerWidth=t.viewportWidth,T.startupPlayerHeight=t.viewportHeight,T.overallWatchedDurationMs=i,i>0?(T.averageVideoKbps=a/(i/c.c),T.rebufferRate=this.playbackPerformance.totalStallDurationMs/i):0===i&&(T.averageVideoKbps=0,T.rebufferRate=0),T.segments=y}Object(d.a)(T,!0,s,{playbackState:this.state.playbackState,...t}),Object(o.b)(3606,{...a,is_closeup_video:s,playback_session_id:this.videoSessionId,eventData:{videoPerformanceData:T}}),D?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),Object(d.c)(D?"sessionStart":"sessionEnd",!0,s,{playbackState:this.state.playbackState,...t})}})}componentDidMount(){const{contextLogData:e={},playing:t}=this.props,{is_closeup_video:a=!1}=e;this.playbackPerformance.videoCreatedTime=new Date,this.initializeHls(),Object(d.c)("videoMounted",!0,a),t&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(c.f,{initiator:"mount"}))}componentDidUpdate(e){const{loop:t,playing:a,src:i,visible:s}=this.props;var r,n;(typeof(r=e.src)!=typeof(n=i)||(Array.isArray(n)?r.length!==n.length||n.some((e,t)=>!Array.isArray(r)||e.type!==r[t].type||e.src!==r[t].src):n!==r))&&this.initializeHls(),e.visible&&!1===s&&(this.logSessionStartOnNextPlay=!1,this.logPlaybackPerformance(c.e,{initiator:"update",loop:t})),!1===e.visible&&!0===s&&(this.videoVisibleTime=this.videoVisibleTime||new Date,a?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(c.f,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),a&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(c.f,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}componentWillUnmount(){const{loop:e}=this.props;this.logPlaybackPerformance(c.e,{initiator:"unmount",loop:e}),this.destroyHls()}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityUnmuteLabel:r,aspectRatio:n,captions:o,controls:l,loop:d,loopOverride:c,onDurationChange:p,onFullscreenChange:m,onLoadedChange:b,onPause:y,onPlay:S,onPlayheadDown:f,onPlayheadUp:g,onSeek:v,onVolumeChange:P,playbackRate:D,playing:k,playsInline:E,poster:L,preload:T,src:R,volume:w}=this.props,{canPlayVideo:A,isManifestParsed:O}=this.state;return Object(u.jsx)(h.jb,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityUnmuteLabel:r,aspectRatio:n,captions:o,controls:l,loop:void 0===c?d:c,onDurationChange:p,onEnded:this.handleEnded,onFullscreenChange:m,onLoadStart:this.handleLoadStart,onLoadedChange:b,onPause:y,onPlay:S,onPlaying:this.handlePlaying,onPlayheadDown:f,onPlayheadUp:g,onReady:this.handleCanPlayVideo,onSeek:v,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:P,onWaiting:this.handleStalled,playbackRate:D,playing:O&&A&&k,playsInline:E,poster:L,preload:T,ref:this.setVideoPlayerRef,src:R,volume:w})}}t.a=Object(i.memo)((function(e){const{country:t,isAuthenticated:a,isBot:i,isSocialBot:s,unauthId:r,userAgent:o}=Object(l.d)(),{browserName:h,browserVersion:c,isMobile:p}=o,{contextLogData:b={}}=e,{is_closeup_video:y=!1,view:S,viewParameter:f}=b,g=Object(n.b)(),v={browserName:h,browserVersion:c,country:t,isAuthenticated:a,isBot:i,is_closeup_video:y,isMobile:p,isSocialBot:s,view:S,viewParameter:f};return Object(d.b)(v),Object(u.jsx)(m,{...e,userId:g.id||r})}))}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/14-9013fedb7cddede3b5c7.mjs.map