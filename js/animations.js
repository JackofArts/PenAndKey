$(".imageMap").mouseenter(function () {
	$(".non-nav-one").css("border", "3px solid #CEB573");
});
$(".imageMap").mouseleave(function () {
	$(".non-nav-one").css("border", "none");
});
$(".imageTheatre").mouseenter(function () {
	$(".non-nav-two").css("border", "3px solid #CEB573");
});
$(".imageBook").mouseenter(function () {
	$(".non-nav-three").css("border", "3px solid #CEB573");
});
$(".imageTheatre").mouseleave(function () {
	$(".non-nav-two").css("border", "none");
});
$(".imageBook").mouseleave(function () {
	$(".non-nav-three").css("border", "none");
});

var targetOffset = $(".imageMap").offset().top;

if (window.innerWidth > 991) {
	var $w = $(window).scroll(function(){
	    if ( $(".descriptor-banner").css("display") === "none") { 
	    	if ( $w.scrollTop() > targetOffset ) {  
				$(".descriptor-banner").css("left", "0").css("overflow", "hidden").fadeIn("slow", function () {
					$(".descriptor-banner").animate({"left":"47%"});
					$(".descriptor-banner").animate({"left":"42%"});
				});
				$(".descriptor-box-one").css("left", "0").css("overflow", "hidden").fadeIn("slow", function () {
					$(".descriptor-box-one").animate({"left":"20%"});
					$(".descriptor-box-one").animate({"left":"15%"});
				});
				$(".descriptor-box-two").css("left", "0").css("overflow", "hidden").fadeIn("slow", function () {
					$(".descriptor-box-two").animate({"left":"70%"});
					$(".descriptor-box-two").animate({"left":"65%"});
				});
			}
	    }
	});
} else {
	var $w = $(window).scroll(function(){
	    if ( $(".descriptor-banner").css("display") === "none") { 
	    	if ( $w.scrollTop() > targetOffset ) {  
				$(".descriptor-banner").css("left", "0").css("overflow", "hidden").fadeIn("slow", function () {
					$(".descriptor-banner").animate({"left":"5%"});
					$("descriptor-banner").animate({"left":"0%"});
				});
				$(".descriptor-box-one").css("left", "0").css("overflow", "hidden").fadeIn("slow", function () {
					$(".descriptor-box-one").animate({"left":"5%"});
					$(".descriptor-box-one").animate({"left":"0%"});
				});
				$(".descriptor-box-two").css("left", "0").css("overflow", "hidden").fadeIn("slow", function () {
					$(".descriptor-box-two").animate({"left":"5%"});
					$(".descriptor-box-two").animate({"left":"0%"});
				});
			}
	    }
	});
}