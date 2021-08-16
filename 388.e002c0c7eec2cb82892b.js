"use strict";(self.webpackChunkExpenses=self.webpackChunkExpenses||[]).push([[388],{5388:function(Ht,J,y){y.r(J),y.d(J,{ContactsModule:function(){return Yt}});var U=y(1116),nt=y(4083),b=y(992),t=y(91),et=function(){function n(){}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contacts"]],decls:1,vars:0,template:function(o,s){1&o&&t._UZ(0,"router-outlet")},directives:[b.lC],encapsulation:2,changeDetection:0}),n}(),Y=y(6054),ot=y(1558),d=y(1671);function at(){return{getInitialState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({ids:[],entities:{}},e)}}}function rt(){return{getSelectors:function(e){var o=function(T){return T.ids},s=function(T){return T.entities},v=(0,d.P1)(o,s,function(C,T){return C.map(function(F){return T[F]})}),f=(0,d.P1)(o,function(C){return C.length});return e?{selectIds:(0,d.P1)(e,o),selectEntities:(0,d.P1)(e,s),selectAll:(0,d.P1)(e,v),selectTotal:(0,d.P1)(e,f)}:{selectIds:o,selectEntities:s,selectAll:v,selectTotal:f}}}}var u=function(n){return n[n.EntitiesOnly=0]="EntitiesOnly",n[n.Both=1]="Both",n[n.None=2]="None",n}({});function h(n){return function(o,s){var v={ids:(0,ot.Z)(s.ids),entities:Object.assign({},s.entities)},f=n(o,v);return f===u.Both?Object.assign({},s,v):f===u.EntitiesOnly?Object.assign(Object.assign({},s),{entities:v.entities}):s}}function O(n,e){var o=e(n);return(0,t.X6Q)()&&void 0===o&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",n,"The `selectId` implementation:",e.toString()),o}function K(n){function e(l,r){var m=O(l,n);return m in r.entities?u.None:(r.ids.push(m),r.entities[m]=l,u.Both)}function o(l,r){var i,m=!1,a=(0,Y.Z)(l);try{for(a.s();!(i=a.n()).done;)m=e(i.value,r)!==u.None||m}catch(p){a.e(p)}finally{a.f()}return m?u.Both:u.None}function v(l,r){var m=O(l,n);return m in r.entities?(r.entities[m]=l,u.EntitiesOnly):(r.ids.push(m),r.entities[m]=l,u.Both)}function T(l,r){var a=(l instanceof Array?l:r.ids.filter(function(i){return l(r.entities[i])})).filter(function(i){return i in r.entities}).map(function(i){return delete r.entities[i]}).length>0;return a&&(r.ids=r.ids.filter(function(i){return i in r.entities})),a?u.Both:u.None}function x(l,r){return q([l],r)}function q(l,r){var m={};return(l=l.filter(function(c){return c.id in r.entities})).length>0?l.filter(function(c){return function(l,r,m){var i=Object.assign({},m.entities[r.id],r.changes),c=O(i,n),p=c!==r.id;return p&&(l[r.id]=c,delete m.entities[r.id]),m.entities[c]=i,p}(m,c,r)}).length>0?(r.ids=r.ids.map(function(c){return m[c]||c}),u.Both):u.EntitiesOnly:u.None}function P(l,r){var c,m=[],a=[],i=(0,Y.Z)(l);try{for(i.s();!(c=i.n()).done;){var p=c.value,g=O(p,n);g in r.entities?a.push({id:g,changes:p}):m.push(p)}}catch(_){i.e(_)}finally{i.f()}var Z=q(a,r),A=o(m,r);switch(!0){case A===u.None&&Z===u.None:return u.None;case A===u.Both||Z===u.Both:return u.Both;default:return u.EntitiesOnly}}return{removeAll:function(l){return Object.assign({},l,{ids:[],entities:{}})},addOne:h(e),addMany:h(o),setAll:h(function(l,r){return r.ids=[],r.entities={},o(l,r),u.Both}),setOne:h(v),setMany:h(function(l,r){var m=l.map(function(a){return v(a,r)});switch(!0){case m.some(function(a){return a===u.Both}):return u.Both;case m.some(function(a){return a===u.EntitiesOnly}):return u.EntitiesOnly;default:return u.None}}),updateOne:h(x),updateMany:h(q),upsertOne:h(function(l,r){return P([l],r)}),upsertMany:h(P),removeOne:h(function(l,r){return T([l],r)}),removeMany:h(T),map:h(function(l,r){return q(r.ids.reduce(function(i,c){var p=l(r.entities[c]);return p!==r.entities[c]&&i.push({id:c,changes:p}),i},[]).filter(function(i){return i.id in r.entities}),r)}),mapOne:h(function(l,r){var a=l.id,i=r.entities[a];return i?x({id:a,changes:(0,l.map)(i)},r):u.None})}}function ct(n,e){var o=K(n);function C(a,i){return T([a],i)}function T(a,i){var c=a.filter(function(p){return!(O(p,n)in i.entities)});return 0===c.length?u.None:(m(c,i),u.Both)}function I(a,i){var c=O(a,n);return c in i.entities?(i.ids=i.ids.filter(function(p){return p!==c}),m([a],i),u.Both):C(a,i)}function q(a,i){return E([a],i)}function E(a,i){var c=[],p=a.filter(function(A){return function(a,i,c){if(!(i.id in c.entities))return!1;var g=Object.assign({},c.entities[i.id],i.changes),Z=O(g,n);return delete c.entities[i.id],a.push(g),Z!==i.id}(c,A,i)}).length>0;if(0===c.length)return u.None;var g=i.ids,Z=[];return i.ids=i.ids.filter(function(A,_){return A in i.entities||(Z.push(_),!1)}),m(c,i),!p&&Z.every(function(A){return i.ids[A]===g[A]})?u.EntitiesOnly:u.Both}function r(a,i){var Z,c=[],p=[],g=(0,Y.Z)(a);try{for(g.s();!(Z=g.n()).done;){var A=Z.value,_=O(A,n);_ in i.entities?p.push({id:_,changes:A}):c.push(A)}}catch(tt){g.e(tt)}finally{g.f()}var D=E(p,i),S=T(c,i);switch(!0){case S===u.None&&D===u.None:return u.None;case S===u.Both||D===u.Both:return u.Both;default:return u.EntitiesOnly}}function m(a,i){a.sort(e);for(var c=[],p=0,g=0;p<a.length&&g<i.ids.length;){var Z=a[p],A=O(Z,n),_=i.ids[g];e(Z,i.entities[_])<=0?(c.push(A),p++):(c.push(_),g++)}i.ids=c.concat(p<a.length?a.slice(p).map(n):i.ids.slice(g)),a.forEach(function(S,tt){i.entities[n(S)]=S})}return{removeOne:o.removeOne,removeMany:o.removeMany,removeAll:o.removeAll,addOne:h(C),updateOne:h(q),upsertOne:h(function(a,i){return r([a],i)}),setAll:h(function(a,i){return i.entities={},i.ids=[],T(a,i),u.Both}),setOne:h(I),setMany:h(function(a,i){var c=a.map(function(p){return I(p,i)});switch(!0){case c.some(function(p){return p===u.Both}):return u.Both;case c.some(function(p){return p===u.EntitiesOnly}):return u.EntitiesOnly;default:return u.None}}),addMany:h(T),updateMany:h(E),upsertMany:h(r),map:h(function(a,i){return E(i.ids.reduce(function(p,g){var Z=a(i.entities[g]);return Z!==i.entities[g]&&p.push({id:g,changes:Z}),p},[]),i)}),mapOne:h(function(a,i){var p=a.id,g=i.entities[p];return g?q({id:p,changes:(0,a.map)(g)},i):u.None})}}(0,d.PH)("[Contacts] Load all");var ut=(0,d.PH)("[Contacts] Load",(0,d.Ky)()),dt=(0,d.PH)("[Contacts] Create",(0,d.Ky)()),lt=(0,d.PH)("[Contacts] Update",(0,d.Ky)()),pt=(0,d.PH)("[Contacts] Remove",(0,d.Ky)()),ft=((0,d.PH)("[Contacts] Load all success",(0,d.Ky)()),(0,d.PH)("[Contacts] Load success",(0,d.Ky)())),mt=(0,d.PH)("[Contacts] Create success",(0,d.Ky)()),vt=(0,d.PH)("[Contacts] Update success",(0,d.Ky)()),ht=(0,d.PH)("[Contacts] Remove success",(0,d.Ky)()),w=((0,d.PH)("[Contacts] Failure",(0,d.Ky)()),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({sortComparer:!1,selectId:function(F){return F.id}},n),o=e.selectId,s=e.sortComparer,v=at(),f=rt(),C=s?ct(o,s):K(o);return Object.assign(Object.assign(Object.assign({selectId:o,sortComparer:s},v),f),C)}({selectId:function(n){return n.id},sortComparer:!1})),gt=w.getInitialState({}),yt=(0,d.Lq)(gt,(0,d.on)(ft,function(n,e){return w.upsertOne(e.contact,n)}),(0,d.on)(mt,function(n,e){return w.addOne(e.contact,n)}),(0,d.on)(vt,function(n,e){var o=e.contact;return w.updateOne({id:o.id,changes:o},n)}),(0,d.on)(ht,function(n,e){return w.removeOne(e.id,n)}));function Zt(n,e){return(0,d.UY)({contacts:yt})(n,e)}var At=(0,d.ZF)("contacts"),R=(0,d.P1)(At,function(n){return n.contacts}),Tt=w.getSelectors(R).selectAll,N=function(){function n(e){this.store=e,this.contacts$=this.store.pipe((0,d.Ys)(Tt))}return n.prototype.loadContact=function(e){this.store.dispatch(ut({id:e}))},n.prototype.createContact=function(e){this.store.dispatch(dt({contact:e}))},n.prototype.updateContact=function(e){this.store.dispatch(lt({contact:e}))},n.prototype.deleteContact=function(e){this.store.dispatch(pt({id:e}))},n.prototype.getContactById=function(e){return this.store.pipe((0,d.Ys)(function(n){return(0,d.P1)(R,function(n){return function(e){return e.entities[n]}}(n))}(e)))},n.\u0275fac=function(o){return new(o||n)(t.LFG(d.yh))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n}(),k=y(4762),M=y(1041),z=function(){function n(e){this.formBuilder=e,this.contact={id:void 0,name:"",email:"",phone:""},this.save=new t.vpe,this.form=this.formBuilder.group({id:[this.contact.id],name:[this.contact.name,M.kI.required],email:[this.contact.email,M.kI.required],phone:[this.contact.phone]})}return n.prototype.ngOnInit=function(){},n.prototype.ngOnChanges=function(){this.contact&&this.form.patchValue((0,k.pi)({},this.contact))},n.prototype.submit=function(){this.form.valid&&this.save.emit(this.form.value)},n.\u0275fac=function(o){return new(o||n)(t.Y36(M.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-form"]],inputs:{contact:"contact"},outputs:{save:"save"},features:[t.TTD],decls:16,vars:2,consts:[[1,"form",3,"formGroup","submit"],[1,"form-group"],["for","name-input"],["id","name-input","type","text","formControlName","name",1,"form-control"],["for","email-input"],["id","email-input","type","email","formControlName","email",1,"form-control"],["for","phone-input"],["id","phone-input","type","tel","formControlName","phone",1,"form-control"],["type","submit",1,"btn","btn-success","float-right",3,"disabled"]],template:function(o,s){1&o&&(t.TgZ(0,"form",0),t.NdJ("submit",function(){return s.submit()}),t.TgZ(1,"div",1),t.TgZ(2,"label",2),t._uU(3,"Name:"),t.qZA(),t._UZ(4,"input",3),t.qZA(),t.TgZ(5,"div",1),t.TgZ(6,"label",4),t._uU(7,"Email:"),t.qZA(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",1),t.TgZ(10,"label",6),t._uU(11,"Phone:"),t.qZA(),t._UZ(12,"input",7),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"button",8),t._uU(15," Submit "),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.Q6J("formGroup",s.form),t.xp6(14),t.Q6J("disabled",!s.form.valid))},directives:[M._Y,M.JL,M.sg,M.Fj,M.JJ,M.u],styles:[".form[_ngcontent-%COMP%]{-webkit-animation:fadeIn .6s;animation:fadeIn .6s}"],changeDetection:0}),n}(),Ot=function(){function n(e,o){this.contactsFacade=e,this.router=o}return n.prototype.ngOnInit=function(){},n.prototype.ngOnDestroy=function(){},n.prototype.submitted=function(e){this.contactsFacade.createContact(e),this.router.navigate(["/contacts"])},n.\u0275fac=function(o){return new(o||n)(t.Y36(N),t.Y36(b.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-new"]],decls:5,vars:0,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"save"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2," New Contact "),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"app-contact-form",3),t.NdJ("save",function(f){return s.submitted(f)}),t.qZA(),t.qZA(),t.qZA())},directives:[z],styles:[""],changeDetection:0}),n}(),X=y(9996),$=y(4689),G=y(3395),Mt=y(2693),Q=function(){function n(e){this.http=e}return n.\u0275fac=function(o){return new(o||n)(t.LFG(Mt.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n}(),_t=y(6212),V=y(529),W=function(n){function e(){return n.call(this,{url:V.N.socketConfig.url+"/contacts",options:V.N.socketConfig.opts})||this}return(0,k.ZT)(e,n),e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac=function(s){return new(s||e)}}),e}(_t.sk),H=function(){function n(e,o,s){this.actions$=e,this.contactsService=o,this.contactsSocket=s}return n.\u0275fac=function(o){return new(o||n)(t.LFG(G.eX),t.LFG(Q),t.LFG(W))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n}();function Ft(n,e){if(1&n){var o=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._uU(3," Contact "),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"p"),t._uU(6,"Name: "),t.TgZ(7,"span",5),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Email: "),t.TgZ(11,"span",5),t._uU(12),t.qZA(),t.qZA(),t.TgZ(13,"p"),t._uU(14,"Phone: "),t.TgZ(15,"span",5),t._uU(16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",6),t.TgZ(18,"span",7),t.TgZ(19,"button",8),t.NdJ("click",function(){t.CHM(o);var f=t.oxw();return f.edit.emit(f.contact)}),t._uU(20," EDIT"),t.qZA(),t.TgZ(21,"button",9),t.NdJ("click",function(){t.CHM(o);var f=t.oxw();return f.remove.emit(f.contact)}),t._uU(22," DELETE"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){var s=t.oxw();t.xp6(8),t.Oqu(s.contact.name),t.xp6(4),t.Oqu(s.contact.email),t.xp6(4),t.Oqu(s.contact.phone)}}var qt=function(){function n(){this.edit=new t.vpe,this.remove=new t.vpe}return n.prototype.ngOnInit=function(){},n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-details-container"]],inputs:{contact:"contact"},outputs:{edit:"edit",remove:"remove"},decls:1,vars:1,consts:[["class","contact-details-container",4,"ngIf"],[1,"contact-details-container"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"badge","badge-primary"],[1,"card-footer","text-muted"],[1,"float-md-right"],[1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"btn","btn-sm","btn-outline-danger",3,"click"]],template:function(o,s){1&o&&t.YNc(0,Ft,23,3,"div",0),2&o&&t.Q6J("ngIf",s.contact)},directives:[U.O5],styles:[".contact-details-container[_ngcontent-%COMP%]{-webkit-animation:fadeIn .6s;animation:fadeIn .6s}"],changeDetection:0}),n}(),wt=function(){function n(e,o,s,v){var f=this;this.activatedRoute=e,this.router=o,this.contactsFacade=s,this.contactsEffects=v,this.contact$=this.activatedRoute.params.pipe((0,X.U)(function(C){return C.contactId}),(0,$.w)(function(C){return f.contactsFacade.getContactById(C)}))}return n.prototype.ngOnInit=function(){var e=this;this.activatedRoute.params.subscribe(function(o){e.contactsFacade.loadContact(+o.contactId)})},n.prototype.editContact=function(e){this.router.navigate(["/contacts",e.id,"edit"])},n.prototype.deleteContact=function(e){confirm("Are you sure?")&&this.contactsFacade.deleteContact(e.id)},n.prototype.ngOnDestroy=function(){this.redirectSub.unsubscribe()},n.\u0275fac=function(o){return new(o||n)(t.Y36(b.gz),t.Y36(b.F0),t.Y36(N),t.Y36(H))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-details"]],decls:2,vars:3,consts:[[3,"contact","edit","remove"]],template:function(o,s){1&o&&(t.TgZ(0,"app-contact-details-container",0),t.NdJ("edit",function(f){return s.editContact(f)})("remove",function(f){return s.deleteContact(f)}),t.ALo(1,"async"),t.qZA()),2&o&&t.Q6J("contact",t.lcZ(1,1,s.contact$))},directives:[qt],pipes:[U.Ov],styles:[""],changeDetection:0}),n}(),Et=function(){function n(e,o,s,v){var f=this;this.activatedRoute=e,this.router=o,this.contactsFacade=s,this.contactsEffects=v,this.contact$=this.activatedRoute.params.pipe((0,X.U)(function(C){return C.contactId}),(0,$.w)(function(C){return f.contactsFacade.getContactById(C)}))}return n.prototype.ngOnInit=function(){var e=this;this.activatedRoute.params.subscribe(function(o){e.contactsFacade.loadContact(+o.contactId)})},n.prototype.ngOnDestroy=function(){this.redirectSub.unsubscribe()},n.prototype.submitted=function(e){this.contactsFacade.updateContact(e)},n.\u0275fac=function(o){return new(o||n)(t.Y36(b.gz),t.Y36(b.F0),t.Y36(N),t.Y36(H))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-edit"]],decls:6,vars:3,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"contact","save"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2," Edit Contact "),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"app-contact-form",3),t.NdJ("save",function(f){return s.submitted(f)}),t.ALo(5,"async"),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Q6J("contact",t.lcZ(5,1,s.contact$)))},directives:[z],pipes:[U.Ov],styles:[""],changeDetection:0}),n}(),Ut=y(878),Nt=y(534),B=function(){function n(e){this.store=e}return n.prototype.resolve=function(e,o){return this.store.dispatch((0,Nt.u)({payload:e.data.title})),(0,Ut.of)(e.data.title)},n.\u0275fac=function(o){return new(o||n)(t.LFG(d.yh))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n}(),St=function(){function n(){this.edit=new t.vpe,this.show=new t.vpe,this.remove=new t.vpe,this.contactsTrackByFn=function(e,o){return o.id}}return n.prototype.ngOnInit=function(){},n.prototype.showDetails=function(e){this.show.emit(e)},n.prototype.editContact=function(e){this.edit.emit(e)},n.prototype.deleteContact=function(e){this.remove.emit(e)},n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-expenses-list"]],inputs:{contacts:"contacts"},outputs:{edit:"edit",show:"show",remove:"remove"},decls:31,vars:0,consts:[[1,"list-group"],["href","#","aria-current","true",1,"list-group-item","list-group-item-action"],[1,"d-flex","w-100","justify-content-between"],[1,"mb-1"],["href","#",1,"list-group-item","list-group-item-action"],[1,"text-muted"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"a",1),t.TgZ(2,"div",2),t.TgZ(3,"h5",3),t._uU(4,"List group item heading"),t.qZA(),t.TgZ(5,"small"),t._uU(6,"3 days ago"),t.qZA(),t.qZA(),t.TgZ(7,"p",3),t._uU(8,"Some placeholder content in a paragraph."),t.qZA(),t.TgZ(9,"small"),t._uU(10,"And some small print."),t.qZA(),t.qZA(),t.TgZ(11,"a",4),t.TgZ(12,"div",2),t.TgZ(13,"h5",3),t._uU(14,"List group item heading"),t.qZA(),t.TgZ(15,"small",5),t._uU(16,"3 days ago"),t.qZA(),t.qZA(),t.TgZ(17,"p",3),t._uU(18,"Some placeholder content in a paragraph."),t.qZA(),t.TgZ(19,"small",5),t._uU(20,"And some muted small print."),t.qZA(),t.qZA(),t.TgZ(21,"a",4),t.TgZ(22,"div",2),t.TgZ(23,"h5",3),t._uU(24,"List group item heading"),t.qZA(),t.TgZ(25,"small",5),t._uU(26,"3 days ago"),t.qZA(),t.qZA(),t.TgZ(27,"p",3),t._uU(28,"Some placeholder content in a paragraph."),t.qZA(),t.TgZ(29,"small",5),t._uU(30,"And some muted small print."),t.qZA(),t.qZA(),t.qZA())},styles:[".contact-row[_ngcontent-%COMP%]{-webkit-animation:fadeIn .6s;animation:fadeIn .6s}.header[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),n}(),Bt=y(4369),It=y(7307),Pt=[{path:"",component:et,children:[{path:"",component:function(){function n(e,o){this.contactsFacade=e,this.router=o,this.contacts$=this.contactsFacade.contacts$}return n.prototype.ngOnInit=function(){},n.prototype.editContact=function(e){this.router.navigate(["/contacts",e.id,"edit"])},n.prototype.showContact=function(e){this.router.navigate(["/contacts",e.id])},n.prototype.deleteContact=function(e){confirm("Are you sure?")&&this.contactsFacade.deleteContact(e.id)},n.\u0275fac=function(o){return new(o||n)(t.Y36(N),t.Y36(b.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:26,vars:3,consts:[[1,"card","text-center"],[1,"card-body"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-title"],[1,"card-text"],[3,"contacts","show","remove","edit"],[1,"example-button-container"],["mat-fab","","color","primary","aria-label","Example icon button with a delete icon"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h6",2),t._uU(3,"This month you spent:"),t.qZA(),t.TgZ(4,"h5",3),t._uU(5,"\u20b97,606.00"),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"ul"),t.TgZ(8,"li"),t._uU(9,"Previous month:"),t.TgZ(10,"b"),t._uU(11,"\u20b9279.00"),t.qZA(),t.qZA(),t.TgZ(12,"li"),t._uU(13,"Monthly spending limit Remaining:"),t.TgZ(14,"b"),t._uU(15,"\u20b9-2606"),t.qZA(),t.qZA(),t.TgZ(16,"li"),t._uU(17,"Monthly spending on utility:"),t.TgZ(18,"b"),t._uU(19,"6606"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"app-expenses-list",5),t.NdJ("show",function(f){return s.showContact(f)})("remove",function(f){return s.deleteContact(f)})("edit",function(f){return s.editContact(f)}),t.ALo(21,"async"),t.qZA(),t.TgZ(22,"div",6),t.TgZ(23,"button",7),t.TgZ(24,"mat-icon"),t._uU(25,"add"),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(20),t.Q6J("contacts",t.lcZ(21,1,s.contacts$)))},directives:[St,Bt.lW,It.Hw],pipes:[U.Ov],styles:[".card-title[_ngcontent-%COMP%]{margin:.5em 0;font-size:200%;color:#119fd6}.card-subtitle[_ngcontent-%COMP%], .card-text[_ngcontent-%COMP%]{text-align:left;text-align:initial;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;color:#7a7a7a}.card[_ngcontent-%COMP%]{margin-bottom:30px}.example-button-container[_ngcontent-%COMP%]{right:30px;bottom:30px;position:absolute}"],changeDetection:0}),n}(),data:{title:"Home"},resolve:{title:B}},{path:"new",component:Ot,data:{title:"New contact"},resolve:{title:B}},{path:":contactId",component:wt,data:{title:"Contact details"},resolve:{title:B}},{path:":contactId/edit",component:Et,data:{title:"Edit contact"},resolve:{title:B}}]}],Dt=function(){function n(){}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[b.Bz.forChild(Pt)],b.Bz]}),n}(),Yt=function(){function n(){}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[Q,W,N],imports:[[U.ez,nt.m,Dt,d.Aw.forFeature("contacts",Zt),G.sQ.forFeature([H])]]}),n}()}}]);