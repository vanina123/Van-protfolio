const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const cards = [
  {
    image: 'images/Snapshoot-Portfolio.svg',
    name: 'Tonic',
    preview: '',
    code: '',
    tags: ['html', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    image: 'images/Snapshoot-Portfolio-2.png',
    name: 'Multi-Post Stories',
    preview: '',
    code: '',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    image: 'images/Snapshoot-Portfolio-3.png',
    name: 'Tonic',
    preview: '',
    code: '',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    image: 'images/Snapshoot-Portfolio-4.png',
    name: 'Multi-Post Stories',
    preview: '',
    code: '',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
];

// projects dynamic
const cardsContainer = document.querySelector('.cards');
cards.forEach((cardContent) => {
  const item = document.createElement('work-container-main');

  item.classList.add('cards-held-here');
  const content = document.createElement('work-container');

  content.innerHTML = `
<section class="work-container work-container-desktop">
  <div class="portfolio-img desktop-img-0">

    <img src="${cardContent.image}" alt="${cardContent.name}" class="full-size">
  </div>
  <div class="work-content">
        <h2 class="tonic0 tonic">${cardContent.name}</h2>
        <ul class="prop">
          <li class="can">CANOPY</li>
          <li class="bac"><img src="images/Counter.png" alt="dot"> Back End Dev</li>
          <li class="num"><img src="images/Counter.png" alt="dot"> 2015</li>
        </ul>
        <p class="tonic-def">A daily selection of privately<br> personalized reads; no accounts or<br> sign-ups
          required.</p>
        <ul class="stack stack-desktop">
          <li class="html">html</li>
          <li class="css">css</li>
          <li class="js">javaScript</li>
        </ul>
        <div class="button">
        <a href="${cardContent.preview}" ><button id="modalBtn-1" type="button" class="testButton">See Project</button></a>
        </div>
      </div>
    </section>
  `;

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('d-none');
  const modalContent = document.createElement('div');
  modalContent.innerHTML = `
  <div class="work-content-modal">
    <span class="closeBtn">&times;</span>
      <h2 class="tonic0-modal">Tonic</h2>
      <ul class="prop-modal">
      <li class="can">CANOPY</li>
      <li class="bac"><img src="images/Counter.png" alt="dot"> Back End Dev</li>
      <li class="num"><img src="images/Counter.png" alt="dot"> 2015</li>
    </ul>

    <div class="portfolio-modal-img">
     <img src="${cardContent.image}" alt="${cardContent.name}">
    </div>

    <div class="tonic-def-modal">
    <p>${cardContent.desc}</p>
    </div>
    <div class="alignment">
      <ul class="stack-modal stack-desktop">
      <li class="html">html</li>
      <li class="css">css</li>
      <li class="js">javaScript</li><br />
      <li class="git">github</li>
      <li class="ruby">ruby</li>
      <li class="boot">Bootstraps</li>
    </ul>

    <img src="images/Separator-Bottom.png" alt="separator" class="line">

    <div class="modal-button">
      <a href="${cardContent.preview}" ><button id="modalBtn-0" type="button">See live <img src="images/modal-button-icon-1.svg" alt="modal-icon"></button></a>
      <a href="${cardContent.preview}" ><button id="modalBtn-1" type="button">See Source <img src="images/modal-button-icon-github.svg" alt="modal-icon-git"></button></a>
    </div>
    </div>
    </div>
  </div> 
  `;

  modal.appendChild(modalContent);
  item.appendChild(content);
  item.appendChild(modal);
  cardsContainer.appendChild(item);

  // popup interaction
  const openModal = item.querySelector('.testButton');
  const closeModal = item.querySelector('.closeBtn');

  openModal.addEventListener('click', (event) => {
    modal.classList.add('modal');
    modal.style.display = 'block';
    event.preventDefault();
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('modal');
    modal.style.display = 'none';
  });
});

// form validation
const form = document.querySelector('form');
const email = document.getElementById('femail');
const small = document.querySelector('small');

form.addEventListener('submit', (e) => {
  if (/[A-Z]/.test(email.value)) {
    small.innerHTML = 'Please enter email in small letters';
    e.preventDefault();
  } else {
    small.innerHTML = '';
  }
});

// local storage
window.onload = () => {
  // Check if localstorage is supported.
  if (localStorage) {
    // Add an event listener for form submissions
    document.getElementById('form-st').addEventListener('submit', () => {
      // Get the value of target fields.
      const name = document.getElementById('fname').value;
      const email = document.getElementById('femail').value;
      const text = document.getElementById('farea').value;

      // store key,values in array
      const items = {
        name,
        email,
        text,
      };
      // Save the items to localStorage.
      localStorage.setItem('data', JSON.stringify(items)); // make inputs to strings
    });
  }
};