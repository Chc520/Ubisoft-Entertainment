$.ajax({
				type:"get",
				url:"js/new_file.json",
				async:true,
				data:{},
				success:function(result){
					var obj = result;
					console.log(obj);
					var href = decodeURI(location.href)
					var hrefArr = href.split("?");//通过？切分
					var imgId = hrefArr[1].split("=")[1];//找到id
					
					for(x in obj){
						if(x == imgId){
							$('#news-title').html(obj[imgId]['new-title']);
							$('.mypic').attr('src',obj[imgId]['mypic']);
							$('#p1').html(obj[imgId]['p1']);
							$('#p2').html(obj[imgId]['p2']);
							$('#p3').html(obj[imgId]['p3']);
							$('#p4').html(obj[imgId]['p4']);
							$('#p5').html(obj[imgId]['p5']);
							
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