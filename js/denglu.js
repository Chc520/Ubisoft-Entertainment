var flag = null;
			var dianyou = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
			var pass = /^[a-z0-9_-]{6,18}$/;
			$('#zhu a').click(function(){
				$('#huiyuanbox').slideUp(1000);
				$('#huiyuanbox2').slideDown(1000);
			})
			$('#deng a').click(function(){
				$('#huiyuanbox2').slideUp(1000);
				$('#huiyuanbox').slideDown(1000);
			})
			$('#nousername a').click(function(){
				$('#huiyuanbox').slideUp(1000);
				$('#huiyuanbox2').slideDown(1000);
			})
			$('#youxiang').blur(function(){
				if($('#youxiang').val()==""){
					$('#pp3').html( "邮箱不能为空");
					flag = false;
				}else if(!dianyou.test($('#youxiang').val())){
					$('#pp3').html("请输入正确邮箱");
					flag = false;
				}else{
					$('#pp3').html("");
					flag = true;
					
				}
				if($('#password1').val()==""||$('#password2').val()==""||$('#youxiang').val()==""){
					flag = false;
				}
			})
			$('#password1').blur(function(){
				if($('#password1').val()==""){
					$('#pp4').html("密码不能为空");
					flag = false;
				}else if(!pass.test($('#password1').val())){
					$('#pp4').html("请输入正确的密码");
					flag = false;
				}else{
					$('#pp4').html("");
					flag = true;
					
				}
				if($('#password1').val()==""||$('#password2').val()==""||$('#youxiang').val()==""){
					flag = false;
				}
			})
			$('#password2').blur(function(){
				if($('#password2').val()==""){
					$('#pp5').html("两次密码必须相同");
					flag = false;
				}else if(!pass.test($('#password2').val())){
					$('#pp5').html("两次密码必须相同");
					flag = false;
				}
				if($('#password2').val()==$('#password1').val()){
					flag = true;
					$('#pp5').html("");
				}else{
					$('#pp5').html("两次密码必须相同");
				}
				if($('#password1').val()==""||$('#password2').val()==""||$('#youxiang').val()==""){
					flag = false;
				}
			})
			$('#btn2').click(function(){
				if(flag == true){
					alert("恭喜你,注册成功");
					var hao = window.localStorage;
					hao.setItem($('#youxiang').val(),$('#password1').val());
					$('#huiyuanbox2').slideUp(1000);
					$('#huiyuanbox').slideDown(1000);
				}else{
					alert("注册失败");
				}
			})
			
			
			$('#btn').click(function(){
				if($('#username').val()=="985935649@qq.com"){
					window.location="index.html";
				}else if($('#username').val()==""){
					alert('账号或者密码不能为空');
				}else{
					alert("账号或者密码错误");
				}
				
			})