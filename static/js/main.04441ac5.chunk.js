(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{34:function(e,t,a){e.exports=a(73)},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/collapsible-arrow.ef2915c0.svg"},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(20),r=a.n(o),s=a(16),l=(a(43),a(44),a(31)),i=a(14),m=a(2),d=a(3),u=a(5),p=a(4),h=a(6),v=a(29),f=a.n(v),b=a(11),g=a.n(b),y={storeInfo:"Store info",name:"Name",address:"Address",phone:"Phone",redInvoiceInfo:"Red invoice info",companyName:"Company Name",mst:"MST",editProfile:"Edit Profile",deliveryMessage:"Delivery default message",writeYourMessage:"Write your message",update:"Update",editStoreProfile:"Edit store profile",remove:"Remove",uploadImage:"Upload image",storeName:"Store name",district:"District",city:"City",storeAddress:"Store address",companyAddress:"Company address",save:"Save",cancel:"Cancel",basicInfo:"Basic info",ok:"OK",saveSuccess:"Save success",incorrectPhoneFormat:"Error",messagePhoneFormat:"Format phone should be (XXX) XXX-XXXX"};function E(e,t,a,n,c){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],r=g.a.isEmpty(t)?"":t;f()({title:g.a.isEmpty(e)?"Server Error...":e,html:'<pre style="white-space: pre-wrap;">'+r+"</pre>",imageUrl:"",imageWidth:76,imageHeight:76,imageAlt:"",customClass:"",showCloseButton:c||!0,confirmButtonClass:"btn green text white",cancelButtonClass:"btn white h4",buttonsStyling:!1,confirmButtonText:y.ok,focusConfirm:!0,focusCancel:!0,showCancelButton:o||!1,onClose:a,cancelButtonText:y.cancel}).then((function(e){e&&e.value&&n&&n()}))}var C="GET_DATA_SUCCESS",O="SAVE_DATA_SUCCESS",N=(a(46),function(e){var t=e.src;return c.a.createElement("div",{className:"avatar ".concat(t?"has-image":"")},c.a.createElement("div",{className:"bg-image",style:{backgroundImage:"url(".concat(t,")")}}))}),k=(a(47),{white:"white",gray:"gray",black:"black"}),I=function(e){var t=e.label,a=e.size,n=e.color,o=e.className,r=e.children,s=e.onClick,l=e.link,i=e.textColor,m=e.bold,d="btn  ".concat(a||""," ").concat(n||""," ").concat(o||"");return c.a.createElement("a",{href:l||"javascript: void(0)",className:d,onClick:s},r||c.a.createElement("span",{className:"text ".concat(!0===m?"bold":""," ").concat(i||k[n]," ").concat(a)},t))};I.defaultProps={className:"",color:""};var j=I,w=(a(48),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).toggle=function(e){e.stopPropagation(),a.props.onCheck()},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.text,n=e.center,o=e.className,r=e.id,s=e.color,l=e.blocked,i=e.checked,m=l?"blocked":i?"checked":"";return c.a.createElement("div",{className:"checkbox ".concat(m," ").concat(o||""),style:{alignItems:n?"center":""},onClick:this.toggle},c.a.createElement("div",{className:"icon"}),c.a.createElement("input",{className:"hide",id:r,type:"checkbox"}),a?c.a.createElement("label",{className:"pad-left ".concat(s),htmlFor:r},a):c.a.createElement("label",{className:"pad-left ".concat(s),htmlFor:r},c.a.createElement("div",{className:"content"},t)))}}]),t}(n.Component));w.defaultProps={color:"\x1c",blocked:!1};var x=w,S=(a(49),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={stateValue:a.props.value,focus:!1,type:a.props.password?"password":"text"},a.clear=function(){a.setState({stateValue:""})},a.focus=function(){a.setState({focus:!0})},a.handleChange=function(e){var t=a.props,n=t.id,c=t.onChange,o=t.onChangeId;if(!a.readonly){var r=e.target.value;c&&c(r),o&&o(n,r),a.setState({stateValue:r})}},a.handleFocus=function(){a.setState({focus:!0})},a.handleBlur=function(){a.setState({focus:!1})},a.handleKeyPress=function(e){"Enter"===e.key&&a.props.onEnter&&a.props.onEnter()},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.stateValue,n=t.type,o=t.focus,r=this.props,s=r.id,l=r.label,i=r.icon,m=r.disabled,d=r.className,u=r.placeholder,p=r.value;return c.a.createElement("div",{className:"sc-input-container ".concat(d||""," ").concat(l?"":"no-label")},l&&c.a.createElement("div",{className:"label text small ".concat(m?"disabled":"")},l),c.a.createElement("div",{className:"d-flex align-left flex1"},i&&c.a.createElement("img",{className:"mar-right-sm extra-icon",src:i,alt:""}),c.a.createElement("div",{className:"input-container ".concat(o?"focus":"")},c.a.createElement("input",{key:s,autoFocus:this.props.autoFocus,value:p||a,disabled:m,type:n,placeholder:u,onBlur:this.handleBlur,onFocus:this.handleFocus,onChange:this.handleChange,onKeyPress:this.handleKeyPress,ref:function(t){return e.input=t}}))))}}]),t}(n.Component));S.defaultProps={type:"text",readonly:!1,onChange:function(){},onBlur:function(){},value:""};var P=S,A=a(30),D=(a(66),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).toggle=function(){a.setState((function(e){return{showOptions:!e.showOptions}}))},a.selectItem=function(e){a.setState({selectedOption:e}),a.toggle(),a.props.onChange&&a.props.onChange(e)},a.renderOption=function(e){return c.a.createElement("div",{className:"dropdown-option"},c.a.createElement(F,null,e.label))},a.state={showOptions:!1,selectedOption:{value:"",label:""},selectedItem:a.props.placeholder},a.dropdownRef=c.a.createRef(),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object(b.find)(this.props.options,{value:this.props.value});t&&this.setState({selectedOption:t}),this.dropdownRef.current.addEventListener("focusout",(function(){e.setState({showOptions:!1})}))}},{key:"componentDidUpdate",value:function(){if(this.props.value&&this.props.value!==this.state.selectedOption.value){var e=Object(b.find)(this.props.options,{value:this.props.value});e?this.setState({selectedOption:e}):this.setState({selectedOption:{value:"",label:""}})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.showOptions,o=t.selectedOption,r=this.props,s=r.label,l=r.placeholder,i=r.className,m=r.icon,d=r.options,u=r.renderOption,p=r.width,h=r.customStyle,v=Object(b.isFunction)(u)?u:this.renderOption,f="dropdown ".concat(n?"is-open":"");return c.a.createElement("div",{style:{width:p},className:f,tabIndex:"-1",ref:this.dropdownRef},c.a.createElement(F,{className:"small label"},s),c.a.createElement("div",{onClick:this.toggle,style:h,className:"dropdown-header ".concat(i||"")},c.a.createElement("div",{className:"row align-left"},m&&c.a.createElement("img",{className:"mar-right-sm extra-icon",src:m,alt:""}),c.a.createElement("div",null,c.a.createElement(F,{className:"medium  ".concat(o.value?"text-dark":"text-placeholder")},o.value?o.label:l))),c.a.createElement("img",{className:"arrow",src:a(67),alt:""})),c.a.createElement("div",{className:"dropdown-content"},c.a.createElement(A.Scrollbars,{autoHeight:!0},Object(b.map)(d,(function(t){return c.a.createElement("div",{onClick:function(){e.selectItem(t)},key:t.value},v(t))})))))}},{key:"value",get:function(){return this.state.selectedOption.value}}]),t}(n.Component));D.defaultProps={renderOption:null,width:"auto",onChange:function(){}};var M=D,F=(a(68),function(e){var t=e.value,a=e.className,n=e.children,o="text ".concat(a||"");return c.a.createElement("p",Object.assign({},e,{className:o}),n||t)}),T=(a(69),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={isActive:a.props.isActive},a.close=function(){var e=a.props.onClose;a.setState({isActive:!1},(function(){document.querySelector("body").classList.remove("modal-open"),e&&e()}))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState({isActive:e.isActive},(function(){t.state.isActive?document.querySelector("body").classList.add("modal-open"):document.querySelector("body").classList.remove("modal-open")}))}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.hideCloseBtn,n=e.children,o=this.state.isActive;return c.a.createElement("div",{className:"modal ".concat(o?"modal-open":""," ").concat(t||"")},c.a.createElement("div",{className:"modal-dialog"},c.a.createElement("div",{className:"modal-content"},!a&&c.a.createElement("div",{className:"cancel-btn-modal",onClick:this.close},c.a.createElement("div",{className:"close-button"},"X")),n)))}}]),t}(n.Component)),U=(a(70),a(18));var B={checkers:{phone:{check:function(e){return/^\(\d{3}\)\s\d{3}-\d{4}$/.test(e)},invalidInfo:function(){return{title:y.incorrectPhoneFormat,message:y.messagePhoneFormat}}}},getInvalidValidationFrom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=g.a.compact(e).find((function(e){var t=e.checker,a=e.value,n=e.compareValue;return!t.check(a,n)}));return t?t.checker.invalidInfo():null}};a(71);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach((function(t){Object(U.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=[{label:"City 1",value:"city 1"},{label:"City 2",value:"city 2"},{label:"City 3",value:"city 3"}],L=[{label:"District 1",value:"district 1"},{label:"District 2",value:"district 2"},{label:"District 3",value:"district 3"}],W=function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).onChangeInput=function(e,t){a.setState(Object(U.a)({},e,t))},a.openImagePicker=function(){a.documentImgInput.click()},a.removeFileUpload=function(){a.documentImgInput.value="",a.onChangeInput("srcImg","")},a.saveData=function(){var e=a.state.phone,t=[{checker:B.checkers.phone,value:e}],n=B.getInvalidValidationFrom(t);n?E(n.title,n.message,[{text:y.ok}]):(a.props.postData(R({},a.state)),a.props.onCloseModal())};var n=e.data;return a.state=R({},n),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(R({},e.data))}},{key:"handleFileUpload",value:function(e){var t=this,a=e.target.files[0],n=new FileReader;n.onload=function(e){t.onChangeInput("srcImg",e.target.result)},n.readAsDataURL(a)}},{key:"render",value:function(){var e=this,t=this.props,a=t.isActive,n=t.onCloseModal,o=this.state,r=o.name,s=o.address,l=o.district,i=o.city,m=o.phone,d=o.companyName,u=o.companyAddress,p=o.companyDistrict,h=o.companyCity,v=o.mst,f=o.srcImg;return c.a.createElement(T,{isActive:a},c.a.createElement("div",{className:"edit-profile"},c.a.createElement("h2",{className:"title-page mb-2"},y.editProfile),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement(N,{src:f}),c.a.createElement("div",{className:"d-flex justify-content-around"},c.a.createElement(j,{className:"mt-2",onClick:this.removeFileUpload,textColor:"black",color:"transparent",label:y.remove}),c.a.createElement(j,{color:"gray1",className:"mt-2",textColor:"black",label:y.uploadImage,onClick:this.openImagePicker}),c.a.createElement("input",{ref:function(t){return e.documentImgInput=t},onChange:function(t){return e.handleFileUpload(t)},className:"hidden",id:"document-img",name:"document-img",type:"file",accept:"image/gif, image/jpeg, image/png"}))),c.a.createElement("div",{className:"col-8"},c.a.createElement("h4",{className:"mb-2"},y.basicInfo.toUpperCase()),c.a.createElement(P,{id:"name",value:r,type:"text",className:"flex1 mb-2",onChangeId:this.onChangeInput,placeholder:y.storeName,label:y.storeName}),c.a.createElement(P,{id:"phone",value:m,type:"text",className:"flex1 mb-2",onChangeId:this.onChangeInput,placeholder:y.phone,label:y.phone}),c.a.createElement("div",{className:"row mb-2 align-items-end"},c.a.createElement("div",{className:"col-6"},c.a.createElement(P,{id:"address",value:s,type:"text",className:"flex1",onChangeId:this.onChangeInput,placeholder:y.address,label:y.storeAddress})),c.a.createElement("div",{className:"col-3"},c.a.createElement(M,{id:"district",label:"",placeholder:y.district,onChange:function(t){var a=t.value;return e.onChangeInput("district",a)},options:L,value:l})),c.a.createElement("div",{className:"col-3"},c.a.createElement(M,{id:"city",label:"",placeholder:y.city,onChange:function(t){var a=t.value;return e.onChangeInput("city",a)},options:V,value:i}))),c.a.createElement("h4",{className:"mb-2"},y.redInvoiceInfo.toUpperCase()),c.a.createElement(P,{id:"companyName",value:d,type:"text",className:"flex1 mb-2",onChangeId:this.onChangeInput,placeholder:y.companyName,label:y.companyName}),c.a.createElement("div",{className:"row mb-2 align-items-end"},c.a.createElement("div",{className:"col-6"},c.a.createElement(P,{id:"companyAddress",value:u,type:"text",className:"flex1",onChangeId:this.onChangeInput,placeholder:y.address,label:y.companyAddress})),c.a.createElement("div",{className:"col-3"},c.a.createElement(M,{id:"companyDistrict",label:"",placeholder:y.district,onChange:function(t){var a=t.value;return e.onChangeInput("companyDistrict",a)},options:L,value:p})),c.a.createElement("div",{className:"col-3"},c.a.createElement(M,{id:"companyCity",label:"",placeholder:y.city,onChange:function(t){var a=t.value;return e.onChangeInput("companyCity",a)},options:V,value:h}))),c.a.createElement(P,{id:"mst",value:v,type:"text",className:"flex1 mb-2",onChangeId:this.onChangeInput,placeholder:y.mst,label:y.mst}),c.a.createElement("div",{className:""},c.a.createElement(j,{color:"green",size:"big",className:"mt-2",onClick:this.saveData,textColor:"white",label:y.save}),c.a.createElement(j,{size:"big",color:"transparent",onClick:n,textColor:"black",label:y.cancel}))))))}}]),t}(c.a.Component),K=Object(s.b)((function(e){return{data:e.temp.data}}),{postData:function(e){return function(t){E(y.saveSuccess,"",[{text:y.ok}]),t({type:O,payload:e})}}})(W),z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={openModal:!1},a.renderInfoText=function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-5"},c.a.createElement("p",{className:"text gray"},"".concat(e,":"))),c.a.createElement("div",{className:"col-7"},c.a.createElement("p",{className:"text black"},t)))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.name,n=t.address,o=t.phone,r=t.companyName,s=t.companyAddress,l=t.mst,i=t.srcImg,m=this.state.openModal;return c.a.createElement("div",{className:"panel"},c.a.createElement(N,{src:i}),c.a.createElement("div",{className:"show-info"},c.a.createElement("h4",{className:"title-info mt-2 mb-1"},y.storeInfo.toUpperCase()),c.a.createElement("div",{className:"row"},this.renderInfoText(y.name,a),this.renderInfoText(y.address,n),this.renderInfoText(y.phone,o)),c.a.createElement("h4",{className:"title-info mt-2 mt-2 mb-1"},y.redInvoiceInfo.toUpperCase()),c.a.createElement("div",{className:"row"},this.renderInfoText(y.companyName,r),this.renderInfoText(y.address,s),this.renderInfoText(y.mst,l)),c.a.createElement(j,{size:"big",color:"gray1",className:"mt-1",onClick:function(){return e.setState({openModal:!0})},textColor:"black",label:y.editProfile})),c.a.createElement(K,{isActive:m,onCloseModal:function(){return e.setState({openModal:!1})}}))}}]),t}(c.a.Component),H=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={deliveryMessageId:[{text:"Lorem ipsum is dolor assets",checked:!0},{text:"",checked:!1},{text:"",checked:!1},{text:"",checked:!1},{text:"",checked:!1}]},a.onChangeCheckbox=function(e,t){var n=a.state.deliveryMessageId;n[e].checked=!t,a.setState({deliveryMessageId:n})},a.onChangeInput=function(e,t){var n=a.state.deliveryMessageId;n[e].text=t,a.setState({deliveryMessageId:n})},a.renderInputMessage=function(e,t){var n=e.text,o=e.checked;return c.a.createElement("div",{className:"d-flex mt-1",key:t},c.a.createElement(x,{className:"mr-1",checked:o,onCheck:function(){return a.onChangeCheckbox(t,o)}}),c.a.createElement(P,{id:t,value:n,type:"text",className:"flex1",onChangeId:a.onChangeInput,placeholder:y.writeYourMessage}))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.deliveryMessageId;return c.a.createElement("div",{className:"panel delivery-message"},c.a.createElement("p",{className:"text black uppercase"},y.deliveryMessage),t.map((function(t,a){return e.renderInputMessage(t,a)})),c.a.createElement(j,{size:"small",color:"gray1",className:"mt-2",onClick:function(){},textColor:"black",label:y.update}))}}]),t}(c.a.Component),_=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.getData()}},{key:"render",value:function(){var e=this.props.data;return c.a.createElement("div",{className:"pt-3 pb-3"},c.a.createElement("h2",{className:"title-page"},"Store Information"),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col-4"},c.a.createElement(z,{data:e})),c.a.createElement("div",{className:"col-8"},c.a.createElement(H,null))))}}]),t}(c.a.Component),q=Object(s.b)((function(e){return{data:e.temp.data}}),{getData:function(){return function(e){e({type:C,payload:{name:"K.O.I The",address:"Ho Tung Mau, TPHCM",district:"district 1",city:"city 2",phone:"(338) 886-9944",companyName:"K.O.I The International Company",companyAddress:"9862 Wakehurst Avenue Arlington Heights, IL 600004",companyDistrict:"",companyCity:"",mst:"P77744944",srcImg:""}})}}})(_);var J=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(l.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0},c.a.createElement(q,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(15),$=a(33);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(U.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Z={data:{name:"",address:"",district:"",city:"",phone:"",companyName:"",companyAddress:"",companyDistrict:"",companyCity:"",mst:"",srcImg:""}};var ee=Object(Y.c)({temp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(t.error,a){case C:case O:return Q({},e,{data:n});default:return e}}}),te=Object(Y.d)(ee,Object(Y.a)($.a));r.a.render(c.a.createElement(s.a,{store:te},c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.04441ac5.chunk.js.map