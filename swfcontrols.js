/*
* Chromeless player has no controls.
*/

// Update a particular HTML element with a new value
function updateHTML(elmId, value) {
	document.getElementById(elmId).innerHTML = value;
}

// This function is called when an error is thrown by the player
function onPlayerError(errorCode) {
	alert("An error occured of type:" + errorCode);
}

function playVideo() {
	if (ytplayer) {
		ytplayer.playVideo();
	}
}

function toggleMute() {
	if(ytplayer.isMuted()) {
		ytplayer.unMute();
	} else {
		ytplayer.mute();
	}
}


// This function is automatically called by the player once it loads
function onYouTubePlayerReady(playerId) {
	ytplayer = document.getElementById("ytPlayer");
	// This causes the updatePlayerInfo function to be called every 250ms to
	// get fresh data from the player
	//setInterval(updatePlayerInfo, 250);
	//updatePlayerInfo();
	ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
	ytplayer.addEventListener("onError", "onPlayerError");
	//Load an initial video into the player
	ytplayer.loadVideoById("PeRlJcpnsbs#!", 1, "default");
	//VideoID: PeRlJcpnsbs#!
}

// The "main method" of this sample. Called when someone clicks "Run".
function loadPlayer() {
	// Lets Flash from another domain call JavaScript
	var params = { allowScriptAccess: "always" };
	// The element id of the Flash embed
	var atts = { id: "ytPlayer" };
	// All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
	swfobject.embedSWF("http://www.youtube.com/apiplayer?" +
			   "version=3&enablejsapi=1&playerapiid=player1&loop=1", 
			   "videoDiv", "1", "1", "9", null, null, params, atts);
}

function _run() {
	loadPlayer();
	onYouTubePlayerReady("ytPlayer");
	//playVideo();
}

google.setOnLoadCallback(_run);
