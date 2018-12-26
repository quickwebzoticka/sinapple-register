$(document).ready(function() {
	$(document).on('click', '.sinapple-tabs-item:not(.active)', function(){
		let a = $(this).index();

		$(this).siblings('.sinapple-tabs-item').removeClass('active');
		$(this).addClass('active');

		$(document).find('.order-form').removeClass('active').eq(a).addClass('active');
	});
});