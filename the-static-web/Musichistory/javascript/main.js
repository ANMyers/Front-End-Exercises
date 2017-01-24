var addButton = document.getElementById("add-song-button");
var listMusic = document.getElementById("list-music");
var addMusic = document.getElementById("add-music");


var buttonsList = document.getElementById("buttons-list");
var songListDiv = document.getElementById("song-list-div");
var optionsList = document.getElementById("options-list");

var songs = [];
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

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


//////////////// Loop for removing/replacing wrong characters ///////////////////
for (i = 0; i < songs.length; i++) {
	currentSongArray = songs[i]
	var replacedSongArray = currentSongArray.replace(/\*|!|@|\(|/g, "");
	var finalArray = replacedSongArray.replace(/\>/g, '-');
	songs[i] = finalArray;
}

/////////////// Adding songs to front and back of array //////////////////
songs.push("As - by Stevie Wonder on the album Song in the key of life");
songs.unshift("Brown Sugar - by Rolling Stones on the album Sticky Fingers");


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

function addMusicScreen () {
	optionsList.className = "options invisible";
	songListDiv.className = "song-list invisible";
	buttonsList.classList.remove("invisible");
	return;
};

function listMusicScreen () {
	optionsList.classList.remove("invisible");
	songListDiv.classList.remove("invisible");
	buttonsList.className = "buttons invisible";
	document.getElementById("response").innerHTML = "";
	return;
};

function createFrameWork() {
	songListDiv.innerHTML = "";
	for (i = 0; i < pulledSongName.length; i++) {
		var buttonId = [i];
		var list = `<div>
					<h2>${pulledSongName[i]}</h2>
					<button type="button" class="floatPlz" id="${buttonId}">Delete</button>
						<ol>
							<li>${pulledArtistName[i]}</li>
							<li>|</li>
							<li>${pulledAlbumName[i]}</li>
							<li>|</li>
							<li>${genres[i]}</li>
						</ol>
					</div>`

		document.getElementById("song-list-div").innerHTML += list;
	}
	addListener();
}

function addListener () {

	var listOfButtons = document.getElementsByClassName("floatPlz");

	for (var i = 0; i < listOfButtons.length; i++) {
		listOfButtons[i].addEventListener('click', function() {
			removeSong();
		});
	}
}

function addSong () {

	var pleaseConfirm = document.getElementById("response");
	var songInput = document.getElementById("add-song").value;
	var artistInput = document.getElementById("add-artist").value;
	var albumInput = document.getElementById("add-album").value;
	var genreInput = document.getElementById("add-genre").value;

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
	pleaseConfirm.innerHTML = 'Your song has been added, click "List Music" to see.';
}

function removeSong() {
	var targetId = Number(event.target.id);
	event.target.parentNode.remove();
	pulledSongName.splice(targetId, 1);
	pulledArtistName.splice(targetId, 1);
	pulledAlbumName.splice(targetId, 1);
	genres.splice(targetId, 1);
}

function clearInputs() {
	document.getElementById("add-song").value = "";
	document.getElementById("add-artist").value = "";
	document.getElementById("add-album").value = "";
	document.getElementById("add-genre").value = "";

}

createFrameWork();

addButton.addEventListener('click', addSong);
addMusic.addEventListener('click', addMusicScreen);
listMusic.addEventListener('click', listMusicScreen);



