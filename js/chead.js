window.onload = function () {
	var random_num = Math.floor(Math.random() * 100) + 1;
	if (random_num > 30){
		var adx = document.querySelectorAll('div.adx'); //ins.adsbygoogle div.adx
		var spx = document.querySelectorAll('div.chead');
		for (var i=0;i<adx.length;i++){
			var positionInfo = adx[i].getBoundingClientRect();
			var height = positionInfo.height;
			var width = positionInfo.width;
			var top = positionInfo.top;
			var left = positionInfo.left;
			//spx[i].innerHTML = "[X]";
			spx[i].style.width = width+"px";
			spx[i].style.height = height+"px";
			spx[i].style.top = "0px";
			spx[i].style.left = left+"px";
			spx[i].style.position = "absolute";
			spx[i].style.textAlign = "right";
			spx[i].style.zIndex = "999";
		}
	}
}