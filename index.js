var one = "#10e88a",
		two = "#7f3995",
		three = "#0d78e7",
		four = "#f88f18",
		five = "#bb6774";

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#one").position().top) {
				$('body').css('background', $("#one").attr("data-color"));

		};
		if ($(document).scrollTop() > $("#two").position().top) {
				$('body').css('background', $("#two").attr("data-color"))
		};
});
