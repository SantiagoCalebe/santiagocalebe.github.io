(() => {
  const body = document.body;
  const html = document.documentElement;

  let currentScroll = window.scrollY || window.pageYOffset;
  let targetScroll = currentScroll;
  let isScrolling = false;

  const ease = 0.1;

  function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * ease;
    window.scrollTo(0, currentScroll);

    if (Math.abs(targetScroll - currentScroll) > 0.5) {
      requestAnimationFrame(smoothScroll);
    } else {
      isScrolling = false;
    }
  }

  function scrollToTarget(y) {
    targetScroll = Math.max(0, Math.min(y, html.scrollHeight - window.innerHeight));
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(smoothScroll);
    }
  }

  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollToTarget(targetScroll + e.deltaY);
  }, { passive: false });

  window.addEventListener("keydown", (e) => {
    let delta = 0;
    switch(e.key) {
      case "ArrowDown": delta = 40; break;
      case "ArrowUp": delta = -40; break;
      case "PageDown": delta = window.innerHeight; break;
      case "PageUp": delta = -window.innerHeight; break;
      case "Home": delta = -targetScroll; break;
      case "End": delta = html.scrollHeight; break;
      default: return;
    }
    e.preventDefault();
    scrollToTarget(targetScroll + delta);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementY = targetElement.getBoundingClientRect().top + window.scrollY;
        scrollToTarget(elementY);
      }
    });
  });

})();

const projectCards = document.querySelectorAll('.project-card');

const revealProjects = () => {
  projectCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 300) {
      setTimeout(() => {
        card.classList.add('active');
      }, index * 25);
    } else {
      card.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', revealProjects);
window.addEventListener('load', revealProjects);

const santi = document.getElementById('WBS');
santi.onclick = () => {
  window.location.href = 'https://santiagocalebe.github.io/';
};

const icons = document.querySelectorAll('.icon');

const revealIcons = () => {
  icons.forEach((icon, index) => {
    const iconTop = icon.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (iconTop < windowHeight - 200) {
      setTimeout(() => {
        icon.classList.add('active');
      }, index * 50);
    } else {
      icon.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', revealIcons);
window.addEventListener('load', revealIcons);
