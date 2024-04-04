var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.getElementById("play").addEventListener("click", function(){
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
});

document.getElementById("pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
	updateVolumeInfo();
});
document.getElementById("slower").addEventListener("click", function(){
	console.log("Slow Down");
	video.playbackRate -= 0.1;
	console.log("New speed: " + video.playbackRate.toFixed(1));
});

document.getElementById("faster").addEventListener("click", function() {
    console.log("Speed Up");
    video.playbackRate += 0.1;
    console.log("New speed: " + video.playbackRate.toFixed(1));
});

document.getElementById("skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current location: " + video.currentTime.toFixed(1));
});

document.getElementById("mute").addEventListener("click", function() {
    console.log("Mute/Unmute");
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
    updateVolumeInfo();
});

document.getElementById("slider").addEventListener("input", function() {
    console.log("Volume Slider");
    video.volume = this.value / 100;
    updateVolumeInfo();
});

document.getElementById("vintage").addEventListener("click", function() {
    console.log("Styled - Old School");
    video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
    console.log("Original");
    video.classList.remove("oldSchool");
});

function updateVolumeInfo() {
    var volumeInfo = document.getElementById("volume");
    if (video.muted) {
        volumeInfo.textContent = "Muted";
    } else {
        volumeInfo.textContent = (video.volume * 100).toFixed(0) + "%";
    }
}



