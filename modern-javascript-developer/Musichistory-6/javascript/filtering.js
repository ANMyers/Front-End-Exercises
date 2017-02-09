"use strict";

let filter = {};

filter.filterAvailableSongs = function() {
	var songDivs = $(".song-div");
	var checkedCBs = $('input[name="Genre"]:checked');
	var invisDivs = $('div.song-div.invisible2');
	var visDiv = $('div.song-div.visible');
	if (checkedCBs.length === 0 && invisDivs.length === 0) {
		$("#warning").html('Oops! Please Check A Genre.');
	} else {
		for (var m = 0; m < invisDivs.length; m++){
			invisDivs[m].classList.remove('invisible');
		}
		for (var p = 0; p < visDiv.length; p++){
			visDiv[p].classList.remove('visible');
		}

		$("#warning").empty();
	}

	for (var n = 0; n < songDivs.length; n++) {
		for (var i = 0; i < checkedCBs.length; i++) {
			var checkIfContains = songDivs[n].id;
			if (checkIfContains.includes(checkedCBs[i].value)) {
				songDivs[n].classList.remove('invisible');
				songDivs[n].classList.add('visible');
				break;
			} else {
				songDivs[n].classList.add('invisible');
				songDivs[n].classList.remove('visible');
			}
		}
	}
};

filter.filterByArtist = function() {
	var artistLIs = $(".artist-li");
	var selectedArtist = $("#artist-select").val();
	for (var i = 0; i < artistLIs.length; i++) {
		if (selectedArtist === "reset") {
			artistLIs[i].parentElement.parentElement.classList.remove('invisible2');
			artistLIs[i].parentElement.parentElement.classList.remove('visible2');	
		} else if (selectedArtist === artistLIs[i].id) {
			artistLIs[i].parentElement.parentElement.classList.add('visible2');

		} else {
			artistLIs[i].parentElement.parentElement.classList.add('invisible2');
			artistLIs[i].parentElement.parentElement.classList.remove('visible2');
		}
	}
};

filter.filterByAlbum = function() {
	var albumLIs = $(".album-li");
	var selectedAlbum = $("#album-select").val();
	for (var i = 0; i < albumLIs.length; i++) {
		if (selectedAlbum === "reset") {
			albumLIs[i].parentElement.parentElement.classList.remove('invisible3');
			albumLIs[i].parentElement.parentElement.classList.remove('visible3');
		} else if (selectedAlbum === albumLIs[i].id) {
			albumLIs[i].parentElement.parentElement.classList.add('visible3');
		} else {
			albumLIs[i].parentElement.parentElement.classList.add('invisible3');
			albumLIs[i].parentElement.parentElement.classList.remove('visible3');
		}
	}
};

module.exports = {filter};















