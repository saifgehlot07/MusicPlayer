// Selection
const musicImg = document.querySelector(".img");
const musicName = document.querySelector(".music-name");
const musicArtist = document.querySelector(".artist-name");
const musicAudio = document.querySelector(".audio");
const audioSource = document.querySelector(".audio-source");
const prevBtn = document.querySelector(".prev");
const playPauseBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".next");

// All Music Data
const allMusic = [
  {
    musicImage: "sg-1",
    musicName: "Manike",
    musicArtist: "Jubin Nautiyal",
    src: "audio-1",
  },
  {
    musicImage: "sg-2",
    musicName: "Maine Royaan",
    musicArtist: "Tanveer Evan",
    src: "audio-2",
  },
  {
    musicImage: "sg-3",
    musicName: "Sugar & Brownies",
    musicArtist: "Dharia",
    src: "audio-3",
  },
];

let isPlaying = false;
let currentMusic = 0;

const playMusic = function () {
  isPlaying = true;
  playPauseBtn.classList.replace("uil-play", "uil-pause");
  musicImg.classList.add("rotate");
  musicAudio.play();
};

const pauseMusic = function () {
  isPlaying = false;
  playPauseBtn.classList.replace("uil-pause", "uil-play");
  musicImg.classList.remove("rotate");
  musicAudio.pause();
};

const loadMusic = (song) => {
  musicName.textContent = song.musicName;
  musicArtist.textContent = song.musicArtist;
  musicImg.src = `./images/${song.musicImage}.png`;
  musicAudio.src = `./music/${song.src}.mp3`;
};

loadMusic(allMusic[currentMusic]);

const nextMusic = () => {
  if (currentMusic === allMusic.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  loadMusic(allMusic[currentMusic]);
};
const prevMusic = () => {
  if (currentMusic === 0) {
    currentMusic = 2;
  } else {
    currentMusic--;
  }
  loadMusic(allMusic[currentMusic]);
};

nextBtn.addEventListener("click", nextMusic);
prevBtn.addEventListener("click", prevMusic);

playPauseBtn.addEventListener("click", function () {
  isPlaying ? pauseMusic() : playMusic();
});
