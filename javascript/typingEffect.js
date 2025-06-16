/*
Project: santiagocalebe.github.io
Author: SantiagoCalebe
Repository: https://github.com/santiagocalebe/santiagocalebe.github.io/
All rights reserved.

Unauthorized copying, modification, distribution, or derivative works
of this code are strictly prohibited under the U.S. Copyright Act (Title 17, United States Code)
or Article 29 of Law No. 9,610/1998 (Brazilian Copyright Law). 
[Artigo 29 da Lei nº 9.610/1998 (Lei de Direitos Autorais).]
*/

function createTypingElement() {
  const el = document.createElement("div");
  el.classList.add("typing-cmd");

  el.style.left = randomBetween(20, window.innerWidth - 200) + "px";
  el.style.top = randomBetween(20, window.innerHeight - 50) + "px";
  el.style.opacity = randomBetween(0.1, 0.2).toFixed(2);

  document.getElementById("container").appendChild(el);
  return el;
}

function typeAndClear(el, command, callback) {
  let i = 0;
  el.textContent = "";
  const typingSpeed = randomBetween(50, 150);

  function type() {
    if (i < command.length) {
      el.textContent += command.charAt(i);
      i++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => clear(), 1500);
    }
  }

  function clear() {
    let currentText = el.textContent;
    const clearingSpeed = 30;

    function erase() {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        el.textContent = currentText;
        setTimeout(erase, clearingSpeed);
      } else {
        callback();
      }
    }

    erase();
  }

  type();
}

function runTypingCycle(el) {
  const command = commands[Math.floor(Math.random() * commands.length)];
  typeAndClear(el, command, () => {
    el.style.left = randomBetween(20, window.innerWidth - 200) + "px";
    el.style.top = randomBetween(20, window.innerHeight - 50) + "px";
    el.style.opacity = randomBetween(0.1, 0.2).toFixed(2);

    setTimeout(() => runTypingCycle(el), randomBetween(1000, 4000));
  });
}
