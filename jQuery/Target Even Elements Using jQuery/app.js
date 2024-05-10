$(document).ready(function () {
	$('#target1').css('color', 'red');
	$('#target4').html('<em>#target4</em>');
	$('#target4').remove();
	$('#target2').appendTo('#right-well');
	$('#target5').clone().appendTo('#left-well');
	$('#target1').parent().css('background-color', 'red');
	$('#right-well').children().css('color', 'orange');
	$('.target:nth-child(2)').addClass('animated bounce');
	$('.target:even').addClass('animated shake');
});
