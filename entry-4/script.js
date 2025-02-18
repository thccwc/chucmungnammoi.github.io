const light = document.querySelector(".light");

window.addEventListener("mousemove", (e) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const mousex = e.clientX;
  const mousey = e.clientY;

  const x = (mousex / windowWidth) * 100;
  const y = (mousey / windowHeight) * 100;

  light.style.background = `radial-gradient(
    circle at ${x}% ${y}%,
    rgba(20, 20, 20, 0) 0%,
    rgba(20, 20, 20, 0.4) 17%,
    rgba(20, 20, 20, 0.6) 19%,
    rgba(20, 20, 20, 0.9) 22%,
    rgba(20, 20, 20, 1) 30%,
    rgba(20, 20, 20, 1) 100%
  )`;
});