$('#ul2 li').eq(0).hover(function(){
				$('#chu').css('display','block');
			},function(){
				$('#chu').css('display','none');
			})
			$('#ul2 li').eq(2).hover(function(){
				$('#chu3').css('display','block');
			},function(){
				$('#chu3').css('display','none');
			})
   var loc = window.localStorage;
loc.setItem("text","1.556485484");
$('#buy2').click(function(){
	loc.setItem('text',Math.random()*100);
//	console.log(1111)
})
$("#ul1 li").eq(1).click(function(){
	location.href = "shopping.html";
})

