var num = 0;
			var count = 0;
			
			$('.hothotbox2').click(function(){
				var myul1 = document.createElement("ul");
				var lis1 = document.createElement("li");
				var lis2 = document.createElement("li");
				var lis3 = document.createElement("li");
				var lis4 = document.createElement("li");
				lis1.innerHTML = $(this).find("a").html();
				lis2.innerHTML = $(this).find('p').html();
				lis3.innerHTML = "编号9527";
				lis4.innerHTML = "删除";
				myul1.appendChild(lis1);
				myul1.appendChild(lis2);
				myul1.appendChild(lis3);
				myul1.appendChild(lis4);
				$('#shop-body').append(myul1);
				var lis2text = lis2.innerText;
				var sp1 = lis2text.split(":")[1];
				num = sp1.split(" ")[0];
				count += Number(num);
				$('#add h3').html(count+"元");
				lis4.onclick = function(){
					var fa = $(this).parent();
					var flag = confirm("确认删除订单吗？");
					if(flag){
						fa.remove();
						var lis2text = lis2.innerText;
						var sp1 = lis2text.split(":")[1];
						num = sp1.split(" ")[0];
						count -= Number(num);
						$('#add h3').html(count+"元");
					}
				}
				
			})
			$('#naviger ul li').eq(0).click(function(){
				location.href = "index.html";
			})
			
			