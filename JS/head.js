window.onload=function(){
    var BOX = document.getElementsByClassName("box");
    var UL = document.getElementsByTagName("ul");
    var LI = UL[0].getElementsByTagName("li");
    var LInum = UL[1].getElementsByTagName("li");
    var i=num=0;
    var timer=play=null;
    
    // 切换按钮
    for(i=0;i<LInum.lenth;i++)
    {
       LInum[i].num=i;
       LInum[i].onmouseover = function(){
           show(this.num)
       }
    }
    //鼠标划过关闭定时器
    BOX.onmouseover=function(){
        clearInterval(play)
    };
    //鼠标离开启动自动播放
    BOX.onmouseout = function (){
        autoPlay()
    }; 
    //自动播放
    function autoPlay(){
        play=setInterval(function(){
            num++;
            num>=LI.length && (num=0)
            show(num);
        },4000);
    }
    autoPlay();
    //图片切换, 淡入淡出效果
    function show(a){
       num=a;
       var alpha = 0;
       clearInterval(timer);
       
        for(i=0;i<LI.length;i++){
            LI[i].style.opacity=0;
            LI[i].style.filter="alpha(opacity=0i)";
      }

        timer = setInterval(function () {
        alpha += 2;
        alpha > 100 && (alpha =100)
        LI[num].style.opacity = alpha / 100;
        LI[num].style.filter = "alpha(opacity = " + alpha + ")";
        alpha == 100 && clearInterval(timer)       
        
        },20); 
         
        
    }
}