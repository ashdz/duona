jQuery(function($){
		//将底部写入页面
		$('<div/>').addClass('bottomDiv').load('../html/bottom.html',function(){
			$(this).insertAfter('.content');
			$('.pqu').html(' ');
		});
		
		$('.gwctj button').click(function(){
			location.href="denglu.html";
		});
		
		//热门推荐
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
			url:"../data/listleft.json",
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
				    	$('<img/>').attr('src','../images/'+val+'.jpg').appendTo($ul1A.eq(idx));//img  
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
				});
			},
			async:true
		});
		
		
		//从cookie取出商品信息
		
		var str=getCookie('arr');
		if(str!=''){
			var arr=JSON.parse(str);
		}
		
		var jiage=[];
		if(str!=""){
			$.each(arr,function(idx,val){
				jiage.push(val.jiage);
			});
		}
		var $carContent=$('.carContent');
		
		
		function fanhui(){
			//判断cookie是否有商品信息，有则改变购物车状态
			if(str!=""){
				$carContent.html('');
				var $table=$('<table/>').appendTo($carContent);
				var $button=$('<button/>').html('去支付').addClass('buttonn').appendTo($carContent);
			}
		
			$.each(arr, function(idx,val) {    
				
				var $tr=$('<tr/>').addClass('Border');
				$tr.appendTo($table);
				$('<td/>').html('<img src='+val.Img+'/>'+'<a href="#">'+val.spm+'</a>').appendTo($tr);
	//			$('<td/>').html('<a href="#">'+val.spm+'</a>').appendTo($tr);
	//			$('<td/>').html(val.yhq).appendTo($tr);
				$('<td/>').html('￥'+val.jiage).appendTo($tr);
				$('<td/>').html('<a href="#">收藏</a>').appendTo($tr);
				$('<td/>').html('<a href="#" class="shanchu">删除</a>').appendTo($tr);
			});
			quzhifu();
		}
		fanhui();
		//删除商品
//		$table.on('click','a',function(){
//			var index=$(this).index();
//			$table.empty($table.find('tr').eq(index));
//		});
		
		//去支付跳转
		var $bzLi=$('.shopbuzhou li');
		
		function quzhifu(){
			$carContent.find('button').click(function(){
				$bzLi.first().removeClass('bgwc');
				$bzLi.eq(1).addClass('bgwc');
				$carContent.empty();
				var $button1=$('<button/>').addClass('buttonn').html('确认支付').addClass('queren').appendTo($carContent);
				var $button2=$('<button/>').addClass('buttonn').html('返回').addClass('daijinquan').appendTo($carContent);
				
				var price=0;
				$.each(jiage, function(idx,val) {    
					price+=parseInt(val); 
				});
				
				$('<span/>').html(' 共计<i>￥'+price+'</i>').appendTo($carContent);
				
				//返回
				$button2.click(function(){
					fanhui();
					$bzLi.first().addClass('bgwc');
					$bzLi.eq(1).removeClass('bgwc');
				});
				
				//确认支付
				$button1.click(function(){
					$bzLi.removeClass('bgwc');
					$bzLi.eq(2).addClass('bgwc');
					
					$carContent.html('');
					$('<span/>').html('购买完成<br/><a href="../index.html">再去逛逛</a>').addClass('wancheng').appendTo($carContent);
					
					
				});
				
			});
		}
		
		
		
})