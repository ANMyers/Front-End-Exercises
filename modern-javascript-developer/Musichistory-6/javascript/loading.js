"use strict";

var loading = {};

var genres = [];
genres[genres.length] = "Rock and Roll";
genres[genres.length] = "Blues Rock";
genres[genres.length] = "Rock Music";
genres[genres.length] = "Progressive Rock";
genres[genres.length] = "Hard Rock";
genres[genres.length] = "Alternative/Indie";
genres[genres.length] = "Soul";

var pulledSongName = [];
var pulledArtistName = [];
var pulledAlbumName = [];

var counter = 0;
var songs = [];

 loading.BeginingOfTheEnd = function() {

	if (counter === 0) {
		/////////////// Adding songs to front and back of array //////////////////
		songs.push("As - by Stevie Wonder on the album Song in the key of life");
		songs.unshift("Brown Sugar - by Rolling Stones on the album Sticky Fingers");
	}

	//////////////// Loop for removing/replacing wrong characters ///////////////////
	for (var i = 0; i < songs.length; i++) {
		var currentSongArray = songs[i];
		var replacedSongArray = currentSongArray.replace(/\*|!|@|\(|/g, "");
		var finalArray = replacedSongArray.replace(/\>/g, '-');
		songs[i] = finalArray;
		}

	for (i = 0; i < songs.length; i++) {
	/////////////// Finding index to pull song names ///////////////
		var songEndPoint = songs[i].indexOf("-");
		var songName = songs[i].substring(0, songEndPoint - 1);
		pulledSongName[i] = songName;

	/////////////// Finding index to pull artist names ///////////////
		var artistStartPoint = songs[i].indexOf("by ");
		var artistEndPoint = songs[i].indexOf(" on");
		var artistName = songs[i].substring(artistStartPoint + 3, artistEndPoint);
		pulledArtistName[i] = artistName;

	/////////////// Finding index to pull album names ///////////////
		var albumStartPoint = songs[i].indexOf("album");
		var albumName = songs[i].substr(albumStartPoint + 6);
		pulledAlbumName[i] = albumName;
		}

	counter++;
	loading.createFrameWork();
};

loading.createFrameWork = function () {
	$("#song-list-div").empty();
	for (var i = 0; i < pulledSongName.length; i++) {
		var buttonId = [i];
		var list = `<div class="song-div" id="${genres[i]}">
					<h2>${pulledSongName[i]}</h2>
					<button type="button" class="floatPlz" id="${pulledSongName[i]} - by ${pulledArtistName[i]} on the album ${pulledAlbumName[i]}">Delete</button>
						<ol>
							<li class="artist-li" id="${pulledArtistName[i]}">${pulledArtistName[i]}</li>
							<li>|</li>
							<li class="album-li" id="${pulledAlbumName[i]}">${pulledAlbumName[i]}</li>
							<li>|</li>
							<li class="genre-li" id="${genres[i]}">${genres[i]}</li>
						</ol>
					</div>`;

		$("#song-list-div").append(list);
	}
	addListener(); 
};

function addListener () {
	var listOfButtons = $(".floatPlz");
	for (var i = 0; i < listOfButtons.length; i++) {
		$(listOfButtons[i]).on('click', removeSong);
	}
}

function removeSong() {
	var idOfTarget = event.target.id;
	loading.removeArraySong(idOfTarget);
	event.target.parentNode.remove();		
}

function listMySongs() {
	var XHRpractice = $.ajax({url: "songs1.json", success: nextStep, error: fkme});
	function fkme (NoFun) {
		console.log("Back to the drawing board");
	}

	function nextStep (DamnRight) {
		var listOSongs = JSON.parse(event.target.responseText);
		putEmInArray(listOSongs);
	}

	function putEmInArray(AlmostThere) {
		for (var i = 0; i < AlmostThere.length; i++) {
			songs[i] = AlmostThere[i].song;
		}
		loading.BeginingOfTheEnd();
	}
}
function lordHaveMercy () {
	var partTwo = $.ajax({url: "songs2.json", success: keepGoing, error: uhoh});
	if (event.target.id === "more-button") {
		$("#more-button").attr('disabled', 'disabled');
	}
}

function keepGoing () {
	var listOMoreSongs = JSON.parse(event.target.responseText);
	putMoreInSameArrays(listOMoreSongs);
}

function putMoreInSameArrays (potatos) {
	for (var i = 0; i < potatos.length; i++) {
	songs.push(potatos[i].song);
	genres.push(potatos[i].genre);
	}
	loading.BeginingOfTheEnd();
}

function uhoh() {
	console.log("Houston we have an error");
}

loading.getSongs = function() {
	return songs;
};

loading.removeArraySong = function (idOfTarget) {
	var songEndPoint = idOfTarget.indexOf("-");
	var songName = idOfTarget.substring(0, songEndPoint - 1);

	for (var i = 0; i < pulledSongName.length; i++) {
		if (songName === pulledSongName[i]) {
			pulledSongName.splice(i, 1);
			pulledArtistName.splice(i, 1);
			pulledAlbumName.splice(i, 1);
			genres.splice(i, 1);
			songs.splice(i, 1);
		} 
	}
};

loading.addToPulled = function(songInput, artistInput, albumInput, genreInput) {
	pulledSongName.push(songInput);
	pulledArtistName.push(artistInput);
	pulledAlbumName.push(albumInput);
	genres.push(genreInput);
	songs.push(`${songInput} - by ${artistInput} on the album ${albumInput}`);

		var list = `<div class="song-div" id="${genreInput}">
					<h2>${songInput}</h2>
					<button type="button" class="floatPlz" id="${songInput} - by ${artistInput} on the album ${albumInput}">Delete</button>
						<ol>
							<li class="artist-li" id="${artistInput}">${artistInput}</li>
							<li>|</li>
							<li class="album-li" id="${albumInput}">${albumInput}</li>
							<li>|</li>
							<li class="genre-li" id="${genreInput}">${genreInput}</li>
						</ol>
					</div>`;

		$("#song-list-div").append(list);
		var listOfButtons = $(".floatPlz");
		$(listOfButtons[listOfButtons.length]).on('click', removeSong);
};

$("#more-button").on('click', lordHaveMercy);

$(document).ready(listMySongs());

module.exports = {loading};











