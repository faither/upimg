$(function(){
	function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
	}
	var openid=GetQueryString("openid");
	var showHomePage=GetQueryString("showHomePage");
	if(showHomePage==1){
		location.href='index.html?openid='+openid;
	}
	// var openid=GetQueryString("openid");
	$('.jijie_btn').click(function(){
			$.ajax({
		   	url: './php/gather.php?openid='+openid+'&heroid=6',
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
				$('.game_map_tip').css('display','block');
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
	var date = new Date();
	 this.year = date.getFullYear();
	 this.month = date.getMonth() + 1;
	 if (this.month >= 1 && this.month <= 9) {
        this.month = "0" + this.month;
    }
	 this.date = date.getDate();
	 this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	 this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	 this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	 var mydate= this.year+''+this.month+''+this.date;
	 // console.log(mydate)
	$('.largeA').click(function(){
		$.ajax({
		   	url: './php/getGift.php?openid='+openid,
		   	async: false,
		   	type: 'get',
		   	success: function(obj){
		   		var objs=eval('(' + obj + ')');
		   		if(objs['giftID']==-1){
		   			location.href='prize_no.html'
		   		}else if(objs['giftID']==1){
		   			$('.chou_prize').css('display','none');
					$('.game_map_tips').css('display','block');
		   		}else if(objs['giftID']==2){
		   			$('.chou_prize').css('display','none');
					$('.game_map_tips').css('display','block');
		   		}else if(objs['giftID']==3){
		   			$('.chou_prize').css('display','none');
					$('.game_map_tips').css('display','block');
		   		}
		   	}
		})
		 function generateQRCode(rendermethod, picwidth, picheight, url) {  
              $("#qrcode").qrcode({   
                      render: rendermethod, // 渲染方式有table方式（IE兼容）和canvas方式  
                      width: picwidth, //宽度   
                      height:picheight, //高度   
                      text: utf16to8(url), //内容   
                      typeNumber:-1,//计算模式  
                      correctLevel:2,//二维码纠错级别  
                      background:"#ffffff",//背景颜色  
                      foreground:"#000000"  //二维码颜色  
            
                  });  
              } 
              init(); 
              function init() {  
                  generateQRCode("canvas",100, 100, "http://www.baidu.com?openid="+openid+"&datatime="+mydate);  
              }  
              console.log("http://www.baidu.com?openid="+openid+"&datatime="+mydate)
                  //中文编码格式转换  
              function utf16to8(str) {  
                  var out, i, len, c;  
                  out = "";  
                  len = str.length;  
                  for (i = 0; i < len; i++) {  
                      c = str.charCodeAt(i);  
                      if ((c >= 0x0001) && (c <= 0x007F)) {  
                          out += str.charAt(i);  
                      } else if (c > 0x07FF) {  
                          out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
                          out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));  
                          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
                      } else {  
                          out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));  
                          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
                      }  
                  }  
                  return out;  
              }     
  
		
	})
})