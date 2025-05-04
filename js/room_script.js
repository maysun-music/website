function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

function playHoverSound(url) {
  const audio = new Audio(url);
  audio.play();
}

function loadSoundscape(number) {
  const map = document.getElementById("background-map");
  map.src = `rooms-assets/images/background-room1.png`;

  const spaceMap = document.getElementById("space-map");

  let html = `<img id="background-map" src="rooms-assets/images/background-room1.png" />`;

  if (number === 1) {
    html += `
      <div class="point" style="top: 20%; left: 30%;" onclick="playSound('rooms-assets/audio/room1/soundscape1/01_background.wav')"></div>
      <div class="point" style="top: 50%; left: 60%;" onclick="playSound('rooms-assets/audio/room1/soundscape1/01_medium.wav')"></div>
      <div class="hover-point" style="top: 40%; left: 20%;" onmouseover="playHoverSound('rooms-assets/audio/room1/soundscape1/01_short.wav')"></div>
    `;
  }

  if (number === 2) {
    html += `
      <div class="point" style="top: 30%; left: 50%;" onclick="playSound('rooms-assets/audio/room1/soundscape2/02_background.wav')"></div>
    `;
  }

  if (number === 3) {
    html += `
      <div class="point" style="top: 25%; left: 40%;" onclick="playSound('rooms-assets/audio/room1/soundscape3/03_background.wav')"></div>
    `;
  }

  spaceMap.innerHTML = html;
}