const gallery = document.getElementById("gallery");

async function loadImages() {
  try {
    const res = await fetch("https://startknowledge-api.82749sondeep.workers.dev/list");

    const data = await res.json();

    gallery.innerHTML = "";

    data.reverse().forEach(img => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <img src="${img.url}" loading="lazy">
        <div class="meta">
          <span>${img.date}</span>
          <span>${img.time}</span>
        </div>
      `;

      gallery.appendChild(div);
    });

  } catch (error) {
    console.error("Image load error:", error);
  }
}

loadImages();
setInterval(loadImages, 8000);
