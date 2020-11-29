(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{238:function(e,a,t){"use strict";var n=t(1),c=t(3),o=t(0),i=(t(5),t(4)),s=t(169),r=t(7),l=o.forwardRef((function(e,a){var t=e.classes,r=e.className,l=e.raised,d=void 0!==l&&l,u=Object(c.a)(e,["classes","className","raised"]);return o.createElement(s.a,Object(n.a)({className:Object(i.a)(t.root,r),elevation:d?8:1,ref:a},u))}));a.a=Object(r.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},239:function(e,a,t){"use strict";var n=t(1),c=t(3),o=t(0),i=(t(5),t(4)),s=t(7),r=o.forwardRef((function(e,a){var t=e.classes,s=e.className,r=e.component,l=void 0===r?"div":r,d=Object(c.a)(e,["classes","className","component"]);return o.createElement(l,Object(n.a)({className:Object(i.a)(t.root,s),ref:a},d))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(r)},253:function(e,a,t){"use strict";var n=t(1),c=t(3),o=t(0),i=(t(5),t(4)),s=t(7),r=t(70),l=o.forwardRef((function(e,a){var t=e.children,s=e.classes,l=e.className,d=e.focusVisibleClassName,u=Object(c.a)(e,["children","classes","className","focusVisibleClassName"]);return o.createElement(r.a,Object(n.a)({className:Object(i.a)(s.root,l),focusVisibleClassName:Object(i.a)(d,s.focusVisible),ref:a},u),t,o.createElement("span",{className:s.focusHighlight}))}));a.a=Object(s.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(l)},254:function(e,a,t){"use strict";var n=t(1),c=t(3),o=t(0),i=(t(5),t(4)),s=t(7),r=["video","audio","picture","iframe","img"],l=o.forwardRef((function(e,a){var t=e.children,s=e.classes,l=e.className,d=e.component,u=void 0===d?"div":d,m=e.image,p=e.src,f=e.style,b=Object(c.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==r.indexOf(u),v=!h&&m?Object(n.a)({backgroundImage:'url("'.concat(m,'")')},f):f;return o.createElement(u,Object(n.a)({className:Object(i.a)(s.root,l,h&&s.media,-1!=="picture img".indexOf(u)&&s.img),ref:a,style:v,src:h?m||p:void 0},b),t)}));a.a=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},255:function(e,a,t){"use strict";var n=t(1),c=t(3),o=t(0),i=(t(5),t(4)),s=t(7),r=o.forwardRef((function(e,a){var t=e.disableSpacing,s=void 0!==t&&t,r=e.classes,l=e.className,d=Object(c.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(n.a)({className:Object(i.a)(r.root,l,!s&&r.spacing),ref:a},d))}));a.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(r)},285:function(e,a,t){"use strict";t.r(a);var n=t(43),c=t(0),o=t.n(c),i=t(200),s=t(223),r=t(69),l=t(42),d=t(169),u=t(212),m=t(203),p=t(205),f=function(e){var a=e.discounts,t=e.classes,n=e.showDiscounts,i=Object(c.useState)(""),s=Object(l.a)(i,2),r=s[0],f=s[1];return n?o.a.createElement(d.a,{classes:{root:t.paper}}," Discounts are hidden"):o.a.createElement(d.a,{variant:"outlined"},o.a.createElement(u.a,{component:"nav","aria-label":"secondary mailbox folders"},a.map((function(e){return o.a.createElement(m.a,{onClick:function(){return f(e.id)},button:!0,selected:e.id===r},o.a.createElement(p.a,{primary:"".concat(e.destination," 15% OFF")}))}))))},b=Object(i.a)({paper:{width:500,height:150,display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",margin:"15px"}}),h=function(e){var a=e.updateShowDiscounts,t=e.discounts,n=e.showDiscounts,c=b();return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{variant:"h6",component:"h6"},"Discounts"),o.a.createElement(s.a,{checked:n,onChange:a,color:"primary",name:"checkedB",inputProps:{"aria-label":"primary checkbox"}}),o.a.createElement(f,{discounts:t,showDiscounts:n,classes:c}))},v=t(238),g=t(253),O=t(255),j=t(239),E=t(254),y=t(216),w=t(45),N=Object(i.a)({root:{maxWidth:500},media:{height:140}});var V=function(e){var a=e.vacation,t=(e.handleVacationOnClick,e.updateSelectedVacation),n=N();return o.a.createElement(w.b,null,o.a.createElement(v.a,{className:n.root,onClick:function(){return e=a.id,t(e);var e}},o.a.createElement(g.a,null,o.a.createElement(E.a,{component:"img",className:n.media,src:a.image,title:a.description}),o.a.createElement(j.a,null,o.a.createElement(r.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.destination),o.a.createElement(r.a,{variant:"body2",color:"textSecondary",component:"p"},a.description),o.a.createElement(r.a,{variant:"body2",color:"textSecondary",component:"p"},a.price))),o.a.createElement(O.a,null,o.a.createElement(y.a,{variant:"contained",size:"small",color:"primary"},"Order"),o.a.createElement(y.a,{size:"small",color:"secondary"},"Learn More"))))},C=Object(c.memo)((function(e){var a=e.vacations,t=e.handleVacationOnClick,n=e.updateSelectedVacation;return console.count("VacationsItems"),a.map((function(e){return o.a.createElement(V,{vacation:e,handleVacationOnClick:t,updateSelectedVacation:n})}))})),k=Object(i.a)({vacationsRoot:{display:"grid",gridColumnGap:"10px",gridRowGap:"15px",gridTemplateColumns:"2fr 2fr 2fr"}});var S=function(e){var a=e.getVacations,t=e.updateShowDiscounts,n=e.vacations,i=e.discounts,s=e.showDiscounts,r=(e.selectedVacation,e.updateSelectedVacation);Object(c.useEffect)((function(){a&&a()}),[]);var l=k();return console.count("Vacations"),o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{updateShowDiscounts:t,discounts:i,showDiscounts:s}),o.a.createElement("div",{className:l.vacationsRoot},o.a.createElement(C,{vacations:n,handleVacationOnClick:function(e){return r(e)},updateSelectedVacation:r})))},x=t(76),D=t(112),R={getVacations:x.a,updateShowDiscounts:x.e,updateSelectedVacation:x.d},M=Object(n.b)((function(e){return{vacations:Object(D.a)(e),discounts:Object(D.b)(e),showDiscounts:Object(D.d)(e),selectedVacation:Object(D.c)(e)}}),R)(S);a.default=M}}]);
//# sourceMappingURL=vacation.2489280f.bundle.js.map