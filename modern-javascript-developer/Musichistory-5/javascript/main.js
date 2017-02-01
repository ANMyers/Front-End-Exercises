
var counter = 0;
var songs = [];

var genres = [];
genres[genres.length] = "Rock and Roll"
genres[genres.length] = "Blues Rock"
genres[genres.length] = "Rock Music"
genres[genres.length] = "Progressive Rock"
genres[genres.length] = "Hard Rock"
genres[genres.length] = "Alternative/Indie"
genres[genres.length] = "Soul"

var pulledSongName = [];
var pulledArtistName = [];
var pulledAlbumName = [];

function BeginingOfTheEnd () {

	if (counter === 0) {
		/////////////// Adding songs to front and back of array //////////////////
		songs.push("As - by Stevie Wonder on the album Song in the key of life");
		songs.unshift("Brown Sugar - by Rolling Stones on the album Sticky Fingers");
	}

	//////////////// Loop for removing/replacing wrong characters ///////////////////
	for (i = 0; i < songs.length; i++) {
		currentSongArray = songs[i]
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
		var artistStartPoint = songs[i].indexOf("by ")
		var artistEndPoint = songs[i].indexOf(" on");
		var artistName = songs[i].substring(artistStartPoint + 3, artistEndPoint);
		pulledArtistName[i] = artistName;

	/////////////// Finding index to pull album names ///////////////
		var albumStartPoint = songs[i].indexOf("album")
		var albumName = songs[i].substr(albumStartPoint + 6);
		pulledAlbumName[i] = albumName;
		}

	counter++;
	createFrameWork();
}

function addMusicScreen () {
	$("#options-list").addClass("invisible");
	$("#song-list-div").addClass("invisible");
	$("#buttons-list").removeClass("invisible");
	$("#more-button").addClass("invisible");

	return;
};

function listMusicScreen () {
	$("#options-list").removeClass("invisible");
	$("#song-list-div").removeClass("invisible");
	$("#buttons-list").addClass("invisible");
	$("#more-button").removeClass("invisible");
	//document.getElementById("response").innerHTML = "";
	$("#response").empty("");
	return;
};

function createFrameWork() {
	//songListDiv.innerHTML = "";
	$("#song-list-div").empty();
	for (i = 0; i < pulledSongName.length; i++) {
		var buttonId = [i];
		var list = `<div>
					<h2>${pulledSongName[i]}</h2>
					<button type="button" class="floatPlz" id="${pulledSongName[i]} - by ${pulledArtistName[i]} on the album ${pulledAlbumName[i]}">Delete</button>
						<ol>
							<li>${pulledArtistName[i]}</li>
							<li>|</li>
							<li>${pulledAlbumName[i]}</li>
							<li>|</li>
							<li>${genres[i]}</li>
						</ol>
					</div>`

		//document.getElementById("song-list-div").innerHTML += list;
		$("#song-list-div").append(list);
	}
	addListener();
}

function addListener () {

	//var listOfButtons = document.getElementsByClassName("floatPlz");
	var listOfButtons = $(".floatPlz");

	for (var i = 0; i < listOfButtons.length; i++) {
		//listOfButtons[i].addEventListener('click', function() {
		$(listOfButtons[i]).on('click', function() {
			removeSong();
		});
	}
}

function addSong () {

	var pleaseConfirm = $("#response");
	var songInput = $("#add-song").val();
	var artistInput = $("#add-artist").val();
	var albumInput = $("#add-album").val();
	var genreInput = $("#add-genre").val();

		if (songInput === "") {
			alert("You need to enter a song name");
			return;
		} else if (artistInput === "") {
			alert("You need to enter an artist name");
			return;
		} else if (albumInput === "") {
			alert("You need to enter an album name");
			return;
		} else if (genreInput === "") {
			alert("You need to enter a genre type");
			return;
		}

	pulledSongName.push(songInput);
	pulledArtistName.push(artistInput);
	pulledAlbumName.push(albumInput);
	genres.push(genreInput);
	clearInputs();
	createFrameWork();
	//pleaseConfirm.innerHTML = 'Your song has been added, click "List Music" to see.';
	$("#response").html('Your song has been added, click "List Music" to see.');


	songs.push(`${songInput} - by ${artistInput} on the album ${albumInput}`);
}

function removeSong() {

	var idOfTarget = event.target.id;

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
	event.target.parentNode.remove();		
}

function clearInputs() {
	$("#add-song").val("");
	$("#add-artist").val("");
	$("#add-album").val("");
	$("#add-genre").val("");

}

$("#add-song-button").on('click', addSong);
$("#list-music").on('click', listMusicScreen);
$("#add-music").on('click', addMusicScreen);
$("#more-button").on('click', lordHaveMercy);


/////////////// TESTS FOR XHR FUNCTIONALITY ////////////

/////////// PART ONE OF EXERCISE ////////////
//var XHRpractice = new XMLHttpRequest();
var XHRpractice = $.ajax({url: "songs1.json", success: nextStep, error: fkme});
//$(XHRpractice).on('load', nextStep);
//$(XHRpractice).on('error', fkme);

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
	BeginingOfTheEnd();
}

//XHRpractice.open("GET", "songs1.json");
//XHRpractice.send();    ///// IMPORTANT STEP :)

////////// PART TWO OF EXERCISE //////////// 

function lordHaveMercy () {
	//var PartTwo = new XMLHttpRequest();
	var partTwo = $.ajax({url: "songs2.json", success: keepGoing, error: fkme});
	//$(PartTwo).on('load', keepGoing);
	//$(PartTwo).on('error', fkme);

	//PartTwo.open("GET", "songs2.json");
	//PartTwo.send();    ///// IMPORTANT STEP :)

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
	BeginingOfTheEnd();
}








