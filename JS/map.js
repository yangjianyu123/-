var map = new BMap.Map("container");                        // 创建地图实例
var map=  new BMap.Map("allmap");                           // 创建地图实例  
var point = new BMap.Point(104.204778,30.661717);           // 创建点坐标  
map.centerAndZoom(point, 15);                               // 初始化地图，设置中心点坐标和地图级别  
map.enableScrollWheelZoom(true);                            //开启鼠标滚轮缩放
map.addControl(new BMap.OverviewMapControl());              //开启缩略地图
map.setCurrentCity("成都");
map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
map.addControl(new BMap.MapTypeControl());                  //添加地图类型控件
	

var marker = new BMap.Marker(point);        // 创建标注    
map.addOverlay(marker);                     // 将标注添加到地图中 
marker.enableDragging(); 
marker.addEventListener("click", function(){    
    alert("您点击了标注");    
});     
marker.addEventListener("dragend", function(e){    
    alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
})   
function myFun(result){
	var cityName = result.name;
	map.setCenter(cityName);
	alert("当前定位城市:"+cityName);
}
var circle = new BMap.Circle(point,1500,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
map.addOverlay(circle);
var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});  
local.searchNearby('网吧',point,1500);



