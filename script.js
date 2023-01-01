"use strict";

// Selection
const playNow = document.querySelector(".play-now");
const musicImg = document.querySelector(".music-img");
const musicName = document.querySelector(".music-name");
const musicArtist = document.querySelector(".artist-name");
const musicAudio = document.querySelector(".audio");
const prevBtn = document.querySelector(".prev");
const playPauseBtn = document.querySelector(".play-pause");
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
    musicImage: "./images/sg-2.png",
    musicName: "Sugar & Brownies",
    musicArtist: "Dharia",
    src: "./music/audio-3.mp3",
  },
];
