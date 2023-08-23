const bar = document.getElementById('bar');
const closeBtn = document.getElementById('close');
const nav = document.getElementById('nav-list');

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add('active');
  })
}
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}



// document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click",()=>{
//   nav.classList.remove('active');
// }))