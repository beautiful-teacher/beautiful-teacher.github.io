import{T as M}from"./TeacherList-c3454e62.js";import{L}from"./TeacherList-0c74e907.js";import{_ as g,r as y,o as b,a as f,b as B,c as x,d as k,e as i,w as d,f as v}from"./index-4594c368.js";const P={class:"greetings"},C={class:"notice-wrap"},D={__name:"List",props:{},setup(I){const s=y({searchKey:"",list:M,map:new BMap.Map("container"),myLongitude:0,myLatitude:0,ak:"DwkPt9ifSC1skP60XOKVdKnD047AF30a"});b(()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{const{longitude:n,latitude:t}=e.coords;console.log(n,t),s.myLongitude=n,s.myLatitude=t,w()},e=>{throw e.message})});const w=e=>{new BMap.Map("container").centerAndZoom(new BMap.Point(s.myLongitude,s.myLatitude),12);let t=new BMap.Geocoder;for(const a of s.list)t.getPoint(a.location,o=>{if(o){const{lng:c,lat:l}=o,{myLongitude:p,myLatitude:u}=s;Reflect.set(a,"distance",h(p,u,c,l)),a.distance=h(p,u,c,l)}else alert("您选择的地址没有解析到结果！")},"北京")},h=(e,n,t,a)=>{let o="";if(e!=null&&n!=null&&t!=null&&a!=null){t=t*1,a=a*1;let c=_(e),l=_(t),p=c-l,u=_(n)-_(a),r=2*Math.asin(Math.sqrt(Math.pow(Math.sin(p/2),2)+Math.cos(c)*Math.cos(l)*Math.pow(Math.sin(u/2),2)));r=r*6378.137,r=Math.round(r*1e4)/1e4;let m=r;m&&(parseInt(m)>=1?o=m.toFixed(1)+"km":o=m*1e3+"m")}return o},_=e=>e*Math.PI/180;return(e,n)=>{const t=f("van-swipe-item"),a=f("van-swipe"),o=f("van-notice-bar");return B(),x("div",P,[k("div",C,[i(o,{"left-icon":"volume-o",scrollable:!1},{default:d(()=>[i(a,{vertical:"",class:"notice-swipe",autoplay:4e3,"show-indicators":!1,scrollable:""},{default:d(()=>[i(t,null,{default:d(()=>[v("有需要合作推广的小姐姐，+Q 3483844719")]),_:1}),i(t,null,{default:d(()=>[v("限时会员只需要198，解锁全部老师联系方式")]),_:1}),i(t,null,{default:d(()=>[v("投放广告点下方合作")]),_:1})]),_:1})]),_:1})]),i(L,{listData:s.list},null,8,["listData"])])}}},E=g(D,[["__scopeId","data-v-9a1e755b"]]);export{E as default};
