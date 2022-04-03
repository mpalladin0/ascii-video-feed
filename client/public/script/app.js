/*
 * ASCII Camera
 * http://idevelop.github.com/ascii-camera/
 *
 * Copyright 2013, Andrei Gheorghe (http://github.com/idevelop)
 * Released under the MIT license
 * 
 * Modified for use in HackRU Spring 2022 ASCII Client
 */

(function() {
	var asciiContainer = document.getElementById("ascii");
	var capturing = false; 

	camera.init({
		width: 160,
		height: 120,
		fps: 30,
		mirror: true,

		onFrame: function(canvas) {
			ascii.fromCanvas(canvas, {
				callback: function(asciiString) {
					asciiContainer.innerHTML = asciiString;
				}
			});
		},

		onSuccess: function() {
			document.getElementById("info").style.display = "none";

			const button = document.getElementById("button");
			button.style.display = "block";
			button.onclick = function() {
				if (capturing) {
					camera.pause();
					button.innerText = 'resume';
				} else {
					camera.start();
					button.innerText = 'pause';
				}
				capturing = !capturing;
			};
		},

		onNotSupported: function() {
			document.getElementById("info").style.display = "none";
			asciiContainer.style.display = "none";
			document.getElementById("notSupported").style.display = "block";
		}
	});
})();
