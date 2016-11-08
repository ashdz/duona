

// 函数名： addCookie
// 参数：
//    name:  cookie 的名字
//    val: cookie 的值
//    day: 多少天以后过期
// 返回值为空
function addCookie(name, val, day)
{
	var oDate=new Date();
		oDate.setDate(oDate.getDate()+day);
		
	document.cookie = ""+name+"="+val+";expires=" + oDate;

}



// 函数名： getCookie
// 参数：
//    name 得到的cookie 的名字
// 返回值： 如果等于"",说明没有找到，否则，就是所对应cookie 的值

// 找 cookie 名字为 username 所对应的值
// var username = getCookie("username");

function getCookie(name)
{
	// 得到cookie
	// username=老马; password=123456
	var str = document.cookie;

	// 按照 ; 分割
	var arr = str.split("; ");
	// username=老马
	// password=123456

	for(var i=0;i<arr.length;i++)
	{
		var arr2=arr[i].split("=");
		
		if(arr2[0]==name)
		{
			return arr2[1];
		}
	}
	// 如果一个都找不到，就返回 "";
	return "";
}