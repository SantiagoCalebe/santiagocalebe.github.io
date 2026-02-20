(() => {
  const body = document.body;

  // Wrap everything inside a scroll container
  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.top = 0;
  wrapper.style.left = 0;
  wrapper.style.width = "100%";
  wrapper.style.willChange = "transform";

  while (body.firstChild) {
    wrapper.appendChild(body.firstChild);
  }

  body.appendChild(wrapper);

  let current = 0;
  let target = 0;
  let ease = 0.075;

  function setBodyHeight() {
    document.body.style.height = wrapper.getBoundingClientRect().height + "px";
  }

  function animate() {
    target = window.scrollY;
    current += (target - current) * ease;

    wrapper.style.transform = `translateY(${-current}px)`;

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", setBodyHeight);

  setBodyHeight();
  animate();
})();