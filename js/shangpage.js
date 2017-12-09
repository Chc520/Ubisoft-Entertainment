$.ajax({
				type:"get",
				url:"js/new_file.json",
				async:true,
				dataType:'json',
				data:{},
				success:function(result){
						var obj = result;
						console.log(obj);
						var href = decodeURI(location.href)
						var hrefArr = href.split("?");//通过？切分
						var imgId = hrefArr[1].split("=")[1];//找到id
						console.log(imgId);
						for( x in obj){
							if(x == imgId){
								$('#shopimgbox img').attr('src',obj[imgId]['img']);
								$('#shopbuybox h1').html(obj[imgId]['h1']);
								$('#shopbuybox h2').html(obj[imgId]['h2']);
								$('#jie1').attr('src',obj[imgId]['jie1']);
								$('#jie2').attr('src',obj[imgId]['jie2']);
								$('#jie3').attr('src',obj[imgId]['jie3']);
								$('#jie4').attr('src',obj[imgId]['jie4']);
								$('#jie5').attr('src',obj[imgId]['jie5']);
								$('#jie6').attr('src',obj[imgId]['jie6']);
							}
						}
							
					}
				
					
				
			});
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
			$("#ul1 li").eq(1).click(function(){
				location.href = "shopping.html";
			})