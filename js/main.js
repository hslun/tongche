$(function(){

	toggle = '';
	$('.op li').mouseenter(function(){
		$(this).css({
			'color':'#f8f4c1',
			'border-left':'3px solid #f8f4c1',
			'border-top':'1px solid rgba(188,186,187,0.2)',
			'border-bottom':'1px solid rgba(188,186,187,0.2)',
			'box-shadow':'1px 1px 1px  #000'
		});
	});
	$('.op li').mouseleave(function(){
		$(this).css({'color':'#fff','border':'none','box-shadow':''});
	});
		var boxheight=$(window).height();
		$('.left,.right').css('top',boxheight/2-50);
		$('.bg').css({
			'width':'100%',
			'height':boxheight,
			'position':'fixed',
			'top':'0px',
			'z-index':'-1'
		});
	
	$('.left,.right').mouseenter(function(){
		$(this).css({
			'border':'1px solid rgb(188,186,187)',
			'backgroundColor': 'rgba(0,0,0,0.3)',
		});
		
	});
	$('.left,.right').mouseleave(function(){
		$(this).css({'border':'none','backgroundColor':''});
		
	});
	$('.op').hide();


	$('.option').click(function(){
		toggle = true;
		$('.op').css('animation','myfirst 1s');
		$('.left,.right').hide();
		/*点击更多，content模糊*/
			$('.neirong,.bg,.buttom').css({

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
			$('.download').click(function(){
				$('.hidden').fadeIn();
			});
			
			$('.close,.neirong,.bg,.buttom').click(function(){
				
				$('.op').css('animation','mysecond 2s').fadeOut('slow');
				$(window).unbind('scroll');
				/*还原*/
				$('.top').show();
				$('.neirong,.buttom,.bg').css({'-webkit-filter':'','opacity':'','-moz-opacity':'',});
				$('.hidden').fadeOut();
				$('.left,.right').show();
			});
			$('.op li a').mouseenter(function(){
				$(this).css('color','#f2eeb7');
			});
			$('.op li a').mouseleave(function(){
				$(this).css('color','#fff');
			});
			
			
		});
		




	});


	
	$('.op li').mouseenter(function(){
		$(this).css({
			'color':'#f8f4c1',
			'border-left':'3px solid #f8f4c1',
			'border-top':'1px solid rgba(188,186,187,0.2)',
			'border-bottom':'1px solid rgba(188,186,187,0.2)',
			'box-shadow':'1px 1px 1px  #000'
		});
	});
	$('.op li').mouseleave(function(){
		$(this).css({'color':'#fff','border':'none','box-shadow':''});
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
	
