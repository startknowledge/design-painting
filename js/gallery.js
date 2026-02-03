const API = "https://YOUR_WORKER_URL";


async function loadGallery(){
const res = await fetch(API);
const files = await res.json();
const grid = document.getElementById('gallery');
grid.innerHTML='';


files.reverse().forEach(img=>{
const div=document.createElement('div');
div.className='card';
div.innerHTML=`<img src="https://YOUR_R2_PUBLIC_URL/${img.key}"><div class="time">${new Date(img.uploaded).toLocaleString()}</div>`;
grid.appendChild(div);
});
}


loadGallery();
setInterval(loadGallery,5000);