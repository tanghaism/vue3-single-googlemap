var vue3SingleGooglemap=function(e,t){"use strict";var o;!function(e){e[e.Continue=100]="Continue",e[e.Success=200]="Success",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NoContent=204]="NoContent",e[e.MovedPermenantly=301]="MovedPermenantly",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.NotModified=304]="NotModified",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.IAmATeapot=418]="IAmATeapot",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.TooManyRequests=429]="TooManyRequests",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.AuthenticationRequired=511]="AuthenticationRequired"}(o||(o={})),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});const n="https://maps.googleapis.com/maps/api/js";async function r(e,t){return i(e)||await async function(e,t,o={}){if(i(e))return void console.info(`Attempt to add script tag for the "${e}" library in Google Maps ignored as this tag already exists in the DOM${t?" [ "+t+"]":""}`);const r=async(t=2e3)=>{throw await async function(e){return new Promise((t=>setTimeout(t,e)))}(t),new Error(`Timed out waiting for Google API to load [ ${e} / ${t} ]`)},a=()=>{var o=document.createElement("script");return o.id=`google-maps-${e}-js`,o.src=function(e,t,o=!0){let r=`${n}?libraries=${e}&sensors=false`;t&&(r=`${r}&key=${t}`);o&&(r=`${r}&callback=${e}LoaderCallback`);return r}(e,t),document.querySelector("head").appendChild(o),new Promise((t=>{window[`${e}LoaderCallback`]=()=>{t()}}))};return Promise.race(o.timeout?[r(o.timeout),a()]:[a()])}(e,t),window.google}function i(e,t){const o=document.querySelector(`#google-maps-${e}-js`);return Boolean(o)}const a=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","heading_changed","idle","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","resize","rightclick","tilesloaded","tilt_changed","zoom_changed"],l=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseup","draggable_changed","clickable_changed","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"],s=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],d=s,c=s.concat(["bounds_changed"]),p=s.concat(["center_changed","radius_changed"]),u=["closeclick","content_changed","domready","position_changed","zindex_changed"],m=t.ref(null),v=t.ref(null),h=()=>({map:m,api:v});var g={name:"google-map",props:{apiKey:String,backgroundColor:String,center:Object,clickableIcons:{type:Boolean,default:void 0},controlSize:Number,disableDefaultUi:{type:Boolean,default:void 0},disableDoubleClickZoom:{type:Boolean,default:void 0},draggable:{type:Boolean,default:void 0},draggableCursor:String,draggingCursor:String,fullscreenControl:{type:Boolean,default:void 0},fullscreenControlPosition:String,gestureHandling:String,heading:Number,keyboardShortcuts:{type:Boolean,default:void 0},mapTypeControl:{type:Boolean,default:void 0},mapTypeControlOptions:Object,mapTypeId:{type:[Number,String]},maxZoom:Number,minZoom:Number,noClear:{type:Boolean,default:void 0},panControl:{type:Boolean,default:void 0},panControlPosition:String,restriction:Object,rotateControl:{type:Boolean,default:void 0},rotateControlPosition:String,scaleControl:{type:Boolean,default:void 0},scaleControlStyle:Number,scrollwheel:{type:Boolean,default:void 0},streetView:Object,streetViewControl:{type:Boolean,default:void 0},streetViewControlPosition:String,styles:Array,tilt:Number,zoom:Number,zoomControl:{type:Boolean,default:void 0},zoomControlPosition:String},setup(e,{emit:o}){const n=t.ref(null),i=t.ref(!1);let{map:l,api:s}=h();const d=()=>{const t={backgroundColor:e.backgroundColor,center:e.center,clickableIcons:e.clickableIcons,controlSize:e.controlSize,disableDefaultUI:e.disableDefaultUi,disableDoubleClickZoom:e.disableDoubleClickZoom,draggable:e.draggable,draggableCursor:e.draggableCursor,draggingCursor:e.draggingCursor,fullscreenControl:e.fullscreenControl,fullscreenControlOptions:e.fullscreenControlPosition?{position:s.value?.ControlPosition[e.fullscreenControlPosition]}:{},gestureHandling:e.gestureHandling,heading:e.heading,keyboardShortcuts:e.keyboardShortcuts,mapTypeControl:e.mapTypeControl,mapTypeControlOptions:e.mapTypeControlOptions,mapTypeId:e.mapTypeId,maxZoom:e.maxZoom,minZoom:e.minZoom,noClear:e.noClear,panControl:e.panControl,panControlOptions:e.panControlPosition?{position:s.value?.ControlPosition[e.panControlPosition]}:{},restriction:e.restriction,rotateControl:e.rotateControl,rotateControlOptions:e.rotateControlPosition?{position:s.value?.ControlPosition[e.rotateControlPosition]}:{},scaleControl:e.scaleControl,scaleControlOptions:e.scaleControlStyle?{style:e.scaleControlStyle}:{},scrollwheel:e.scrollwheel,streetView:e.streetView,streetViewControl:e.streetViewControl,streetViewControlOptions:e.streetViewControlPosition?{position:s.value?.ControlPosition[e.streetViewControlPosition]}:{},styles:e.styles,tilt:e.tilt,zoom:e.zoom,zoomControl:e.zoomControl,zoomControlOptions:e.zoomControlPosition?{position:window.$mapApi?.ControlPosition[e.zoomControlPosition]}:{}};return Object.keys(t).forEach((e=>void 0===t[e]&&delete t[e])),t};t.onBeforeUnmount((()=>{l.value&&window.$mapApi?.event.clearInstanceListeners(window.$mapInstance)}));return"undefined"!=typeof window&&r("places",e.apiKey).then((({maps:e})=>{if(window.$mapInstance&&window.$mapDom){document.querySelector("#google-map").appendChild(window.$mapDom),window.$mapInstance.setOptions(d()),o("map-ready",{map:window.$mapInstance,api:window.$mapApi}),console.log("复用地图实例")}else{const{Map:t}=window.$mapApi={...e};window.$mapInstance=new t(document.querySelector("#google-map"),d());const n=document.querySelector("#google-map").childNodes[0];n.style.overflow="hidden",window.$mapDom=n,window.$markerArray={},console.log("地图初始化成功"),l.value=window.$mapInstance,s.value=window.$mapApi,a.forEach((e=>{window.$mapInstance?.addListener(e,(()=>o(e)))})),i.value=!0,o("map-ready",{map:window.$mapInstance,api:window.$mapApi})}})),{mapRef:n,ready:i,map:l,api:s,resetMap:(e=!0)=>{window.$mapInstance&&(Object.keys(window.$markerArray).forEach((e=>{for(const t of window.$markerArray[e])try{window.$mapApi.event.clearInstanceListeners(t),t.setMap(null)}catch(e){console.warn(e)}delete window.$markerArray[e]})),e&&Object.keys(window.$mapApi.ControlPosition).forEach((e=>{window.$mapInstance.controls[window.$mapApi.ControlPosition[e]].clear()})))}}}};const y=t.withScopeId("data-v-4ba0fc32");t.pushScopeId("data-v-4ba0fc32");const f={ref:"mapRef",id:"google-map"};t.popScopeId();const b=y(((e,o,n,r,i,a)=>(t.openBlock(),t.createBlock("div",f,[t.createVNode("div",null,[t.renderSlot(e.$slots,"default")])],512))));function _(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}_("\n#google-map[data-v-4ba0fc32] {\n  position: relative;\n  width: 100%;\n}\n"),g.render=b,g.__scopeId="data-v-4ba0fc32";const w=(e,o,n,r,i)=>{const a=t.ref(null);let l=null;const{map:s,api:d}=h();return s.value&&d.value&&(a.value=l=new window.$mapApi[e]({...t.toRaw(n),map:window.$mapInstance}),o.forEach((e=>{l?.addListener(e,(t=>r(e,t,l,i)))})),window.$markerArray[e]?window.$markerArray[e].push(l):window.$markerArray[e]=[l]),t.onBeforeUnmount((()=>{l&&(window.$mapApi?.event.clearInstanceListeners(l),l.setMap(null),window.$markerArray[e]&&window.$markerArray[e].length>0&&window.$markerArray[e].splice(i,1))})),{component:a}};var k=t.defineComponent({props:{options:{type:Object,required:!0},index:{type:Number,required:!0}},setup(e,{emit:o}){const{options:n,index:r}=t.toRefs(e);return{marker:w("Marker",l,t.toRaw(n.value),o,r)}},render:()=>null});
/*!
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *       http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function C(e,t){function o(){}o.prototype=t.prototype,e.superClass_=t.prototype,e.prototype=new o,e.prototype.constructor=e}var D={name:"slot-marker",props:{options:{default:()=>({}),type:Object},index:{default:0,type:Number}},setup(e,o){const{options:n,index:r}=t.toRefs(e),i=t.ref(null),a=t.ref(null),s=t.ref(null);let d=null;t.provide("$marker",{marker:a});const c=e=>{if(window.$mapInstance&&window.$mapApi){o.slots.labelContent&&1===o.slots.labelContent.length&&o.slots.labelContent[0]&&(n.value=Object.assign({},n.value,{labelContent:s.value}));const e=Object.assign(Object.assign({},n.value),{map:window.$mapInstance}),t=s.value;t.parentNode.removeChild(t);const i=function(e){function t(e,o,n){this.marker_=e,this.handCursorURL_=e.handCursorURL,this.labelDiv_=document.createElement("div"),this.labelDiv_.style.cssText="position: absolute; overflow: hidden;",this.eventDiv_=document.createElement("div"),this.eventDiv_.style.cssText=this.labelDiv_.style.cssText,this.eventDiv_.addEventListener("selectstart",(function(){return!1})),this.eventDiv_.addEventListener("dragstart",(function(){return!1})),this.crossDiv_=t.getSharedCross(o)}function o(o){(o=o||{}).labelContent=o.labelContent||"",o.labelAnchor=o.labelAnchor||new e.Point(0,0),o.labelClass=o.labelClass||"markerLabels",o.labelStyle=o.labelStyle||{},o.labelInBackground=o.labelInBackground||!1,void 0===o.labelVisible&&(o.labelVisible=!0),void 0===o.raiseOnDrag&&(o.raiseOnDrag=!0),void 0===o.clickable&&(o.clickable=!0),void 0===o.draggable&&(o.draggable=!1),void 0===o.optimized&&(o.optimized=!1),o.crossImage=o.crossImage||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png",o.handCursor=o.handCursor||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur",o.optimized=!1,this.label=new t(this,o.crossImage,o.handCursor),e.Marker.apply(this,arguments)}return C(t,e.OverlayView),t.getSharedCross=function(e){var o;return void 0===t.getSharedCross.crossDiv&&((o=document.createElement("img")).style.cssText="position: absolute; z-index: 1000002; display: none;",o.style.marginLeft="-8px",o.style.marginTop="-9px",o.src=e,t.getSharedCross.crossDiv=o),t.getSharedCross.crossDiv},t.prototype.onAdd=function(){var o,n,r,i,a,l,s,d=this,c=!1,p=!1,u="url("+this.handCursorURL_+")",m=function(e){e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},v=function(){d.marker_.setAnimation(null)};this.getPanes().markerLayer.appendChild(this.labelDiv_),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_),void 0===t.getSharedCross.processed&&(this.getPanes().markerLayer.appendChild(this.crossDiv_),t.getSharedCross.processed=!0),this.listeners_=[e.event.addDomListener(this.eventDiv_,"mouseover",(function(t){(d.marker_.getDraggable()||d.marker_.getClickable())&&(this.style.cursor="pointer",e.event.trigger(d.marker_,"mouseover",t))})),e.event.addDomListener(this.eventDiv_,"mouseout",(function(t){!d.marker_.getDraggable()&&!d.marker_.getClickable()||p||(this.style.cursor=d.marker_.getCursor(),e.event.trigger(d.marker_,"mouseout",t))})),e.event.addDomListener(this.eventDiv_,"mousedown",(function(t){p=!1,d.marker_.getDraggable()&&(c=!0,this.style.cursor=u),(d.marker_.getDraggable()||d.marker_.getClickable())&&(e.event.trigger(d.marker_,"mousedown",t),m(t))})),e.event.addDomListener(document,"mouseup",(function(t){var n;if(c&&(c=!1,d.eventDiv_.style.cursor="pointer",e.event.trigger(d.marker_,"mouseup",t)),p){if(a){(n=d.getProjection().fromLatLngToDivPixel(d.marker_.getPosition())).y+=20,d.marker_.setPosition(d.getProjection().fromDivPixelToLatLng(n));try{d.marker_.setAnimation(e.Animation.BOUNCE),setTimeout(v,1406)}catch(e){}}d.crossDiv_.style.display="none",d.marker_.setZIndex(o),i=!0,p=!1,t.latLng=d.marker_.getPosition(),e.event.trigger(d.marker_,"dragend",t)}})),e.event.addListener(d.marker_.getMap(),"mousemove",(function(t){var i;c&&(p?(t.latLng=new e.LatLng(t.latLng.lat()-n,t.latLng.lng()-r),i=d.getProjection().fromLatLngToDivPixel(t.latLng),a&&(d.crossDiv_.style.left=i.x+"px",d.crossDiv_.style.top=i.y+"px",d.crossDiv_.style.display="",i.y-=20),d.marker_.setPosition(d.getProjection().fromDivPixelToLatLng(i)),a&&(d.eventDiv_.style.top=i.y+20+"px"),e.event.trigger(d.marker_,"drag",t)):(n=t.latLng.lat()-d.marker_.getPosition().lat(),r=t.latLng.lng()-d.marker_.getPosition().lng(),o=d.marker_.getZIndex(),l=d.marker_.getPosition(),s=d.marker_.getMap().getCenter(),a=d.marker_.get("raiseOnDrag"),p=!0,d.marker_.setZIndex(1e6),t.latLng=d.marker_.getPosition(),e.event.trigger(d.marker_,"dragstart",t)))})),e.event.addDomListener(document,"keydown",(function(t){p&&27===t.keyCode&&(a=!1,d.marker_.setPosition(l),d.marker_.getMap().setCenter(s),e.event.trigger(document,"mouseup",t))})),e.event.addDomListener(this.eventDiv_,"click",(function(t){(d.marker_.getDraggable()||d.marker_.getClickable())&&(i?i=!1:(e.event.trigger(d.marker_,"click",t),m(t)))})),e.event.addDomListener(this.eventDiv_,"dblclick",(function(t){(d.marker_.getDraggable()||d.marker_.getClickable())&&(e.event.trigger(d.marker_,"dblclick",t),m(t))})),e.event.addListener(this.marker_,"dragstart",(function(e){p||(a=this.get("raiseOnDrag"))})),e.event.addListener(this.marker_,"drag",(function(e){p||a&&(d.setPosition(20),d.labelDiv_.style.zIndex=1e6+(this.get("labelInBackground")?-1:1))})),e.event.addListener(this.marker_,"dragend",(function(e){p||a&&d.setPosition(0)})),e.event.addListener(this.marker_,"position_changed",(function(){d.setPosition()})),e.event.addListener(this.marker_,"zindex_changed",(function(){d.setZIndex()})),e.event.addListener(this.marker_,"visible_changed",(function(){d.setVisible()})),e.event.addListener(this.marker_,"labelvisible_changed",(function(){d.setVisible()})),e.event.addListener(this.marker_,"title_changed",(function(){d.setTitle()})),e.event.addListener(this.marker_,"labelcontent_changed",(function(){d.setContent()})),e.event.addListener(this.marker_,"labelanchor_changed",(function(){d.setAnchor()})),e.event.addListener(this.marker_,"labelclass_changed",(function(){d.setStyles()})),e.event.addListener(this.marker_,"labelstyle_changed",(function(){d.setStyles()}))]},t.prototype.onRemove=function(){var t;if(this.labelDiv_.parentNode&&(this.labelDiv_.parentNode.removeChild(this.labelDiv_),this.eventDiv_.parentNode.removeChild(this.eventDiv_)),this.listeners_)for(t=0;t<this.listeners_.length;t++)e.event.removeListener(this.listeners_[t])},t.prototype.draw=function(){this.setContent(),this.setTitle(),this.setStyles()},t.prototype.setContent=function(){var e=this.marker_.get("labelContent");if(void 0===e.nodeType)this.labelDiv_.innerHTML=e,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML;else{for(;this.labelDiv_.lastChild;)this.labelDiv_.removeChild(this.labelDiv_.lastChild);for(;this.eventDiv_.lastChild;)this.eventDiv_.removeChild(this.eventDiv_.lastChild);this.labelDiv_.appendChild(e),e=e.cloneNode(!0),this.eventDiv_.appendChild(e)}},t.prototype.setTitle=function(){this.eventDiv_.title=this.marker_.getTitle()||""},t.prototype.setStyles=function(){var e,t;for(e in this.labelDiv_.className=this.marker_.get("labelClass"),this.eventDiv_.className=this.labelDiv_.className,this.labelDiv_.style.cssText="",this.eventDiv_.style.cssText="",t=this.marker_.get("labelStyle"))t.hasOwnProperty(e)&&(this.labelDiv_.style[e]=t[e],this.eventDiv_.style[e]=t[e]);this.setMandatoryStyles()},t.prototype.setMandatoryStyles=function(){this.labelDiv_.style.position="absolute",this.labelDiv_.style.overflow="hidden",void 0!==this.labelDiv_.style.opacity&&""!==this.labelDiv_.style.opacity&&(this.labelDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity='+100*this.labelDiv_.style.opacity+')"',this.labelDiv_.style.filter="alpha(opacity="+100*this.labelDiv_.style.opacity+")"),this.eventDiv_.style.position=this.labelDiv_.style.position,this.eventDiv_.style.overflow=this.labelDiv_.style.overflow,this.eventDiv_.style.opacity=.01,this.eventDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"',this.eventDiv_.style.filter="alpha(opacity=1)",this.setAnchor(),this.setPosition(),this.setVisible()},t.prototype.setAnchor=function(){var e=this.marker_.get("labelAnchor");this.labelDiv_.style.marginLeft=-e.x+"px",this.labelDiv_.style.marginTop=-e.y+"px",this.eventDiv_.style.marginLeft=-e.x+"px",this.eventDiv_.style.marginTop=-e.y+"px"},t.prototype.setPosition=function(e){var t=this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());void 0===e&&(e=0),this.labelDiv_.style.left=Math.round(t.x)+"px",this.labelDiv_.style.top=Math.round(t.y-e)+"px",this.eventDiv_.style.left=this.labelDiv_.style.left,this.eventDiv_.style.top=this.labelDiv_.style.top,this.setZIndex()},t.prototype.setZIndex=function(){var e=this.marker_.get("labelInBackground")?-1:1;void 0===this.marker_.getZIndex()?(this.labelDiv_.style.zIndex=parseInt(this.labelDiv_.style.top,10)+e,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex):(this.labelDiv_.style.zIndex=this.marker_.getZIndex()+e,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex)},t.prototype.setVisible=function(){this.marker_.get("labelVisible")?this.labelDiv_.style.display=this.marker_.getVisible()?"block":"none":this.labelDiv_.style.display="none",this.eventDiv_.style.display=this.labelDiv_.style.display},C(o,e.Marker),o.prototype.setMap=function(t){e.Marker.prototype.setMap.apply(this,arguments),this.label.setMap(t)},o}(window.$mapApi);a.value=d=new i(e),l.forEach((e=>{d&&d.addListener(e,(t=>o.emit(e,t,a.value,r.value)))})),window.$markerArray.MarkerWithLabel?window.$markerArray.MarkerWithLabel.push(d):window.$markerArray.MarkerWithLabel=[d]}},p=()=>{d&&(window.$mapApi&&window.$mapApi.event.clearInstanceListeners(d),d.setMap(null),window.$markerArray.MarkerWithLabel&&window.$markerArray.MarkerWithLabel.length>0&&window.$markerArray.MarkerWithLabel.splice(r,1))};return t.onMounted((()=>{c()})),t.onBeforeUnmount((()=>{p()})),{marker:a,markerRef:s,markerWithLabel:i,createMarker:c,removeMarker:p}}};const I=t.withScopeId("data-v-39e43474");t.pushScopeId("data-v-39e43474");const L={ref:"markerRef"};t.popScopeId();const x=I(((e,o,n,r,i,a)=>(t.openBlock(),t.createBlock("div",null,[t.createVNode("div",L,[t.renderSlot(e.$slots,"labelContent")],512),t.renderSlot(e.$slots,"default")]))));_("\n\n"),D.render=x,D.__scopeId="data-v-39e43474";var P={name:"InfoWindow",props:{options:{default:()=>({}),type:Object},show:{default:!1,type:Boolean},index:{default:0,type:Number}},setup(e,o){const{options:n,show:r,index:i}=t.toRefs(e),a=t.inject("$marker"),l=t.ref(null),s=t.ref(null),d=t.ref(null),c=t.ref(null);let p=null;const m=t.ref(null);t.onMounted((()=>{v()})),t.onUnmounted((()=>{g(),c.value&&(s.value&&s.value.event.clearInstanceListeners(p),c.value.setMap(null))})),t.watch((()=>a.marker),((e,t,o)=>{v(),o((()=>{g()}))})),t.watch((()=>r.value),((e,t)=>{e?h():g()}));const v=e=>{if(window.$mapInstance&&window.$mapApi&&a.marker){g(),l.value=window.$mapInstance,s.value=window.$mapApi,d.value=t.toRaw(a.marker);const e=Object.assign(Object.assign({},n.value,{content:m.value,map:l.value}));c.value=p=new window.$mapApi.InfoWindow(e),u.forEach((e=>{p&&p.addListener(e,(t=>o.emit(e,t,c.value,i.value)))})),r.value&&h()}},h=()=>{c?.value?.open&&c.value.open(l.value,t.toRaw(a.marker.value))},g=()=>{c.value&&c.value.close(),o.emit("close")};return{infoWindow:c,infoWindowRef:m,openInfoWindow:h,closeInfoWindow:g}}};const $=t.withScopeId("data-v-1b923dec");t.pushScopeId("data-v-1b923dec");const A={ref:"infoWindowRef"};t.popScopeId();const S=$(((e,o,n,r,i,a)=>(t.openBlock(),t.createBlock("div",null,[t.createVNode("div",A,[t.renderSlot(e.$slots,"default")],512)]))));_("\n\n"),P.render=S,P.__scopeId="data-v-1b923dec";var M=t.defineComponent({props:{options:{type:Object,required:!0},index:{type:Number,required:!0}},setup(e,{emit:o}){const{options:n,index:r}=t.toRefs(e),i=t.toRaw(n.value);return{polyline:w("Polyline",s,i,o,r)}},render:()=>null}),T=t.defineComponent({props:{options:{type:Object,required:!0},index:{type:Number,required:!0}},setup(e,{emit:o}){const{options:n,index:r}=t.toRefs(e);return{polygon:w("Polygon",d,t.toRaw(n.value),o,r)}},render:()=>null}),N=t.defineComponent({props:{options:{type:Object,required:!0},index:{type:Number,required:!0}},setup(e,{emit:o}){const{options:n,index:r}=t.toRefs(e);return{rectangle:w("Rectangle",c,t.toRaw(n.value),o,r)}},render:()=>null}),R=t.defineComponent({props:{options:{type:Object,required:!0},index:{type:Number,required:!0}},setup(e,{emit:o}){const{options:n,index:r}=t.toRefs(e);return{circle:w("Circle",p,t.toRaw(n.value),o,r)}},render:()=>null}),B=t.defineComponent({props:{position:{type:String,required:!0},index:{type:Number,required:!0,default:0}},setup(e){const{map:o,api:n}=h(),r=t.ref(null),i=t=>{o.value&&n.value&&(e.index&&(r.value.index=e.index),r.value&&(o.value.controls[n.value.ControlPosition[e.position]].push(r.value),"watch"===t&&r.value.parentNode&&r.value.parentNode.removeChild(r.value)))};return t.onMounted((()=>{i("onMounted")})),t.onBeforeUnmount((()=>{(t=>{if(o.value&&n.value&&r.value){let t=0;o.value.controls[n.value.ControlPosition[e.position]]&&o.value.controls[n.value.ControlPosition[e.position]].forEach(((e,o)=>{e===r.value&&(t=o)})),o.value.controls[n.value.ControlPosition[e.position]].getAt(t)&&o.value.controls[n.value.ControlPosition[e.position]].removeAt(t)}})(e.index)})),t.watch([o,()=>e.position,()=>e.index],((e,t,o)=>{i("watch")})),{controlRef:r}}});const O={ref:"controlRef"};return B.render=function(e,o,n,r,i,a){return t.openBlock(),t.createBlock("div",O,[t.renderSlot(e.$slots,"default")],512)},e.Circle=R,e.CustomControl=B,e.GoogleMap=g,e.InfoWindow=P,e.Marker=k,e.MarkerWithLabel=D,e.Polygon=T,e.Polyline=M,e.Rectangle=N,Object.defineProperty(e,"__esModule",{value:!0}),e}({},Vue);
