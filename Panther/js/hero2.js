$(function(){
	function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
	}
	var openid=GetQueryString("openid");
	var showHomePage=GetQueryString("showHomePage");
	var gotoPage=GetQueryString("gotoPage");
	if(showHomePage==1){
		location.href='index.html?openid='+openid+'&gotoPage='+gotoPage;
	}
	$('.jijie_btn').click(function(){
			$.ajax({
		   	url: './php/gather.php?openid='+openid+'&heroid=2',
		   	async: false,
		   	type: 'post',
		   	success: function(data){
		   		var datas=eval('(' + data + ')');
		   		// console.log(datas)
		   		var num=0;
		   		if(datas['ID1']==1){
			   	$('.game_map_red1').css('display','none');
			   	$('.hero_num1').css('display','block');
			   	num++;
			   }
			   if(datas['ID2']==1){
			   	$('.game_map_red2').css('display','none');
			   	$('.hero_num4').css('display','block');
			   	num++;
			   }
			   if(datas['ID3']==1){
			   	$('.game_map_red3').css('display','none');
			   	$('.hero_num2').css('display','block');
			   	num++;
			   }
			   if(datas['ID4']==1){
			   	$('.game_map_red4').css('display','none');
			   	$('.hero_num3').css('display','block');
			   	num++;
			   }
			   if(datas['ID5']==1){
			   	$('.game_map_red5').css('display','none');
			   	$('.hero_num5').css('display','block');
			   	num++;
			   }
			   if(datas['ID6']==1){
			   	$('.game_map_red6').css('display','none');
			   	$('.hero_num6').css('display','block');
			   	num++;
			   }
			   if(num==1){
			   	$(".jijie_text").css({'background':'url(images/has_one.png) no-repeat','background-size':'100% 100%'})
			   }else if(num==2){
			   	$(".jijie_text").css({'background':'url(images/has_two.png) no-repeat','background-size':'100% 100%'})
			   }else if(num==3){
			   	$(".jijie_text").css({'background':'url(images/has_three.png) no-repeat','background-size':'100% 100%'})
			   }else if(num==4){
			   	$(".jijie_text").css({'background':'url(images/has_four.png) no-repeat','background-size':'100% 100%'})
			   }else if(num==5){
			   	$(".jijie_text").css({'background':'url(images/has_five.png) no-repeat','background-size':'100% 100%'})
			   }else if(num==6){
			   	$(".jijie_text").css({'background':'url(images/finish_all.png) no-repeat','background-size':'100% 100%'})
			   }
			   $('.jiantou').click(function(){
				if(num==6){
					location.href='jijie.html?openid='+openid;
				}
				$('.jijie_content').css('display','none');
				$('.game_map_tips').css('display','block');
			})
			   if(datas['gather']==1){
				$('.black_num2').css('display','none');
				$('.jijie_content').css('display','block');
			   }else if(datas['gather']==-1){
			   	alert('网络有问题请重新集结');
			   	/*window.opener=null;
				window.open('','_self');
				window.close();*/
			   }
			}
		})
	})

})