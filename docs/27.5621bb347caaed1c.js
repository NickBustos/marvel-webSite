"use strict";(self.webpackChunkmarvelPage=self.webpackChunkmarvelPage||[]).push([[27],{9027:(mt,h,s)=>{s.r(h),s.d(h,{PagesModule:()=>lt});var r=s(6895),m=s(9197),t=s(4650),u=s(4568),p=s(4859),a=s(3546),g=s(4850),d=s(782),x=s(7392),_=s(1572);function b(o,i){1&o&&(t.TgZ(0,"mat-grid-list",3)(1,"mat-grid-tile"),t._UZ(2,"mat-spinner",4),t.qZA()())}const T=function(){return{"background-color":"#f0131e"}},A=function(o){return["/perfil/",o]};function P(o,i){if(1&o&&(t.TgZ(0,"div",11)(1,"mat-card"),t._UZ(2,"img",12)(3,"mat-card-content",13),t.TgZ(4,"mat-card-header",14)(5,"mat-card-title"),t._uU(6),t.qZA()(),t.TgZ(7,"mat-card-actions",14)(8,"button",15),t._uU(9," Ver m\xe1s "),t.qZA()()()()),2&o){const e=i.$implicit;t.xp6(2),t.Q6J("src",e.thumbnail.path+"."+e.thumbnail.extension,t.LSH),t.xp6(4),t.Oqu(e.name),t.xp6(2),t.Q6J("ngStyle",t.DdM(4,T))("routerLink",t.VKq(5,A,e.id))}}const v=function(o){return["/listado/",o]};function w(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.passPage(-1))}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA(),t._uU(3," Anterior "),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("routerLink",t.VKq(1,v,e.numPage-1))}}function O(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.passPage(1))}),t.TgZ(1,"span"),t._uU(2," Siguiente "),t.qZA(),t.TgZ(3,"mat-icon"),t._uU(4,"arrow_forward"),t.qZA()()}if(2&o){const e=t.oxw(2);t.Q6J("routerLink",t.VKq(1,v,e.numPage+1))}}function I(o,i){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,P,10,7,"div",6),t.TgZ(2,"div",7)(3,"div",8),t.YNc(4,w,4,3,"button",9),t.qZA(),t.TgZ(5,"div",10),t.YNc(6,O,5,3,"button",9),t.qZA()()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.datos),t.xp6(3),t.Q6J("ngIf",e.mostrarBotonAnterior()),t.xp6(2),t.Q6J("ngIf",e.mostrarBotonAvanzar())}}let q=(()=>{class o{constructor(e,n){this.marvelService=e,this.route=n,this.datos=[]}ngOnInit(){this.numPage=0,this.route.params.subscribe(e=>{this.numPage=e.page?+e.page:0,this.loadHeroes(this.numPage)}),console.log("ngOnInit")}loadHeroes(e){e>55||e<0||isNaN(e)?window.location.href="./error":(this.marvelService.getHeroes(28*e).subscribe(n=>{this.datos=n.data.results}),console.log("LoadHeroes"))}passPage(e){(e>0||this.numPage>0)&&(this.numPage+=e,this.loadHeroes(this.numPage))}mostrarBotonAvanzar(){return 55!==this.numPage}mostrarBotonAnterior(){return 0!==this.numPage}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.m),t.Y36(m.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listado"]],decls:6,vars:2,consts:[["cargando",""],[1,"title"],["class","grid bm-8 p-2",4,"ngIf","ngIfElse"],["cols","1"],["color","warn"],[1,"grid","bm-8","p-2"],["class","col-10 sm:col-6 md:col-6 xl:col-3",4,"ngFor","ngForOf"],[1,"grid","mt-3","p-2","w-full","justify-content-center"],[1,"xl:col-1","md:col-1","sm:col-1","col-1","justify-content-end","flex"],["mat-button","","mat-raised","",3,"routerLink","click",4,"ngIf"],[1,"xl:col-1","md:col-1","sm:col-1","col-1","justify-content-center"],[1,"col-10","sm:col-6","md:col-6","xl:col-3"],["alt","",3,"src"],[1,"mb-2"],[1,"align-items-center","justify-content-center","card-container"],["mat-button","","mat-raised","",3,"ngStyle","routerLink"],["mat-button","","mat-raised","",3,"routerLink","click"]],template:function(e,n){if(1&e&&(t.YNc(0,b,3,0,"ng-template",null,0,t.W1O),t.TgZ(2,"h1",1),t._uU(3,"Listado de heroes"),t.qZA(),t._UZ(4,"mat-divider"),t.YNc(5,I,7,3,"div",2)),2&e){const c=t.MAs(1);t.xp6(5),t.Q6J("ngIf",n.datos)("ngIfElse",c)}},dependencies:[r.sg,r.O5,r.PC,m.rH,p.lW,a.a8,a.hq,a.dn,a.dk,a.n5,g.d,d.Il,d.DX,x.Hw,_.Ou],styles:["[_nghost-%COMP%]{margin-top:70px;width:100%}.title[_ngcontent-%COMP%]{margin-left:15px}@media (min-width: 600px){img[_ngcontent-%COMP%]{width:434px;height:434px}}"]}),o})(),C=(()=>{class o{transform(e){return""==e?"Ooops! Parece que esta descripci\xf3n esta vac\xeda. Intenta con otro personaje.":e}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"validarDesc",type:o,pure:!0}),o})();function U(o,i){1&o&&(t.TgZ(0,"mat-grid-list",2)(1,"mat-grid-tile"),t._UZ(2,"mat-spinner",3),t.qZA()())}function y(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"li",13),t.NdJ("click",function(){const l=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.redirectSerie(l.resourceURI))}),t._uU(1),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}const k=function(){return{"border-left-color":"red","border-left-width":"5px"}};function L(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",4)(1,"mat-card",5),t._UZ(2,"img",6),t.qZA(),t.TgZ(3,"mat-card",7)(4,"mat-card-header")(5,"mat-card-title"),t._uU(6),t.ALo(7,"uppercase"),t.qZA(),t.TgZ(8,"mat-card-subtitle"),t._uU(9,"Descripci\xf3n:"),t.qZA()(),t.TgZ(10,"mat-card-content",8),t._uU(11),t.ALo(12,"validarDesc"),t.qZA(),t._UZ(13,"mat-divider",9),t.TgZ(14,"mat-card-footer",10)(15,"p")(16,"strong"),t._uU(17,"Comics: "),t.qZA()(),t.TgZ(18,"ul"),t.YNc(19,y,2,1,"li",11),t.qZA()(),t.TgZ(20,"button",12),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.goBack())}),t._uU(21," Volver "),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("src",e.rutaImagen,t.LSH),t.xp6(1),t.Q6J("ngStyle",t.DdM(9,k)),t.xp6(3),t.Oqu(t.lcZ(7,5,e.resultadoHeroe.name)),t.xp6(5),t.hij(" ",t.lcZ(12,7,e.resultadoHeroe.description)," "),t.xp6(8),t.Q6J("ngForOf",e.resultadoHeroe.series.items)}}let M=(()=>{class o{constructor(e,n,c,l){this.location=e,this.perfilActivo=n,this.marvelService=c,this.navegar=l,this.rutaImagen="",this.enlace="",this.resultadoHeroe=null,this.api="?ts=1000&hash=cf95359ee38358dab71af57b9e715e85&apikey=510c5c7672e863155540c01e26a71ebb"}ngOnInit(){this.perfilActivo.params.subscribe(e=>{this.marvelService.getHeroe(e.id).subscribe(n=>{this.rutaImagen=n.data.results[0].thumbnail.path+"."+n.data.results[0].thumbnail.extension,this.resultadoHeroe=n.data.results[0]})})}redirectSerie(e){const n=e.split("/");this.marvelService.getSeriesbyId(Number(n[n.length-1])).subscribe(l=>{this.navegar.navigate(["series",l.data.results[0].id])})}goBack(){this.location.back()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.Ye),t.Y36(m.gz),t.Y36(u.m),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-perfil"]],decls:3,vars:2,consts:[["cargando",""],["class","grid mt-2 p-2",4,"ngIf","ngIfElse"],["cols","1"],["color","warn"],[1,"grid","mt-2","p-2"],[1,"mat-mdc-card","mdc-card","xl:col-6","lg:col-6","md:col-6","sm:col-10","col-10","pr-2"],["alt","",3,"src"],[1,"mat-mdc-card","mdc-card","xl:col-6","lg:col-6","md:col-6","sm:col-10","col-10","pr-2",3,"ngStyle"],[1,"mb-3"],[1,"w-7","justify-content-center"],[1,"mt-3"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","color","warn",1,"mt-7",3,"click"],[3,"click"]],template:function(e,n){if(1&e&&(t.YNc(0,U,3,0,"ng-template",null,0,t.W1O),t.YNc(2,L,22,10,"div",1)),2&e){const c=t.MAs(1);t.xp6(2),t.Q6J("ngIf",n.resultadoHeroe)("ngIfElse",c)}},dependencies:[r.sg,r.O5,r.PC,p.lW,a.a8,a.dn,a.rt,a.dk,a.$j,a.n5,g.d,d.Il,d.DX,_.Ou,r.gd,C],styles:["[_nghost-%COMP%]{width:100%;margin-top:70px}.mat-divider[_ngcontent-%COMP%]{border-top-color:#f0131e;border-top-width:5px;border-radius:4px}a[_ngcontent-%COMP%]{text-decoration:none;color:#6a6a6a}li[_ngcontent-%COMP%]{cursor:pointer}"]}),o})(),Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-error"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Ooops, parece que te has equivocado de p\xe1gina."),t.qZA())},styles:["[_nghost-%COMP%]{display:flex;align-content:center;justify-content:center;flex-wrap:wrap;width:100%}"]}),o})();function F(o,i){1&o&&(t.TgZ(0,"mat-grid-list",3)(1,"mat-grid-tile"),t._UZ(2,"mat-spinner",4),t.qZA()())}function S(o,i){if(1&o&&t._UZ(0,"img",16),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.thumbnail.path+"."+e.thumbnail.extension,t.LSH)}}const J=function(){return{"background-color":"#f0131e"}},N=function(o){return["/perfil-comic/",o]};function j(o,i){if(1&o&&(t.TgZ(0,"div",11)(1,"mat-card"),t.YNc(2,S,1,1,"img",12),t._UZ(3,"mat-card-content",13),t.TgZ(4,"mat-card-header",14)(5,"mat-card-title"),t._uU(6),t.qZA()(),t.TgZ(7,"mat-card-actions",14)(8,"button",15),t._uU(9," Ver m\xe1s "),t.qZA()()()()),2&o){const e=i.$implicit;t.xp6(2),t.Q6J("ngIf",e.thumbnail),t.xp6(4),t.Oqu(e.title),t.xp6(2),t.Q6J("ngStyle",t.DdM(4,J))("routerLink",t.VKq(5,N,e.id))}}const Z=function(o){return["/comics/",o]};function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.passPage(-1))}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA(),t._uU(3," Anterior "),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("routerLink",t.VKq(1,Z,e.numPage-1))}}function E(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.passPage(1))}),t.TgZ(1,"span"),t._uU(2," Siguiente "),t.qZA(),t.TgZ(3,"mat-icon"),t._uU(4,"arrow_forward"),t.qZA()()}if(2&o){const e=t.oxw(2);t.Q6J("routerLink",t.VKq(1,Z,e.numPage+1))}}function Q(o,i){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,j,10,7,"div",6),t.TgZ(2,"div",7)(3,"div",8),t.YNc(4,H,4,3,"button",9),t.qZA(),t.TgZ(5,"div",10),t.YNc(6,E,5,3,"button",9),t.qZA()()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.datos),t.xp6(3),t.Q6J("ngIf",e.mostrarBotonAnterior()),t.xp6(2),t.Q6J("ngIf",e.mostrarBotonAvanzar())}}let D=(()=>{class o{constructor(e,n){this.marvelService=e,this.rutaActiva=n,this.comics=null,this.datos=[]}ngOnInit(){this.numPage=0,this.rutaActiva.params.subscribe(e=>{this.numPage=e.page?+e.page:0,this.loadComics(this.numPage)})}loadComics(e){this.marvelService.getComics(e).subscribe(n=>{this.datos=n.data.results}),console.log("LoadComics")}passPage(e){(e>0||this.numPage>0)&&(this.numPage+=e,this.loadComics(28*this.numPage))}mostrarBotonAvanzar(){return 44850!==this.numPage}mostrarBotonAnterior(){return 0!==this.numPage}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.m),t.Y36(m.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listado-comics"]],decls:6,vars:2,consts:[["cargando",""],[1,"title"],["class","grid bm-8 p-2",4,"ngIf","ngIfElse"],["cols","1"],["color","warn"],[1,"grid","bm-8","p-2"],["class","col-10 sm:col-6 md:col-6 xl:col-3",4,"ngFor","ngForOf"],[1,"grid","mt-3","p-2","w-full","justify-content-center"],[1,"xl:col-1","md:col-1","sm:col-1","col-1","justify-content-end","flex"],["mat-button","","mat-raised","",3,"routerLink","click",4,"ngIf"],[1,"xl:col-1","md:col-1","sm:col-1","col-1","justify-content-center"],[1,"col-10","sm:col-6","md:col-6","xl:col-3"],["alt","",3,"src",4,"ngIf"],[1,"mb-2"],[1,"align-items-center","justify-content-center","card-container"],["mat-button","","mat-raised","",3,"ngStyle","routerLink"],["alt","",3,"src"],["mat-button","","mat-raised","",3,"routerLink","click"]],template:function(e,n){if(1&e&&(t.YNc(0,F,3,0,"ng-template",null,0,t.W1O),t.TgZ(2,"h1",1),t._uU(3,"Listado de comics"),t.qZA(),t._UZ(4,"mat-divider"),t.YNc(5,Q,7,3,"div",2)),2&e){const c=t.MAs(1);t.xp6(5),t.Q6J("ngIf",n.datos)("ngIfElse",c)}},dependencies:[r.sg,r.O5,r.PC,m.rH,p.lW,a.a8,a.hq,a.dn,a.dk,a.n5,g.d,d.Il,d.DX,x.Hw,_.Ou],styles:["[_nghost-%COMP%]{margin-top:70px;width:100%}.title[_ngcontent-%COMP%]{margin-left:15px}@media (min-width: 600px){img[_ngcontent-%COMP%]{width:434px;height:434px}}"]}),o})(),B=(()=>{class o{transform(e){return""==e?"No hay autor proporcionado.":e}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"validarAutor",type:o,pure:!0}),o})();function V(o,i){1&o&&(t.TgZ(0,"mat-grid-list",2)(1,"mat-grid-tile"),t._UZ(2,"mat-spinner",3),t.qZA()())}function K(o,i){1&o&&(t.TgZ(0,"mat-card-content",20)(1,"h3")(2,"strong"),t._uU(3," No se encontraron escritores :/ "),t.qZA()()())}function $(o,i){if(1&o&&(t.TgZ(0,"h4"),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e)}}function z(o,i){if(1&o&&(t.TgZ(0,"mat-card-content",13)(1,"div")(2,"mat-card-title"),t._uU(3,"Escritor(es): "),t.qZA(),t.YNc(4,$,2,1,"h4",21),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(4),t.Q6J("ngForOf",e.escritores)}}function W(o,i){1&o&&(t.TgZ(0,"mat-card-content",13)(1,"h3")(2,"strong"),t._uU(3," No se encontraron dibujantes :( "),t.qZA()()())}function X(o,i){if(1&o&&(t.TgZ(0,"h4"),t._uU(1),t.ALo(2,"validarAutor"),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e)," ")}}function G(o,i){if(1&o&&(t.TgZ(0,"mat-card-content",13)(1,"div")(2,"mat-card-title"),t._uU(3,"Dibujante(s):"),t.qZA(),t.YNc(4,X,3,3,"h4",21),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(4),t.Q6J("ngForOf",e.dibujantes)}}function R(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"li",22),t.NdJ("click",function(){const l=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.redirectHeroe(l.name))}),t._uU(1),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}const tt=function(){return{"border-left-color":"red","border-left-width":"5px"}};function et(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",4)(1,"mat-card",5),t._UZ(2,"img",6),t.qZA(),t.TgZ(3,"mat-card",7)(4,"mat-card-header",8)(5,"mat-card-title"),t._uU(6),t.ALo(7,"uppercase"),t.qZA()(),t._UZ(8,"mat-divider"),t.TgZ(9,"div",9),t._UZ(10,"mat-card-content",8),t.YNc(11,K,4,0,"ng-template",null,10,t.W1O),t.YNc(13,z,5,1,"mat-card-content",11),t.YNc(14,W,4,0,"ng-template",null,12,t.W1O),t.YNc(16,G,5,1,"mat-card-content",11),t.TgZ(17,"mat-card-content",13)(18,"mat-card-title"),t._uU(19,"Fecha de publicaci\xf3n: "),t.qZA(),t.TgZ(20,"h4"),t._uU(21),t.ALo(22,"date"),t.qZA()()(),t._UZ(23,"mat-divider",14),t.TgZ(24,"mat-card-content",15)(25,"mat-card-subtitle"),t._uU(26,"Descripci\xf3n:"),t.qZA(),t.TgZ(27,"p",16),t._uU(28),t.ALo(29,"validarDesc"),t.qZA()(),t.TgZ(30,"mat-card-content",17)(31,"p")(32,"strong"),t._uU(33,"Personajes: "),t.qZA()(),t.TgZ(34,"ul"),t.YNc(35,R,2,1,"li",18),t.qZA()(),t.TgZ(36,"button",19),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.goBack())}),t._uU(37," Volver "),t.qZA()()()}if(2&o){const e=t.MAs(12),n=t.MAs(15),c=t.oxw();t.xp6(2),t.Q6J("src",c.rutaImagen,t.LSH),t.xp6(1),t.Q6J("ngStyle",t.DdM(17,tt)),t.xp6(3),t.Oqu(t.lcZ(7,10,c.resultadoComic.data.results[0].title)),t.xp6(7),t.Q6J("ngIf",0!=c.escritores.length)("ngIfElse",e),t.xp6(3),t.Q6J("ngIf",0!=c.dibujantes.length)("ngIfElse",n),t.xp6(5),t.hij(" ",t.xi3(22,12,c.resultadoComic.data.results[0].dates[0].date,"d/MMM/y")," "),t.xp6(7),t.hij(" ",t.lcZ(29,15,c.resultadoComic.data.results[0].description)," "),t.xp6(7),t.Q6J("ngForOf",c.resultadoComic.data.results[0].characters.items)}}function nt(o,i){1&o&&(t.TgZ(0,"mat-grid-list",5)(1,"mat-grid-tile"),t._UZ(2,"mat-spinner",6),t.qZA()())}function it(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",9)(1,"p",10),t.NdJ("click",function(){const l=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.navegarComic(l))}),t._uU(2),t.qZA()()}if(2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.name)}}function ct(o,i){if(1&o&&(t.TgZ(0,"div",7),t.YNc(1,it,3,1,"div",8),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.comics)}}const rt=[{path:"",children:[{path:"listado/:page",component:q},{path:"perfil/:id",component:M},{path:"perfil-comic/:id",component:(()=>{class o{constructor(e,n,c,l){this.location=e,this.comicActivo=n,this.marvelService=c,this.navegar=l,this.rutaImagen="",this.escritores=[],this.dibujantes=[],this.idHeroe=0,this.resultadoComic=null}ngOnInit(){this.comicActivo.params.subscribe(e=>{this.marvelService.getComic(e.id).subscribe(n=>{this.rutaImagen=this.buscarImagen(n),this.escritores=this.buscarEscritores(n),this.dibujantes=this.buscarDibujantes(n),this.resultadoComic=n,console.log(this.resultadoComic)})})}buscarImagen(e){return e.data.results[0].thumbnail.path+"."+e.data.results[0].thumbnail.extension}buscarEscritores(e){return e.data.results[0].creators.items.filter(n=>"writer"===n.role).map(n=>n.name)}buscarDibujantes(e){return e.data.results[0].creators.items.filter(n=>"penciller"===n.role).map(n=>n.name)}redirectHeroe(e){this.marvelService.searchHeroebyName(e).subscribe(n=>{console.log(n.data.results[0].id),this.idHeroe=n.data.results[0].id,this.navegar.navigate(["perfil",this.idHeroe])})}goBack(){this.location.back()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.Ye),t.Y36(m.gz),t.Y36(u.m),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-perfil-comic"]],decls:3,vars:2,consts:[["cargando",""],["class","grid mt-2 p-2",4,"ngIf","ngIfElse"],["cols","1"],["color","warn"],[1,"grid","mt-2","p-2"],[1,"mat-mdc-card","mdc-card","xl:col-6","lg:col-6","md:col-6","sm:col-10","col-10","pr-2"],["alt","",3,"src"],[1,"mdc-card","xl:col-6","lg:col-6","md:col-6","sm:col-10","col-10","pr-2",3,"ngStyle"],[1,"col-12"],[1,"mt-3","flex","flex-wrap"],["noEscritores",""],["class","col-5",4,"ngIf","ngIfElse"],["noDibujantes",""],[1,"col-5"],[1,"w-7","justify-content-center","div","mt-3","mb-3"],[1,"mb-3"],[1,"mt-2"],[1,"mt-3"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","color","warn",1,"mt-7",3,"click"],[1,"mb-4","col-5"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,n){if(1&e&&(t.YNc(0,V,3,0,"ng-template",null,0,t.W1O),t.YNc(2,et,38,18,"div",1)),2&e){const c=t.MAs(1);t.xp6(2),t.Q6J("ngIf",n.resultadoComic)("ngIfElse",c)}},dependencies:[r.sg,r.O5,r.PC,p.lW,a.a8,a.dn,a.dk,a.$j,a.n5,g.d,d.Il,d.DX,_.Ou,r.gd,r.uU,B,C],styles:["[_nghost-%COMP%]{width:100%;margin-top:70px}.div[_ngcontent-%COMP%]{border-top-color:#f0131e;border-top-width:5px;border-radius:4px}a[_ngcontent-%COMP%]{text-decoration:none;color:#6a6a6a}li[_ngcontent-%COMP%]{cursor:pointer}"]}),o})()},{path:"comics/:page",component:D},{path:"series/:id",component:(()=>{class o{constructor(e,n,c,l){this.location=e,this.rutaActiva=n,this.marveService=c,this.navegador=l,this.comics=[],this.nombreSerie=""}ngOnInit(){this.rutaActiva.params.subscribe(e=>{this.marveService.getSeriesbyId(e.id).subscribe(n=>{this.nombreSerie=n.data.results[0].title,this.comics=n.data.results[0].comics.items})})}navegarComic(e){const n=e.resourceURI.split("/"),c=n[n.length-1];console.log(c),this.navegador.navigate(["perfil-comic",c])}goBack(){this.location.back()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.Ye),t.Y36(m.gz),t.Y36(u.m),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-series"]],decls:9,vars:3,consts:[["cargando",""],[1,"title"],["class","grid bm-8 p-2 mt-3",4,"ngIf","ngIfElse"],[1,"flex","d-flex","justify-content-center","align-items-center"],["mat-button","","color","warn",1,"mt-7",3,"click"],["cols","1"],["color","warn"],[1,"grid","bm-8","p-2","mt-3"],["class","col-10 sm:col-6 md:col-6 xl:col-3",4,"ngFor","ngForOf"],[1,"col-10","sm:col-6","md:col-6","xl:col-3"],[3,"click"]],template:function(e,n){if(1&e&&(t.YNc(0,nt,3,0,"ng-template",null,0,t.W1O),t.TgZ(2,"h1",1),t._uU(3),t.qZA(),t._UZ(4,"mat-divider"),t.YNc(5,ct,2,1,"div",2),t.TgZ(6,"div",3)(7,"button",4),t.NdJ("click",function(){return n.goBack()}),t._uU(8," Volver "),t.qZA()()),2&e){const c=t.MAs(1);t.xp6(3),t.hij("Listado de comics de: ",n.nombreSerie,""),t.xp6(2),t.Q6J("ngIf",n.comics)("ngIfElse",c)}},dependencies:[r.sg,r.O5,p.lW,g.d,d.Il,d.DX,_.Ou],styles:["[_nghost-%COMP%]{margin-top:70px;width:100%}.title[_ngcontent-%COMP%]{margin-left:15px}@media (min-width: 600px){img[_ngcontent-%COMP%]{width:434px;height:434px}}p[_ngcontent-%COMP%]{cursor:pointer}"]}),o})()},{path:"error",component:Y},{path:"",redirectTo:"listado/0",pathMatch:"full"},{path:"**",redirectTo:"error"}]},{path:"**",redirectTo:"listado/0"}];let at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(rt),m.Bz]}),o})();var st=s(4345);let lt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.ez,at,st.i]}),o})()}}]);