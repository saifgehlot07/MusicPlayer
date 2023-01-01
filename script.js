"use strict";

// Selection
const playNow = document.querySelector(".play-now");
const musicImg = document.querySelector(".music-img");
const musicName = document.querySelector(".music-name");
const musicArtist = document.querySelector(".artist-name");
const musicAudio = document.querySelector("audio");
const prevBtn = document.querySelector(".prev");
const playPauseBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".next");

// All Music Data
const allMusic = [
  {
    musicImage: "./images/sg-1.png",
    musicName: "Manike",
    musicArtist: "Jubin Nautiyal",
    src: "./music/audio-1.mp3",
  },
  {
    musicImage: "./images/sg-2.png",
    musicName: "Maine Royaan",
    musicArtist: "Tanveer Evan",
    src: "./music/audio-2.mp3",
  },
  {
    musicImage: "./images/sg-3.png",
    musicName: "Sugar & Brownies",
    musicArtist: "Dharia",
    src: "./music/audio-3.mp3",
  },
];

let isPlaying = false;

const playMusic = function () {
  isPlaying = true;
  playPauseBtn.classList.replace("uil-play", "uil-pause");
  musicAudio.play();
  musicImg.classList.add("rotate");
};

const pauseMusic = function () {
  isPlaying = false;
  playPauseBtn.classList.replace("uil-pause", "uil-play");
  musicAudio.pause();
  musicImg.classList.remove("rotate");
};

playPauseBtn.addEventListener("click", function () {
  isPlaying ? pauseMusic() : playMusic();
});

let musicIndex = 2;

window.addEventListener("DOMContentLoaded", function () {
  loadMusic(allMusic[musicIndex]);
  musicAudio.play();
});

// nextBtn.addEventListener("click", nextMusic);
// prevBtn.addEventListener("click", prevMusic);

// const nextMusic = () => {};
// const prevMusic = () => {};

const loadMusic = (song) => {
  musicName.textContent = song.musicName;
  musicArtist.textContent = song.musicArtist;
  musicImg.src = `/images/${song}.png`;
  musicAudio.src = `/music/${song.src}.mp3`;
};
