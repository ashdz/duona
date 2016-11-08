
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
	
	//点击登录
	var str=getCookie('arrs');
	if(str!=''){
		var arrs=JSON.parse(str);
	}
	var zhhao='';
	var mma='';
	
	//取出cookie里存储的信息
	$.each(arrs,function(idx,val){
		zhhao=val.zhanghao;
		mma=val.mima;
	});
	
	var $input=$('.denglujm input');
	var $radio=$input.eq(3);
		
	
	$('.denglujm button').on('click',function(){
		console.log("执行了")
		var zhanghao=$input.eq(0).val();
		var mima=$input.eq(1).val();
		var yangzhengma=$input.eq(2).val();
		var yzhma=$('.yzhm').text();
		
		if(zhanghao==zhhao&&mima==mma){
			if(yangzhengma==yzhma){
				
				alert("登录成功");
				location.href="../index.html";
			}else{
				alert("验证码错误");
			}
			
		}else{
			alert("用户不存在！");
		}
		
		
	});
	
	// 记住账号
	if($radio[0].checked){
		
		$input.eq(0).val(zhhao);
		$input.eq(1).val(mma);
	}
	
	
	
	
	
});
