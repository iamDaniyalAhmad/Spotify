console.log("Welcome to Spotify");

// initialize the variables
let index = 0;
let masterPlay = document.getElementById("masterPlay");
let bar = document.getElementById("bar");
let gif = document.getElementById("gif");
let time = Array.from(document.getElementsByClassName("time"));
let songItemList = Array.from(document.getElementsByClassName("songItemList"));
let backPlay = document.getElementById("backPlay");
let forPlay = document.getElementById("forPlay");
let songTitle = document.getElementById("songTitle");
let songTime = Array.from(document.getElementsByClassName("songTime"));

let songs = [
  {
    songName: "Let Me Love You",
    songPath: "img/1.mp3",
    coverPath: "img/cover.jfif",
  },
  {
    songName: "Never Say Never",
    songPath: "img/2.mp3",
    coverPath: "img/cover.jfif",
  },
  {
    songName: "What do you mean?",
    songPath: "img/3.mp3",
    coverPath: "img/cover.jfif",
  },
  { songName: "Sorry", songPath: "img/4.mp3", coverPath: "img/cover.jfif" },
  { songName: "Love Me", songPath: "img/5.mp3", coverPath: "img/cover.jfif" },
  { songName: "Lonely", songPath: "img/6.mp3", coverPath: "img/cover.jfif" },
];

let audioPlay = new Audio("img/1.mp3");

// audioPlay.play();

// add Event Listeners

const toggle = (e) => {
  if (audioPlay.paused) {
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    audioPlay.src = `img/${index}.mp3`;
    audioPlay.currentTime = 0;
    audioPlay.play();
    songTitle.innerHTML = songs[index].songName;
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-pause");
    e.target.classList.add("fa-play");
    audioPlay.src = `img/${index}.mp3`;
    // audioPlay.currentTime = 0;
    audioPlay.pause();
    songTitle.innerHTML = songs[index].songName;
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
};

songItemList.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e.target);
    toggle(e);
  });
});
songItemList.forEach((element) => {
  element.addEventListener("dblclick", (e) => {
    console.log(e.target);
    allPlay();
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-pause");
    e.target.classList.add("fa-play");
    audioPlay.src = `img/${index}.mp3`;
    audioPlay.pause();
    songTitle.innerHTML = songs[index].songName;
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  });
});

backPlay.addEventListener("click", () => {
  if (index <= 1) {
    index = 1;
  } else {
    index = index - 1;
  }
  audioPlay.src = `img/${index}.mp3`;
  audioPlay.currentTime = 0;
  audioPlay.play();
  songTitle.innerHTML = songs[index].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
forPlay.addEventListener("click", () => {
  if (index >= 6) {
    index = 1;
  } else {
    index = index + 1;
  }

  audioPlay.src = `img/${index}.mp3`;
  audioPlay.currentTime = 0;
  audioPlay.play();
  songTitle.innerHTML = songs[index].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

time.forEach((element, i) => {
  element.getElementsByClassName("text")[0].innerText = songs[i].songName;
  element.getElementsByClassName("img")[0].innerText = songs[i].coverPath;
});

masterPlay.addEventListener("click", () => {
  if (audioPlay.paused || audioPlay.currentTime <= 0) {
    audioPlay.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioPlay.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

audioPlay.addEventListener("timeupdate", () => {
  let progress = parseInt((audioPlay.currentTime / audioPlay.duration) * 100);
  bar.value = progress;
});

bar.addEventListener("click", () => {
  audioPlay.currentTime = (bar.value * audioPlay.duration) / 100;
});
