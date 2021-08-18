(self.webpackChunkExpenses=self.webpackChunkExpenses||[]).push([[286],{77125:function(Rt,wt,E){Rt.exports=function(Y){"use strict";function ot(s){return s&&"object"==typeof s&&"default"in s?s:{default:s}}var F=ot(Y),e=F.default.helpers,lt=function(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var s=window.screen;if(s)return(s.deviceXDPI||1)/(s.logicalXDPI||1)}return 1}(),q={toTextLines:function(t){var n,r=[];for(t=[].concat(t);t.length;)"string"==typeof(n=t.pop())?r.unshift.apply(r,n.split("\n")):Array.isArray(n)?t.push.apply(t,n):e.isNullOrUndef(t)||r.unshift(""+n);return r},toFontString:function(t){return!t||e.isNullOrUndef(t.size)||e.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family},textSize:function(t,r,n){var v,a=[].concat(r),o=a.length,l=t.font,d=0;for(t.font=n.string,v=0;v<o;++v)d=Math.max(t.measureText(a[v]).width,d);return t.font=l,{height:o*n.lineHeight,width:d}},parseFont:function(t){var r=F.default.defaults.global,n=e.valueOrDefault(t.size,r.defaultFontSize),a={family:e.valueOrDefault(t.family,r.defaultFontFamily),lineHeight:e.options.toLineHeight(t.lineHeight,n),size:n,style:e.valueOrDefault(t.style,r.defaultFontStyle),weight:e.valueOrDefault(t.weight,null),string:""};return a.string=q.toFontString(a),a},bound:function(t,r,n){return Math.max(t,Math.min(r,n))},arrayDiff:function(t,r){var o,l,d,v,n=t.slice(),a=[];for(o=0,d=r.length;o<d;++o)-1===(l=n.indexOf(v=r[o]))?a.push([v,1]):n.splice(l,1);for(o=0,d=n.length;o<d;++o)a.push([n[o],-1]);return a},rasterize:function(t){return Math.round(t*lt)/lt}};function st(s,t){var r=t.x,n=t.y;if(null===r)return{x:0,y:-1};if(null===n)return{x:1,y:0};var a=s.x-r,o=s.y-n,l=Math.sqrt(a*a+o*o);return{x:l?a/l:0,y:l?o/l:-1}}function P(s,t,r){var n=0;return s<r.left?n|=1:s>r.right&&(n|=2),t<r.top?n|=8:t>r.bottom&&(n|=4),n}function V(s,t){var a,o,r=t.anchor,n=s;return t.clamp&&(n=function(s,t){for(var v,C,S,r=s.x0,n=s.y0,a=s.x1,o=s.y1,l=P(r,n,t),d=P(a,o,t);l|d&&!(l&d);)8&(v=l||d)?(C=r+(a-r)*(t.top-n)/(o-n),S=t.top):4&v?(C=r+(a-r)*(t.bottom-n)/(o-n),S=t.bottom):2&v?(S=n+(o-n)*(t.right-r)/(a-r),C=t.right):1&v&&(S=n+(o-n)*(t.left-r)/(a-r),C=t.left),v===l?l=P(r=C,n=S,t):d=P(a=C,o=S,t);return{x0:r,x1:a,y0:n,y1:o}}(n,t.area)),"start"===r?(a=n.x0,o=n.y0):"end"===r?(a=n.x1,o=n.y1):(a=(n.x0+n.x1)/2,o=(n.y0+n.y1)/2),function(s,t,r,n,a){switch(a){case"center":r=n=0;break;case"bottom":r=0,n=1;break;case"right":r=1,n=0;break;case"left":r=-1,n=0;break;case"top":r=0,n=-1;break;case"start":r=-r,n=-n;break;case"end":break;default:a*=Math.PI/180,r=Math.cos(a),n=Math.sin(a)}return{x:s,y:t,vx:r,vy:n}}(a,o,s.vx,s.vy,t.align)}var tt={arc:function(t,r){var n=(t.startAngle+t.endAngle)/2,a=Math.cos(n),o=Math.sin(n),l=t.innerRadius,d=t.outerRadius;return V({x0:t.x+a*l,y0:t.y+o*l,x1:t.x+a*d,y1:t.y+o*d,vx:a,vy:o},r)},point:function(t,r){var n=st(t,r.origin),a=n.x*t.radius,o=n.y*t.radius;return V({x0:t.x-a,y0:t.y-o,x1:t.x+a,y1:t.y+o,vx:n.x,vy:n.y},r)},rect:function(t,r){var n=st(t,r.origin),a=t.x,o=t.y,l=0,d=0;return t.horizontal?(a=Math.min(t.x,t.base),l=Math.abs(t.base-t.x)):(o=Math.min(t.y,t.base),d=Math.abs(t.base-t.y)),V({x0:a,y0:o+d,x1:a+l,y1:o,vx:n.x,vy:n.y},r)},fallback:function(t,r){var n=st(t,r.origin);return V({x0:t.x,y0:t.y,x1:t.x,y1:t.y,vx:n.x,vy:n.y},r)}},z=F.default.helpers,j=q.rasterize;function kt(s){var t=s._model.horizontal,r=s._scale||t&&s._xScale||s._yScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var n=r.getBasePixel();return t?{x:n,y:null}:{x:null,y:n}}function It(s,t,r){var n=s.shadowBlur,a=r.stroked,o=j(r.x),l=j(r.y),d=j(r.w);a&&s.strokeText(t,o,l,d),r.filled&&(n&&a&&(s.shadowBlur=0),s.fillText(t,o,l,d),n&&a&&(s.shadowBlur=n))}var ht=function(t,r,n,a){var o=this;o._config=t,o._index=a,o._model=null,o._rects=null,o._ctx=r,o._el=n};z.extend(ht.prototype,{_modelize:function(t,r,n,a){var s,o=this,l=o._index,d=z.options.resolve,v=q.parseFont(d([n.font,{}],a,l)),C=d([n.color,F.default.defaults.global.defaultFontColor],a,l);return{align:d([n.align,"center"],a,l),anchor:d([n.anchor,"center"],a,l),area:a.chart.chartArea,backgroundColor:d([n.backgroundColor,null],a,l),borderColor:d([n.borderColor,null],a,l),borderRadius:d([n.borderRadius,0],a,l),borderWidth:d([n.borderWidth,0],a,l),clamp:d([n.clamp,!1],a,l),clip:d([n.clip,!1],a,l),color:C,display:t,font:v,lines:r,offset:d([n.offset,0],a,l),opacity:d([n.opacity,1],a,l),origin:kt(o._el),padding:z.options.toPadding(d([n.padding,0],a,l)),positioner:(s=o._el,s instanceof F.default.elements.Arc?tt.arc:s instanceof F.default.elements.Point?tt.point:s instanceof F.default.elements.Rectangle?tt.rect:tt.fallback),rotation:d([n.rotation,0],a,l)*(Math.PI/180),size:q.textSize(o._ctx,r,v),textAlign:d([n.textAlign,"start"],a,l),textShadowBlur:d([n.textShadowBlur,0],a,l),textShadowColor:d([n.textShadowColor,C],a,l),textStrokeColor:d([n.textStrokeColor,C],a,l),textStrokeWidth:d([n.textStrokeWidth,0],a,l)}},update:function(t){var d,v,C,r=this,n=null,a=null,o=r._index,l=r._config,S=z.options.resolve([l.display,!0],t,o);S&&(v=z.valueOrDefault(z.callback(l.formatter,[d=t.dataset.data[o],t]),d),(C=z.isNullOrUndef(v)?[]:q.toTextLines(v)).length&&(a=function(s){var t=s.borderWidth||0,r=s.padding,n=s.size.height,a=s.size.width,o=-a/2,l=-n/2;return{frame:{x:o-r.left-t,y:l-r.top-t,w:a+r.width+2*t,h:n+r.height+2*t},text:{x:o,y:l,w:a,h:n}}}(n=r._modelize(S,C,l,t)))),r._model=n,r._rects=a},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,r){var d,a=t.ctx,o=this._model,l=this._rects;!this.visible()||(a.save(),o.clip&&(d=o.area,a.beginPath(),a.rect(d.left,d.top,d.right-d.left,d.bottom-d.top),a.clip()),a.globalAlpha=q.bound(0,o.opacity,1),a.translate(j(r.x),j(r.y)),a.rotate(o.rotation),function(s,t,r){var n=r.backgroundColor,a=r.borderColor,o=r.borderWidth;!n&&(!a||!o)||(s.beginPath(),z.canvas.roundedRect(s,j(t.x)+o/2,j(t.y)+o/2,j(t.w)-o,j(t.h)-o,r.borderRadius),s.closePath(),n&&(s.fillStyle=n,s.fill()),a&&o&&(s.strokeStyle=a,s.lineWidth=o,s.lineJoin="miter",s.stroke()))}(a,l.frame,o),function(s,t,r,n){var D,a=n.textAlign,o=n.color,l=!!o,d=n.font,v=t.length,C=n.textStrokeColor,S=n.textStrokeWidth,k=C&&S;if(v&&(l||k))for(r=function(s,t,r){var n=r.lineHeight,a=s.w,o=s.x;return"center"===t?o+=a/2:("end"===t||"right"===t)&&(o+=a),{h:n,w:a,x:o,y:s.y+n/2}}(r,a,d),s.font=d.string,s.textAlign=a,s.textBaseline="middle",s.shadowBlur=n.textShadowBlur,s.shadowColor=n.textShadowColor,l&&(s.fillStyle=o),k&&(s.lineJoin="round",s.lineWidth=S,s.strokeStyle=C),D=0,v=t.length;D<v;++D)It(s,t[D],{stroked:k,filled:l,w:r.w,x:r.x,y:r.y+r.h*D})}(a,o.lines,l.text,o),a.restore())}});var $t=Number.MIN_SAFE_INTEGER||-9007199254740991,H=Number.MAX_SAFE_INTEGER||9007199254740991;function K(s,t,r){var n=Math.cos(r),a=Math.sin(r),o=t.x,l=t.y;return{x:o+n*(s.x-o)-a*(s.y-l),y:l+a*(s.x-o)+n*(s.y-l)}}function vt(s,t){var o,l,C,r=H,n=$t,a=t.origin;for(o=0;o<s.length;++o)C=t.vx*((l=s[o]).x-a.x)+t.vy*(l.y-a.y),r=Math.min(r,C),n=Math.max(n,C);return{min:r,max:n}}function et(s,t){var r=t.x-s.x,n=t.y-s.y,a=Math.sqrt(r*r+n*n);return{vx:(t.x-s.x)/a,vy:(t.y-s.y)/a,origin:s,ln:a}}var yt=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function mt(s,t,r){var n=t.positioner(s,t),a=n.vx,o=n.vy;if(!a&&!o)return{x:n.x,y:n.y};var l=r.w,d=r.h,v=t.rotation,C=Math.abs(l/2*Math.cos(v))+Math.abs(d/2*Math.sin(v)),S=Math.abs(l/2*Math.sin(v))+Math.abs(d/2*Math.cos(v)),k=1/Math.max(Math.abs(a),Math.abs(o));return C*=a*k,S*=o*k,{x:n.x+(C+=t.offset*a),y:n.y+(S+=t.offset*o)}}F.default.helpers.extend(yt.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,r,n){this._rotation=n,this._rect={x:r.x+t.x,y:r.y+t.y,w:r.w,h:r.h}},contains:function(t){var r=this,a=r._rect;return!((t=K(t,r.center(),-r._rotation)).x<a.x-1||t.y<a.y-1||t.x>a.x+a.w+2||t.y>a.y+a.h+2)},intersects:function(t){var o,l,d,r=this._points(),n=t._points(),a=[et(r[0],r[1]),et(r[0],r[3])];for(this._rotation!==t._rotation&&a.push(et(n[0],n[1]),et(n[0],n[3])),o=0;o<a.length;++o)if(l=vt(r,a[o]),d=vt(n,a[o]),l.max<d.min||d.max<l.min)return!1;return!0},_points:function(){var t=this,r=t._rect,n=t._rotation,a=t.center();return[K({x:r.x,y:r.y},a,n),K({x:r.x+r.w,y:r.y},a,n),K({x:r.x+r.w,y:r.y+r.h},a,n),K({x:r.x,y:r.y+r.h},a,n)]}});var W={prepare:function(t){var n,a,o,l,d,r=[];for(n=0,o=t.length;n<o;++n)for(a=0,l=t[n].length;a<l;++a)r.push(d=t[n][a]),d.$layout={_box:new yt,_hidable:!1,_visible:!0,_set:n,_idx:a};return r.sort(function(v,C){var S=v.$layout,k=C.$layout;return S._idx===k._idx?k._set-S._set:k._idx-S._idx}),this.update(r),r},update:function(t){var n,a,o,l,d,r=!1;for(n=0,a=t.length;n<a;++n)l=(o=t[n]).model(),(d=o.$layout)._hidable=l&&"auto"===l.display,d._visible=o.visible(),r|=d._hidable;r&&function(s){var t,r,n,a,o,l;for(t=0,r=s.length;t<r;++t)(a=(n=s[t]).$layout)._visible&&(o=n.geometry(),l=mt(n._el._model,n.model(),o),a._box.update(l,o,n.rotation()));(function(s,t){var r,n,a,o;for(r=s.length-1;r>=0;--r)for(a=s[r].$layout,n=r-1;n>=0&&a._visible;--n)(o=s[n].$layout)._visible&&a._box.intersects(o._box)&&t(a,o)})(s,function(d,v){var C=d._hidable,S=v._hidable;C&&S||S?v._visible=!1:C&&(d._visible=!1)})}(t)},lookup:function(t,r){var n,a;for(n=t.length-1;n>=0;--n)if((a=t[n].$layout)&&a._visible&&a._box.contains(r))return t[n];return null},draw:function(t,r){var n,a,o,l,d,v;for(n=0,a=r.length;n<a;++n)(l=(o=r[n]).$layout)._visible&&(d=o.geometry(),v=mt(o._el._view,o.model(),d),l._box.update(v,d,o.rotation()),o.draw(t,v))}},R=F.default.helpers,J=F.default.helpers,U="$datalabels",ct="$default";function nt(s,t,r){if(t){var o,n=r.$context,a=r.$groups;!t[a._set]||(o=t[a._set][a._key])&&!0===J.callback(o,[n])&&(s[U]._dirty=!0,r.update(n))}}function G(s,t){var a,o,r=s[U],n=r._listeners;if(n.enter||n.leave){if("mousemove"===t.type)o=W.lookup(r._labels,t);else if("mouseout"!==t.type)return;a=r._hovered,r._hovered=o,function(s,t,r,n){var a,o;!r&&!n||(r?n?r!==n&&(o=a=!0):o=!0:a=!0,o&&nt(s,t.leave,r),a&&nt(s,t.enter,n))}(s,n,a,o)}}return F.default.defaults.global.plugins.datalabels={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if(R.isNullOrUndef(t))return null;var n,a,o,r=t;if(R.isObject(t))if(R.isNullOrUndef(t.label))if(R.isNullOrUndef(t.r))for(r="",o=0,a=(n=Object.keys(t)).length;o<a;++o)r+=(0!==o?", ":"")+n[o]+": "+t[n[o]];else r=t.r;else r=t.label;return""+r},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},{id:"datalabels",beforeInit:function(t){t[U]={_actives:[]}},beforeUpdate:function(t){var r=t[U];r._listened=!1,r._listeners={},r._datasets=[],r._labels=[]},afterDatasetUpdate:function(t,r,n){var D,at,St,At,i,c,u,p,a=r.index,o=t[U],l=o._datasets[a]=[],d=t.isDatasetVisible(a),v=t.data.datasets[a],C=function(s,t){var o,l,r=s.datalabels,n={},a=[];return!1===r?null:(!0===r&&(r={}),t=J.merge({},[t,r]),o=t.labels||{},l=Object.keys(o),delete t.labels,l.length?l.forEach(function(d){o[d]&&a.push(J.merge({},[t,o[d],{_key:d}]))}):a.push(t),n=a.reduce(function(d,v){return J.each(v.listeners||{},function(C,S){d[S]=d[S]||{},d[S][v._key||ct]=C}),delete v.listeners,d},{}),{labels:a,listeners:n})}(v,n),S=r.meta.data||[],k=t.ctx;for(k.save(),D=0,St=S.length;D<St;++D)if((u=S[D])[U]=[],d&&u&&!u.hidden&&!u._model.skip)for(at=0,At=C.labels.length;at<At;++at)c=(i=C.labels[at])._key,(p=new ht(i,k,u,D)).$groups={_set:a,_key:c||ct},p.$context={active:!1,chart:t,dataIndex:D,dataset:v,datasetIndex:a},p.update(p.$context),u[U].push(p),l.push(p);k.restore(),J.merge(o._listeners,C.listeners,{merger:function(A,M,N){M[A]=M[A]||{},M[A][r.index]=N[A],o._listened=!0}})},afterUpdate:function(t,r){t[U]._labels=W.prepare(t[U]._datasets,r)},afterDatasetsDraw:function(t){W.draw(t,t[U]._labels)},beforeEvent:function(t,r){if(t[U]._listened)switch(r.type){case"mousemove":case"mouseout":G(t,r);break;case"click":!function(s,t){var r=s[U],n=r._listeners.click,a=n&&W.lookup(r._labels,t);a&&nt(s,n,a)}(t,r)}},afterEvent:function(t){var l,d,v,C,S,k,D,r=t[U],n=r._actives,a=r._actives=t.lastActive||[],o=q.arrayDiff(n,a);for(l=0,d=o.length;l<d;++l)if((S=o[l])[1])for(v=0,C=(D=S[0][U]||[]).length;v<C;++v)(k=D[v]).$context.active=1===S[1],k.update(k.$context);(r._dirty||o.length)&&(W.update(r._labels),function(s){if(!s.animating){for(var t=F.default.animationService.animations,r=0,n=t.length;r<n;++r)if(t[r].chart===s)return;s.render({duration:1,lazy:!0})}}(t)),delete r._dirty}}}(E(72075))},21286:function(Rt,wt,E){"use strict";E.r(wt),E.d(wt,{ContactsModule:function(){return At}});var Y=E(61116),ot=E(84932),F=E(70992),e=E(60091),lt=function(){function i(){}return i.\u0275fac=function(u){return new(u||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-contacts"]],decls:1,vars:0,template:function(u,p){1&u&&e._UZ(0,"router-outlet")},directives:[F.lC],encapsulation:2,changeDetection:0}),i}(),q=E(96054),st=E(51558),b=E(51671);function dt(){return{getInitialState:function(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({ids:[],entities:{}},c)}}}function ft(){return{getSelectors:function(c){var u=function(N){return N.ids},p=function(N){return N.entities},O=(0,b.P1)(u,p,function(M,N){return M.map(function(X){return N[X]})}),A=(0,b.P1)(u,function(M){return M.length});return c?{selectIds:(0,b.P1)(c,u),selectEntities:(0,b.P1)(c,p),selectAll:(0,b.P1)(c,O),selectTotal:(0,b.P1)(c,A)}:{selectIds:u,selectEntities:p,selectAll:O,selectTotal:A}}}}var g=function(i){return i[i.EntitiesOnly=0]="EntitiesOnly",i[i.Both=1]="Both",i[i.None=2]="None",i}({});function Z(i){return function(u,p){var O={ids:(0,st.Z)(p.ids),entities:Object.assign({},p.entities)},A=i(u,O);return A===g.Both?Object.assign({},p,O):A===g.EntitiesOnly?Object.assign(Object.assign({},p),{entities:O.entities}):p}}function P(i,c){var u=c(i);return(0,e.X6Q)()&&void 0===u&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",i,"The `selectId` implementation:",c.toString()),u}function pt(i){function c(x,y){var T=P(x,i);return T in y.entities?g.None:(y.ids.push(T),y.entities[T]=x,g.Both)}function u(x,y){var f,T=!1,h=(0,q.Z)(x);try{for(h.s();!(f=h.n()).done;)T=c(f.value,y)!==g.None||T}catch(_){h.e(_)}finally{h.f()}return T?g.Both:g.None}function O(x,y){var T=P(x,i);return T in y.entities?(y.entities[T]=x,g.EntitiesOnly):(y.ids.push(T),y.entities[T]=x,g.Both)}function N(x,y){var h=(x instanceof Array?x:y.ids.filter(function(f){return x(y.entities[f])})).filter(function(f){return f in y.entities}).map(function(f){return delete y.entities[f]}).length>0;return h&&(y.ids=y.ids.filter(function(f){return f in y.entities})),h?g.Both:g.None}function Ot(x,y){return Q([x],y)}function Q(x,y){var T={};return(x=x.filter(function(m){return m.id in y.entities})).length>0?x.filter(function(m){return function(x,y,T){var f=Object.assign({},T.entities[y.id],y.changes),m=P(f,i),_=m!==y.id;return _&&(x[y.id]=m,delete T.entities[y.id]),T.entities[m]=f,_}(T,m,y)}).length>0?(y.ids=y.ids.map(function(m){return T[m]||m}),g.Both):g.EntitiesOnly:g.None}function Zt(x,y){var m,T=[],h=[],f=(0,q.Z)(x);try{for(f.s();!(m=f.n()).done;){var _=m.value,w=P(_,i);w in y.entities?h.push({id:w,changes:_}):T.push(_)}}catch($){f.e($)}finally{f.f()}var I=Q(h,y),B=u(T,y);switch(!0){case B===g.None&&I===g.None:return g.None;case B===g.Both||I===g.Both:return g.Both;default:return g.EntitiesOnly}}return{removeAll:function(x){return Object.assign({},x,{ids:[],entities:{}})},addOne:Z(c),addMany:Z(u),setAll:Z(function(x,y){return y.ids=[],y.entities={},u(x,y),g.Both}),setOne:Z(O),setMany:Z(function(x,y){var T=x.map(function(h){return O(h,y)});switch(!0){case T.some(function(h){return h===g.Both}):return g.Both;case T.some(function(h){return h===g.EntitiesOnly}):return g.EntitiesOnly;default:return g.None}}),updateOne:Z(Ot),updateMany:Z(Q),upsertOne:Z(function(x,y){return Zt([x],y)}),upsertMany:Z(Zt),removeOne:Z(function(x,y){return N([x],y)}),removeMany:Z(N),map:Z(function(x,y){return Q(y.ids.reduce(function(f,m){var _=x(y.entities[m]);return _!==y.entities[m]&&f.push({id:m,changes:_}),f},[]).filter(function(f){return f.id in y.entities}),y)}),mapOne:Z(function(x,y){var h=x.id,f=y.entities[h];return f?Ot({id:h,changes:(0,x.map)(f)},y):g.None})}}function V(i,c){var u=pt(i);function M(h,f){return N([h],f)}function N(h,f){var m=h.filter(function(_){return!(P(_,i)in f.entities)});return 0===m.length?g.None:(T(m,f),g.Both)}function Tt(h,f){var m=P(h,i);return m in f.entities?(f.ids=f.ids.filter(function(_){return _!==m}),T([h],f),g.Both):M(h,f)}function Q(h,f){return it([h],f)}function it(h,f){var m=[],_=h.filter(function(B){return function(h,f,m){if(!(f.id in m.entities))return!1;var w=Object.assign({},m.entities[f.id],f.changes),I=P(w,i);return delete m.entities[f.id],h.push(w),I!==f.id}(m,B,f)}).length>0;if(0===m.length)return g.None;var w=f.ids,I=[];return f.ids=f.ids.filter(function(B,$){return B in f.entities||(I.push($),!1)}),T(m,f),!_&&I.every(function(B){return f.ids[B]===w[B]})?g.EntitiesOnly:g.Both}function y(h,f){var I,m=[],_=[],w=(0,q.Z)(h);try{for(w.s();!(I=w.n()).done;){var B=I.value,$=P(B,i);$ in f.entities?_.push({id:$,changes:B}):m.push(B)}}catch(Yt){w.e(Yt)}finally{w.f()}var Mt=it(_,f),ut=N(m,f);switch(!0){case ut===g.None&&Mt===g.None:return g.None;case ut===g.Both||Mt===g.Both:return g.Both;default:return g.EntitiesOnly}}function T(h,f){h.sort(c);for(var m=[],_=0,w=0;_<h.length&&w<f.ids.length;){var I=h[_],B=P(I,i),$=f.ids[w];c(I,f.entities[$])<=0?(m.push(B),_++):(m.push($),w++)}f.ids=m.concat(_<h.length?h.slice(_).map(i):f.ids.slice(w)),h.forEach(function(ut,Yt){f.entities[i(ut)]=ut})}return{removeOne:u.removeOne,removeMany:u.removeMany,removeAll:u.removeAll,addOne:Z(M),updateOne:Z(Q),upsertOne:Z(function(h,f){return y([h],f)}),setAll:Z(function(h,f){return f.entities={},f.ids=[],N(h,f),g.Both}),setOne:Z(Tt),setMany:Z(function(h,f){var m=h.map(function(_){return Tt(_,f)});switch(!0){case m.some(function(_){return _===g.Both}):return g.Both;case m.some(function(_){return _===g.EntitiesOnly}):return g.EntitiesOnly;default:return g.None}}),addMany:Z(N),updateMany:Z(it),upsertMany:Z(y),map:Z(function(h,f){return it(f.ids.reduce(function(_,w){var I=h(f.entities[w]);return I!==f.entities[w]&&_.push({id:w,changes:I}),_},[]),f)}),mapOne:Z(function(h,f){var _=h.id,w=f.entities[_];return w?Q({id:_,changes:(0,h.map)(w)},f):g.None})}}(0,b.PH)("[Contacts] Load SpreadSheet");var Ft=(0,b.PH)("[Contacts] Load",(0,b.Ky)()),kt=(0,b.PH)("[Contacts] Create",(0,b.Ky)()),Dt=(0,b.PH)("[Contacts] Update",(0,b.Ky)()),Nt=(0,b.PH)("[Contacts] Remove",(0,b.Ky)()),It=((0,b.PH)("[Contacts] Load all success",(0,b.Ky)()),(0,b.PH)("[Contacts] Load success",(0,b.Ky)())),Ut=(0,b.PH)("[Contacts] Create success",(0,b.Ky)()),ht=(0,b.PH)("[Contacts] Update success",(0,b.Ky)()),Bt=(0,b.PH)("[Contacts] Remove success",(0,b.Ky)()),H=((0,b.PH)("[Contacts] Failure",(0,b.Ky)()),function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=Object.assign({sortComparer:!1,selectId:function(X){return X.id}},i),u=c.selectId,p=c.sortComparer,O=dt(),A=ft(),M=p?V(u,p):pt(u);return Object.assign(Object.assign(Object.assign({selectId:u,sortComparer:p},O),A),M)}({selectId:function(i){return i.id},sortComparer:!1})),K=H.getInitialState({}),vt=(0,b.Lq)(K,(0,b.on)(It,function(i,c){return H.upsertOne(c.contact,i)}),(0,b.on)(Ut,function(i,c){return H.addOne(c.contact,i)}),(0,b.on)(ht,function(i,c){var u=c.contact;return H.updateOne({id:u.id,changes:u},i)}),(0,b.on)(Bt,function(i,c){return H.removeOne(c.id,i)}));function yt(i,c){return(0,b.UY)({contacts:vt})(i,c)}var mt=(0,b.ZF)("contacts"),gt=(0,b.P1)(mt,function(i){return i.contacts}),Pt=H.getSelectors(gt).selectAll,R=function(){function i(c){this.store=c,this.contacts$=this.store.pipe((0,b.Ys)(Pt))}return i.prototype.loadContact=function(c){this.store.dispatch(Ft({id:c}))},i.prototype.createContact=function(c){this.store.dispatch(kt({contact:c}))},i.prototype.updateContact=function(c){this.store.dispatch(Dt({contact:c}))},i.prototype.deleteContact=function(c){this.store.dispatch(Nt({id:c}))},i.prototype.getContactById=function(c){return this.store.pipe((0,b.Ys)(function(i){return(0,b.P1)(gt,function(i){return function(c){return c.entities[i]}}(i))}(c)))},i.\u0275fac=function(u){return new(u||i)(e.LFG(b.yh))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i}(),bt=E(64762),L=E(31041),J=function(){function i(c){this.formBuilder=c,this.contact={id:void 0,name:"",email:"",phone:""},this.save=new e.vpe,this.form=this.formBuilder.group({id:[this.contact.id],name:[this.contact.name,L.kI.required],email:[this.contact.email,L.kI.required],phone:[this.contact.phone]})}return i.prototype.ngOnInit=function(){},i.prototype.ngOnChanges=function(){this.contact&&this.form.patchValue((0,bt.pi)({},this.contact))},i.prototype.submit=function(){this.form.valid&&this.save.emit(this.form.value)},i.\u0275fac=function(u){return new(u||i)(e.Y36(L.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-contact-form"]],inputs:{contact:"contact"},outputs:{save:"save"},features:[e.TTD],decls:16,vars:2,consts:[[1,"form",3,"formGroup","submit"],[1,"form-group"],["for","name-input"],["id","name-input","type","text","formControlName","name",1,"form-control"],["for","email-input"],["id","email-input","type","email","formControlName","email",1,"form-control"],["for","phone-input"],["id","phone-input","type","tel","formControlName","phone",1,"form-control"],["type","submit",1,"btn","btn-success","float-right",3,"disabled"]],template:function(u,p){1&u&&(e.TgZ(0,"form",0),e.NdJ("submit",function(){return p.submit()}),e.TgZ(1,"div",1),e.TgZ(2,"label",2),e._uU(3,"Name:"),e.qZA(),e._UZ(4,"input",3),e.qZA(),e.TgZ(5,"div",1),e.TgZ(6,"label",4),e._uU(7,"Email:"),e.qZA(),e._UZ(8,"input",5),e.qZA(),e.TgZ(9,"div",1),e.TgZ(10,"label",6),e._uU(11,"Phone:"),e.qZA(),e._UZ(12,"input",7),e.qZA(),e.TgZ(13,"div",1),e.TgZ(14,"button",8),e._uU(15," Submit "),e.qZA(),e.qZA(),e.qZA()),2&u&&(e.Q6J("formGroup",p.form),e.xp6(14),e.Q6J("disabled",!p.form.valid))},directives:[L._Y,L.JL,L.sg,L.Fj,L.JJ,L.u],styles:[".form[_ngcontent-%COMP%]{-webkit-animation:fadeIn .6s;animation:fadeIn .6s}"],changeDetection:0}),i}(),U=function(){function i(c,u){this.contactsFacade=c,this.router=u}return i.prototype.ngOnInit=function(){},i.prototype.ngOnDestroy=function(){},i.prototype.submitted=function(c){this.contactsFacade.createContact(c),this.router.navigate(["/contacts"])},i.\u0275fac=function(u){return new(u||i)(e.Y36(R),e.Y36(F.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-contact-new"]],decls:5,vars:0,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"save"]],template:function(u,p){1&u&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._uU(2," New Contact "),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"app-contact-form",3),e.NdJ("save",function(A){return p.submitted(A)}),e.qZA(),e.qZA(),e.qZA())},directives:[J],styles:[""],changeDetection:0}),i}(),ct=E(79996),Ct=E(44689),nt=E(23395),rt=E(42693),G=E(529),xt=function(){function i(c){this.http=c}return i.prototype.getSpreadsheet=function(){var c=new rt.LE;return c=c.append("ranges","Data!A2:A50"),this.http.get(G.N.appApi.baseUrl+G.N.spreadsheetId+"/values:batchGet",{params:c})},i.\u0275fac=function(u){return new(u||i)(e.LFG(rt.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i}(),_t=function(i){function c(){return i.call(this,{url:G.N.socketConfig.url+"/contacts",options:G.N.socketConfig.opts})||this}return(0,bt.ZT)(c,i),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac=function(p){return new(p||c)}}),c}(E(36212).sk),s=function(){function i(c,u,p){this.actions$=c,this.contactsService=u,this.contactsSocket=p}return i.\u0275fac=function(u){return new(u||i)(e.LFG(nt.eX),e.LFG(xt),e.LFG(_t))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i}();function t(i,c){if(1&i){var u=e.EpF();e.TgZ(0,"div",1),e.TgZ(1,"div",2),e.TgZ(2,"div",3),e._uU(3," Contact "),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"p"),e._uU(6,"Name: "),e.TgZ(7,"span",5),e._uU(8),e.qZA(),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Email: "),e.TgZ(11,"span",5),e._uU(12),e.qZA(),e.qZA(),e.TgZ(13,"p"),e._uU(14,"Phone: "),e.TgZ(15,"span",5),e._uU(16),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",6),e.TgZ(18,"span",7),e.TgZ(19,"button",8),e.NdJ("click",function(){e.CHM(u);var A=e.oxw();return A.edit.emit(A.contact)}),e._uU(20," EDIT"),e.qZA(),e.TgZ(21,"button",9),e.NdJ("click",function(){e.CHM(u);var A=e.oxw();return A.remove.emit(A.contact)}),e._uU(22," DELETE"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){var p=e.oxw();e.xp6(8),e.Oqu(p.contact.name),e.xp6(4),e.Oqu(p.contact.email),e.xp6(4),e.Oqu(p.contact.phone)}}var r=function(){function i(){this.edit=new e.vpe,this.remove=new e.vpe}return i.prototype.ngOnInit=function(){},i.\u0275fac=function(u){return new(u||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-contact-details-container"]],inputs:{contact:"contact"},outputs:{edit:"edit",remove:"remove"},decls:1,vars:1,consts:[["class","contact-details-container",4,"ngIf"],[1,"contact-details-container"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"badge","badge-primary"],[1,"card-footer","text-muted"],[1,"float-md-right"],[1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"btn","btn-sm","btn-outline-danger",3,"click"]],template:function(u,p){1&u&&e.YNc(0,t,23,3,"div",0),2&u&&e.Q6J("ngIf",p.contact)},directives:[Y.O5],styles:[".contact-details-container[_ngcontent-%COMP%]{-webkit-animation:fadeIn .6s;animation:fadeIn .6s}"],changeDetection:0}),i}(),n=function(){function i(c,u,p,O){var A=this;this.activatedRoute=c,this.router=u,this.contactsFacade=p,this.contactsEffects=O,this.contact$=this.activatedRoute.params.pipe((0,ct.U)(function(M){return M.contactId}),(0,Ct.w)(function(M){return A.contactsFacade.getContactById(M)}))}return i.prototype.ngOnInit=function(){var c=this;this.activatedRoute.params.subscribe(function(u){c.contactsFacade.loadContact(+u.contactId)})},i.prototype.editContact=function(c){this.router.navigate(["/contacts",c.id,"edit"])},i.prototype.deleteContact=function(c){confirm("Are you sure?")&&this.contactsFacade.deleteContact(c.id)},i.prototype.ngOnDestroy=function(){this.redirectSub.unsubscribe()},i.\u0275fac=function(u){return new(u||i)(e.Y36(F.gz),e.Y36(F.F0),e.Y36(R),e.Y36(s))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-contact-details"]],decls:2,vars:3,consts:[[3,"contact","edit","remove"]],template:function(u,p){1&u&&(e.TgZ(0,"app-contact-details-container",0),e.NdJ("edit",function(A){return p.editContact(A)})("remove",function(A){return p.deleteContact(A)}),e.ALo(1,"async"),e.qZA()),2&u&&e.Q6J("contact",e.lcZ(1,1,p.contact$))},directives:[r],pipes:[Y.Ov],styles:[""],changeDetection:0}),i}(),a=function(){function i(c,u,p,O){var A=this;this.activatedRoute=c,this.router=u,this.contactsFacade=p,this.contactsEffects=O,this.contact$=this.activatedRoute.params.pipe((0,ct.U)(function(M){return M.contactId}),(0,Ct.w)(function(M){return A.contactsFacade.getContactById(M)}))}return i.prototype.ngOnInit=function(){var c=this;this.activatedRoute.params.subscribe(function(u){c.contactsFacade.loadContact(+u.contactId)})},i.prototype.ngOnDestroy=function(){this.redirectSub.unsubscribe()},i.prototype.submitted=function(c){this.contactsFacade.updateContact(c)},i.\u0275fac=function(u){return new(u||i)(e.Y36(F.gz),e.Y36(F.F0),e.Y36(R),e.Y36(s))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-contact-edit"]],decls:6,vars:3,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"contact","save"]],template:function(u,p){1&u&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._uU(2," Edit Contact "),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"app-contact-form",3),e.NdJ("save",function(A){return p.submitted(A)}),e.ALo(5,"async"),e.qZA(),e.qZA(),e.qZA()),2&u&&(e.xp6(4),e.Q6J("contact",e.lcZ(5,1,p.contact$)))},directives:[J],pipes:[Y.Ov],styles:[""],changeDetection:0}),i}(),o=E(40878),l=E(10534),d=function(){function i(c){this.store=c}return i.prototype.resolve=function(c,u){return this.store.dispatch((0,l.u)({payload:c.data.title})),(0,o.of)(c.data.title)},i.\u0275fac=function(u){return new(u||i)(e.LFG(b.yh))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i}(),v=E(77125),C=function(){function i(c){this.http=c}return i.prototype.getSpreadsheet=function(c){var u=new rt.LE;return c.forEach(function(p){u=u.append("ranges",p)}),this.http.get(G.N.appApi.baseUrl+G.N.spreadsheetId+"/values:batchGet",{params:u})},i.\u0275fac=function(u){return new(u||i)(e.LFG(rt.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i}(),S=E(50111);function k(i,c){if(1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h6",2),e._uU(3,"This month you spent:"),e.qZA(),e.TgZ(4,"h5",3),e._uU(5),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"div"),e.TgZ(8,"div",4),e._UZ(9,"canvas",9),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){var u=e.oxw();e.xp6(5),e.Oqu(u.spreadSheetDataObj.currentMonthTotalSpending),e.xp6(4),e.Q6J("data",u.polarAreaChartData)("labels",u.polarAreaChartLabels)("legend",u.polarAreaLegend)("chartType",u.polarAreaChartType)}}var at=[{path:"",component:lt,children:[{path:"",component:function(){function i(c,u,p,O){this.contactsFacade=c,this.router=u,this.spreadSheetService=p,this.changeDetection=O,this.barChartOptions={responsive:!0,scales:{xAxes:[{}],yAxes:[{}]},plugins:{datalabels:{anchor:"end",align:"end"}}},this.barChartLabels=["2006","2007","2008","2009","2010","2011","2012"],this.barChartType="bar",this.barChartLegend=!0,this.barChartPlugins=[v],this.barChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"}],this.pieChartOptions={responsive:!0,legend:{position:"top"},plugins:{datalabels:{formatter:function(A,M){return M.chart.data.labels[M.dataIndex]}}}},this.pieChartLabels=[["Download","Sales"],["In","Store","Sales"],"Mail Sales"],this.pieChartData=[300,500,100],this.pieChartType="pie",this.pieChartLegend=!0,this.pieChartPlugins=[v],this.pieChartColors=[{backgroundColor:["rgba(255,0,0,0.3)","rgba(0,255,0,0.3)","rgba(0,0,255,0.3)"]}],this.doughnutChartLabels=["Download Sales","In-Store Sales","Mail-Order Sales"],this.doughnutChartData=[[350,450,100],[50,150,120],[250,130,70]],this.doughnutChartType="doughnut",this.contacts$=this.contactsFacade.contacts$,this.spreadSheetDataObj={},this.polarAreaChartLabels=[],this.polarAreaChartData=[],this.polarAreaLegend=!0,this.polarAreaChartType="polarArea"}return i.prototype.ngOnInit=function(){var c=this;this.spreadSheetService.getSpreadsheet(["Current!H1","Current!A2:E"]).subscribe(function(p){c.spreadSheetDataObj.currentMonthTotalSpending=p.valueRanges[0].values[0][0],c.spreadSheetDataObj.currentMonthSpendingList=p.valueRanges[1].values,c.buildPolarChartData(c.spreadSheetDataObj.currentMonthSpendingList)})},i.prototype.buildPolarChartData=function(c){var u={};c.forEach(function(p){var O=p[3],A=parseFloat(p[4].replace("\u20b9","").replace(/,/g,""));u[O]=u[O]?u[O]+A:A}),this.polarAreaChartLabels=Object.keys(u),this.polarAreaChartData=Object.values(u),this.changeDetection.detectChanges()},i.prototype.editContact=function(c){this.router.navigate(["/contacts",c.id,"edit"])},i.prototype.showContact=function(c){this.router.navigate(["/contacts",c.id])},i.prototype.deleteContact=function(c){confirm("Are you sure?")&&this.contactsFacade.deleteContact(c.id)},i.\u0275fac=function(u){return new(u||i)(e.Y36(R),e.Y36(F.F0),e.Y36(C),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],decls:20,vars:16,consts:[[1,"card","text-center"],[1,"card-body"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-title"],[2,"display","block"],["baseChart","",3,"datasets","labels","options","plugins","legend","chartType"],["class","card text-center",4,"ngIf"],[1,"chart"],["baseChart","",3,"data","labels","chartType","options","plugins","colors","legend"],["baseChart","",3,"data","labels","legend","chartType"]],template:function(u,p){1&u&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h6",2),e._uU(3,"Year Spending:"),e.qZA(),e.TgZ(4,"h5",3),e._uU(5),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"div"),e.TgZ(8,"div",4),e._UZ(9,"canvas",5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(10,k,10,5,"div",6),e.TgZ(11,"div",0),e.TgZ(12,"div",1),e.TgZ(13,"h6",2),e._uU(14,"Utility Spending:"),e.qZA(),e.TgZ(15,"h5",3),e._uU(16),e.qZA(),e.TgZ(17,"div"),e.TgZ(18,"div",7),e._UZ(19,"canvas",8),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&u&&(e.xp6(5),e.Oqu(p.spreadSheetDataObj.currentMonthTotalSpending),e.xp6(4),e.Q6J("datasets",p.barChartData)("labels",p.barChartLabels)("options",p.barChartOptions)("plugins",p.barChartPlugins)("legend",p.barChartLegend)("chartType",p.barChartType),e.xp6(1),e.Q6J("ngIf",p.spreadSheetDataObj.currentMonthTotalSpending),e.xp6(6),e.Oqu(p.spreadSheetDataObj.currentMonthTotalSpending),e.xp6(3),e.Q6J("data",p.pieChartData)("labels",p.pieChartLabels)("chartType",p.pieChartType)("options",p.pieChartOptions)("plugins",p.pieChartPlugins)("colors",p.pieChartColors)("legend",p.pieChartLegend))},directives:[S.jh,Y.O5],styles:[".card-title[_ngcontent-%COMP%]{margin:.5em 0;font-size:200%;color:#119fd6}.card-subtitle[_ngcontent-%COMP%], .card-text[_ngcontent-%COMP%]{text-align:left;text-align:initial;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;color:#7a7a7a}.card[_ngcontent-%COMP%]{margin-bottom:30px}.example-button-container[_ngcontent-%COMP%]{right:30px;bottom:30px;position:absolute}"]}),i}(),data:{title:"Home"},resolve:{title:d}},{path:"new",component:U,data:{title:"New contact"},resolve:{title:d}},{path:":contactId",component:n,data:{title:"Contact details"},resolve:{title:d}},{path:":contactId/edit",component:a,data:{title:"Edit contact"},resolve:{title:d}}]}],St=function(){function i(){}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[F.Bz.forChild(at)],F.Bz]}),i}(),At=function(){function i(){}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[xt,_t,R,C],imports:[[Y.ez,ot.m,St,b.Aw.forFeature("contacts",yt),nt.sQ.forFeature([s]),S.m9]]}),i}()}}]);