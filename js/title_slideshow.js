var Slide_Counter = 1;
var Total_Slides = 6;
var Slide_Interval = 4000;
var Slide_Directory = './slide_';
var Slide_Extention = '.jpg';
var Current_Slide = 1;
var Seconds = 7;
var Max_Seconds = 5;
var First_View = true;
function Resize_Slideshow() {
	var Sidebar_Current_Margin = $("#sidebar-left").css('margin-left');
	var Sidebar_Width = 232;
	var Sidebar_Close_Margin = '-' + Sidebar_Width + 'px';
	var Sidebar_Open_Margin = '0px';
	var Content_Width = $("#Wrap_Container").width();
	var Content_Height = $("#Wrap_Container").height();
	if (Content_Height / 2 > Content_Width / 3) {
		$("#Slide_Top").css("height", Content_Height);
		$("#Slide_Top").css("width", Content_Height / 2 * 3);
	} else {
		$("#Slide_Top").css("width", Content_Width);
		$("#Slide_Top").css("height", Content_Width / 3 * 2);
	}
}
function Total_Timer() {
	++Seconds;
}
function Apply_Image() {
	var Current_Image = '<img src="' + Slide_Directory + Current_Slide + Slide_Extention + '" id="Slide_Top" class="slider" style="opacity:0"/>';
	$("#Wrap_Container").html(Current_Image);
	$(Current_Image).on('load', function () {
		Resize_Slideshow();
		$("#Slide_Top").css('opacity', '1');
		++Current_Slide;
		Seconds = 0;
		Loader();
	})
}
function Check_Timer() {
	if (Seconds < Max_Seconds) {
		setTimeout(Check_Timer, 1000)
	} else {
		if (First_View == true) {
			First_View = false;
			Apply_Image();
		} else {
			$("#Slide_Top").css('opacity', '0');
			setTimeout(Apply_Image, 1000)
		}
	}
}
function Loader() {
	if (Current_Slide > Total_Slides) {
		Current_Slide = 1;
	}
	var Current_Image = '<img src="' + Slide_Directory + Current_Slide + Slide_Extention + '"/>';
	$("#Slideshow_Shadow_Container").html(Current_Image);
	$(Current_Image).on('load', function () {
		Check_Timer();
	})
}
$(document).ready(Resize_Slideshow(), setInterval(Total_Timer, 1000), Loader());
