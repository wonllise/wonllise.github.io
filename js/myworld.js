// 导航栏伸缩
window.onload=function(){
    $('.nav_slide_button').click(function() {
        $('.pull').slideToggle();
    });
    // 导航按钮切换变换
	document.querySelector("#nav-toggle").addEventListener("click", function() {
	    this.classList.toggle("active");
	});
	//滚动监听星座部分
	$('.nav1').waypoint(function() {
		$('.nav1').addClass('faderight');
	}, {
		offset: '75%'
	});
	//滚动监听兴趣部分
	$(".nav2").waypoint(function(){
		$(".nav2").addClass("fadetop");
	}, {
		offset:'75%'
	});
	//鼠标滑动到对应兴趣部分，出现相应文字
	$(".cbox").mouseenter(function() {
		$(this).children('.model').stop().animate({
			opacity:1,
		},{
		    duration:700,
			queue:true
		});
		$(this).children('img').stop().animate({
			opacity:1,
			top:'50%',
			marginTop:'-25px',
		},{
		    duration:700,
			queue:true
		});
		$(this).stop(true,true);
	});
	$(".cbox").mouseleave(function(){
		$(this).children('.model').stop().animate({
			opacity:0,
		},{
		    duration:700,
			queue:true
		});
		$(this).children('img').stop().animate({
			opacity:0,
			top:'0',
			marginTop:'0',
		},{
		    duration:700,
			queue:true
		});
	});

	//考拉提示框
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	// 寻找我
	$('.find').waypoint(function() {
		$('.find').addClass('fadeleft');
	}, {
		offset: '75%'
	});
	// 点击联系方式卡通头像出现
	$('.conbg').mouseenter(function() {
		$(this).stop().animate({
            marginTop:'-30px', 
		},{
			duration:500,
			queue:true
		});
		$(this).children('img').stop().animate({
            top:'0px', 
		},{
			duration:700,
			queue:true
		});
	});
	$('.conbg').mouseleave(function() {
		$(this).stop().animate({
            marginTop:'0', 
		},{
			duration:500,
			queue:true
		});
		$(this).children('img').stop().animate({
            top:'25px', 
		},{
			duration:700,
			queue:true
		});
	});

	//点击导航跳转至对应内容
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

}


