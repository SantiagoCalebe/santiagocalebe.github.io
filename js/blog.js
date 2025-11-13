const blogPosts = [
  {
    title: "Por que existem tantos projetos meus cancelados?",
    date: "13/11/2025",
    fileName: "PQ-ProjetosCancelados.html",
    content: "Explicação de por que existem tantos projetos meus cancelados."
  }
];

const blogContainer = document.getElementById("blog-posts");
blogContainer.innerHTML = "";

blogPosts.forEach(post => {
  const div = document.createElement('div');
  div.className = 'blog-post';

  const title = document.createElement('h3');
  const link = document.createElement('a');

  link.href = `assets/blog/pages/${post.fileName}`;
  link.textContent = post.title;
  title.appendChild(link);

  const date = document.createElement('small');
  date.textContent = post.date;

  const content = document.createElement('p');
  content.textContent = post.content;

  div.appendChild(title);
  div.appendChild(date);
  div.appendChild(content);

  blogContainer.appendChild(div);
});
