window.onload = function Init()
{ 
    window.setInterval(ShowPicturesInOrder,3000);
}
var Num = 1;
function ShowPicturesInOrder()
{
    var imgObj = document.getElementById("pic")
    imgObj.src = "../Personal Web/images/index" + Num + ".png";
    Num++;
    if (Num==5)
    {
        Num = 1;
    }
} 
