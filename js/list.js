jQuery(function($){
//类别选择
	var $liSelect=$('.ul1 li');
	$liSelect.eq(2).css('border','none');
	$.each($liSelect, function(idx,val) {    
		$(val).on('click','a',function(){
			$(this).addClass('hover').siblings().removeClass('hover');
		});
	});
	
	var $liPaixu=$('.ul2 li');
	$liPaixu.first().addClass('futureLi');
	$('.ul2').on('click','li',function(){
		$(this).addClass('futureLi').siblings().removeClass('futureLi');
	});
	
	//美容保健
	
	var $glyphiconheart3,$ul3,$shyu3,$ul1Li3,$ul1A3,$ul1P,$mianzhi3,$coLi;
	$.ajax({
		type:"get",
		dataType:"json",
		url:"../data/baojian.json",
		success:function(res){
			$.each(res, function(ide,item) {
//				创建Li并添加到ul中
			    $.each(item.like, function(idx,val) {
			    	
				    	$coLi=$('<li/>').html('<span class="glyphicon glyphicon-heart"></span><span class="shyu"></span><a href="details.html"></a><p></p><span class="mianzhi"></span>');
				    	$coLi.appendTo($ul3);
						$glyphiconheart3=$('.baojian .glyphicon-heart');
						$ul3=$('.ul3');
						$shyu3=$('.baojian .shyu');
						$ul1Li3=$('.baojian .ul3 li');
						$ul1A3=$('.baojian .ul3 a');
						$ul1P3=$('.baojian .ul3 p');
						$mianzhi3=$('.baojian .mianzhi');
					
			    });
			    $.each(item.like, function(idx,val) {
			    	$glyphiconheart3.eq(idx).html('&nbsp;'+val);//喜爱量
			    });
			    $.each(item.surplus, function(idx,val) {
			    	$shyu3.eq(idx).html('剩余：'+val);//剩余量  
			    });
			    $.each(item.imgs, function(idx,val) {
			    	$('<img/>').attr('src','../images/'+val+'.jpg').appendTo($ul1A3.eq(idx));//img 加载图片 
			    });
			    $.each(item.explain, function(idx,val) {
			    	$ul1P3.eq(idx).html(val);//解释说明
			    });
			    $.each(item.mianzhi, function(idx,val) {
			    	$mianzhi3.eq(idx).html('面值：<i>'+val+'</i>元');//面值金额
			    });
			    $.each(item.fanxian, function(idx,val) {
			    	$('<span/>').html('返利'+val+'元').addClass('fanxian').appendTo($ul1Li3.eq(idx));//返利金额
			    	
			    	//模拟懒加载部分
			    	var $ul3Li=$('.ul3 li');
					var liLength=$ul3Li.length;
					var i=10;
				    $.each($ul3Li, function() {    
				    	$ul3Li.eq(i).hide(); 
				    	i++;
				    });
				    
				   //接近底部显示后面部分
 					var s1=5,s2=15;
				    $(window).on('scroll',function(){
				    	
				    	 var scrollTop = $(window).scrollTop();
				    	 
				    	if(scrollTop >= $(document).height() - $(window).height()-100){
							s1=s1+5;
							s2=s2+10;
							    
							$ul3Li.slice(s1,s2).show(); 
							
						}
				    });
				    
			    });
			});
		},
		async:true
	});
	
	
	
	
	
})	