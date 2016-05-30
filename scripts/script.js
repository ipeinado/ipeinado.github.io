$(document).ready(function() {
	console.log("Here we are");

	var pcp_open = false,
		context_menu_open = false; 

	$("#gpii-contextual-menu").hide();
	$("#pcp").hide();

	$("#input-speech-rate").val(200);
	$("#input-font-size").val(14);

	$("#speech-rate-plus").click(function() {
		var currentSpeechRate = parseInt($("#input-speech-rate").val());
		$("#input-speech-rate").val(currentSpeechRate + 1);
	});

	$("#speech-rate-minus").click(function() {
		var currentSpeechRate = parseInt($("#input-speech-rate").val());
		$("#input-speech-rate").val(currentSpeechRate - 1);
	});

	$("#font-size-plus").click(function() {
		var currentFontSize = parseInt($("#input-font-size").val()) + 1;
		$("#input-font-size").val(currentFontSize);
		$("body").css('font-size', currentFontSize);
	});

	$("#font-size-minus").click(function() {
		var currentFontSize = parseInt($("#input-font-size").val()) - 1;
		$("#input-font-size").val(currentFontSize);
		$("body").css('font-size', currentFontSize);
	});

	$("#gpii").contextmenu(function(e) {
		e.preventDefault();
		$("#gpii-contextual-menu").show();
	});

	$("#gpii").click(function(e) {
		e.preventDefault();
		$("#pcp").toggle('fast', function() {});
		$("#gpii").parent("li").toggleClass('active');
	});

	$('body').click(function(e) {
		if ($(e.target).closest('#gpii-contextual-menu').length === 0) {
			$("#gpii-contextual-menu").hide();
		}
	});

});