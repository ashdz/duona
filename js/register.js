jQuery(function($){
	//将底部写入页面
	$('<div/>').addClass('bottomDiv').load('../html/bottom.html',function(){
		$(this).insertAfter('.content');
		$('.pqu').html(' ');
	});
	//生成随机验证码
	var $yzhm=$('.yzhm');
	function yzhm(){
		for(var i=0;i<4;i++){
			var ss=parseInt(Math.random()*25+65);
			$yzhm.html($yzhm.text()+String.fromCharCode(ss));
		}
	}
	yzhm();
	//点击刷新验证码
	$yzhm.click(function(){
		$yzhm.html(' ');
		yzhm();
	});
	
	//表单验证
	var $input=$('.zhuce input');
	var $button=$('.zhuce button');
	var $i=$('.zhuce i');
	var i=0;
	var str=getCookie('arrs');
	var arrs=[];
	
	$button.on('click',function(){
		var $zhval=$input.eq(0).val();
		var $mima=$input.eq(1).val();
		var $Mima=$input.eq(2).val();
		var $yzm=$input.eq(3).val();
		var $shopbuzhou=$('.shopbuzhou');
		
		//账号
		var reg1 = /^1[35678]\d{9}$/;
		var reg2= /\w+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
		//密码
		var reg3=/\w{6,20}/;
		//账号验证
		if(reg1.test($zhval)||reg2.test($zhval)){
			$i.eq(0).html('');
			$i.eq(0).html('正确').addClass('zhengque').removeClass('cuowu');
		}else{
			$i.eq(0).html('');
			$i.eq(0).html('错误').addClass('cuowu').removeClass('zhengque');
		}
		//密码验证
		if(reg3.test($mima)){
			$i.eq(1).html('');
			$i.eq(1).html('正确').addClass('zhengque').removeClass('cuowu');
		}else{
			$i.eq(1).html('');
			$i.eq(1).html('错误').addClass('cuowu').removeClass('zhengque');
		}
		//密码验证
		if($Mima==$mima){
			$i.eq(2).html('');
			$i.eq(2).html('一致').addClass('zhengque').removeClass('cuowu');
		}else{
			$i.eq(2).html('');
			$i.eq(2).html('不一致').addClass('cuowu').removeClass('zhengque');
		}
		//验证码验证
		if($yzm==$yzhm.html()){
			$i.eq(3).html('');
			$i.eq(3).html('验证码正确').addClass('zhengque').removeClass('cuowu');
		}else{
			$i.eq(3).html('');
			$i.eq(3).html('验证码错误').addClass('cuowu').removeClass('zhengque');
		}
		
		if($i.eq(0).html()=='错误'||$i.eq(2).html()=='不一致'||$i.eq(1).html()=='错误'||$i.eq(3).html()=='验证码错误'){
			$shopbuzhou.find('li').eq(1).addClass('bgwc');
		}else{
			i++;
			$shopbuzhou.find('li').eq(i).addClass('bgwc');
			
			if(i==2){
				setTimeout(function(){
					
					//cookie存储注册信息
					var $input=$('.zhuce input');
					var zhanghao=$input.eq(0).val();
					var mima=$input.eq(1).val();
					var obj={};
					obj.zhanghao=zhanghao;
					obj.mima=mima;
					
					arrs.push(obj);
					
					addCookie('arrs',JSON.stringify(arrs),7);
					
					alert("注册成功");
					location.href="denglu.html";
				},50);
			}
		}
		$shopbuzhou.find('li').eq(i).addClass('bgwc');
		
	});
	
	

})