$().ready(function(){
	var isfocus=false;
	var isleave=true;
    $(".navbar-item>.title").html("&#xe623;");
    $(".navbar-start").remove();
    $(".navbar-end>a").remove();
    $("body>div>div").remove();
    $(".is-fixed-bottom").remove();
   	$("body").append('<div class="footer-before"><p onclick="javascript:window.open(\'https://github.com/Aicirou/goindex-theme-acrou\')">*特别鸣谢Github-Aicirou编写的多盘版本，受益良多。</p></div>');	
    $("body").append('<div class="footer"><p>Copyright © 2018-2020 DreamFly. All Rights Reserved.</p><p class="nf-intro">Powered By DreamFly</p></div>');
    $(".navbar-brand>.navbar-item").attr("href","/");
    $(".title").attr("class","title is-3");
    $("input[type=search]").attr("placeholder","请输入搜索内容");
    $(".title").mouseenter(function(){
    	$(".title").attr("class","title is-3 active") 
    }).mouseleave(function(){
		$(".title").attr("class","title is-3");
    });
    $("input[type=search]").mouseenter(function(){
    	isleave=false;
    	$(".control.has-icons-left>span").addClass("active");
    }).mouseleave(function(){
    	isleave=true;
    	if(isfocus==false){
    		$(".control.has-icons-left>span").removeClass("active");
    		$("input[type=search]").removeClass("leave");
    	}else{
    		$("input[type=search]").addClass("leave");
    	}
    });
    $("input[type=search]").focus(function(){
    	isfocus=true;
        $(".control.has-icons-left>span").addClass("active");
        $(".title").addClass("active");
      }).blur(function(){;
      	isfocus=false;
		$(".control.has-icons-left>span").removeClass("active");
		$("input[type=search]").removeClass("leave");
		$(".title").removeClass("active");
    });
	$("input[type=search]").on('input propertychange',function(){
		 let val=$(this).val();
		 let location=window.location.host;
		 let tit=$("title").html();
		 if(val!=" "&&val!=""){
			 $("title").html("Dreamfly - 搜索")
			 var stateObject = {};    
		 	 var title = $("title").html();     
		  	 var newUrl = window.location.protocol+"//"+location+"/search?q="+$("input[type=search]").val();
			 history.pushState(stateObject, title, newUrl);
		}
	});
	let hrefs=window.location.href;
	let arr=hrefs.split("/");
	if(arr.length>=4&&arr[3]!=""){
		if(hrefs.indexOf("/search")!=-1||arr[arr.length-1]==""){
			var dfhome=window.location.protocol+"//"+window.location.host;
			if(hrefs.indexOf("/search")!=-1){
				$(".breadcrumb>ul").prepend('<li class="show"><a onclick="javascript:window.location.replace(\''+dfhome+'\')">返回上一级</a></li>');
			}else{
				$(".breadcrumb>ul").prepend('<li class="show"><a onclick="javascript:window.history.go(-1)">返回上一级</a></li>');
			}
		}else{
			var str=window.location.href;
	        str=str.substring(0,str.length);
	        str=decodeURI(str).replace("?a=view","");
	        var index=str.lastIndexOf("\/");  
	        str=str.substring(index+1,str.length);
	        $(".card-header-title").html('<span class="icon"><i aria-hidden="true" class="fa fa-play-circle"></i></span><span id="current">正在播放 - '+str+'</span>')
			$(".breadcrumb>ul").prepend('<li class="show"><a href="/">首页</a></li><p>&nbsp;/&nbsp;</p><li  class="show"><a onclick="javascript:window.history.go(-1)">返回上一级</a></li>');
		}
	}
	loadcss();
});
$(window).resize(function() {
  	loadcss();
});
function copyText(e,message){
	let id=e.id;
	if(id==""){
		$("td>.icon:nth-child(3)").each(function(){
	    	$(this).attr('id','copy-'+$(this).parent().parent().index());
		});
		id=e.id;
	}
	layer.tips("复制成功", "#"+id, {
		tips: [2, 'rgba(0,136,255,.92)']
	});
}
function IsPC(){
	var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone", "iPod"];
	var flag = true;
	var userAgentInfo = navigator.userAgent;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function loadcss(){
	let flag = IsPC();
	if (flag == true) {
		if($('link[rel="stylesheet"]')[1]!=undefined){
			$('link[rel="stylesheet"]')[1].setAttribute("href", "https://cdn.jsdelivr.net/gh/dfvips/jsdelivrcdn/css/app.css");
		}
	} else {
		if($('link[rel="stylesheet"]')[1]!=undefined){
			$('link[rel="stylesheet"]')[1].setAttribute("href", "https://cdn.jsdelivr.net/gh/dfvips/jsdelivrcdn/css/m.app.css");
		}
	}
}