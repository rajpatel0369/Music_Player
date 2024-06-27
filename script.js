var arr = [
  {
    name: "Arjan Valley",
    url: "./songs/ArjanVaillyNe.mp3",
    image: "./images/animal.jpg",
  },
  { name: "Jale 2", url: "./songs/jale 2.mp3", image: "./images/jale.jpg" },
  {
    name: "Pehle Bhi Main",
    url: "./songs/Pehle Bhi Main.mp3",
    image: "./images/animal.jpg",
  },
  {
    name: "Ram Siya Ram",
    url: "./songs/Ram Siya Ram.mp3",
    image: "./images/ram.jpg",
  },
];
var audio = new Audio();
var selectedSong = 0;
var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

function showAllSongs() {
  var clutter = "";
  arr.forEach((obj, index) => {
    clutter += `<div class="song-card" id=${index}>
        <div class="part1">
            <img src="${obj.image}"
                alt="">
            <h2>${obj.name}</h2>
        </div>
        <h6>3:56</h6>
    </div>`;
  });
  allSongs.innerHTML = clutter;
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].image})`;
}
showAllSongs();
allSongs.addEventListener("click", function (details) {
  // console.log(arr[details.target.id].image);
  selectedSong = [details.target.id];
  play.innerHTML = `<i class="ri-pause-fill"></i>`;
  flag = 1;
  showAllSongs();
  audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    showAllSongs();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    audio.pause();
    showAllSongs();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong <= arr.length - 1) {
    selectedSong++;
    showAllSongs();
    audio.play();
  } else {
    forward.style.opacity = 0.4;
  }
});
backward.addEventListener("click", function () {
    if (selectedSong > 0) {
      selectedSong--;
      showAllSongs();
      audio.play();
    } else {
      backward.style.opacity = 0.4;
    }
  });