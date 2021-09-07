var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{c,a as s,u as l,b as d,d as m,e as p,f as u,g as h,h as b,i as g,j as v}from"./vendor.bd876216.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f=c`
    :host {
        --border-width: var(--fm-card--border-width, 1px);
        --border-color: var(--fm-card--border-color, rgba(255, 255, 255, 0.5));
        --min-height: var(--fm-card--min-height, 2.5rem);
        --radius: var(--fm-card--radius, 1rem);
        --padding-y: var(--fm-card--padding-y, 1rem);
        --padding-x: var(--fm-card--padding--x, 1rem);
        --background: var(
            --fm-card--background,
            linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.25)
            )
        );
        --shadow-size: var(--fm-card--shadow-size, 0px 6px 22px);
        --shadow-color: var(--fm-card--shadow-color, rgba(0, 0, 0, 0.05));
        --font-size: var(--fm-card--font-size, 1rem);
        --gap: var(--fm-card--gap, 1rem);
    }

    .card-box {
        background: var(--background);
        color: var(--color);
        border-radius: var(--radius);
        backdrop-filter: var(--backdrop);
        padding: var(--padding-y) var(--padding-x);
        box-sizing: border-box;
    }

    .card-box--use-border {
        border: var(--border-width) solid var(--border-color);
    }

    .card-box--use-shadow {
        box-shadow: var(--shadow-size) var(--shadow-color);
    }
`,x=c`
    :host {
        --border-width: var(--fm-input--border-width, 1px);
        --border-color: var(--fm-input--border-color, rgba(255, 255, 255, 0.5));
        --min-height: var(--fm-input--min-height, 2.5rem);
        --radius: var(--fm-input--radius, 0.5rem);
        --padding-y: var(--fm-input--padding-y, 0.5rem);
        --padding-x: var(--fm-input--padding--x, 1rem);
        --background: var(--fm-input--background, rgba(255, 255, 255, 0.5));
        --shadow-size: var(--fm-input--shadow-size, 0px 6px 22px);
        --shadow-color: var(--fm-input--shadow-color, rgba(0, 0, 0, 0.05));
        --font-size: var(--fm-input--font-size, 1rem);
        display: inline-flex;
        font-size: var(--font-size);
        min-height: var(--min-height);
        align-items: center;
    }

    .input-box {
        background: var(--background);
        color: var(--color);
        border-radius: var(--radius);
        backdrop-filter: var(--backdrop);
        box-shadow: var(--shadow-size) var(--shadow-color);
        padding: var(--padding-y) var(--padding-x);
        box-sizing: border-box;
    }

    .input-box--use-border {
        border: var(--border-width) solid var(--border-color);
    }

    .input-box--full-width {
        min-width: 100%;
    }
