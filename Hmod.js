$("style").last().append(`
#users .uzr.stl1 .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 9px !important;
  height: 52px !important;
  margin-left: 13px!important;
  z-index: 0 !important;
}
#users .uzr.stl1 .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.stl1 .u-msg {
  text-align: center;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.stl1 .ustat {
  width: 54px !important;
  border-radius: 0px 50px 50px 50px !important;
  height: 52px !important;
  margin-top: 5px !important;
  min-height: 0% !important;
  margin-left: 10px;
  z-index: 0 !important;
  display: none;
}
#users .uzr.stl1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.stl1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}
#users .uzr.stl1 {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 4px;
  background-size: cover;
  border: 1px solid #fff;
}
#users .uzr.stl1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.stl1 .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.stl1 .u-topic {
  margin-left: 5px;
}
#users .uzr.stl1 .My_star1 {
  width: 84px;
  margin-top: -67px;
  height: 80px;
}


`);
var me_user1=setInterval(function(){
    if(myid!=null){
        clearInterval(me_user1);
        $("#users .uzr:contains('June')").addClass('stl1');
        $("#users .uzr.stl1 .c-flex.fr").append('<img class="My_star1" src="https://j.top4top.io/p_2592dcary0.gif">');
	
	 $("#users .uzr span.u-topic:contains('93B')").after('<img id="mystory1" class="My_vedio1" title="ستوري" src="https://i.ibb.co/47VS4nY/image.png">');
    
        $("#users .uzr.stl1 span.uhash, #users .uzr.stl1 img.co").hide(); 


        
        
        

       $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);





















