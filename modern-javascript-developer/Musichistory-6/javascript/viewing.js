"use strict";

let viewing = {};

viewing.addMusicScreen = function() {
	$("#options-list").addClass("invisible");
	$("#song-list-div").addClass("invisible");
	$("#buttons-list").removeClass("invisible");
	$("#more-button").addClass("invisible");
	return;
};

viewing.listMusicScreen = function () {
	$("#options-list").removeClass("invisible");
	$("#song-list-div").removeClass("invisible");
	$("#buttons-list").addClass("invisible");
	$("#more-button").removeClass("invisible");
	$("#response").empty("");
	return;
};

module.exports = {viewing};