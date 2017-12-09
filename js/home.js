	var num = 0;
			var timer = null;
			var len = $('#imgs ul li').length;
			
			$('#uull li').eq(0).hover(function(){
				$('#chu').css('display','block');
			},function(){
				$('#chu').css('display','none');
			})
			$('#uull li').eq(2).hover(function(){
				$('#chu3').css('display','block');
			},function(){
				$('#chu3').css('display','none');
			})
			$('#shang').click(function(){
				num--;
				move();
				console.log(num);
			})
			$('#next').click(function(){
				num++;
				move();
			})
			function move(){
				if(num<0){
					num = len-2;
					$("#imgs ul").css('left',-(len-1)*1200);
				}
				if(num>len-1){
					num = 1;
					$('#imgs ul').css('left',0);
				}
				$('#imgs ul').stop().animate({'left':-num*1200},500)
				if(num>$('#ul1 .dian').length-1){
					$('#ul1 .dian').eq(0).addClass('active').siblings().removeClass('active');
				}else{
					$('#ul1 .dian').eq(num).addClass('active').siblings().removeClass('active');
				}
			}
			$('#ul1 .dian').click(function(){
				num = $(this).index();
				move();
			})
			timer = setInterval(function(){
				num++;
				move();
			},3000)
			$('#carousel').mouseover(function(){
				clearInterval(timer);
			})
			$('#carousel').mouseout(function(){
				clearInterval(timer);
				timer = setInterval(function(){
					num++;
					move();
				},3000)
			})
			$('#land').click(function(){
				location.href = 'denglu.html';
			})
			var count = 0;
			$('#search').click(function(){
				count++;
				if(count%2==1){
					$('#sousuo').fadeIn(500);
				}else{
					$('#sousuo').fadeOut(500);
				}
				
			})
			
			$('.dian2').click(function(){
				num = $(this).index();
				$('.dian2').eq(num).addClass('active').siblings().removeClass('active');
				$('.twolis').eq(num).fadeIn(800).siblings().fadeOut(400);
			})
			
			var videoArr = ["http://ubicdn.com/201711/ODE_Launch_trailer.mp4","http://ubicdn.com/201711/R6_League_Finals.mp4"];
			
			$('.mp4picbox img').click(function(){
				$('#mp4div').html('<video webkit-playsinline="true" poster="http://ubicdn.com/201711/ODE_Launch_trailer.jpg" controls="" src="http://ubicdn.com/201711/ODE_Launch_trailer.mp4" preload="none"></video>')
				$('#mp4div').fadeIn(1000);
			})
			$('#mp4div').click(function(){
				$('#mp4div').fadeOut(800);
				
			})
			
			for(var i=0;i<$('.shopimg img').length;i++){
				console.log(i);
			}
			$('#img1').click(function(){
				location.href = "new.html";
			})
			$('#a1').click(function(){
				location.href = "new.html";
			})
			$('#img2').click(function(){
				location.href = "newpage.html?id="+this.id;
			})
			$('#a2').click(function(){
				location.href = "newpage.html?id="+this.id;
			})
			$('#img3').click(function(){
				location.href = "newpage.html?id="+this.id;
			})
			$('#a3').click(function(){
				location.href = "newpage.html?id="+this.id;
			})
			$('#shopimg1').click(function(){
				location.href = "shang.html";
			})
			$('#shopimg2').click(function(){
				location.href = "shangpage.html?id="+this.id;
			})
			$('#shopimg3').click(function(){
				location.href = "shangpage.html?id="+this.id;
			})