(this.webpackJsonpeurotrade=this.webpackJsonpeurotrade||[]).push([[11],{114:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(0),l=t.n(n),o=t(31),r=t(40),i=t(41);function c(){return l.a.createElement("div",{className:"ComponentaContacte"},l.a.createElement("div",{className:"DespreTitluSectiune"},l.a.createElement("div",null,"Detalii contact")),l.a.createElement("div",{className:"Adresa",style:{fontSize:"4vh"}},l.a.createElement("div",{className:"ContactSubTitlu"},"Adresa "),l.a.createElement("div",{style:{fontSize:"4vh",display:"flex",flexDirection:"column",justifyContent:"flex-end"}},l.a.createElement("div",null,"Strada Garii nr 24 localitatea Potcoava judetul Olt "))),l.a.createElement("div",{className:"Adresa",style:{fontSize:"4vh"}},l.a.createElement("div",{className:"ContactSubTitlu"},"Administrator "),l.a.createElement("div",{className:"ContactInformatii"},l.a.createElement("div",null,"George Mustata"),l.a.createElement("div",{style:{marginTop:"10px"}},"0749-820-972",l.a.createElement(r.a,{icon:i.e,style:{marginLeft:"5px",color:"rgb(111,111,111)"}})))),l.a.createElement("div",{className:"Adresa",style:{fontSize:"4vh"}},l.a.createElement("div",{className:"ContactSubTitlu"},"Oficiul Juridic "),l.a.createElement("div",{className:"ContactInformatii"},l.a.createElement("div",null,"Ani Stratomir"),l.a.createElement("div",{style:{marginTop:"10px"}},"0746-833-282",l.a.createElement(r.a,{icon:i.e,style:{marginLeft:"5px",color:"rgb(111,111,111)"}})))),l.a.createElement("div",{className:"Adresa",style:{fontSize:"4vh"}},l.a.createElement("div",{className:"ContactSubTitlu"},"Contabilitate"),l.a.createElement("div",{className:"ContactInformatii"},l.a.createElement("div",null,"Anca"),l.a.createElement("div",null,"0747 072 373",l.a.createElement(r.a,{icon:i.e,style:{marginLeft:"5px",color:"rgb(111,111,111)",display:"inline-block"}})))),l.a.createElement("div",{className:"Adresa",style:{fontSize:"4vh"}},l.a.createElement("div",{className:"ContactSubTitlu"},"Telefon "),l.a.createElement("div",null,"+40-249-462-019",l.a.createElement(r.a,{style:{marginLeft:"5px",color:"rgb(111,111,111)"},icon:i.e}))),l.a.createElement("div",{className:"Adresa",style:{fontSize:"4vh"}},l.a.createElement("div",{className:"ContactSubTitlu"},"E-mail"),l.a.createElement("div",null,"officces.etc@gmail.com",l.a.createElement(r.a,{style:{marginLeft:"5px",color:"rgb(111,111,111)"},icon:i.d}))))}var s=t(32),d=t(35),m=t(36),u=t(38),E=t(37),v=t(51),p=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"googleMap"},l.a.createElement(v.Map,{style:{position:"relative",padding:" 0 var(--margine) 0 var(--margine)",height:"700px",width:"100%"},google:this.props.google,onClick:this.onMapClicked,zoom:16,initialCenter:{lat:44.480425499999996,lng:24.6118849}},l.a.createElement(v.Marker,{title:"Euro Trade Consulting",name:"Euro Trade Consulting",position:{lat:44.480425499999996,lng:24.6118849}},l.a.createElement(v.InfoWindow,{marker:!0,visible:!0},l.a.createElement("div",null,l.a.createElement("h1",null,"ceva"))))),l.a.createElement(v.InfoWindow,null))}}]),t}(n.Component),b=Object(v.GoogleApiWrapper)({apiKey:"AIzaSyCBkYlYSgXSTv4av1S86uKFGZpTGYSGMlY"})(p);function f(e){return l.a.createElement("div",null,l.a.createElement(o.a,{data:"Navbar2"}),l.a.createElement(c,null),l.a.createElement(b,null),l.a.createElement(s.a,null))}},31:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(30),l=t(0),o=t.n(l),r=t(11),i=!0;function c(e){var a=Object(l.useState)("none"),t=Object(n.a)(a,2),c=t[0],s=t[1];function d(){window.scrollTo({top:0})}return Object(l.useEffect)((function(){window.onscroll=function(){window.pageYOffset>150&&i?(i=!1,console.log("aiciNavbar"),document.getElementById("Navbar").classList.add("NavbarFixed")):!i&&window.pageYOffset<=150&&(i=!0,console.log("josnavbar"),document.getElementById("Navbar").classList.remove("NavbarFixed"))}}),[]),o.a.createElement("div",{className:e.data,id:"Navbar"},o.a.createElement("div",{className:"NavbarTitlu"},"Euro Trade Consulting"),o.a.createElement("div",{className:"NavbarDreapta"},o.a.createElement(r.b,{onClick:d,style:{padding:"0 10px 0 10px"},to:"/EuroTrade/Contact"},o.a.createElement("div",{style:"/EuroTrade/Contact"==window.location.pathname?{borderBottom:"solid var(--culoare) 3px"}:{border:"none"}},"CONTACT")),o.a.createElement(r.b,{onClick:d,to:"/EuroTrade/Portofoliu",style:{padding:"0 10px 0 10px"}},o.a.createElement("div",{style:"/EuroTrade/Portofoliu"==window.location.pathname?{borderBottom:"solid var(--culoare) 3px"}:{border:"none"}},"PORTOFOLIU")),o.a.createElement(r.b,{onClick:d,to:"/EuroTrade/Utilaje",style:{padding:"0 10px 0 10px"}},o.a.createElement("div",{style:"/EuroTrade/Utilaje"==window.location.pathname?{borderBottom:"solid var(--culoare) 3px"}:{border:"none"}},"UTILAJE")),o.a.createElement(r.b,{onClick:d,to:"/EuroTrade",style:{padding:"0 10px 0 10px"}},o.a.createElement("div",{style:"/EuroTrade"==window.location.pathname?{borderBottom:"solid var(--culoare) 3px"}:{border:"none"}},"ACASA"))),o.a.createElement("div",{className:"NavbarDreaptaResponsive",onClick:function(){console.log(window.location.pathname),s("block"==c?"none":"block")}},o.a.createElement("div",{style:{cursor:"pointer",userSelect:"none"}},"="),o.a.createElement("div",{className:"MeniuResponsiv",style:{display:c}},o.a.createElement("div",null,o.a.createElement(r.b,{onClick:d,style:"/EuroTrade/Contact"==window.location.pathname?{color:"var(--culoare)"}:{color:"white"},to:"/EuroTrade/Contact"},"CONTACT")),o.a.createElement("div",null,o.a.createElement(r.b,{onClick:d,style:"/EuroTrade/Portofoliu"==window.location.pathname?{color:"var(--culoare)"}:{color:"white"},to:"/EuroTrade/Portofoliu"},"PORTOFOLIU"," ")),o.a.createElement("div",null,o.a.createElement(r.b,{onClick:d,style:"/EuroTrade/Utilaje"==window.location.pathname?{color:"var(--culoare)"}:{color:"white"},to:"/EuroTrade/Utilaje"},"UTILAJE")),o.a.createElement("div",null,o.a.createElement(r.b,{onClick:d,style:"/EuroTrade"==window.location.pathname?{color:"var(--culoare)"}:{color:"white"},to:"/EuroTrade"},"ACASA")),o.a.createElement("div",{className:"MeniuResponsivApasa"},"x"))))}},32:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),l=t.n(n);function o(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("a",{href:"https://www.linkedin.com/in/george-popa-7b0183187/"},l.a.createElement("div",null,"Alte linkuri")),l.a.createElement("a",{href:"https://www.linkedin.com/in/george-popa-7b0183187/"},l.a.createElement("div",null,"Facut de Popa George Catalin")))}}}]);
//# sourceMappingURL=11.f922ed07.chunk.js.map