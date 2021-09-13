let hours = document.getElementById("hours");
let minute = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
const zeroFill = (num, places) => String(num).padStart(places, "0");
// minute.innerHTML = "25";
min = 1;
hr = 2;
setInterval(setClock, 100);

function setClock() {
  let today = new Date();
  if (today.getHours() > 12) {
    hours.innerHTML = zeroFill(today.getHours() - 12, 2);
  } else if (today.getHours() == 0) {
    hours.innerHTML = 12;
  } else {
    hours.innerHTML = zeroFill(today.getHours(), 2);
  }
  minute.innerHTML = zeroFill(today.getMinutes(), 2);
  // seconds.innerHTML = today.getSeconds();
}

let colorInput = document.getElementById("colorInput");
let body = document.getElementsByTagName("body")[0];
colorInput.oninput = () => {
  console.log(colorInput.value);
  body.style.color = colorInput.value;
};

function toggleTransitionWithTimeout() {
  const content = $text1.textContent === "Old Text" ? "New Text" : "Old Text";
  $text1.classList.remove("fade"); // removing the class
  setTimeout(() => {
    requestAnimationFrame(() => {
      // We are manually adding new content and adding class again to node
      $text1.innerHTML = content;
      $text1.classList.add("fade");
    });
  }, 225); // timeout
}
$button1.addEventListener("click", toggleTransitionWithTimeout);
