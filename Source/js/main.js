/* 
*  Author: Phap Duong Dieu
*  Modified date: 18 Aug 2016
*/
"use strict";

var _nums = [-1, -1, -1];
var _timer;
var _punishments = [
    "5 sweet kisses",
    "Bite ears",
    "Squeeze butt",
    "Lick nipples",
    "Tickle armpits"
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

        var id = $(this).data("id");
        var value = $(this).find(".flipper .back").data("value");

        //get value
        _nums[id] = value;

        // flip and lock it
        $(this).addClass("hover");

        console.log(_nums);

        // check game end
        _timer = setTimeout(isGameEnd, 2000);
    });

    $("#btnPunishment").on("click", function () {
        var punishment_id = createRandomNumbers(0, _punishments.length - 1);
        var sum = $("#card-1 .flipper .back").data("value");

        $("#card-1 .flipper .back").text(_punishments[punishment_id]);
        $("#card-1 .flipper .back").attr("data-value", "for " + sum + "s");
        $("body").addClass("punishment");

        $("#btnPunishment").addClass("hidden");
        $("#btnReplay").removeClass("hidden");
    });

    $("#btnReplay").on("click", function () {
        initGame();
    });

});

function initGame() {
    //reset values
    _nums = [-1, -1, -1];
    $("#btnPunishment").addClass("hidden");
    $("#btnReplay").addClass("hidden");
    $("body").removeClass("game-end punishment");
    $(".flip-container").removeClass("hover");
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
        $("#card-1 .flipper .back").attr("data-value", sum);

        $("body").addClass("game-end");
        $("#btnPunishment").removeClass("hidden");
    }
}