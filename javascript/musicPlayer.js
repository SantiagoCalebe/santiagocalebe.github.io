/*
Project: santiagocalebe.github.io
Author: SantiagoCalebe
Repository: https://github.com/santiagocalebe/santiagocalebe.github.io/
All rights reserved.

Unauthorized copying, modification, distribution, or derivative works
of this code are strictly prohibited under the U.S. Copyright Act (Title 17, United States Code)
or Article 29 of Law No. 9,610/1998 (Brazilian Copyright Law). 
[Artigo 29 da Lei nº 9.610/1998 (Lei de Direitos Autorais).]
*/

const songs = [
  // Metal
  { name: "In The End", src: "../songs/In The End.mp3" },

  // Games
  { name: "Vs. Lancer", src: "../songs/Lancer.mp3" },
  { name: "Lancer", src: "../songs/LancerGoffy.mp3" },
  { name: "Rude Buster", src: "../songs/Rude Buster.mp3" },
  { name: "Moribund", src: "../songs/Moribund.mp3" },
  { name: "Innocence Glitched (Basement)", src: "../songs/Innocence Glitched (Basement).mp3" },
  { name: "The Binding of Issac", src: "../songs/The Binding of Issac.mp3" },
  { name: "There's Always Next Week", src: "../songs/There's Always Next Week.mp3" },

  // Helluva Boss oough
  { name: "Mastermind", src: "../songs/Mastermind.mp3" },
  { name: "Merry Sinsmas", src: "../songs/Merry Sinsmas.mp3" },

  // Other
  { name: "Fahrradsattel", src: "../songs/Fahrradsattel.mp3" },
  { name: "Fine", src: "../songs/Fine.mp3" },
  { name: "Get It Up", src: "../songs/Get It Up.mp3" },
  { name: "Hey Kids", src: "../songs/Hey Kids.mp3" },
  { name: "Labyrinth", src: "../songs/Labyrinth.mp3" },
  { name: "Misery Meat", src: "../songs/Misery Meat.mp3" },
  { name: "My Alcoholic Friends", src: "../songs/My Alcoholic Friends.mp3" },
  { name: "Now That You're Gone", src: "../songs/Now That You're Gone.mp3" },
  { name: "Verbatim", src: "../songs/Verbatim.mp3" },
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("music-title");
const currentTimeText = document.getElementById("current-time");
const totalTimeText = document.getElementById("total-time");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function loadSong(i) {
  const song = songs[i];
  title.textContent = song.name;
  audio.src = song.src;
  playBtn.textContent = "▶";
}

function formatTime(t) {
  const min = Math.floor(t / 60);
  const sec = Math.floor(t % 60)
    .toString()
    .padStart(2, "0");
  return `${min}:${sec}`;
}

audio.addEventListener("timeupdate", () => {
  currentTimeText.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  totalTimeText.textContent = formatTime(audio.duration);
});

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch((e) => console.log("Error playing audio:", e));
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
  playBtn.textContent = "⏸";
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
  playBtn.textContent = "⏸";
});

audio.addEventListener("ended", () => {
  nextBtn.click();
});

loadSong(index);
