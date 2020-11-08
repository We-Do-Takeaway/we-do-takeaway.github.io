(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{105:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/components-12f2ed1f06b9ca4d8a4f026ba949cfc7.png"},106:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/servers-3a059a1ac0da1b7f62d1e04920cf6b41.png"},107:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/schemastitching-5b6a049721f70f5d90cccaaede04a045.png"},108:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fetching-9202195a56c08d7026ac439a0484746f.png"},61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var i=a(2),n=a(6),s=(a(0),a(73)),r={id:"hld",title:"High level design",sidebar_label:"HLD",slug:"/hld"},l={unversionedId:"hld",id:"hld",isDocsHomePage:!1,title:"High level design",description:'The purpose of this document is to give a high level overview of the technical architecture used to build and host the "We Do Takeaway" (WDT) service.',source:"@site/docs/hld.md",slug:"/hld",permalink:"/docs/hld",editUrl:"https://github.com/We-Do-Takeaway/docs-and-architecture/edit/master/website/docs/hld.md",version:"current",sidebar_label:"HLD",sidebar:"someSidebar",previous:{title:"Road-map",permalink:"/docs/roadmap"},next:{title:"Customer API",permalink:"/docs/customerapi"}},o=[{value:"Service description",id:"service-description",children:[]},{value:"Considerations",id:"considerations",children:[]},{value:"Technical Requirements",id:"technical-requirements",children:[]},{value:"Approach",id:"approach",children:[{value:"Servers",id:"servers",children:[]},{value:"Clients",id:"clients",children:[]}]}],c={rightToc:o};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,'The purpose of this document is to give a high level overview of the technical architecture used to build and host the "We Do Takeaway" (WDT) service.'),Object(s.b)("h2",{id:"service-description"},"Service description"),Object(s.b)("p",null,"We Do Takeaway is a FOSS platform that can allow restaurants to offer online ordering to their customers and manage and track the fulfillment and delivery of their food."),Object(s.b)("h2",{id:"considerations"},"Considerations"),Object(s.b)("p",null,"The purpose of WDT is not only to build a piece of software that may be genuinely useful but also is a a learning exercise in building a GraphQL and Kubernetes based service as well as experimenting with development tools and planning processes. The service elements will form the basis of blog articles and tutorials. This aim fuels the what may appear at first glance of a dumb decision to build the platform with such a wide variety of frameworks. By mixing and matching these frameworks it will allow tools such as .NET Core, Java, Javascript and Go to be compared. "),Object(s.b)("h2",{id:"technical-requirements"},"Technical Requirements"),Object(s.b)("p",null,"The WDT service allows users to access it using a variety of clients and technologies. The user should be free to use whatever method they wish that is most convenient to them, be it an iPhone, browser, android device or whatever. In some situations bandwidth may be plenty via desktops with broadband, but in others it will be severely limited via patchy 3G wireless access using small screen mobile devices."),Object(s.b)("p",null,"When choosing server tools to use the following must be taken into account:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Documentation"),Object(s.b)("li",{parentName:"ul"},"Reliability"),Object(s.b)("li",{parentName:"ul"},"Scalability (ease and economy)"),Object(s.b)("li",{parentName:"ul"},"Testing tools"),Object(s.b)("li",{parentName:"ul"},"Ease of maintenance"),Object(s.b)("li",{parentName:"ul"},"Vendor backing (Can 1 person leaving the project break it?)"),Object(s.b)("li",{parentName:"ul"},"Code quality")),Object(s.b)("p",null,"The service must be able to scale economically from very small workloads of one or 2 users all the way up to a shared service with 1000's of simultaneous API requests. The service must be something that an individual business itself could deploy, with some help, or form the service layer of a company offering it to multiple restaurants. It may also be used by franchises."),Object(s.b)("p",null,"Deployment of server elements must be possible with a single machine and docker-compose but also be fully supported in a Kubernetes cluster, either privately built of via a PAAS such as AWS or Azure."),Object(s.b)("h2",{id:"approach"},"Approach"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Application Components",src:a(105).default})),Object(s.b)("h3",{id:"servers"},"Servers"),Object(s.b)("p",null,"The service architectures takes the approach of creating a collection of GraphQL API servers, each one responsible for a defined domain, these include:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Customer"),Object(s.b)("li",{parentName:"ul"},"Menu"),Object(s.b)("li",{parentName:"ul"},"Order"),Object(s.b)("li",{parentName:"ul"},"Payment"),Object(s.b)("li",{parentName:"ul"},"Restaurant"),Object(s.b)("li",{parentName:"ul"},"Delivery person"),Object(s.b)("li",{parentName:"ul"},"Delivery tracking"),Object(s.b)("li",{parentName:"ul"},"Service owner"),Object(s.b)("li",{parentName:"ul"},"Authentication")),Object(s.b)("p",null,Object(s.b)("img",{alt:"Services",src:a(106).default})),Object(s.b)("p",null,"Domains are related to each other. One example is the case of an order, there are attributes that are unique to the order itself but it also relates to other information including the customer, restaurant, menu items, delivery details."),Object(s.b)("h4",{id:"graphql-schema-stitching"},"GraphQL schema stitching"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Schema stitching",src:a(107).default})),Object(s.b)("p",null,"An API Gateway layer combines the multiple GraphQL back-ends into a single API, stitching the different parts of data together. This means that when a query is sent to get the order details including the customer etc it fetches some information from the order server and uses properties in that to go and fetch the customer data from the customer server. All this is transparent to the client."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Combine data",src:a(108).default})),Object(s.b)("p",null,"An alternative to this stitching approach is Federation, though at this time not all GraphQL servers support it and stitching can still provide the functionality required."),Object(s.b)("h3",{id:"clients"},"Clients"),Object(s.b)("p",null,"Eventually a wide range of clients will be required. Within the initial phase of the projects the following will be focussed on:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Browser based menu browsing and ordering (React JS)"),Object(s.b)("li",{parentName:"ul"},"Browser based management of orders (Blazor WASM)"),Object(s.b)("li",{parentName:"ul"},"Delivery driver app (Android)"),Object(s.b)("li",{parentName:"ul"},"Central admin (HQ) tool (iOS/Mac OS)")),Object(s.b)("p",null,"Over time new clients will be developed including:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Menu browsing and ordering via iPhone/iPad and Android"),Object(s.b)("li",{parentName:"ul"},"Delivery driver app on iOS"),Object(s.b)("li",{parentName:"ul"},"Apple watch and Apple TV support"),Object(s.b)("li",{parentName:"ul"},"Combined Mac/iOS support for Apple silicon"),Object(s.b)("li",{parentName:"ul"},"Restaurant mobile management app for iPhone/iPad")),Object(s.b)("p",null,"The server based API should make it possible for any new client to be developed as long as it has support for GraphQL. When building the server API's they must contain any business logic so that new clients do not need to repeat code, though this may become interesting when a piece of logic spans multiple domains and the API Gateway may need to encompass that, acting as a service layer instead of simple dividing tasks."))}u.isMDXComponent=!0}}]);