















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16)); } return id;
};

var doyoo={
env:{
secure:false,
mon:'http://m9107.looyu.com/monitor',
chat:'http://looyuoms7714.looyu.com/chat',
file:'http://yun-static.soperson.com/131221',
compId:20003188,
confId:10091888,
workDomain:'',
vId:d_genId(),
lang:'',
fixFlash:0,
fixMobileScale:0,
subComp:0,
_mark:'a323f9fa38404e3a6849dc0bf2f70307c7e9286fa45bd16a32cd10d24b35382e50ef1a5b30406695'
},
chat:{
mobileColor:'',
mobileHeight:80,
mobileChatHintBottom:0,
mobileChatHintMode:0,
mobileChatHintColor:'',
mobileChatHintSize:0
}




};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="http://yun-static.soperson.com/131221/oms.css?171107"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="http://yun-static.soperson.com/131221/oms.js?180112" charset="utf-8"></scr'+'ipt>');
}
}
