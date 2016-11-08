jQuery(function($){
	//将头部写入页面
	$('<div/>').addClass('headerDiv').load('html/header.html',function(){
		$(this).insertBefore('.content');
		var $headerUl=$('#header-3').find('ul');
		var $a=$headerUl.find('a');	
		$headerUl.on('click','a',function(){
			$a.removeClass('active');
			$(this).addClass('active');
			
		});
	});
	
	//index主体内容
	
//	list_left
	var $list_left=$('.list_left');
	$list_left.find('dt').each(function(idx,val){
		$(val).css('background','url(css/img/icon_'+idx+'.png) no-repeat');
	});
	//ajax请求后台数据
	//$list_left
	var $dd=$list_left.find('dd');
	$.ajax({
		type:"get",
		url:"data/listleft.json",
		success:function(res){
			$.each(res, function(ide,item) {  
				    $.each(item.repast, function(idx,val) {
				    	  $('<span/>').html(val+'、').appendTo($dd.eq(0));  
				    });
				    $.each(item.relaxation, function(idx,val) {
				    	  $('<span/>').html(val+'、').appendTo($dd.eq(1));
				    });
				    $.each(item.hairdressing, function(idx,val) {
				    	  $('<span/>').html(val+'、').appendTo($dd.eq(2));
				    });
				    $.each(item.life, function(idx,val) {
				    	  $('<span/>').html(val+'、').appendTo($dd.eq(3));
				    });
			});
		},
		async:true
	});

	//轮播图
	$('.carousel').hdzCarousel({
		imgs:['images/001.jpg','images/002.jpg','images/003.jpg']
	})
	
	//小多推荐 recommend
	var $Li=$('.xiaoduo li');
	var $imgA=$Li.find('a');
	var $imgP=$Li.find('p');
//	console.log($imgP);
	$.ajax({
		type:"get",
		url:"data/recommend.json",
		success:function(res){
			$.each(res, function(idx,val) {   
				$.each(val.imgs, function(ide,value) {
					$('<img/>').attr('src','images/'+value+'.jpg').appendTo($imgA.eq(ide));					
				});
				
				$.each(val.explain, function(ide,value) {
					$imgP.eq(ide).html(value);
				});
				
				$.each(val.surplus, function(ide,value) {
					$('<p/>').html('还剩余<i>'+value+'</i>张').addClass('surplus').appendTo($Li.eq(ide));				
				});
			});
		},
		async:true
	});
	
	//餐饮美食
	var $_span2=$('._span2');
	var $glyphiconheart=$('.glyphicon-heart');
	var $shyu=$('.shyu');
	var $ul1Li=$('.ul1 li');
	var $ul1A=$('.ul1 a');
	var $ul1P=$('.ul1 p');
	var $mianzhi=$('.mianzhi');
	var $phbLi=$('.phb li');
	$.ajax({
		type:"get",
		url:"data/listleft.json",
		success:function(res){
			$.each(res, function(ide,item) {  
				    $.each(item.repast, function(idx,val) {
				    	$('<span/>').html('&nbsp;&nbsp;'+val).appendTo($_span2.eq(0));
				    });
				    $.each(item.like, function(idx,val) {
				    	$glyphiconheart.eq(idx).html('&nbsp;'+val);//喜爱量  
				    });
				    $.each(item.surplus, function(idx,val) {
				    	$shyu.eq(idx).html('剩余：'+val);//剩余量  
				    });
				    $.each(item.imgs, function(idx,val) {
				    	$('<img/>').attr('src','images/'+val+'.jpg').appendTo($ul1A.eq(idx));//img  
				    });
				    $.each(item.explain, function(idx,val) {
				    	$ul1P.eq(idx).html(val);
				    });
				    $.each(item.mianzhi, function(idx,val) {
				    	$mianzhi.eq(idx).html('面值：<i>'+val+'</i>元');
				    });
				    $.each(item.fanxian, function(idx,val) {
				    	$('<span/>').html('返利'+val+'元').addClass('fanxian').appendTo($ul1Li.eq(idx));
				    });
				    $.each(item.phb, function(idx,val) {
				    	$phbLi.find('a').eq(idx).html(val);
				    });
				    $.each(item.phbimgs, function(idx,val) {
				    	$('<img/>').attr('src','images/'+val+'.jpg').appendTo($phbLi.eq(idx));//img  
		 				
				    });
			});
		},
		async:true
	});
	
	//休闲娱乐
	var $_span22=$('.yule ._span2');
	var $glyphiconheart2=$('.yule .glyphicon-heart');
	var $shyu2=$('.yule .shyu');
	var $ul1Li2=$('.yule .ul1 li');
	var $ul1A2=$('.yule .ul1 a');
	var $ul1P2=$('.yule .ul1 p');
	var $mianzhi2=$('.yule .mianzhi');
	var $phbLi2=$('.yule .phb li');
	$.ajax({
		type:"get",
		url:"data/listleft.json",
		success:function(res){
			$.each(res, function(ide,item) {  
				    $.each(item.relaxation, function(idx,val) {
				    	$('<span/>').html('&nbsp;&nbsp;'+val).appendTo($_span22.eq(0));
				    });
				    $.each(item.like, function(idx,val) {
				    	$glyphiconheart2.eq(idx).html('&nbsp;'+val);//喜爱量  
				    });
				    $.each(item.surplus, function(idx,val) {
				    	$shyu2.eq(idx).html('剩余：'+val);//剩余量  
				    });
				    $.each(item.imgs, function(idx,val) {
				    	$('<img/>').attr('src','images/'+val+'.jpg').appendTo($ul1A2.eq(idx));//img  
				    });
				    $.each(item.explain, function(idx,val) {
				    	$ul1P2.eq(idx).html(val);
				    });
				    $.each(item.mianzhi, function(idx,val) {
				    	$mianzhi2.eq(idx).html('面值：<i>'+val+'</i>元');
				    });
				    $.each(item.fanxian, function(idx,val) {
				    	$('<span/>').html('返利'+val+'元').addClass('fanxian').appendTo($ul1Li2.eq(idx));
				    });
				    $.each(item.phb, function(idx,val) {
				    	$phbLi2.find('a').eq(idx).html(val);
				    });
				    $.each(item.phbimgs, function(idx,val) {
				    	$('<img/>').attr('src','images/'+val+'.jpg').appendTo($phbLi2.eq(idx));//img  
		 				
				    });
			});
		},
		async:true
	});
	
	//美容保健
	var $_span23=$('.baojian ._span2');
	var $glyphiconheart3=$('.baojian .glyphicon-heart');
	var $shyu3=$('.baojian .shyu');
	var $ul1Li3=$('.baojian .ul1 li');
	var $ul1A3=$('.baojian .ul1 a');
	var $ul1P3=$('.baojian .ul1 p');
	var $mianzhi3=$('.baojian .mianzhi');
	var $phbLi3=$('.baojian .phb li');
	$.ajax({
		type:"get",
		url:"data/listleft.json",
		success:function(res){
			$.each(res, function(ide,item) {  
				    $.each(item.hairdressing, function(idx,val) {
				    	$('<span/>').html('&nbsp;&nbsp;'+val).appendTo($_span23.eq(0));
				    });
				    $.each(item.like, function(idx,val) {
				    	$glyphiconheart3.eq(idx).html('&nbsp;'+val);//喜爱量  
				    });
				    $.each(item.surplus, function(idx,val) {
				    	$shyu3.eq(idx).html('剩余：'+val);//剩余量  
				    });
				    $.each(item.imgs, function(idx,val) {
				    	$('<img/>').attr('src','images/'+val+'.jpg').appendTo($ul1A3.eq(idx));//img  
				    });
				    $.each(item.explain, function(idx,val) {
				    	$ul1P3.eq(idx).html(val);
				    });
				    $.each(item.mianzhi, function(idx,val) {
				    	$mianzhi3.eq(idx).html('面值：<i>'+val+'</i>元');
				    });
				    $.each(item.fanxian, function(idx,val) {
				    	$('<span/>').html('返利'+val+'元').addClass('fanxian').appendTo($ul1Li3.eq(idx));
				    });
				    $.each(item.phb, function(idx,val) {
				    	$phbLi3.find('a').eq(idx).html(val);
				    });
				    $.each(item.phbimgs, function(idx,val) {
				    	$('<img/>').attr('src','images/'+val+'.jpg').appendTo($phbLi3.eq(idx));//img  
		 				
				    });
			});
		},
		async:true
	});
	
	//生活服务
	var $_span24=$('.fuwu ._span2');
	var $glyphiconheart4=$('.fuwu .glyphicon-heart');
	var $shyu4=$('.fuwu .shyu');
	var $ul1Li4=$('.fuwu .ul1 li');
	var $ul1A4=$('.fuwu .ul1 a');
	var $ul1P4=$('.fuwu .ul1 p');
	var $mianzhi4=$('.fuwu .mianzhi');
	var $phbLi4=$('.fuwu .phb li');
	$.ajax({
		type:"get",
		url:"data/listleft.json",
		success:function(res){
			$.each(res, function(ide,item) {  
				    $.each(item.life, function(idx,val) {
				    	$('<span/>').html('&nbsp;&nbsp;'+val).appendTo($_span24.eq(0));
				    });
				    $.each(item.like, function(idx,val) {
				    	$glyphiconheart4.eq(idx).html('&nbsp;'+val);//喜爱量  
				    });
				    $.each(item.surplus, function(idx,val) {
				    	$shyu4.eq(idx).html('剩余：'+val);//剩余量  
				    });
				    $.each(item.imgs, function(idx,val) {
				    	$('<img/>').attr('src','images/'+val+'.jpg').appendTo($ul1A4.eq(idx));//img  
				    });
				    $.each(item.explain, function(idx,val) {
				    	$ul1P4.eq(idx).html(val);
				    });
				    $.each(item.mianzhi, function(idx,val) {
				    	$mianzhi4.eq(idx).html('面值：<i>'+val+'</i>元');
				    });
				    $.each(item.fanxian, function(idx,val) {
				    	$('<span/>').html('返利'+val+'元').addClass('fanxian').appendTo($ul1Li4.eq(idx));
				    });
				    $.each(item.phb, function(idx,val) {
				    	$phbLi4.find('a').eq(idx).html(val);
				    });
				    $.each(item.phbimgs, function(idx,val) {
				    	$('<img/>').attr('src','images/'+val+'.jpg').appendTo($phbLi4.eq(idx));//img  
		 				
				    });
			});
		},
		async:true
	});
	
	//点击显示对应的图片，其它隐藏
	$phbLi.on('click','a',function(e){
		$(this).parent('li').addClass('phbLi').siblings().removeClass('phbLi');
		e.preventDefault();
	});
	
	//stu
	var $stuSpan=$('.stu span');
	$.each($stuSpan, function(idx,val) {    
		$(val).html('<img src="css/img/icon_'+(idx+4)+'.png"/>')
	});
	
	//将底部写入页面
	$('<div/>').addClass('bottomDiv').load('html/bottom.html',function(){
		$(this).insertAfter('.content');
	});
	
	
	
})
