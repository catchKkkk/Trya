
var i=0;
var timer=null;
$(function(){
	
	//首次打开页面时第一张图片显示，其他图片隐藏
	$(".img").eq(0).show().siblings(".img").hide();
	timeStart();
	
	//鼠标移入----轮播区事件
	$("#imgs").hover(function(){
		
		//按钮显示
		$(".btn").show();
		clearInterval(timer);
	}, function(){
		//按钮消失
		$(".btn").hide();
		timeStart();
	});
	
	//鼠标移入移出----下标事件
	$(".tab").hover(function(){
		i=$(this).index();
		show();
		
		//清除轮播
		clearInterval(timer);
		
	}, function(){
		
	});
	
	//按钮事件
	$(".btn1").click(function(){
		prev();
		clearInterval(timer);
	});
	$(".btn2").click(function(){
		next();
		clearInterval(timer);
	});
	
	
});

function show(){
	//轮播时第i张图片的显示过度设置
	$(".img").eq(i).fadeIn(300).siblings(".img").fadeOut(300);
	
	//下标添加轮播效果
	$(".tab").eq(i).addClass("tabbg").siblings().removeClass("tabbg");
}

function timeStart(){
	//设置轮播
	timer=setInterval(function(){
		
		i++;
		if(i==6)i=0;
		show();
		
	},1800);
}

function prev(){
	clearInterval(timer);
	i+=1;
	if(i==6)i=0;
	show();
	

}

function next(){
	clearInterval(timer);
	i-=1;
	if(i==-1)i=5;
	show();

}
