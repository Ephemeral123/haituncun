define(function(){	
		return {
			$id : $(function(id){
					return document.getElementById(id);
				}),
			Slider : $(function() {		
				var arr = ["img/fbf95c457b33de32a1b67c2a4188b0e3.jpg","img/50dc822d0f7e6cc93699c8f2ba9da2d0.jpg","img/4a5b6b34b586f541ed8c2ab54cdfdecc.jpg"]
			  	var arr1 = ["background-color: rgb(228, 239, 245)","background-color: rgb(185, 174, 168)","background-color: rgb(192, 233, 237)"]
			    $("#bannerImg li img").attr("src", arr[0]);
				$("#bannerImg li").attr("style", arr1[0]);	
				
				var index = 0;
			    var timer = null;
			   
			    $("#bannerImg a").mouseenter(function(){
					$(".btnLeft").css('margin-left', '-377px');
				})
				$("#bannerImg a").mouseleave(function(){
					$(".btnLeft").css('margin-left', '-415px');
				})
				$("#bannerImg a").mouseenter(function(){
					$(".btnRight").css('margin-right', '-397px');
				})
				$("#bannerImg a").mouseleave(function(){
					$(".btnRight").css('margin-right', '-435px');
				})
				
			    $(".navLi li").hover(function() {
			        clearInterval(timer);
			        index = $(this).index();
			        $(this).addClass("hover").siblings().removeClass("hover");
			        $("#bannerImg li img").attr("src", arr[index]).css('opacity', 0.5).animate({
			            'opacity': 1
			        },2000);
			        $("#bannerImg li").attr("style", arr1[index]);
			        $("#bannerImg li").attr("style", arr1[index]).css('opacity', 0.5).animate({
			                'opacity': 1
			            },2000);
			    }, function() {
			    	auto();
			    });
			    function auto() {
			        timer = setInterval(function() {
			            index++;
			            if (index > 2) {
			                index = 0;
			            }
			            $(".navLi li").eq(index).addClass("hover").siblings().removeClass("hover");
			            $("#bannerImg li img").attr("src", arr[index]).css('opacity', 0.5).animate({
			                'opacity': 1
			            },2000);
			            $("#bannerImg li").attr("style", arr1[index]);
			            $("#bannerImg li").attr("style", arr1[index]).css('opacity', 0.5).animate({
			                'opacity': 1
			            },2000);
			        }, 3000);
			    };
			    
			    auto(); 
			      $("#bannerImg li img").mouseenter(function(){
			        	clearInterval(timer);
			        });
			        $("#bannerImg li img").mouseleave(function(){
			        	auto();
			        })
			        
			        
			    
			      
			}),
			slider : $(function() {
				var index = 0;
			    var timer = null;
			    $(".riMainBtm li").hover(function() {
			    	
			        clearInterval(timer);
			        index = $(this).index();
			        $(this).addClass("hover").siblings().removeClass("hover");
			        $("#RollOne .oneList").eq(index).addClass("active").siblings().removeClass("active")
			    }, function() {
			        auto();
			    });
			    auto();
			    function auto() {
			        timer = setInterval(function() {
			            index++;
			            if (index > 1) {
			                index = 0;
			            }
			            $(".riMainBtm li").eq(index).addClass("hover").siblings().removeClass("hover");
			            $("#topRoll #RollOne").animate({marginLeft:"-200px"},3000, function () {
			            	$("#topRoll #RollOne").css('marginLeft','0px'),3000;
			            })
			        }, 3000);
			    };
			}),
			}
		})