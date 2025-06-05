let data = [];

function generateBars() {
  const container = document.getElementById("bar-container");
  container.innerHTML = "";
  data = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1);
  data.forEach(value => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    container.appendChild(bar);
  });
}

async function startSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      bars[j].style.background = "red";
      bars[j + 1].style.background = "red";

      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
        bars[j].style.height = `${data[j] * 3}px`;
        bars[j + 1].style.height = `${data[j + 1] * 3}px`;
      }

      await new Promise(resolve => setTimeout(resolve, 50));
      bars[j].style.background = "steelblue";
      bars[j + 1].style.background = "steelblue";
    }
  }
}

window.onload = generateBars;
