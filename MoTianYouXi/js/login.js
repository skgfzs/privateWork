$(function(){
	speed();
});

//测速
function speed(){
	//1 ~ 16
	for(var i = 0; i < 4; ++i){
		var random = Math.floor(Math.random() * 16);
		
		var ele = $('#ms_'+ i).find('.msDark');
		
		var delay = 100;
		
		ele.each(function(index,ele){
			if(index <= random){
				setTimeout(function(){
					$(ele).addClass('msLight')
				},delay);
				
				delay += 100;
			}
		});
	}
}