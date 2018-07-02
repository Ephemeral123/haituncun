require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"son" : "son"
	}
})

require(['jquery',"son"],function($,son){
				
		/*首页*/		
				$(window).scroll(function(){
					var showHeight = $(document).scrollTop();
					if(showHeight > 400){
						$(".shangmian").show();
					}else{
						$(".shangmian").hide();
					}
				})
				
				
			$(".cebian").click(function(){
				$("#talk").slideDown();
				$("#close").show();
			})
			
			        
			$("#close").click(function(){
				$("#talk").hide()
			})
			
			$(".app-notice").click(function(){
				$(".guding").hide()
			})
			        
		/*注册页*/
		
		   $("#userPhone").blur(function(){
		   		var phone = $("#userPhone").val();//val()是input的属性
		   		phone = phone.replace(/\s+/g, "");
		   		
		   		if(phone.length != 11){
					$(".phoneSpan").text("请输入正确的手机号码");
					$(".phoneSpan").attr("style","color:red")
				}else{	
					var isTrue = false;
					for(var i = 0; i < phone.length; i++){
						if(isEmailRule(phone[i]) == false){
							isTrue = true;
							break;
						}
					}	
					if(isTrue){
						$(".phoneSpan").text("请输入正确的手机号码");
						$(".phoneSpan").attr("style","color:red")
					}else{
						$(".phoneSpan").text("符合要求");
						$(".phoneSpan").attr("style","color:green")
					}
				}
		   })
		   function isEmailRule(charStr){
				if(charStr >= "0" && charStr <= "9"){
					return true;
				}else{
					return false;
				}
			}
		   
		$("#userPwd1").blur(function(){
			var pwd1 = $("#userPwd1").val();
			pwd1 = pwd1.replace(/\s+/g, "");
			
			if(pwd1.length > 16 || pwd1.length < 6){
				$(".psdSpan1").text("密码长度在6-16位");
				$(".psdSpan1").attr("style","color:red")
			}else{
				$(".psdSpan1").text("符合要求");
				$(".psdSpan1").attr("style","color:green")
			}
		})


		$("#userPwd2").blur(function(){
			var pwd1 = $("#userPwd1").val();
			var pwd2 = $("#userPwd2").val();
			pwd2 = pwd2.replace(/\s+/g, "");
			
			if(pwd2 != pwd1){
				$(".psdSpan2").text("密码不一致");
				$(".psdSpan2").attr("style","color:red")
			}else{
				$(".psdSpan2").text("密码一致");
				$(".psdSpan2").attr("style","color:green")
			}
		})
//		$("#userPwd1").onblur = function(){
//			oPassWord.value = oPassWord.value.replace(/ /g, "");
//			var oValue2 = oPassWord.value;
//
//			if(oValue2.length > 16 || oValue2.length < 6){
//				oPassWord2.innerHTML = "长度应为6~16个字符";
//				oPassWord2.style.color = "red";
//			}else{
//					oPassWord2.innerHTML = "符合要求";
//					oPassWord2.style.color = "green";
//				}
//		}
//
//		var oPassValue = document.getElementById("passwordValue");
//		var oPassValue2 = document.getElementById("passwordValue2");
//
//		oPassValue.onblur = function(){
//			if(oPassValue.value != oPassWord.value){
//				passwordValue2.innerHTML = "密码不一致";
//				passwordValue2.style.color = "red";
//			}else{
//				passwordValue2.innerHTML = "密码一致";
//				passwordValue2.style.color = "green";
//			}
//		}
//		   
		   
})
