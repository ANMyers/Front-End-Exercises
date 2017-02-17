"use strict";

function checkWordCount(string) {
	let words = string.split(" ");
	if (words.length > 100) {
		return false;
	} else {
		return true;
	}
}

function duplicateCheck(string) {
	let words  = string.split(" ");
  words.sort(function(a, b) {
	  var nameA = a.toUpperCase();
	  var nameB = b.toUpperCase();
	  if (nameA < nameB) {
	    return -1;
	  }
	  if (nameA > nameB) {
	    return 1;
	  }
	    return 0;
	});
  for (var n = 0; n < words.length; n++) {
    if (n !== (words.length) && words[n].toUpperCase() === words[n + 1].toUpperCase()) {
      return false;
    } else if (n !== 0 && words[n].toUpperCase() === words[n - 1].toUpperCase()) {
      return false;
    }
  }
  return true;
}

function verifyAlphaNumeric(string) {
	for (var p = 0; p < string.length; p++) {
    var character = string.charAt(p);
    var characterCode = character.charCodeAt(0);
    if ((characterCode > 47 && characterCode < 58) || (characterCode > 64 && characterCode < 91) || (characterCode > 96 && characterCode < 123)) {
    	return false;
    }
  }
  return true;
}


