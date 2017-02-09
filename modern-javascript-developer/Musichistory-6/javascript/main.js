"use strict";

 let loading = require('./loading.js');
 let viewing = require('./viewing.js');
 let filtering = require('./filtering.js');

function addSong () {

	var pleaseConfirm = $("#response");
	var songInput = $("#add-song").val();
	var artistInput = $("#add-artist").val();
	var albumInput = $("#add-album").val();
	var genreInput = $("#add-genre").val();

		if (songInput === "") {
			$("#response").html('Oops! You Forgot A Song Name.');
			return;
		} else if (artistInput === "") {
			$("#response").html('Oops! You Forgot An Artist Name.');
			return;
		} else if (albumInput === "") {
			$("#response").html('Oops! You Forgot An Album Name.');
			return;
		} else if (genreInput === "") {
			$("#response").html('Oops! You Forgot A Genre.');
			return;
		}

	loading.loading.addToPulled(songInput, artistInput, albumInput, genreInput);
	clearInputs();

	$("#response").html('Your song has been added, click "List Music" to see.');

}

function clearInputs() {
	$("#add-song").val("");
	$("#add-artist").val("");
	$("#add-album").val("");
	$("#add-genre").val("");
}

$("#add-song-button").on('click', addSong);
$("#list-music").on('click', viewing.viewing.listMusicScreen);
$("#add-music").on('click', viewing.viewing.addMusicScreen);
$("#filter-button").on('click', filtering.filter.filterAvailableSongs);
$("#artist-select").on('change', filtering.filter.filterByArtist);
$("#album-select").on('change', filtering.filter.filterByAlbum);








