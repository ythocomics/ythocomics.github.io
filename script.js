$(document).ready(() => {
	$("#headerSearch").click(() => {
		$("#searchfield").css("margin-top","-150px");
	});
	$("div#searchfield #close").click(() => {
		$("#searchfield").css("margin-top","-300px");
	});
	$("#headerMenu").click(() => {
		$("#mainMenu").css("margin-left","0px");
	});
	$("#mainMenu #close").click(() => {
		$("#mainMenu").css("margin-left","-25vw");
	});
});