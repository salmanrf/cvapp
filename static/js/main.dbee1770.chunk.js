(this.webpackJsonpcvapp=this.webpackJsonpcvapp||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(2),a=n.n(i),s=n(15),o=n.n(s),r=(n(22),n(23),n(4)),l=n(5),d=n(7),j=n(6),m=n(3),h=n(10),p=n(12),b=n(13),u=n(9),O=n(8),x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).updateContent=function(e){return function(){c.setState(Object(h.a)({},e,{mode:!0,content:c.state.form[e]}))}},c.handleChange=function(e){c.setState({form:Object(m.a)(Object(m.a)({},c.state.form),{},Object(h.a)({},e.target.name,e.target.value))})},c.state={name:{mode:!0,content:"Dennis  Ritchie"},title:{mode:!0,content:"Computer Scientist"},phone:{mode:!0,content:"+62-8979253935"},email:{mode:!0,content:"mac.alistair@gmail.com"},form:{name:"Dennis  Ritchie",title:"Computer Scientist",phone:"+62-8979253935",email:"mac.alistair@gmail.com"}},c}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.mode,n=this.state,i=n.name,a=n.title,s=n.phone,o=n.email,r=n.form;return Object(c.jsxs)("div",{id:"cv-header",children:[Object(c.jsxs)("div",{className:"person",children:[Object(c.jsxs)("div",{className:"flex flex-ai-c flex-jc-sb",children:[i.mode?Object(c.jsx)("div",{className:"person-name",children:i.content}):Object(c.jsx)(c.Fragment,{children:t?Object(c.jsx)("div",{className:"person-name",children:i.content}):Object(c.jsx)("input",{type:"text",value:r.name,name:"name",onChange:this.handleChange})}),!t&&Object(c.jsx)(c.Fragment,{children:i.mode?Object(c.jsx)(O.a,{className:"icon medium stroke",onClick:function(){return e.setState({name:Object(m.a)(Object(m.a)({},e.state.name),{},{mode:!1})})}}):Object(c.jsx)(u.a,{className:"icon medium fill",onClick:this.updateContent("name")})})]}),Object(c.jsx)("div",{className:"thick-line"}),Object(c.jsxs)("div",{className:"flex flex-ai-c flex-jc-sb",children:[a.mode?Object(c.jsx)("div",{className:"person-title",children:a.content}):Object(c.jsx)(c.Fragment,{children:t?Object(c.jsx)("div",{className:"person-title",children:a.content}):Object(c.jsx)("input",{type:"text",value:r.title,name:"title",onChange:this.handleChange})}),!t&&Object(c.jsx)(c.Fragment,{children:a.mode?Object(c.jsx)(O.a,{className:"icon medium stroke",onClick:function(){return e.setState({title:Object(m.a)(Object(m.a)({},e.state.title),{},{mode:!1})})}}):Object(c.jsx)(u.a,{className:"icon medium fill",onClick:this.updateContent("title")})})]})]}),Object(c.jsxs)("div",{className:"cv-contact",children:[Object(c.jsxs)("div",{className:"contact-item",children:[Object(c.jsx)(p.a,{className:"icon small fill"}),s.mode?Object(c.jsx)("div",{className:"contact-content",children:s.content}):Object(c.jsx)(c.Fragment,{children:t?Object(c.jsx)("div",{className:"contact-content",children:s.content}):Object(c.jsx)("input",{type:"text",value:r.phone,name:"phone",onChange:this.handleChange})}),!t&&Object(c.jsx)(c.Fragment,{children:s.mode?Object(c.jsx)(O.a,{className:"icon small stroke",onClick:function(){return e.setState({phone:Object(m.a)(Object(m.a)({},e.state.phone),{},{mode:!1})})}}):Object(c.jsx)(u.a,{className:"icon small fill",onClick:this.updateContent("phone")})})]}),Object(c.jsxs)("div",{className:"contact-item",children:[Object(c.jsx)(b.b,{className:"icon small fill"}),o.mode?Object(c.jsx)("div",{className:"contact-content",children:o.content}):Object(c.jsx)(c.Fragment,{children:t?Object(c.jsx)("div",{className:"contact-content",children:o.content}):Object(c.jsx)("input",{type:"text",value:r.email,name:"email",onChange:this.handleChange})}),!t&&Object(c.jsx)(c.Fragment,{children:o.mode?Object(c.jsx)(O.a,{className:"icon small stroke",onClick:function(){return e.setState({email:Object(m.a)(Object(m.a)({},e.state.email),{},{mode:!1})})}}):Object(c.jsx)(u.a,{className:"icon small fill",onClick:this.updateContent("email")})})]})]})]})}}]),n}(a.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).handleProfileChange=function(e){c.setState({form:{profile:e.target.value}})},c.updateProfile=function(){c.setState({profile:{mode:!0,content:c.state.form.profile}})},c.state={profile:{mode:!0,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({form:{profile:this.state.profile.content}})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{id:"cv-profile",children:[Object(c.jsxs)("div",{className:"flex flex-ai-c",children:[Object(c.jsx)("span",{className:"section-title",children:"Profile"}),!this.props.mode&&Object(c.jsx)(c.Fragment,{children:this.state.profile.mode?Object(c.jsx)(O.a,{className:"icon medium stroke",onClick:function(){return e.setState({profile:Object(m.a)(Object(m.a)({},e.state.profile),{},{mode:!1})})}}):Object(c.jsx)(u.a,{className:"icon medium fill",onClick:this.updateProfile})})]}),this.state.profile.mode?Object(c.jsx)("div",{className:"profile-content",children:Object(c.jsx)("p",{children:this.state.profile.content})}):Object(c.jsx)(c.Fragment,{children:this.props.mode?Object(c.jsx)("div",{className:"profile-content",children:Object(c.jsx)("p",{children:this.state.profile.content})}):Object(c.jsx)("div",{className:"profile-content",children:Object(c.jsx)("textarea",{type:"text",value:this.state.form.profile,onChange:this.handleProfileChange})})})]})}}]),n}(a.a.Component),v=n(16),g=n(11),C=n.n(g),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).saveEdit=function(e,t){i.setState({experiences:i.state.experiences.map((function(n){return n.id===e?Object(m.a)(Object(m.a)({},n),t):n}))})},i.createForm=function(){i.setState({experiences:[].concat(Object(v.a)(i.state.experiences),[{mode:!1,id:C()(),title:"",company:"",date:"",description:""}])})},i.deleteExp=function(e){i.setState({experiences:i.state.experiences.filter((function(t){return t.id!==e}))})},i.renderExperiences=function(e){return e.map((function(e){return Object(c.jsx)(k,{mode:i.props.mode,job:e,saveEdit:i.saveEdit,deleteExp:i.deleteExp},C()())}))},i.state={experiences:[{id:C()(),title:"Software Engineer",company:"Sun Microsystem",date:"1995 - 2005",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},{id:C()(),title:"Senior Software Engineer",company:"Sun Microsystem",date:"2005 - 2012",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},{id:C()(),title:"CTO",company:"Sun Microsystem",date:"2012 - Present",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}]},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{id:"cv-experience",children:[Object(c.jsx)("span",{className:"section-title",children:"Work Experience"}),Object(c.jsx)("div",{id:"job-list",children:this.renderExperiences(this.state.experiences)}),!this.props.mode&&Object(c.jsx)(b.a,{className:"icon big fill",onClick:this.createForm})]})}}]),n}(a.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;Object(r.a)(this,n),(c=t.call(this,e)).switchToEdit=function(){c.setState({mode:!1})},c.handleChange=function(e){c.setState(Object(h.a)({},e.target.name,e.target.value))},c.saveEdit=function(){c.props.saveEdit(c.props.job.id,Object(m.a)(Object(m.a)({},c.state),{},{mode:!0}))};var i=c.props.job,a=i.title,s=i.company,o=i.date,l=i.description,d=void 0===c.props.job.mode||c.props.job.mode;return c.state={mode:d,title:a,company:s,date:o,description:l},c}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.mode,i=t.title,a=t.company,s=t.date,o=t.description;return Object(c.jsxs)("div",{className:"job-item",children:[Object(c.jsx)("div",{className:"job-control",children:!this.props.mode&&Object(c.jsxs)(c.Fragment,{children:[n?Object(c.jsx)(O.a,{className:"icon medium stroke",onClick:this.switchToEdit}):Object(c.jsx)(u.a,{className:"icon medium fill",onClick:this.saveEdit}),Object(c.jsx)(p.b,{className:"icon medium fill",onClick:function(){return e.props.deleteExp(e.props.job.id)}})]})}),Object(c.jsx)("div",{className:"job-title",children:n?Object(c.jsx)("p",{children:i}):Object(c.jsx)("input",{type:"text",name:"title",value:i,onChange:this.handleChange})}),Object(c.jsx)("div",{className:"job-company-date",children:n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:a}),Object(c.jsx)("p",{children:"|"}),Object(c.jsx)("p",{children:s})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{type:"text",name:"company",value:a,onChange:this.handleChange}),Object(c.jsx)("p",{children:"|"}),Object(c.jsx)("input",{type:"date",name:"date",value:s,onChange:this.handleChange})]})}),Object(c.jsx)("div",{className:"job-description",children:n?Object(c.jsx)("p",{children:o}):Object(c.jsx)("textarea",{name:"description",value:o,onChange:this.handleChange})})]})}}]),n}(a.a.Component),S=N,y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={mode:!0},c}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.mode;return Object(c.jsxs)("main",{className:"cv-container",children:[Object(c.jsx)(x,{mode:t}),Object(c.jsx)(f,{mode:t}),Object(c.jsx)(S,{mode:t}),Object(c.jsx)("div",{id:"toggle-mode",children:t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{id:"toggle-preview",className:"mode-active",onClick:function(){return e.setState({mode:!0})},children:"PREV"}),Object(c.jsx)("div",{id:"toggle-edit",onClick:function(){return e.setState({mode:!1})},children:"EDIT"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{id:"toggle-preview",onClick:function(){return e.setState({mode:!0})},children:"PREV"}),Object(c.jsx)("div",{id:"toggle-edit",className:"mode-active",onClick:function(){return e.setState({mode:!1})},children:"EDIT"})]})})]})}}]),n}(a.a.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),E()}},[[25,1,2]]]);
//# sourceMappingURL=main.dbee1770.chunk.js.map