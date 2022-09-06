const colors = [
  "red",
  "blueviolet",
  "crimson",
  "cyan",
  "beige",
  "green",
  "yellow",
];

const screen = document.querySelector(".bubble-screen");

function randomCoord(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function removeTargetEvent(event) {
  event.target.remove();
  event.stopPropagation();
}

function clearScreen() {
  let bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((item) => {
    item.remove();
  });
}

function clickBubble(event) {
  let bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.backgroundColor = colors[randomCoord(0, colors.length)];
  bubble.style.left = event.clientX + "px";
  bubble.style.top = event.clientY + "px";
  bubble.style.translate = "-50% -50%";

  screen.appendChild(bubble);

  bubble.addEventListener("click", removeTargetEvent);
}

function randomBubble() {
  let bubble = document.createElement("div");
  bubble.classList.add("bubble");
  screen.appendChild(bubble);

  bubble.style.top = `${randomCoord(1, screen.clientHeight)}px`;
  bubble.style.left = `${randomCoord(1, screen.clientWidth)}px`;

  bubble.style.backgroundColor = colors[randomCoord(1, colors.length)];
  bubble.addEventListener("click", removeTargetEvent);
}

screen.addEventListener("click", clickBubble);
screen.addEventListener("click", setInterval(randomBubble, 20000));
