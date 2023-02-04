$("style").last().append(`

#users .uzr.siggm img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 340px;
}

#users .uzr.siggm span.uhash{
    margin-right: 350px;
  margin-top: 24px;
  margin-left: 0px;}


#users .uzr.siggm img.u-ico {
    
     

      
    }

#users .uzr.siggm img.ustat {
      width: 54px !important;
  border-radius: 0px 50px 50px 50px !important;
  height: 52px !important;
  margin-top: 5px !important;
  min-height: 0% !important;
  margin-left: 14px;
  z-index: 0 !important;
  display: none;
      
    }

#users .uzr.siggm .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 23px !important;
  height: 52px !important;
  margin-left: 25px!important;
  z-index: 0 !important;
margin-bottom: 9px !important;
padding: 30px !important;
}

#users .uzr.siggm .u-msg {
	text-align: center;
  -webkit-background-clip: text;
  
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
 background-image: url(https://up6.cc/2023/01/167502776201271.gif);
  padding: 0px !important;
	margin-bottom: 25px !important;
margin-left: 18px;
margin-right: 50px;
background-size: cover;
margin-top: 17px !important;

}





#users .uzr.siggm {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 4px;
   
  
  border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/01/167502964532871.png);
background-size: 100%;
    
}



#users .uzr.siggm .d-flex.fl {
  padding-right: 0px !important;
}

#users .uzr.siggm .u-topic {
-webkit-text-fill-color: transparent;
  margin-left: 5px;
}

#users .uzr.siggm .itarr_siggma {
 width: 132px;
height: 89px;
margin-top: -53px;
cursor: pointer;
margin-left: -65px;
}





`);

var l_itvsiggm=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvsiggm);
       $("#users .uzr:contains('نووتس')").addClass('siggm');
		
		
		
		
        $("#users .uzr.siggm .fitimg.u-pic").append('<img class="itarr_siggma" title="اطاري" src="https://up6.cc/2023/01/167502705207422.png">');
		
		
		

    }
}, 20000);
