$("style").last().append(`


#users .uzr.msh3 img.ustat {
      width:10px!important;height:10px!important;min-height:0%!important;margin-right:2px;z-index:999999;border-radius:3px 3px 3px 3px;border:1px solid #fff0}

#users .uzr.msh3 .fitimg.u-pic {
	border-radius: 5px !important;
margin-left: 2px;
  height: 52px !important;
  
  z-index: 0 !important;
margin-bottom: 6px !important;

border:1px solid #fff;margin-top:2px;border-radius:5px;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #d8d8d8
}
  
#users .uzr.msh3 .u-msg {
	
  -webkit-background-clip: text;
  
  font-size: 93% !important;
  -webkit-text-fill-color: #0000;
 background-image: url(https://up6.cc/2022/12/167183568860261.gif);
  padding: 0px !important;
	margin-bottom: 6px !important;
margin-left: 10px;
background-size: cover;
margin-top: 8px !important;
}

#users .uzr.msh3 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}

#users .uzr.msh3 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}


#users .uzr.msh3 {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 4px;
  background-image: 
  border: 1px solid #fff;
background-image: linear-gradient(-225deg, rgb(202, 202, 202) 0%, rgba(255, 0, 143, 0) 29%, rgba(151, 101, 127, 0.04) 67%, rgb(198, 198, 198) 100%);  
}


#users .uzr.msh3 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}

#users .uzr.msh3 .d-flex.fl {
  padding-right: 0px !important;
}

#users .uzr.msh3 .u-topic {
	-webkit-text-fill-color: transparent;
  margin-left: 5px;

}




#users .uzr.msh3 .My_vedio9 {
  float: right;
  width: 20px;
  margin-top: 1px;
  margin-right: 0px;
  cursor: pointer;
}

`);

var l_itvmsh3=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvmsh3);
        $("#users .uzr:contains('*Admin')").addClass('msh3');

        $("#users .uzr span.u-topic:contains('*Admin')").after('<img id="mystory" class="My_vedio9" title="ستوري" src="https://i.ibb.co/47VS4nY/image.png">');
    
        $("#users .uzr.msh3 span.uhash, #users .uzr.msh3 img.co").hide(); 


        $("#upro").before('<div id="movon" onclick="$(this).hide().html(``);" class="moveon" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">'); 
        
        
        
        $("div#users .uzr:contains('*Admin') .My_vedio9").click(function(){
        $("#movon").show();
        
        $('#movon').addClass('msh3');
        $("#movon").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
        $("#movon").append('<iframe id="ifr_mov9" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/0pw_MtWb4ig" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
       $("#ifr_mov9").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 20000);
