"use strict";(self.webpackChunkterapie_si_masaj=self.webpackChunkterapie_si_masaj||[]).push([[843],{9062:(pt,h,s)=>{s.r(h),s.d(h,{MassagesModule:()=>ct});var r=s(6895),g=s(433),p=s(966),w=s(8639),f=s(5593),M=s(4247),T=s(1740),P=s(1236),O=s(2453),y=s(3900),t=s(8274),I=s(6439),b=s(5362),u=s(805),m=s(3608),v=s(1795),c=s(2258);function k(n,o){1&n&&t.GkF(0)}function Z(n,o){if(1&n&&(t.ynx(0),t.YNc(1,k,1,0,"ng-container",3),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.contentTemplate)}}function S(n,o){if(1&n&&(t.TgZ(0,"div",1),t.Hsn(1),t.YNc(2,Z,2,1,"ng-container",2),t.qZA()),2&n){const e=t.oxw();t.Q6J("hidden",!e.selected),t.uIk("id",e.id)("aria-hidden",!e.selected)("aria-labelledby",e.id+"-label"),t.xp6(2),t.Q6J("ngIf",e.contentTemplate&&(e.cache?e.loaded:e.selected))}}const _=["*"],V=["content"],A=["navbar"],B=["prevBtn"],J=["nextBtn"],F=["inkbar"];function z(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",12,13),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.navBackward())}),t._UZ(2,"span",14),t.qZA()}}function Q(n,o){if(1&n&&t._UZ(0,"span",24),2&n){const e=t.oxw(3).$implicit;t.Q6J("ngClass",e.leftIcon)}}function E(n,o){if(1&n&&t._UZ(0,"span",25),2&n){const e=t.oxw(3).$implicit;t.Q6J("ngClass",e.rightIcon)}}function D(n,o){if(1&n&&(t.ynx(0),t.YNc(1,Q,1,1,"span",21),t.TgZ(2,"span",22),t._uU(3),t.qZA(),t.YNc(4,E,1,1,"span",23),t.BQk()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",e.leftIcon),t.xp6(2),t.Oqu(e.header),t.xp6(1),t.Q6J("ngIf",e.rightIcon)}}function U(n,o){1&n&&t.GkF(0)}function Y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"span",26),t.NdJ("click",function(a){t.CHM(e);const l=t.oxw(2).$implicit,d=t.oxw();return t.KtG(d.close(a,l))}),t.qZA()}}const j=function(n,o){return{"p-highlight":n,"p-disabled":o}};function N(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"li",16)(1,"a",17),t.NdJ("click",function(a){t.CHM(e);const l=t.oxw().$implicit,d=t.oxw();return t.KtG(d.open(a,l))})("keydown.enter",function(a){t.CHM(e);const l=t.oxw().$implicit,d=t.oxw();return t.KtG(d.open(a,l))}),t.YNc(2,D,5,3,"ng-container",18),t.YNc(3,U,1,0,"ng-container",19),t.YNc(4,Y,1,0,"span",20),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.Tol(e.headerStyleClass),t.Q6J("ngClass",t.WLB(16,j,e.selected,e.disabled))("ngStyle",e.headerStyle),t.xp6(1),t.Q6J("pTooltip",e.tooltip)("tooltipPosition",e.tooltipPosition)("positionStyle",e.tooltipPositionStyle)("tooltipStyleClass",e.tooltipStyleClass),t.uIk("id",e.id+"-label")("aria-selected",e.selected)("aria-controls",e.id)("aria-selected",e.selected)("tabindex",e.disabled?null:"0"),t.xp6(1),t.Q6J("ngIf",!e.headerTemplate),t.xp6(1),t.Q6J("ngTemplateOutlet",e.headerTemplate),t.xp6(1),t.Q6J("ngIf",e.closable)}}function G(n,o){1&n&&t.YNc(0,N,5,19,"li",15),2&n&&t.Q6J("ngIf",!o.$implicit.closed)}function H(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",27,28),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.navForward())}),t._UZ(2,"span",29),t.qZA()}}const q=function(n){return{"p-tabview p-component":!0,"p-tabview-scrollable":n}};let R=0,x=(()=>{class n{constructor(e,i,a){this.viewContainer=i,this.cd=a,this.cache=!0,this.tooltipPosition="top",this.tooltipPositionStyle="absolute",this.id="p-tabpanel-"+R++,this.tabView=e}ngAfterContentInit(){this.templates.forEach(e=>{"header"===e.getType()?this.headerTemplate=e.template:this.contentTemplate=e.template})}get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||this.cd.detectChanges(),e&&(this.loaded=!0)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.tabView.cd.markForCheck()}get header(){return this._header}set header(e){this._header=e,this.tabView.updateInkBar(),this.tabView.cd.markForCheck()}get leftIcon(){return this._leftIcon}set leftIcon(e){this._leftIcon=e,this.tabView.cd.markForCheck()}get rightIcon(){return this._rightIcon}set rightIcon(e){this._rightIcon=e,this.tabView.cd.markForCheck()}ngOnDestroy(){this.view=null}}return n.\u0275fac=function(e){return new(e||n)(t.Y36((0,t.Gpc)(()=>C)),t.Y36(t.s_b),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["p-tabPanel"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,u.jx,4),2&e){let l;t.iGM(l=t.CRH())&&(i.templates=l)}},hostAttrs:[1,"p-element"],inputs:{closable:"closable",headerStyle:"headerStyle",headerStyleClass:"headerStyleClass",cache:"cache",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",selected:"selected",disabled:"disabled",header:"header",leftIcon:"leftIcon",rightIcon:"rightIcon"},ngContentSelectors:_,decls:1,vars:1,consts:[["class","p-tabview-panel","role","tabpanel",3,"hidden",4,"ngIf"],["role","tabpanel",1,"p-tabview-panel",3,"hidden"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(e,i){1&e&&(t.F$t(),t.YNc(0,S,3,5,"div",0)),2&e&&t.Q6J("ngIf",!i.closed)},dependencies:[r.O5,r.tP],encapsulation:2}),n})(),C=(()=>{class n{constructor(e,i){this.el=e,this.cd=i,this.orientation="top",this.onChange=new t.vpe,this.onClose=new t.vpe,this.activeIndexChange=new t.vpe,this.backwardIsDisabled=!0,this.forwardIsDisabled=!1}ngAfterContentInit(){this.initTabs(),this.tabPanels.changes.subscribe(e=>{this.initTabs()})}ngAfterViewChecked(){this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}initTabs(){this.tabs=this.tabPanels.toArray(),!this.findSelectedTab()&&this.tabs.length&&(null!=this.activeIndex&&this.tabs.length>this.activeIndex?this.tabs[this.activeIndex].selected=!0:this.tabs[0].selected=!0,this.tabChanged=!0),this.cd.markForCheck()}open(e,i){if(i.disabled)e&&e.preventDefault();else{if(!i.selected){let a=this.findSelectedTab();a&&(a.selected=!1),this.tabChanged=!0,i.selected=!0;let l=this.findTabIndex(i);this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(l),this.onChange.emit({originalEvent:e,index:l}),this.updateScrollBar(l)}e&&e.preventDefault()}}close(e,i){this.controlClose?this.onClose.emit({originalEvent:e,index:this.findTabIndex(i),close:()=>{this.closeTab(i)}}):(this.closeTab(i),this.onClose.emit({originalEvent:e,index:this.findTabIndex(i)})),e.stopPropagation()}closeTab(e){if(!e.disabled){if(e.selected){this.tabChanged=!0,e.selected=!1;for(let i=0;i<this.tabs.length;i++){let a=this.tabs[i];if(!a.closed&&!e.disabled){a.selected=!0;break}}}e.closed=!0}}findSelectedTab(){for(let e=0;e<this.tabs.length;e++)if(this.tabs[e].selected)return this.tabs[e];return null}findTabIndex(e){let i=-1;for(let a=0;a<this.tabs.length;a++)if(this.tabs[a]==e){i=a;break}return i}getBlockableElement(){return this.el.nativeElement.children[0]}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.tabs&&this.tabs.length&&null!=this._activeIndex&&this.tabs.length>this._activeIndex&&(this.findSelectedTab().selected=!1,this.tabs[this._activeIndex].selected=!0,this.tabChanged=!0,this.updateScrollBar(e))}updateInkBar(){if(this.navbar){let e=c.p.findSingle(this.navbar.nativeElement,"li.p-highlight");this.inkbar.nativeElement.style.width=c.p.getWidth(e)+"px",this.inkbar.nativeElement.style.left=c.p.getOffset(e).left-c.p.getOffset(this.navbar.nativeElement).left+"px"}}updateScrollBar(e){this.navbar.nativeElement.children[e].scrollIntoView({block:"nearest"})}updateButtonState(){const e=this.content.nativeElement,{scrollLeft:i,scrollWidth:a}=e,l=c.p.getWidth(e);this.backwardIsDisabled=0===i,this.forwardIsDisabled=parseInt(i)===a-l}onScroll(e){this.scrollable&&this.updateButtonState(),e.preventDefault()}getVisibleButtonWidths(){return[this.prevBtn?.nativeElement,this.nextBtn?.nativeElement].reduce((e,i)=>i?e+c.p.getWidth(i):e,0)}navBackward(){const e=this.content.nativeElement,i=c.p.getWidth(e)-this.getVisibleButtonWidths(),a=e.scrollLeft-i;e.scrollLeft=a<=0?0:a}navForward(){const e=this.content.nativeElement,i=c.p.getWidth(e)-this.getVisibleButtonWidths(),a=e.scrollLeft+i,l=e.scrollWidth-i;e.scrollLeft=a>=l?l:a}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["p-tabView"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,x,4),2&e){let l;t.iGM(l=t.CRH())&&(i.tabPanels=l)}},viewQuery:function(e,i){if(1&e&&(t.Gf(V,5),t.Gf(A,5),t.Gf(B,5),t.Gf(J,5),t.Gf(F,5)),2&e){let a;t.iGM(a=t.CRH())&&(i.content=a.first),t.iGM(a=t.CRH())&&(i.navbar=a.first),t.iGM(a=t.CRH())&&(i.prevBtn=a.first),t.iGM(a=t.CRH())&&(i.nextBtn=a.first),t.iGM(a=t.CRH())&&(i.inkbar=a.first)}},hostAttrs:[1,"p-element"],inputs:{orientation:"orientation",style:"style",styleClass:"styleClass",controlClose:"controlClose",scrollable:"scrollable",activeIndex:"activeIndex"},outputs:{onChange:"onChange",onClose:"onClose",activeIndexChange:"activeIndexChange"},ngContentSelectors:_,decls:13,vars:9,consts:[[3,"ngClass","ngStyle"],[1,"p-tabview-nav-container"],["class","p-tabview-nav-prev p-tabview-nav-btn p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tabview-nav-content",3,"scroll"],["content",""],["role","tablist",1,"p-tabview-nav"],["navbar",""],["ngFor","",3,"ngForOf"],[1,"p-tabview-ink-bar"],["inkbar",""],["class","p-tabview-nav-next p-tabview-nav-btn p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tabview-panels"],["type","button","pRipple","",1,"p-tabview-nav-prev","p-tabview-nav-btn","p-link",3,"click"],["prevBtn",""],[1,"pi","pi-chevron-left"],["role","presentation",3,"ngClass","ngStyle","class",4,"ngIf"],["role","presentation",3,"ngClass","ngStyle"],["role","tab","pRipple","",1,"p-tabview-nav-link",3,"pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","click","keydown.enter"],[4,"ngIf"],[4,"ngTemplateOutlet"],["class","p-tabview-close pi pi-times",3,"click",4,"ngIf"],["class","p-tabview-left-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-title"],["class","p-tabview-right-icon",3,"ngClass",4,"ngIf"],[1,"p-tabview-left-icon",3,"ngClass"],[1,"p-tabview-right-icon",3,"ngClass"],[1,"p-tabview-close","pi","pi-times",3,"click"],["type","button","pRipple","",1,"p-tabview-nav-next","p-tabview-nav-btn","p-link",3,"click"],["nextBtn",""],[1,"pi","pi-chevron-right"]],template:function(e,i){1&e&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,z,3,0,"button",2),t.TgZ(3,"div",3,4),t.NdJ("scroll",function(l){return i.onScroll(l)}),t.TgZ(5,"ul",5,6),t.YNc(7,G,1,1,"ng-template",7),t._UZ(8,"li",8,9),t.qZA()(),t.YNc(10,H,3,0,"button",10),t.qZA(),t.TgZ(11,"div",11),t.Hsn(12),t.qZA()()),2&e&&(t.Tol(i.styleClass),t.Q6J("ngClass",t.VKq(7,q,i.scrollable))("ngStyle",i.style),t.xp6(2),t.Q6J("ngIf",i.scrollable&&!i.backwardIsDisabled),t.xp6(5),t.Q6J("ngForOf",i.tabs),t.xp6(3),t.Q6J("ngIf",i.scrollable&&!i.forwardIsDisabled))},dependencies:[r.mk,r.PC,r.O5,v.H,r.sg,m.u,r.tP],styles:[".p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:flex;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}\n"],encapsulation:2,changeDetection:0}),n})(),$=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,u.m8,m.z,v.T],u.m8]}),n})();var L=s(1382),W=s(3755);function K(n,o){if(1&n&&(t.TgZ(0,"li",7),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e," ")}}function X(n,o){1&n&&(t.TgZ(0,"div",8)(1,"div",7)(2,"p",1),t._uU(3,"Produsele folosite sunt de calitate superioara si nu prezinta riscuri de iritie... Masajul de relaxare este una dintre cele mai vechi terapii \u0219i este recomandat tuturor persoanelor, indiferent de v\xe2rst\u0103 \u0219i sex, aduc\xe2nd \xeembun\u0103t\u0103\u021biri at\xe2t fizice, c\xe2t \u0219i psihice corpului nostru."),t.qZA()()(),t.TgZ(4,"div",9)(5,"div",10)(6,"app-flip-card"),t._UZ(7,"app-card",11)(8,"app-card",12),t.qZA()(),t.TgZ(9,"div",13)(10,"app-flip-card"),t._UZ(11,"app-card",11)(12,"app-card",12),t.qZA()(),t.TgZ(13,"div",14)(14,"app-flip-card"),t._UZ(15,"app-card",11)(16,"app-card",12),t.qZA()()()),2&n&&(t.xp6(7),t.Q6J("src","../../../../../assets/ulei_cu_mango.jpg")("title","Ulei cu avocado"),t.xp6(1),t.Q6J("description","Extractul de avocado (5%) ajut\u0103 la regenerarea \u015fi la echilibrul pielii, datorit\u0103 aportului suplimentar de Vitamina E, determin\xe2nd astfel o piele neted\u0103 \u015fi supl\u0103.\n                 Produsul se adreseaz\u0103 tuturor tipurilor de piele \u015fi poate fi aplicat pe \u020bntregul corp.")("title","Ulei cu avocado"),t.xp6(3),t.Q6J("src","../../../../../assets/ulei_cu_mango.jpg")("title","Ulei cu avocado"),t.xp6(1),t.Q6J("description","Extractul de avocado (5%) ajut\u0103 la regenerarea \u015fi la echilibrul pielii, datorit\u0103 aportului suplimentar de Vitamina E, determin\xe2nd astfel o piele neted\u0103 \u015fi supl\u0103.\n                 Produsul se adreseaz\u0103 tuturor tipurilor de piele \u015fi poate fi aplicat pe \u020bntregul corp.")("title","Ulei cu avocado"),t.xp6(3),t.Q6J("src","../../../../../assets/ulei_cu_mango.jpg")("title","Ulei cu avocado"),t.xp6(1),t.Q6J("description","Extractul de avocado (5%) ajut\u0103 la regenerarea \u015fi la echilibrul pielii, datorit\u0103 aportului suplimentar de Vitamina E, determin\xe2nd astfel o piele neted\u0103 \u015fi supl\u0103.\n                 Produsul se adreseaz\u0103 tuturor tipurilor de piele \u015fi poate fi aplicat pe \u020bntregul corp.")("title","Ulei cu avocado"))}let tt=(()=>{class n{constructor(e){this.route=e}ngOnDestroy(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-massages-more-details"]],inputs:{details:"details"},decls:10,vars:2,consts:[["header","Informatii"],[1,"txt"],[1,"benefits"],[1,"sub-heading"],["class","col-12",4,"ngFor","ngForOf"],["header","Produse folosite"],["pTemplate","content"],[1,"col-12"],[1,"row"],[1,"row","justify-content-center","product-container","overflow-hidden"],["data-aos","fade-left","data-aos-duration","500",1,"col-auto","d-flex","justify-content-center","mb-5"],["frontCard","",3,"src","title"],["backCard","",3,"description","title"],["data-aos","fade-left","data-aos-duration","500","data-aos-delay","250",1,"col-auto","d-flex","justify-content-center","mb-5"],["data-aos","fade-left","data-aos-delay","500","data-aos-duration","500",1,"col-auto","d-flex","justify-content-center","mb-5"]],template:function(e,i){1&e&&(t.TgZ(0,"p-tabView")(1,"p-tabPanel",0)(2,"p",1),t._uU(3),t.qZA(),t.TgZ(4,"p",2),t._uU(5,"Beneficii"),t.qZA(),t.TgZ(6,"ul",3),t.YNc(7,K,2,1,"li",4),t.qZA()(),t.TgZ(8,"p-tabPanel",5),t.YNc(9,X,17,12,"ng-template",6),t.qZA()()),2&e&&(t.xp6(3),t.hij(" ",null==i.details?null:i.details.description,""),t.xp6(4),t.Q6J("ngForOf",null==i.details?null:i.details.benefits))},dependencies:[r.sg,u.jx,C,x,L.v,W.$],styles:[".sub-heading[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-bottom:1rem}.sub-heading[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .sub-heading[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{letter-spacing:-1px;color:#a33c0f;margin-bottom:1rem;font-size:1.1rem;letter-spacing:1px;line-height:2rem}[_nghost-%COMP%]     .p-tabview{box-shadow:#0000001a 0 0 5px,#0000001a 0 0 1px}[_nghost-%COMP%]     .p-tabview-nav{border-color:#ff3838!important;background-color:#ff3838!important}[_nghost-%COMP%]     .p-tabview-nav{padding:0 10px}[_nghost-%COMP%]     .p-tabview-nav li:not(:first-child){margin-left:5px}[_nghost-%COMP%]     .p-tabview-nav .p-tabview-nav-link{color:#fff!important;border-color:#ff3838!important;font-size:1.2rem;font-weight:400!important;background-color:#ff3838!important}[_nghost-%COMP%]     .p-tabview-nav .p-highlight .p-tabview-nav-link{border-color:#fff!important;padding-bottom:15px!important}[_nghost-%COMP%]     .p-tabview-nav .p-tabview-nav-link:focus{box-shadow:unset!important}.benefits[_ngcontent-%COMP%]{font-size:1.3rem;color:#a33c0f;border-bottom:1px solid #ff3838}.product-container[_ngcontent-%COMP%]{min-height:450px;padding:50px 25px}.txt[_ngcontent-%COMP%]{color:#a33c0f;text-align:left;margin-bottom:2rem;font-size:1.1rem;letter-spacing:1px;line-height:2rem}"]}),n})();var et=s(7566);function nt(n,o){if(1&n&&(t.TgZ(0,"div",17)(1,"span"),t._uU(2),t.ALo(3,"price"),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.hij("",t.xi3(3,1,e.massage,e.duration)," Lei")}}let it=(()=>{class n{constructor(e,i,a){this.route=e,this.massagesService=i,this.router=a,this.massage=null,this.durationOptions=[],this.duration=60}ngOnInit(){this.route.params.pipe((0,y.w)(e=>this.massagesService.getMassageById(e.id))).subscribe(e=>{this.massage=e,console.log(this.massage,"massage"),this.durationOptions=this.getDurationOptions(e?.pricing?.map(i=>i.duration)),this.duration=this.durationOptions&&this.durationOptions[0].value})}goToAppointment(){this.router.navigate(["programare"])}getDurationOptions(e){return e?e.map(i=>({label:`${i} minute`,value:i})):[]}ngOnDestroy(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz),t.Y36(I.o),t.Y36(p.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-massages"]],decls:24,vars:7,consts:[[1,"pd-wrap"],[1,"container"],[1,"row"],[1,"col-md-6"],["id","slider",1,"owl-carousel","product-slider"],[1,"item"],["width","100%","height","400px",3,"src"],[1,"product-dtl"],[1,"product-info"],[1,"product-name"],["class","product-price-discount",4,"ngIf"],[1,"col-md-6","col-sm-12","mt-2"],["id","duration","styleClass","select-btn","optionLabel","label","optionValue","value",3,"options","ngModel","ngModelChange"],[1,"product-count"],["pButton","","label","Programeaz\u0103-te acum",1,"hover","hover-1",3,"click"],[1,"product-info-tabs"],[3,"details"],[1,"product-price-discount"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"img",6),t.qZA()()(),t.TgZ(7,"div",3)(8,"div",7)(9,"div",8)(10,"div",9),t._uU(11),t.qZA(),t.YNc(12,nt,4,4,"div",10),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.TgZ(15,"div",2)(16,"div",11)(17,"label"),t._uU(18,"Durata"),t.qZA(),t.TgZ(19,"p-selectButton",12),t.NdJ("ngModelChange",function(l){return i.duration=l}),t.qZA()()(),t.TgZ(20,"div",13)(21,"button",14),t.NdJ("click",function(){return i.goToAppointment()}),t.qZA()()()()(),t.TgZ(22,"div",15),t._UZ(23,"app-massages-more-details",16),t.qZA()()()),2&e&&(t.xp6(6),t.s9C("src","../../../../../../../assets/"+(null==i.massage?null:i.massage.imageUrl),t.LSH),t.xp6(5),t.Oqu(null==i.massage?null:i.massage.title),t.xp6(1),t.Q6J("ngIf",i.massage),t.xp6(2),t.Oqu(null==i.massage?null:i.massage.shortDescription),t.xp6(5),t.Q6J("options",i.durationOptions)("ngModel",i.duration),t.xp6(4),t.Q6J("details",i.massage))},dependencies:[r.O5,f.Hq,b.UN,g.JJ,g.On,tt,et.d],styles:[".container[_ngcontent-%COMP%]{padding:50px 0}.extra-details[_ngcontent-%COMP%]{margin-top:150px}.pd-wrap[_ngcontent-%COMP%]{padding:40px 0;font-family:Poppins,sans-serif}.item[_ngcontent-%COMP%]{overflow:hidden}.sub-heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:12px;display:block;font-weight:600;color:#2e9ca1;text-transform:uppercase;letter-spacing:2px}.heading-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:500;padding-top:10px;padding-bottom:15px;font-family:Poppins,sans-serif}.user-img[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;position:relative;min-width:80px;background-size:100%}.carousel-testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:30px 10px}.quote[_ngcontent-%COMP%]{position:absolute;top:-23px;color:#2e9da1;font-size:27px}.name[_ngcontent-%COMP%]{margin-bottom:0;line-height:14px;font-size:17px;font-weight:500}.position[_ngcontent-%COMP%]{color:#adadad;font-size:14px}.owl-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);outline:none;height:25px}.owl-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:25px;height:25px}.owl-nav[_ngcontent-%COMP%]   button.owl-prev[_ngcontent-%COMP%]{left:25px}.owl-nav[_ngcontent-%COMP%]   button.owl-next[_ngcontent-%COMP%]{right:25px}.owl-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:45px}.product-thumb[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px}.product-name[_ngcontent-%COMP%]{font-size:22px;font-weight:500;line-height:22px;margin-bottom:4px}.product-price-discount[_ngcontent-%COMP%]{font-size:22px;font-weight:400;padding:10px 0;clear:both}.product-price-discount[_ngcontent-%COMP%]   span.line-through[_ngcontent-%COMP%]{text-decoration:line-through;margin-left:10px;font-size:14px;vertical-align:middle;color:#a5a5a5}.display-flex[_ngcontent-%COMP%]{display:flex}.align-center[_ngcontent-%COMP%]{align-items:center}.product-info[_ngcontent-%COMP%]{width:100%}.product-dtl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:24px;color:#7a7a7a}.product-dtl[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-size:15px}.product-dtl[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{line-height:16px;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}.product-count[_ngcontent-%COMP%]{margin-top:15px}.product-count[_ngcontent-%COMP%]   .qtyminus[_ngcontent-%COMP%], .product-count[_ngcontent-%COMP%]   .qtyplus[_ngcontent-%COMP%]{width:34px;height:34px;background:#212529;text-align:center;font-size:19px;line-height:36px;color:#fff;cursor:pointer}.product-count[_ngcontent-%COMP%]   .qtyminus[_ngcontent-%COMP%]{border-radius:3px 0 0 3px}.product-count[_ngcontent-%COMP%]   .qtyplus[_ngcontent-%COMP%]{border-radius:0 3px 3px 0}.product-count[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]{width:60px;text-align:center}.round-black-btn[_ngcontent-%COMP%]{border-radius:4px;background:#212529;color:#fff;padding:7px 45px;display:inline-block;margin-top:20px;border:solid 2px #212529;transition:all .5s ease-in-out 0s}.round-black-btn[_ngcontent-%COMP%]:hover, .round-black-btn[_ngcontent-%COMP%]:focus{background:transparent;color:#212529;text-decoration:none}.product-info-tabs[_ngcontent-%COMP%]{margin-top:5rem}.appointment-btn[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]{color:#fff}.appointment-btn[_ngcontent-%COMP%]{height:50px;color:#262626;font-size:1.5rem}.hover[_ngcontent-%COMP%]{width:300px}"]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild([{path:":id",component:it}])]}),n})();var ot=s(529);let st=(()=>{class n{constructor(e){this.http=e}getMassage(e){return this.http.get("assets/data/"+e+".json")}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(ot.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var lt=s(4665),rt=s(4586);let ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[st],imports:[r.ez,at,p.Bz,P.q,O.EV,T.j,M.d,f.hJ,$,w.TX,lt.V,b.Qy,g.u5,rt.D]}),n})()}}]);