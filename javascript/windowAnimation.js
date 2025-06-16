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

const container = document.getElementById('container');

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  const moveX = x * 15;
  const moveY = y * 15;

  container.style.transform = `translate(${moveX}px, ${moveY}px)`;
  container.style.transition = 'transform 0.1s ease-out';
});