`,y=c`
    :host {
        --primary: var(--fm--primary, #2c3a41);
        --primary-contrast: var(--fm--primary, #fff);
        --secondary: var(--fm--secondary, black);
        --success: var(--fm--warning, rgb(24, 212, 124));
        --warning: var(--fm--warning, #f9aa33);
        --danger: var(--fm--warning, rgb(255, 91, 91));
        --info: var(--fm--warning, #0080ff);
        --checked: var(--primary);
        --checked-contrast: var(--primary-contrast);
    }
`;function w({width:e,height:t}){const a=l(),r=l(),n=l(),o=l(),i=l(),c=d(a),s=d(i),p=d(r);d(n);const u=d(o),h=m(e),b=m(t);return React.createElement("host",{shadowDom:!0},React.createElement("div",{class:"card-box card-box--use-border card-box--use-shadow"},React.createElement("div",{class:"actions"},React.createElement("slot",{name:"action",ref:n})),React.createElement("header",{class:"header "+(c.length?"":"hidden")},React.createElement("slot",{ref:a,name:"header"})),React.createElement("div",{class:"media"},React.createElement("slot",{name:"media",ref:s})),React.createElement("slot",{ref:o,class:`content ${u.length?"":"hidden"} ${p.length?"":"space-down"}`}),React.createElement("footer",{class:"footer "+(p.length?"":"hidden")},React.createElement("slot",{ref:r,name:"footer"})),React.createElement("style",null,`\n                        :host{\n                            width: ${h};\n                            height: ${b};\n                        }\n                        ::slotted([slot="media"]){\n                            border-radius: ${c.length&&u.length?"0":c.length?"0px 0px var(--radius) var(--radius)":u.length?"var(--radius) var(--radius) 0px 0px":"var(--radius)"}\n                        }\n                    `)))}w.props={width:{type:String,value:"100%"},height:{type:String,value:"auto"}},w.styles=[f,y,c`
        :host {
            display: flex;
        }
        .card-box {
            padding: 0px;
            position: relative;
            display: grid;
            grid-gap: var(--gap);
        }
        .actions {
            position: absolute;
            top: var(--padding-x);
            right: var(--padding-x);
        }

        ::slotted([slot="media"]) {
            display: block;
            object-fit: cover;
        }
        .content {
            display: grid;
            padding: 0px var(--padding-y);
            grid-gap: var(--gap);
        }
        .header {
            padding: var(--padding-y) var(--padding-x) 0px;
        }
        .hidden {
            display: none;
        }
        .footer {
            padding: 0px var(--padding-x);
        }
        .space-down {
            padding-bottom: var(--padding-y);
        }
    `];const E=s(w);function k(){const e=p("fieldset"),[t,a]=u("disabled");h(e,(e=>e.filter((e=>"disabled"==e.attributeName)).map((e=>{a(e.target.disabled)}))),{attributes:!0}),b((()=>{const{current:t}=e;t&&a(t.disabled)}),[])}function R(e){var c=e,{type:s,theme:m}=c,p=((e,t)=>{var a={};for(var i in e)n.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&r)for(var i of r(e))t.indexOf(i)<0&&o.call(e,i)&&(a[i]=e[i]);return a})(c,["type","theme"]);const[,h]=u("value"),b=l(),v=l(),f=l(),x=d(b),y=!!d(v).length||null,w=!!x.length||null;return g((()=>{return React.createElement("input",(e=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&i(e,a,t[a]);return e})({type:s},p),t(e,a({slot:"input",ref:f,withicon:y,withlabel:w}))));var e})),k(),React.createElement("host",{shadowDom:!0,checkValidity:()=>f.current.checkValidity(),oninput:()=>h(f.current.value),withicon:y,withlabel:w},React.createElement("div",{class:"input-box input-box--use-border input-box--full-width",onclick:()=>f.current.focus()},React.createElement("div",{class:"icon"},React.createElement("slot",{ref:v,name:"icon"})),React.createElement("div",{class:"label "+(x.filter((e=>"datalist"!=e.localName)).length?"":"hidden")},React.createElement("slot",{ref:b})),React.createElement("div",{class:"input"},React.createElement("slot",{name:"input"}),React.createElement("div",{class:"line"},React.createElement("div",{class:"line-fill"})))),m&&React.createElement("style",null,`:host{--line-background: var(--${m});}`))}R.props={name:String,type:String,value:null,list:String,pattern:String,min:Number,max:Number,minLength:Number,maxLength:Number,placeholder:String,required:Boolean,checked:Boolean,disabled:{type:Boolean,reflect:!0},theme:{type:String,reflect:!0,value:"primary"},withicon:{type:Boolean,reflect:!0},withlabel:{type:Boolean,reflect:!0}},R.styles=[x,y,c`
        .input-box {
            padding: 0;
            position: relative;
            min-height: var(--min-height);
        }

        ::slotted(input) {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            font-family: unset;
            font-size: unset;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            padding: var(--padding-y) var(--padding-x);
        }

        .input-box {
            display: grid;
            align-items: center;
            grid-template-columns: 0 0 auto;
        }

        :host([withlabel]) .input-box {
            grid-template-columns: 0 auto auto;
        }
        :host([withicon]) .input-box {
            grid-template-columns: auto auto auto;
        }

        :host([withicon][withlabel]) .label {
            padding-left: 0.5em;
        }

        :host([withicon]:not([withlabel])) .input-box {
            grid-template-columns: auto 0 auto;
        }

        :host([withlabel]) .input-box,
        :host([withicon]) .input-box {
            padding-left: var(--padding-x);
        }

        ::slotted(input[withicon]),
        ::slotted(input[withlabel]) {
            padding-left: 0.5em;
        }

        .line {
            width: 100%;
            height: 0.125rem;
            padding: 0 var(--padding-x);
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 3;
            transform: translateY(100%);
        }
        .line-fill {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background: var(--line-background);
        }

        .icon {
            display: flex;
        }
    `];const z=s(R);function S(e){const[t]=u("name"),[a]=u("value"),[r,n]=u("checked"),o=l();return v("change",(e=>{const{currentTarget:r}=e;n(new FormData(r).get(t)===a)})),v("reset",(()=>n(!1))),g((()=>React.createElement("input",{type:e,name:t,value:a,ref:o,checked:r,onchange:e=>{n(e.target.checked)}})),[r]),o}function B(){const e=S("checkbox");return k(),React.createElement("host",{shadowDom:!0},React.createElement("button",{onclick:()=>{e.current.click()},class:"input-box input-box--use-border"},React.createElement("div",{class:"checkbox-state"},React.createElement("slot",{name:"icon"},React.createElement("svg",{class:"icon",width:".7rem",viewBox:"0 0 11.192 8.364"},React.createElement("path",{d:"M-1530.757,8.778a1,1,0,0,1-.67-.257l-.037-.035-2.829-2.829a1,1,0,0,1,0-1.414,1,1,0,0,1,1.415,0l2.121,2.122L-1525.1.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-6.364,6.364a1,1,0,0,1-.707.293Z",fill:"currentColor",transform:"translate(1534.586 -0.414)"}))))))}B.props={name:{type:String,reflect:!0},value:{type:null,value:"on"},checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}},B.styles=[x,y,c`
        :host {
            color: var(--theme--checked);
        }

        :host([checked]) .checkbox-state {
            opacity: 1;
        }

        ::slotted([slot="icon"]),
        svg {
            color: var(--checked-contrast);
        }

        slot[name="icon"] {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .input-box {
            --size: calc(var(--min-height) * 0.75);
            width: var(--size);
            height: var(--size);
            padding: 0px;
            cursor: pointer;
        }

        .input-box--use-border {
            --border-color: currentColor;
        }

        .checkbox-state {
            --state-scale: 0.8;
            --state-size: calc((var(--size) * var(--state-scale)));
            --state-max-size: calc(var(--size) - (var(--border-width) * 2));
            width: var(--state-size);
            height: var(--state-size);
            max-width: var(--state-max-size);
            max-height: var(--state-max-size);
            margin: auto;
            border-radius: calc(var(--radius) * var(--state-scale));
            background: currentColor;
            opacity: 0;
        }

        .input-box,
        .checkbox-state {
            transition: 0.3s ease all;
        }
    `];const O=s(B);function $(){const e=S("checkbox");return k(),React.createElement("host",{shadowDom:!0},React.createElement("button",{onclick:()=>e.current.click(),class:"input-box input-box--use-border"},React.createElement("div",{class:"checkbox-state"},React.createElement("slot",{name:"icon"}))))}$.styles=c`
    .input-box {
        --scale: 1.7;
        width: calc(var(--size) * var(--scale));
        border-radius: 10vh;
    }

    .checkbox-state {
        --state-scale: 0.6;
        --x: calc((var(--size) * var(--scale) - var(--size)) / 2);
        border-radius: 10vh;
        position: relative;
        transform: translateX(calc(var(--x) * -1));
        opacity: 0.25;
        transform-origin: left center;
    }

    :host([checked]) .input-box {
        background: currentColor;
    }

    :host([checked]) .checkbox-state {
        opacity: 1;
        transform: translateX(var(--x));
        transform-origin: right center;
        background: var(--checked-contrast);
    }
`;const j=s($,O);function D(){const e=S("radio");return k(),React.createElement("host",{shadowDom:!0},React.createElement("button",{class:"input-box input-box--use-border",onclick:t=>{e.current.click()}},React.createElement("div",{class:"checkbox-state"})))}D.styles=c`
    .input-box,
    .checkbox-state {
        border-radius: 100%;
    }

    .checkbox-state {
        --state-scale: 0.6;
    }
`;const N=s(D,O);function L({disabled:e,name:t}){const[a,r]=u("value"),n=l();return k(),g((()=>React.createElement("input",{ref:n,oninput:({target:e})=>r(e.value),name:t,type:"color",value:a,disabled:e,tabindex:"-1"})),[t,a]),React.createElement("host",{shadowDom:!0},React.createElement("button",{class:"input-box input-box--use-border",style:`--background: ${a}`},React.createElement("slot",null)))}L.props={name:String,value:{type:String,value:"#000"},disabled:{type:Boolean,reflect:!0}},L.styles=[x,y,c`
        ::slotted(input) {
            width: 100%;
            height: 100%;
            padding: 0px;
            border: 0px;
            opacity: 0;
            position: absolute;
            top: 0px;
            left: 0px;
        }

        .input-box {
            --size: calc(var(--min-height) * 0.75);
            width: var(--size);
            height: var(--size);
            position: relative;
            padding: 0;
            cursor: pointer;
        }

        .input-box--use-border {
            --border-color: currentColor;
        }
    `];const A=s(L);function M(){const e=l(),t=d(e);k();const a=t.filter((e=>e instanceof HTMLOptionElement||e instanceof HTMLOptGroupElement));return g((()=>React.createElement("select",{slot:"input",name:"",id:""},a.map((e=>{const t=e.cloneNode(!0);return React.createElement(t,null)})))),a),React.createElement("host",{shadowDom:!0},React.createElement("slot",{class:"options",ref:e}),React.createElement("div",{className:"input-box input-box--use-border input-box--full-width"},React.createElement("div",{class:"icon"},React.createElement("slot",{name:"icon"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.486",height:"6.242",viewBox:"0 0 10.486 6.242"},React.createElement("path",{id:"Trazado_6","data-name":"Trazado 6",d:"M-7.051,242.364l-4.243-4.243a1,1,0,0,1,0-1.414,1,1,0,0,1,1.415,0l3.535,3.535,3.535-3.535a1,1,0,0,1,1.415,0,1,1,0,0,1,0,1.414l-4.243,4.243a1,1,0,0,1-.707.293A1,1,0,0,1-7.051,242.364Z",transform:"translate(11.586 -236.414)",fill:"#2c3a41"})))),React.createElement("slot",{name:"input"})))}M.props={name:String,disabled:Boolean},M.styles=[x,y,c`
        .input-box {
            padding: 0;
            position: relative;
        }

        ::slotted(select) {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            font-family: unset;
            font-size: unset;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            padding: var(--padding-y) calc(var(--padding-x) * 2)
                var(--padding-y) var(--padding-x);
            appearance: none;
            min-height: var(--min-height);
        }

        .options {
            display: none;
        }

        .icon {
            display: flex;
            position: absolute;
            top: 50%;
            right: var(--padding-x);
            transform: translateY(-50%);
        }
    `];const C=s(M);function P({type:e,name:t,value:a,theme:r,disabled:n}){const o=l(),i=l(),c=l(),s=d(o),m=d(i);return g((()=>React.createElement("button",{type:"submit",name:t,value:a,ref:c,slot:"button",tabindex:"-1"})),[e,t,a]),React.createElement("host",{shadowDom:!0},React.createElement("button",{onclick:()=>c.current.click(),disabled:n,class:`input-box input-box--use-border input-box--full-width ${s.length?" box-icon":""}${m.length?" box-label":""}`,style:r&&{"--background":`var(--${r})`,"--color":`var(--${r}-contrast, var(--primary-contrast))`}},React.createElement("slot",{ref:o,name:"icon"}),React.createElement("slot",{ref:i})))}P.props={name:String,value:String,ghost:{type:Boolean,reflect:!0},type:{type:String,value:"submit"},theme:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0}},P.styles=[x,y,c`
        button {
            font-size: unset;
            font-weight: unset;
        }

        button:not(:disabled) {
            cursor: pointer;
        }

        button:disabled {
            opacity: 0.25;
        }

        .input-box {
            display: grid;
            grid-gap: 0.5em;
            align-items: center;
            justify-content: center;
            min-width: var(--min-height);
            min-height: var(--min-height);
        }

        :host([size="small"]) .input-box {
            --size: calc(var(--min-height) * 0.8);
            min-height: var(--size);
            min-width: var(--size);
            padding: 0 var(--padding-x);
        }

        :host([ghost]) .input-box {
            background: transparent;
            border: none;
            box-shadow: none;
        }

        :host([size="small"]) {
            font-size: 0.75em;
        }

        ::slotted([slot="icon"]) {
            display: block;
        }

        .box-icon:not(.box-label) {
            padding: 0;
        }

        .box-icon.box-label {
            grid-template-columns: auto auto;
        }
    `];const T=s(P);function Z({theme:e}){return React.createElement("host",{shadowDom:!0},React.createElement("div",{class:"card-box card-box--use-border",style:e&&{"--border-color":"var(--theme)"}},React.createElement("div",{class:"icon"},React.createElement("slot",{name:"icon"},React.createElement("svg",{width:"31.89",height:"27.336",viewBox:"0 0 31.89 27.336"},React.createElement("path",{d:"M-3350.066-59.292h-21.869a4.937,4.937,0,0,1-4.378-2.585,4.939,4.939,0,0,1,.149-5.083l10.935-17.335A4.973,4.973,0,0,1-3361-86.628a4.975,4.975,0,0,1,4.229,2.333l10.934,17.335a4.937,4.937,0,0,1,.15,5.083A4.937,4.937,0,0,1-3350.066-59.292ZM-3361-72.428a1.86,1.86,0,0,0-1.857,1.858v4.952A1.86,1.86,0,0,0-3361-63.761a1.859,1.859,0,0,0,1.857-1.858v-4.952A1.859,1.859,0,0,0-3361-72.428Zm0-6.19a1.859,1.859,0,0,0-1.857,1.857A1.86,1.86,0,0,0-3361-74.9a1.859,1.859,0,0,0,1.857-1.858A1.859,1.859,0,0,0-3361-78.619Z",transform:"translate(3376.945 86.628)",fill:"var(--theme)"})))),React.createElement("slot",null)),React.createElement("style",null,`:host{--theme: var(--${e}, currentColor)}`))}Z.props={theme:{type:String,reflect:!0,value:"primary"}},Z.styles=[f,y,c`
        .card-box {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1em;
        }
        .icon {
            padding-top: 0.5em;
        }
    `];const q=s(Z);customElements.define("fm-card",E),customElements.define("fm-input-basic",z),customElements.define("fm-input-switch",j),customElements.define("fm-input-checkbox",O),customElements.define("fm-input-radio",N),customElements.define("fm-input-color",A),customElements.define("fm-input-select",C),customElements.define("fm-button",T),customElements.define("fm-alert",q);
