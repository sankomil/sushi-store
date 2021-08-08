(this["webpackJsonpsushi-store"]=this["webpackJsonpsushi-store"]||[]).push([[0],{29:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var i,o,r,c,a,s,d,l,j,x,p,b,h,f,g,u,O,m,v,y=t(0),w=t.n(y),k=t(8),z=t.n(k),C=(t(29),t(24)),P=t(2),F=t(3),J=t(4),L=F.a.nav(i||(i=Object(P.a)(["\n  background: #000;\n  height: 80px;\n  margin-top: -80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: sticky;\n  font-size: 1rem;\n  top: 0;\n  z-index: 10;\n\n  @media screen and (max-width: 960px) {\n    transition: 0.8s all ease;\n  }\n"]))),S=F.a.div(o||(o=Object(P.a)(["\n  display: flex;\n  justify-content: space-between;\n  z-index: 1;\n  width: 100%;\n  padding: 0 24px;\n  height: 80px;\n"]))),A=Object(F.a)(J.Link)(r||(r=Object(P.a)(["\n  color: #fff;\n  justify-self: flex-start;\n  cursor: pointer;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-left: 24px;\n  font-weight: bold;\n  text-decoration: none;\n"]))),D=F.a.div(c||(c=Object(P.a)(["\n  display: none;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n    color: #fff;\n  }\n"]))),I=F.a.ul(a||(a=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  text-align: center;\n  margin-right: -22px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),B=F.a.li(s||(s=Object(P.a)(["\n  height: 80px;\n"]))),E=Object(F.a)(J.Link)(d||(d=Object(P.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    border-bottom: 3px solid white;\n  }\n\n  &:hover {\n    border-bottom: 3px solid white;\n  }\n"]))),M=t(10),q=t(1),G=function(n){var e=n.toggle;return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(L,{children:Object(q.jsxs)(S,{children:[Object(q.jsx)(A,{to:"/",children:"Sushi"}),Object(q.jsx)(D,{onClick:e,children:Object(q.jsx)(M.a,{})}),Object(q.jsxs)(I,{children:[Object(q.jsx)(B,{children:Object(q.jsx)(E,{to:"about",children:"About"})}),Object(q.jsx)(B,{children:Object(q.jsx)(E,{to:"discover",children:"Discover"})}),Object(q.jsx)(B,{children:Object(q.jsx)(E,{to:"purchase",children:"Purchase"})})]})]})})})},H=F.a.aside(l||(l=Object(P.a)(["\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background: #0d0d0d;\n  display: grid;\n  align-items: center;\n  top: 0;\n  left: 0;\n  transition: 0.3s ease-in-out;\n  opacity: ",";\n  top: ",";\n"])),(function(n){return n.isOpen?"100%":"0"}),(function(n){return n.isOpen?"0":"-100%"})),K=Object(F.a)(M.b)(j||(j=Object(P.a)(["\n  color: #fff;\n"]))),N=F.a.div(x||(x=Object(P.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n"]))),Q=F.a.div(p||(p=Object(P.a)(["\n  color: #fff;\n  margin-top: 60px;\n"]))),R=Object(F.a)(J.Link)(b||(b=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  text-decoration: none;\n  transition: 0.2s ease-in-out;\n  list-style: none;\n  color: #fff;\n  cursor: pointer;\n\n  &:hover {\n    color: #000;\n    transition: 0.2s ease-in-out;\n    background: #fff;\n  }\n"]))),T=F.a.ul(h||(h=Object(P.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(6, 100px);\n\n  @media screen and (max-width: 480px) {\n    grid-template-rows: repeat(6, 80px);\n  }\n"]))),U=function(n){var e=n.isOpen,t=n.toggle;return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)(H,{isOpen:e,onClick:t,children:[Object(q.jsx)(N,{onClick:t,children:Object(q.jsx)(K,{})}),Object(q.jsx)(Q,{children:Object(q.jsxs)(T,{children:[Object(q.jsx)(R,{onClick:t,to:"about",children:"About"}),Object(q.jsx)(R,{onClick:t,to:"discover",children:"Discover"}),Object(q.jsx)(R,{onClick:t,to:"Purchase",children:"Purchase"})]})})]})})},V=F.a.div(f||(f=Object(P.a)(['\n  color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n  position: relative;\n  height: 800px;\n  z-index: 1;\n\n  :before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(\n        180deg,\n        rgba(0, 0, 0, 0.2) 0%,\n        rgba(0, 0, 0, 0.6) 100%\n      ),\n      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);\n    z-index: 2;\n  }\n']))),W=F.a.div(g||(g=Object(P.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]))),X=F.a.video(u||(u=Object(P.a)(["\n  width: 100%;\n  height: 100%;\n  --o-object-fit: cover;\n  object-fit: cover;\n  background: #232a34;\n"]))),Y=F.a.div(O||(O=Object(P.a)(["\n  z-index: 3;\n  position: absolute;\n  padding: 8px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Z=F.a.h1(m||(m=Object(P.a)(["\n  color: #fff;\n  font-size: 48px;\n  text-align: center;\n\n  @media screen and (max-width: 768px) {\n    font-size: 40px;\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n"]))),$=F.a.p(v||(v=Object(P.a)(["\n  margin-top: 24px;\n  color: #fff;\n  font-size: 24px;\n  text-align: center;\n  max-width: 600px;\n\n  @media screen and (max-width: 768px) {\n    font-size: 24px;\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 18px;\n  }\n"]))),_=t.p+"static/media/glitter.aa30f37b.mp4",nn=function(){return Object(q.jsxs)(V,{id:"about",children:[Object(q.jsx)(W,{children:Object(q.jsx)(X,{autoPlay:!0,loop:!0,muted:!0,src:_,type:"/video/mp4"})}),Object(q.jsxs)(Y,{children:[Object(q.jsx)(Z,{children:"Jewelry made easy!"}),Object(q.jsx)($,{children:"Check out our Instagram!"})]})]})},en=function(){var n=Object(y.useState)(!1),e=Object(C.a)(n,2),t=e[0],i=e[1],o=function(){i(!t)};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(U,{isOpen:t,toggle:o}),Object(q.jsx)(G,{toggle:o}),Object(q.jsx)(nn,{})]})};var tn=function(){return Object(q.jsx)("div",{children:Object(q.jsx)(en,{})})};z.a.render(Object(q.jsx)(w.a.StrictMode,{children:Object(q.jsx)(tn,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2be2eaa7.chunk.js.map