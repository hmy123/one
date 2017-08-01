$(function(){
	var swiper=new Swiper(".swiper-container",{
			pagination:".swiper-pagination",
			paginationClickable:true,//点击时切换
			// spaceBetween:20,//滑块之间的距离
			centeredSlides:true,//当前slide居中
			loop:true,
			autoplay:1200,//自动播放
		});
	//城市下拉菜单
	$(".select").css("display","none");
	var state=0;
	$(".top_left").click(function(){
		if(state==0){
			$(".select").show();
			$(".down").css("transform","rotate(180deg)");
			state=1;
		}else{
			$(".select").hide();
			$(".down").css("transform","rotate(360deg)");
			state=0;
		}
	});
	$(".select li").click(function(){
		$(".text").html($(this).html());
	});
});
//查看团购
var state=0;
function checkAll(){
	if(state==0){
		$("#listMore").slideDown(500);
		$("#open").css("display","none");
		$("#close").css("display","block");
		state=1;
	}else{
		$("#listMore").slideUp(500);
		$("#open").css("display","block");
		$("#close").css("display","none");
		state=0;
	}
}



//倒计时
window.onload=function(){
	setInterval(clock,1000);
	show.onclick=clock;
	function clock(){
		var newTime=new Date(2017,4,18,14,30,00);
		var nowTime=new Date();
		var onlyTime=Math.floor((newTime-nowTime)/1000);
		var strTime=Math.floor(toTwo(onlyTime/86400))+Math.floor(toTwo(onlyTime%86400/3600))+":"+Math.floor(toTwo(onlyTime%86400%3600/60))+":"+toTwo(onlyTime%60);
		show.innerHTML = strTime;
	}

	//当倒计时为各位数时
	function toTwo(n){
		if(n<10){
			return "0"+n;
		}else{
			return n;
		}
	}
}