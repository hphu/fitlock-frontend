
$(document).ready(function(){
	//alert("b");
	var steps = 10;
	var requiredactivity = 1000;
	setInterval(function(){
		steps+=10;
		//alert(steps/requiredactivity);
		if (steps <= requiredactivity){
		$('#text').text("Progress: " + steps + "/" + requiredactivity);
		$('#progress div').css({width: (steps/requiredactivity)*100+"%"});
		}
		if (steps == requiredactivity){
			$('#lock').attr("src","unlockicon.png");
		}
	},100);
});

