/* 
*  Author: Phap Duong Dieu
*  Modified date: 3rd Sep 2016
*/
"use strict";

var _nums = [-1, -1, -1];
var _timer;
var _punishments = [
    "Do nothing",
    "Bite the ears",
    "Bite the ears",
    "Give a tight hug",
    "Give a tight hug",
    "Squeeze the butt<br/><code>(hehe!)</code>",
    "Squeeze the butt<br/><code>(hehe!)</code>",
    "Squeeze the butt<br/><code>(hehe!)</code>",
    "Lick the nipples",
    "Lick the nipples",
    "Lick the nipples",
    "Lick the nipples",
    "Hold the dick<br/><code>(:scared:)</code>",
    "Hold the dick<br/><code>(:scared:)</code>",
    "French kiss<br/><code>(wow!)</code>",
    "French kiss<br/><code>(wow!)</code>",
    "French kiss<br/><code>(wow!)</code>",
    "French kiss<br/><code>(wow!)</code>", 
    "French kiss<br/><code>(wow!)</code>",   
    "Tickle the armpits<br/><code>(hahaha)</code>",
    "Lick the armpits",    
    "Lick the navel<br/><code>(OMG!!)</code>",
    "Lick the navel<br/><code>(OMG!!)</code>",
    "Kiss the neck",
	"Kiss the neck",
    "Kiss the forehead",
	"Kiss the forehead",
    "Kiss the cheek",
	"Kiss the cheek",
    "Bite the chin",
    "Bite the chin",
    "Spank!",
	"Spank!",
    "Swallow the tounge<br/><code>;))</code>",
    "Swallow the tounge<br/><code>;))</code>",
    "Do what you want!!!<br/><code>:\"O</code>",
    "Lick the dick<br/><code>(:dangerous:)</code>",
    "Kiss the dick<br/><code>:O</code>",
    "Lay on his body",
	"Lay on his body",
    "Suck the dick<br/><code>:\"O !!!!</code>",
];

//initiate app
$(document).ready(function () {

    //initialize game
    initGame();

    //onClick event for cards
    $(".flip-container").on("click", function () {
        if (_timer) {
            clearTimeout(_timer);
        }

        if (!$("body").hasClass("game-end")) {
            var id = $(this).attr("data-id");
            var value = parseInt($(this).find(".flipper .back").attr("data-value"));

            //get value
            _nums[id] = value;

            // flip and lock it
            $(this).addClass("hover");

            console.log(_nums);

            // check game end
            _timer = setTimeout(isGameEnd, 2000);
        }
    });

    $("#btnPunishment").on("click", function () {
        var punishment_id = createRandomNumbers(0, _punishments.length - 1);
        var sum = parseInt($("#card-1 .flipper .back").attr("data-value")) / 2;

        $("#card-1 .flipper .back").html(_punishments[punishment_id]);
        $("#card-1 .flipper .back").attr("data-value", "for " + sum + "s");
        $("body").addClass("punishment");

        $("#btnPunishment").addClass("hidden");
        $("#btnReplay").removeClass("hidden");
    });

    $("#btnReplay").on("click", function () {
        $(".flip-container").removeClass("hover");

        setTimeout(function() {
            initGame();
        }, 500);
        
    });

});

function initGame() {
    //reset values
    _nums = [-1, -1, -1];
    $(".flip-container").removeClass("hover");
    $("#btnPunishment").addClass("hidden");
    $("#btnReplay").addClass("hidden");
    $("body").removeClass("game-end punishment");
    $("#card-1 .flipper .back").text("");

    for (var i = 0; i <= 2; i++) {
        var value = createRandomNumbers(0, 9);

        $("#card-" + i).find(".flipper .back").attr("data-value", value);
    }
}

function createRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isGameEnd() {
    //Game end
    if (_nums.lastIndexOf(-1) == -1) {

        var sum = _nums.reduce(function (previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
        });
        console.log("sum=" + sum);
        $("#card-1 .flipper .back").attr("data-value", sum);

        $("body").addClass("game-end");
        $("#btnPunishment").removeClass("hidden");
    }
}
