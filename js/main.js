//定义变量
var can;
var ctx;
var	width;
var	height;
var girlPic = new Image();//初始化Image对象
var starPic = new Image();//初始化Image对象
var num = 60;
var nowTime;
var lastTime;
var stars = [];//定义数组
var switchy;
var life=0;//用于设置星星的透明度
function init() {
	can = document.getElementById('canvas');//获取canvas对象
	ctx = can.getContext("2d");//2d
	girlPic.src = "src/girl.jpg";//获取图片路径
	starPic.src = "src/star.png";//获取图片路径
	width= can.width;//得到canvas的宽度
	height= can.height;//得到canvas的高度
	lastTime = Date.now();//获取执行前的当前时间
	for(var i=0;i<num;i++){//循环初始化变量
		stars[i] = new starObj();//将每个数组转换为对象
		stars[i].init();//调用方法
	}
	gameloop();//重绘背景,图片,星星,鼠标移动
}
document.body.onload = init;//加载完执行init()方法
function gameloop(){//定义主要方法
	window.requestAnimFrame(gameloop);//根据电脑性能判断依次执行的方法的速度
	var now = Date.now();//获取当前时间
	nowTime = now-lastTime;//得到当前时间与上次执行方法的时间差
	lastTime=now;//将当前时间重新赋值成为上次时间
	drawBackground();//绘制背景
	drawgirl();//绘制图片
	drawStar();//绘制星星
	aliveupdate()//判断鼠标
}
function drawBackground(){//绘制背景
	ctx.fillStyle="#393550";//设置背景颜色为紫色
	ctx.fillRect(0,0,width,height);//绘制
}
function drawgirl(){//绘制图片
	ctx.drawImage(girlPic,100,150,600,300);//绘制
}
function mousemove(e){//定义鼠标移动方法判断是否在图片上
	if(e.offsetX||e.layerX){//得到每次鼠标移动的数值
		var px = e.offsetX = undefined?e.layerX:e.offsetX;//兼容火狐
		var py = e.offsetY = undefined?e.layerY:e.offsetY;//同上
	}
	if(px<700&&px>100&&py>150&&py<450){//判断是否在图片上
		switchy=true;//是为真
	}
	else{
		switchy=false;//否为假
	}
}