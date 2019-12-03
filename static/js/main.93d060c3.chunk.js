(this["webpackJsonpspace-x"]=this["webpackJsonpspace-x"]||[]).push([[0],{44:function(e,a,t){e.exports=t(83)},49:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(13),l=t.n(s),o=(t(49),t(4)),i=t(5),r=t(7),m=t(6),u=t(8),p=t(14),h=t.n(p),d=t(24),E=function(e){function a(){return Object(o.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("section",{className:"page2",id:"page2Link"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("h2",null,"CHOOSE A ROCKET OF INTEREST"),c.a.createElement("div",{className:"firstRowRocketList"},c.a.createElement(d.Link,{activeClass:"active",to:"mainLink",spy:!0,smooth:!0,offset:0,duration:500,className:"rocketHomeButton",tabindex:"0"},c.a.createElement("i",{class:"fas fa-rocket"})),this.props.launches.map((function(a){var t=a.flight_number,n=a.mission_name,s=a.launch_success;return c.a.createElement("div",null,c.a.createElement(d.Link,{activeClass:"active",to:"page3Link",spy:!0,smooth:!0,offset:0,duration:500,href:"#page3Link",className:"rocket1Button",tabindex:"0",onClick:function(){e.props.selectRocket(a),e.props.revealPage3()}},c.a.createElement("div",{className:"rocketsList"},c.a.createElement("div",{className:"topHalf"},c.a.createElement("h4",{className:"flightNumber topHalf"},"Rocket Number"),c.a.createElement("p",null,t)),c.a.createElement("div",{className:"missionName"},c.a.createElement("p",null,"Mission Name"),c.a.createElement("p",null,n)),c.a.createElement("div",{className:"missionStatus"},c.a.createElement("p",null,"Launch Status"),"upcoming"!==e.props.launchType?c.a.createElement("p",null,s?"Success":"Failure"):c.a.createElement("p",null,"Not Applicable")))))})))))}}]),a}(n.Component),g=t(43),k=t.n(g),f=function(e){function a(){return Object(o.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a,t=this.props.rocket,n=t.flight_number,s=t.details,l=t.launch_year,o=t.mission_name,i=t.launch_success;return void 0!==this.props.rocket.links&&(e=this.props.rocket.links.flickr_images[0],a=this.props.rocket.links.video_link),console.log(a),c.a.createElement("section",{className:"page3",id:"page3Link"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("h2",{className:"page3Header"},"ROCKET - ",c.a.createElement("span",null,n)),c.a.createElement("div",{className:"topHalfPage3launchVideo tabindex='0'"},void 0!==a&&null!==a?c.a.createElement(k.a,{url:a,playing:!1,volume:0,width:"100%",className:"videoPlayerBox",tabIndex:"0",control:"true"}):c.a.createElement("img",{className:"videoFallback",src:"./assets/videoFallback.png",alt:"Video not found"})),c.a.createElement("div",{className:"page3Halves"},c.a.createElement("div",{className:"leftHalfPage3"},c.a.createElement("div",{className:"rocketImage tabindex='0'"},void 0!==e?c.a.createElement("img",{src:e,alt:"A rocket in the frame"}):c.a.createElement("img",{src:"./assets/imageNotFound.jpg",alt:"Missing image"}))),c.a.createElement("div",{className:"rightHalfPage3 tabindex='0'"},c.a.createElement("p",null,c.a.createElement("span",{className:"page3FlightNumber"},"Rocket Number: "),n),c.a.createElement("p",null,c.a.createElement("span",{className:"page3MissionName"},"Mission Name: "),o),c.a.createElement("p",null,c.a.createElement("span",{className:"page3AnotherStuff"},"Launch Year: "),l),c.a.createElement("p",null,c.a.createElement("span",{className:"page3StatusOfMission"},"Status of Mission: "),"upcoming"!==this.props.launchType?c.a.createElement("span",{className:"successOrFailure"},i?"Success":"Failure"):c.a.createElement("span",{className:"notApplicable"},"Not Applicable")),c.a.createElement("p",null,c.a.createElement("span",{className:"page3RocketType"},"Details: "),s)))),c.a.createElement("footer",null,"Copyright \xa9 Vipin Kirthane 2019"))}}]),a}(n.Component),v=(t(82),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(r.a)(this,Object(m.a)(a).call(this))).revealPage2=function(){e.setState({showPage2:!0},(function(){document.getElementById("page2Link").scrollIntoView({behavior:"smooth"})}))},e.revealPage3=function(){e.setState({showPage3:!0},(function(){document.getElementById("page3Link").scrollIntoView({behavior:"smooth"})}))},e.rocketSelectionHandlerLatestLaunches=function(){h()({url:"https://api.spacexdata.com/v3/launches/latest",method:"GET",dataResponse:"json"}).then((function(a){e.setState({rockets:[a.data]},(function(){e.setState({launchType:"latest"}),e.revealPage2()}))})).catch((function(){alert("Network Error! Please Reload Page")}))},e.rocketSelectionHandlerPastLaunches=function(){h()({url:"https://api.spacexdata.com/v3/launches/past",method:"GET",dataResponse:"json"}).then((function(a){e.setState({rockets:a.data},(function(){e.setState({launchType:"past"}),e.revealPage2()}))})).catch((function(){alert("Network Error! Please Reload page")}))},e.rocketSelectionHandlerUpcomingLaunches=function(){h()({url:"https://api.spacexdata.com/v3/launches/upcoming",method:"GET",dataResponse:"json"}).then((function(a){e.setState({rockets:a.data},(function(){e.setState({launchType:"upcoming"}),e.revealPage2()}))})).catch((function(){alert("Network Error! Please Reload Page")}))},e.state={rockets:[],showPage2:!1,showPage3:!1,rocketToShow:{},launchType:""},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"page1",id:"mainLink"},c.a.createElement("h1",null,"SPACE X ROCKET PORTFOLIO"),c.a.createElement("main",{className:"mainOptions wrapper"},c.a.createElement("div",{className:"firstOptionParent"},c.a.createElement("button",{className:"firstOption",tabindex:"0",onClick:function(){e.rocketSelectionHandlerLatestLaunches()}},"LATEST LAUNCHES",this.state.rockets.launch_year)),c.a.createElement("div",null,c.a.createElement("button",{className:"secondOption",tabindex:"0",onClick:function(){e.rocketSelectionHandlerPastLaunches()}},"PAST LAUNCHES",this.state.rockets.rocket_id)),c.a.createElement("div",null,c.a.createElement("button",{className:"thirdOption",tabindex:"0",onClick:function(){e.rocketSelectionHandlerUpcomingLaunches()}},"UPCOMING LAUNCHES",this.state.rockets.mission_name)))),this.state.showPage2?c.a.createElement("div",null,c.a.createElement(E,{launches:this.state.rockets,revealPage3:this.revealPage3,launchType:this.state.launchType,selectRocket:function(a){e.setState({rocketToShow:a})}})):null,this.state.showPage3?c.a.createElement("div",null,c.a.createElement(f,{rocket:this.state.rocketToShow,launchType:this.state.launchType})):null)}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.93d060c3.chunk.js.map