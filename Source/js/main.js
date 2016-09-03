/* 
*  Author: Phap Duong Dieu
*  Modified date: 18 Aug 2016
*/
"use strict";

var _card_1 = -1;
var _card_2 = -1;
var _card_3 = -1;

//initiate app
$(document).ready(function() {

	//generate randomly number from 0-9


	//onClick event for cards
	$(".flip-container").on("click", function() {
		var id = $(this).data("id");

		//Game end
		if (_card_1 != -1 && _card_2 != -1 && _card_3 != -1) {
			$("body").addClass("game-end");
		}
		//Game play
		else {
			$(this).addClass("hover");

			
		}
	});




});