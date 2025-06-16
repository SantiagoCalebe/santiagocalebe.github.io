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

function start() {
  const maxConcurrent = 10;

  for (let i = 0; i < maxConcurrent; i++) {
    const el = createTypingElement();
    setTimeout(() => runTypingCycle(el), i * 1000 + Math.random() * 2000);
  }
}

window.addEventListener("DOMContentLoaded", start);
