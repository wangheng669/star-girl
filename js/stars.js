var starObj = function(){//定义对象并初始化变量
	this.x;
	this.y;
	this.picNO;
	this.timer;
	this.xSed;
	this.ySed;
}	
starObj.prototype.init = function(){//将变量赋值
	this.x=Math.random()*600+100;//星星随机位置
	this.y=Math.random()*300+150;//星星随机位置
	this.picNO=Math.floor(Math.random()*7);//星星的大小
	this.timer=0;//星星闪烁的速度
	this.xSed=Math.random()*3-1.5;//星星移动的速度
	this.ySed=Math.random()*3-1.5;//星星移动的速度
}
starObj.prototype.update = function(){//设置星星速度
	this.x+=this.xSed*nowTime*0.01;//x轴根据时间移动位置
	this.y+=this.ySed*nowTime*0.01;//y轴根据时间移动位置
	if(this.x>700||this.x<100||this.y>450||this.y<150)//超过图片将星星重生
	{
		this.init();//重新绘制
		return;//跳出当前方法
	}
	this.timer+=nowTime;//时间累加
	if(this.timer>50){//大于五十执行
		this.picNO +=1;//移动星星图片的位置
		this.picNO %=7;//大于7时重新开始
		this.timer=0;//重置累加时间
	}
}
starObj.prototype.draw = function(){//绘制图片
	ctx.save();//保存当前画布
	ctx.globalAlpha=life;//将图片设置透明度
	ctx.drawImage(starPic,this.picNO*7,0,7,7,this.x,this.y,7,7);//绘制
	ctx.restore();//重置画布
}
document.addEventListener("mousemove",mousemove,false);//鼠标移动执行此方法
function drawStar(){//定义绘制星星方法
	for(var i=0;i<num;i++){//循环绘制60个星星
		stars[i].update();//
		stars[i].draw();
	}
}
function aliveupdate(){//鼠标移动到图片设置图片的透明度
	if(switchy){
		life+=0.03*nowTime*0.05;//背景透明度根据时间渐变
		if(life>1){
			life=1;
		}
	}else{
		life-=0.03*nowTime*0.05;
		if(life<0){
			life=0;
		}
		
	}
}