import{Aa as c,Ba as V,Ca as R,Da as F,Ea as _,Fa as f,Ga as u,Ha as z,Ia as I,J as T,Ja as C,O as y,Q as s,Ta as h,X as S,Y as v,aa as k,ca as w,ia as E,ka as d,oa as m,pa as D,qa as B,ta as O,ua as x,va as M,wa as i,xa as o,ya as p,za as P}from"./chunk-U7EIU33Z.js";var A=["button"],K=["*"],b=(()=>{class a{isPressed=m(!1);onClick=new w;contentValue=D("button");isCommand=k(!1,{transform:t=>typeof t=="string"?t==="":t});isDoubleSize=k(!1,{transform:t=>typeof t=="string"?t==="":t});handleClick(){if(!this.contentValue()?.nativeElement)return;let t=this.contentValue().nativeElement.innerText;console.log({value:t}),this.onClick.emit(t.trim())}keyboardPressedStyle(t){!this.contentValue()||this.contentValue().nativeElement.innerHTML!==t||(this.isPressed.set(!0),setTimeout(()=>{this.isPressed.set(!1)},100))}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=s({type:a,selectors:[["calculator-button"]],viewQuery:function(n,e){n&1&&_(e.contentValue,A,5),n&2&&f()},hostAttrs:[1,"border-r","border-b","border-indigo-400"],hostVars:4,hostBindings:function(n,e){n&2&&x("w-2/4",e.isDoubleSize())("w-1/4",!e.isDoubleSize())},inputs:{isCommand:[1,"isCommand"],isDoubleSize:[1,"isDoubleSize"]},outputs:{onClick:"onClick"},standalone:!0,features:[C],ngContentSelectors:K,decls:3,vars:4,consts:[["button",""],[3,"click"]],template:function(n,e){if(n&1){let r=P();R(),i(0,"button",1,0),c("click",function(){return S(r),v(e.handleClick())}),F(2),o()}n&2&&x("is-command",e.isCommand())("is-pressed",e.isPressed())},styles:["button[_ngcontent-%COMP%]{height:4rem;width:100%;font-size:1.25rem;line-height:1.75rem;font-weight:300;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px}button[_ngcontent-%COMP%]:hover{background-color:rgb(67 56 202 / var(--tw-bg-opacity));--tw-bg-opacity: .2 }button[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}.is-command[_ngcontent-%COMP%]{background-color:rgb(67 56 202 / var(--tw-bg-opacity));--tw-bg-opacity: .2 }.is-pressed[_ngcontent-%COMP%]{background-color:rgb(55 48 163 / var(--tw-bg-opacity));--tw-bg-opacity: .2 }"],changeDetection:0})}return a})();var Q=["0","1","2","3","4","5","6","7","8","9"],j=["+","-","*","/","\xF7"],N=["+/-","%",".","=","C","Backspace","Enter"],H=(()=>{class a{resultText=m("0");subResultText=m("0");lastOperator=m("+");constructNumber(t){if(![...Q,...j,...N].includes(t)){console.log("Invalid input",t);return}if(t==="="){this.calculateResult();return}if(t==="C"){this.resultText.set("0"),this.subResultText.set("0"),this.lastOperator.set("+");return}if(t==="Backspace"){if(this.resultText()==="0")return;if(this.resultText().includes("-")&&this.resultText().length===2){this.resultText.set("0");return}if(this.resultText().length===1){this.resultText.set("0");return}this.resultText.update(n=>n.slice(0,-1));return}if(j.includes(t)){this.lastOperator.set(t),this.subResultText.set(this.resultText()),this.resultText.set("0");return}if(this.resultText().length>=10){console.log("Max length reached");return}if(t==="."&&!this.resultText().includes(".")){if(this.resultText()==="0"||this.resultText()===""){this.resultText.set("0.");return}this.resultText.update(n=>n+".");return}if(!(t==="0"&&(this.resultText()==="0"||this.resultText()==="-0"))){if(t==="+/-"){if(this.resultText().includes("-")){this.resultText.update(n=>n.slice(1));return}this.resultText.update(n=>"-"+n);return}if(Q.includes(t)){if(this.resultText()==="0"){this.resultText.set(t);return}if(this.resultText()==="-0"){this.resultText.set("-"+t);return}this.resultText.update(n=>n+t);return}}}calculateResult(){let t=parseFloat(this.subResultText()),n=parseFloat(this.resultText()),e=0;switch(this.lastOperator()){case"+":e=t+n;break;case"-":e=t-n;break;case"*":e=t*n;break;case"X":e=t*n;break;case"/":e=t/n;break;case"\xF7":e=t/n;break}this.resultText.set(e.toString()),this.subResultText.set("0")}static \u0275fac=function(n){return new(n||a)};static \u0275prov=T({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function X(a,L){if(a&1&&(i(0,"span",7),u(1),o(),p(2,"br")),a&2){let t=V();d(),I(" ",t.subResultText()," ",t.lastOperator()," ")}}var q=(()=>{class a{calculatorService=y(H);calculatorButtons=B(b);resultText=h(()=>this.calculatorService.resultText());subResultText=h(()=>this.calculatorService.subResultText());lastOperator=h(()=>this.calculatorService.lastOperator());handleClick(t){this.calculatorService.constructNumber(t)}handleKeyboardEvent(t){let n={Escape:"C",Clear:"C",X:"*","/":"\xF7",Enter:"="},e=t.key,r=n[e]??e;this.handleClick(r),this.calculatorButtons().forEach(l=>{l.keyboardPressedStyle(r)})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=s({type:a,selectors:[["calculator"]],viewQuery:function(n,e){n&1&&_(e.calculatorButtons,b,5),n&2&&f()},hostBindings:function(n,e){n&1&&c("keyup",function(l){return e.handleKeyboardEvent(l)},!1,E)},standalone:!0,features:[C],decls:49,vars:2,consts:[[1,"w-screen","h-40","bg-gradient-to-b","from-gray-800","to-gray-700","flex","items-end","text-right",2,"max-width","300px"],[1,"w-full","py-5","px-6","text-6xl","text-white","font-thin"],[1,"w-full","bg-gradient-to-b","from-indigo-400","to-indigo-500"],[1,"flex","w-full"],[3,"onClick"],["isCommand","",3,"onClick"],["isCommand","","isDoubleSize","",3,"onClick"],[1,"text-4xl"]],template:function(n,e){n&1&&(i(0,"div",0)(1,"div",1),O(2,X,3,2),i(3,"span"),u(4),o()()(),i(5,"div",2)(6,"div",3)(7,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(8," C "),o(),i(9,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(10," +/- "),o(),i(11,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(12," % "),o(),i(13,"calculator-button",5),c("onClick",function(l){return e.handleClick(l)}),u(14," \xF7 "),o()(),i(15,"div",3)(16,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(17,"7"),o(),i(18,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(19,"8"),o(),i(20,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(21,"9"),o(),i(22,"calculator-button",5),c("onClick",function(l){return e.handleClick(l)}),u(23,"x"),o()(),i(24,"div",3)(25,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(26,"4"),o(),i(27,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(28,"5"),o(),i(29,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(30,"6"),o(),i(31,"calculator-button",5),c("onClick",function(l){return e.handleClick(l)}),u(32,"-"),o()(),i(33,"div",3)(34,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(35,"1"),o(),i(36,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(37,"2"),o(),i(38,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(39,"3"),o(),i(40,"calculator-button",5),c("onClick",function(l){return e.handleClick(l)}),u(41,"+"),o()(),i(42,"div",3)(43,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(44,"0"),o(),i(45,"calculator-button",4),c("onClick",function(l){return e.handleClick(l)}),u(46,"."),o(),i(47,"calculator-button",6),c("onClick",function(l){return e.handleClick(l)}),u(48," = "),o()()()),n&2&&(d(2),M(e.subResultText()!="0"?2:-1),d(2),z(e.resultText()))},dependencies:[b],encapsulation:2,changeDetection:0})}return a})();var ct=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=s({type:a,selectors:[["calculator-view"]],standalone:!0,features:[C],decls:2,vars:0,consts:[[1,"w-full","mx-auto","rounded-xl","bg-gray-100","shadow-xl","text-gray-800","relative","overflow-hidden"]],template:function(n,e){n&1&&(i(0,"div",0),p(1,"calculator"),o())},dependencies:[q],encapsulation:2,changeDetection:0})}return a})();export{ct as default};
