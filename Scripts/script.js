// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Menu hambúrguer toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("active");
});

// Animação de digitação
const typingText = document.getElementById("typing-text");
const phrases = [
  "Data Analyst",
  "Power BI Specialist",
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;

function loopTyping() {
  isEnd = false;
  typingText.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typingText.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      typingText.innerHTML = currentPhrase.join('');
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }

  const speed = isEnd ? 1000 : isDeleting ? 50 : 100;
  setTimeout(loopTyping, speed);
}

loopTyping();

// Preenchimento das barras de skill ao scroll
document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const width = getComputedStyle(el).getPropertyValue('--target-width');
        el.style.width = width;
        el.classList.add("active");
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.6
  });

  skillFills.forEach(el => observer.observe(el));
});

// Botão "Voltar ao Topo"
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

