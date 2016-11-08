jQuery(function($){
	//将头部写入页面
	$('<div/>').addClass('headerDiv').load('../html/headerList.html',function(){
		$(this).insertBefore('.content');
		var $headerUl=$('#header-3').find('ul');
		var $a=$headerUl.find('a');	
		$headerUl.on('click','a',function(){
			$a.removeClass('active');
			$(this).addClass('active');
			
		});
		//	list_left
	var $list_left=$('.list_left');
	$list_left.find('dt').each(function(idx,val){
		$(val).css('background','url(../css/img/icon_'+idx+'.png) no-repeat');
	});
	//ajax请求后台数据
	//$list_left
	var $dd=$list_left.find('dd');
	$.ajax({
		type:"get",
		url:"../data/listleft.json",
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
		//点击显示优惠券
		var $xiala=$('.header-5 .glyphicon-chevron-down');
		var $shangla=$('.header-5 .glyphicon-chevron-up');
		$xiala.on('click',function(){
			$('.list_left').slideToggle();
			$xiala.toggle();
			$shangla.toggle();
		});
		
		//点击隐藏优惠券
		$shangla.on('click',function(){
			$('.list_left').slideToggle();
			$shangla.toggle();
			$xiala.toggle();
		});
		
		
	});
	
//将底部写入页面
	$('<div/>').addClass('bottomDiv').load('../html/bottom.html',function(){
		$(this).insertAfter('.content');
		
	});
	

})
