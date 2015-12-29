$(function(){
	toggle = '';

	//当前屏幕高度
	var boxheight=$(window).height();
	// 即时设置菜单选项，左右箭头高度
	$('.op ul').css('margin-top',boxheight/4);
	$('.op').hide();
	$('.left,.right').css('top',boxheight/2-50);
	// 菜单选项鼠标放上改变样式
	$('.op li').mouseenter(function(){
		$(this).css({
			'color':'#f8f4c1',
			'border-left':'3px solid #f8f4c1',
			'border-top':'1px solid rgba(188,186,187,0.2)',
			'border-bottom':'1px solid rgba(188,186,187,0.2)',
			'box-shadow':'1px 1px 1px  #000'
		});
	});
	// 鼠标移开恢复
	$('.op li').mouseleave(function(){
		$(this).css({'color':'#fff','border':'none','box-shadow':''});
	});

	// 鼠标放上，箭头显示背景色
	$('.left,.right').mouseenter(function(){
		$(this).css({
			'border':'1px solid rgb(188,186,187)',
			'backgroundColor': 'rgba(0,0,0,0.3)',
		});
	});

	$('.left,.right').mouseleave(function(){
		$(this).css({'border':'none','backgroundColor':''});
		
	});

	// 点击菜单列出**
	$('.option').click(function(){
		toggle = true;
		/*点击固定窗口，禁止滑动*/
		var now_height = document.body.scrollTop;  //当前滑动高度
		$(window).scroll(function() {
    	$(this).scrollTop(now_height);
	});
		$('.op').css('animation','myfirst 1s');
		$('.left,.right').hide();
		/*页面模糊*/
		$('.banner_,.page,.second,.third').css({
			'filter':'url(blur.svg#blur)',
			'-webkit-filter':'blur(10px)',
			'-moz-filter':'blur(10px)',
			'-ms-filter':'blur(10px)',
			'filter':'blur(10px)',
			'filter':'progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false)',
			'filter':'alpha(opacity=80)',
			'-moz-opacity':'0.9',
			'opacity':'0.9'
		});

		$('.op').show();
		$('.top').hide();
		// 点击下载弹出二维码
		$('.download').click(function(){
			$('.hidden').fadeIn();
		});
			
		$('.op li a').mouseenter(function(){
			$(this).css('color','#f2eeb7');
		});
		$('.op li a').mouseleave(function(){
			$(this).css('color','#fff');
		});
	});
		/*还原*/
		$('.close,.second,.banner_,.third,.page').click(function(){
				toggle = false;
				$(window).unbind('scroll');
				$('.op').css('animation','mysecond 2s').fadeOut('slow');
				$('.hidden').fadeOut();
				$('.left,.right').show();
				$('.top').show();
				$('.banner_,.page,.second,.third').css({'-webkit-filter':'','opacity':'','-moz-opacity':'',});
			});

		// 控制box切换
		var num_now = 1;
		$('.box1,.box2,.box3,.box4').hide();
		$('.box1').show();

		$('.right_').click(function(){
			num_now++;
			
			var num_last = num_now - 1;
			$('.box'+num_now).show();
			$('.box'+num_last).hide();
			if(num_now == 5){
				num_now = 1;
				$('.box1').show();
			}
		});

		$('.left_').click(function(){
			var num_last = num_now - 1;
		
			if(num_now != 1){
				$('.box1').hide();
			}
			
			$('.box'+num_now).hide();
			$('.box'+num_last).show();
			num_now--;
			if(num_now == 0){
				num_now = 4;
				$('.box'+num_now).show();
				$('.box1').hide();

			}
		});
		// 第二块图片，鼠标放上改背景透明度
	$('.p1_img,.p2_img,.p3_img,.p4_img').mouseenter(function(){
		$(this).css('background','rgba(0,0,0,0.4)');
	});
	$('.p1_img,.p2_img,.p3_img,.p4_img').mouseleave(function(){
		$(this).css('background','rgba(0,0,0,0.2)');
	});

		

});
window.onload = function()
　　{
	　　//加入Mozilla的事件listerner
	　　if(window.addEventListener)
	　　document.addEventListener('DOMMouseScroll', moveObject, false);

	　　//for IE/OPERA etc
	　　document.onmousewheel = moveObject;
　　}
function moveObject(event)
	{
	　　var delta = 0;
		/*菜单出现后，上滑导航栏也不显示*/
		if(event.wheelDelta == '120'){
			if(toggle == ''){
				$('.top').fadeIn('slow');
			}
		}else if(event.wheelDelta == '-120'){
			$('.top').fadeOut('slow');
		}else if(event.detail == '3'){
			$('.top').fadeOut('slow');
		}else if(event.detail == '-3'){
			if(toggle == ''){
				$('.top').fadeIn('slow');
			}
		}
	　　var currPos=document.getElementById('scroll').offsetTop;
	　　currPos=parseInt(currPos)-(delta*10);
	}