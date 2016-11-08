jQuery(function($){
	//图片
	var $ulLeft=$('.ulLeft');
	var $ulImg=$ulLeft.find('img');
	
	$ulLeft.on('click','img',function(e){
		$ulImg.removeClass('redBorder')
		$(this).addClass('redBorder');
	});
	
	$('.noborder select').click(function(e){
		e.stopPropagation();
	});
	
	//评论nav
	var $_ul1=$('._ul1');
	
	$_ul1.on('click','li',function(){
		var index=$(this).index();
		if(index<5){
			$(this).siblings().removeClass('clickHou');
			$(this).addClass('clickHou');
		}
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
	
	//放大镜
	var $_bigpic=$('._bigpic');
//	var $detailsImg=$('.detailsImg');
//	var $fdj=$('.fdj');
	
//	var $bimg=$_bigpic.find('img');
//	var $fdpic=$('.fdpic');
//	var $fdimg=$fdpic.find('img');
//	
//	$_bigpic.on('mouseenter',function(){
//		$fdj.show();
//		$fdpic.show();
//	});
//	
//	$_bigpic.on('mouseleave',function(){
//		$fdj.hide();
//		$fdpic.hide();
//	});
//	
//	$_bigpic.on('mousemove',function(e){
//		var Left=e.clientX-$_bigpic.offset().left-$fdj.width()/2;
//		var Top=e.clientY-$_bigpic.offset().top-$fdj.outerHeight()/2;
//		
//		$fdj.css({
//			left:Left,
//			top:Top
//		});
//		
//		var parX=Left/($bimg.outerWidth()-$fdj.width());
//		var parY=Top/($bimg.outerHeight()-$fdj.height())
//		
//		var X=-parX*($fdimg.outerWidth()-$fdpic.width());
//		var Y=-parY*($fdimg.outerHeight()-$fdpic.height());
//		
//		$fdimg.css({
//			left:X,
//			top:Y
//		});
//	});
	
	$_bigpic.fangdajing({
		width:300,
		height:300
	});
	
	
	
	//加入购物车
	//用来存储商品
	var str= getCookie('arr');
//	var arr=[];
//	console.log(str);
	
//	if(str!=''){//判断cookie是否有商品内容
//		arr=JSON.stringify(str);
//	}
//	console.log(arr);
	var $jiaru=$('.jiaru');
	var arr=[];
	//添加点击事件
	$jiaru.on('click',function(e){
		var Img=$('.ulLeft li img').eq(0).attr('src');
		var spm=$('.feiru h2').text();
		var yhq=$('.dd1 dt').text();
		var mjg=$('.dd1 dd p').text();
		var jiage=$('.dd1 dd span').text();
		var obj={};
		obj.spm=spm;
		obj.yhq=yhq;
		obj.mjg=mjg;
		obj.jiage=jiage;
		obj.Img=Img;
		
		arr.push(obj);
		
		addCookie('arr',JSON.stringify(arr),7);
		alert('添加成功')
//		console.log(arr)
		e.preventDefault();
	});
	
})
