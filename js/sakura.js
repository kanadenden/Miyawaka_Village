(function(d,b,w){
	var q = d.createElement('div');
	q.id = "sakura";
	q.innerHTML = '<style>'+
	'html,body{overflow-x:hidden;}'+
	'.hana{'+
	'position:absolute;height:0;width:0;'+
	'border: 10px solid #f9d2f8;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;}'+
	'.hana::after{'+
	'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
	'border: 10px solid #f9d2f8;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;'+
	'-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);'+
	'}'+
	'.type1{-webkit-transform: scale(1);-ms-transform: scale(1);transform: scale(1);}'+
	'.type2{-webkit-transform: scale(.9);-ms-transform: scale(.9);transform: scale(.9);}'+
	'.type3{-webkit-transform: scale(.8);-ms-transform: scale(.8);transform: scale(.8);}'+
	'.type4{-webkit-transform: scale(.7);-ms-transform: scale(.7);transform: scale(.7);}'+
	'.type5{-webkit-transform: scale(.6);-ms-transform: scale(.6);transform: scale(.6);}'+
	'.type6{-webkit-transform: scale(.5);-ms-transform: scale(.5);transform: scale(.5);}'+
	'</style>';
	b.appendChild(q);

	var h = w.innerHeight;
	var u = d.documentElement.scrollTop || b.scrollTop;
	var z = 9999;
	var t = new Array();
	var l = new Array();
	var y = new Array();
	var s = new Array();
	var g = new Array();
	var c = new Array();
	d.addEventListener('scroll',function(){u = d.documentElement.scrollTop || b.scrollTop;},false);
	for(var i=0;i<30;i++){
		var m = d.createElement('div');
		m.id = 'hanabira'+i;
		t[i] = Math.random()*-1000+u;
		l[i] = Math.random()*w.innerWidth;
		m.setAttribute('style','z-index:'+(z+i)+';top:'+t[i]+'px;left:'+l[i]+'px;');
		var clss = 'hana type'+(Math.floor(Math.random()*6)+1);
		m.setAttribute('class',clss);
		q.appendChild(m);
		y[i] = Math.random()*40+5;
		s[i] = Math.random()*5+2;
		g[i] = d.getElementById('hanabira'+i);
		c[i] = 0;
	}
	setInterval(function(){
		for(var i=0;i<30;i++){
			if(t[i]<u+h-40){
				if(y[i]>=c[i]){
					l[i] = l[i]+0.5+Math.random()*0.5;
				}else{
					l[i] = l[i]-0.5-Math.random()*0.5;
				}
				if((y[i]*2)<=c[i]){
					c[i] = 0;
				}
			}else{
				t[i] = u-40;
				l[i] = Math.random()*w.innerWidth;
			}
			t[i] = t[i]+s[i];
			g[i].style.top = t[i]+'px';
			g[i].style.left = l[i]+'px';
			c[i]++;
		}
	},45);
})(window.document,window.document.body,window);