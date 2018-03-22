;(function(){
	    var firstchild=$('body').children().get(0);
	    $(firstchild).before(
	    	   '<style type="text/css">'+
			  	'.topicnewad {position:relative;width:100%;display:none;}'+
				'.topicnewad img{width:100%}'+
			  '</style>'+
			  '<div class="topicnewad"><img src="img/banner.jpg"/></div>');
    	var now=new Date();
    	var last=localStorage.getItem("topicnewadlastclosetime");
    	window.showtimeout?clearTimeout(window.showtimeout):null;
        function lazyhide(){
            window.showtimeout=setTimeout(function(){
                $('.topicnewad').hide();
                localStorage.setItem("topicnewadlastclosetime",new Date());
                clearTimeout(window.showtimeout);
            },3000);
        };
        var img = new Image();
        img.src = $(".topicnewad img").attr("src");
        img.onload = function(){
          alert("加载完成！");
            if(!last){
                $('.topicnewad').show();
                lazyhide();
            }else{
                var topicnewadlastclosetime=last;
                var datedelt = now.getTime() - new Date(topicnewadlastclosetime).getTime();   //时间差的毫秒数   
                var days=Math.floor(datedelt/(24*3600*1000));
                var leave1=datedelt%(24*3600*1000);    //计算天数后剩余的毫秒数  
                var hours=Math.floor(leave1/(3600*1000));  
                if(hours>=1||days>=1){
                    $('.topicnewad').show();
                    lazyhide();
                }else{
                    $('.topicnewad').hide();
                }
            }
        };
    	
    })();