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
// const cardsContainer = document.getElementById('cards')
const cardsContainer = document.querySelector('.portfolio-container')
cards.map((cardContent) => {

  const item = document.createElement('work-container-main');

  item.classList.add('work-container');
  item.classList.add('work-container-desktop')
  const content = document.createElement('work-container');

  content.innerHTML = `
  <div class="portfolio-img desktop-img-0">
    <img src="${cardContent.image}" alt="${cardContent.name}">
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

    <p class="tonic-def-modal">${cardContent.desc}</p>
      <ul class="stack stack-desktop">
      <li class="html">html</li>
      <li class="css">css</li>
      <li class="js">javaScript</li>
    </ul>

    <img src="images/Separator-Bottom.png" alt="separator">

    <div class="modal-button">
      <a href="${cardContent.preview}" ><button id="modalBtn-1" type="button">See live <img src="images/modal-button-icon-1.svg" alt="modal-icon"></button></a>
      <a href="${cardContent.preview}" ><button id="modalBtn-1" type="button">See Source <img src="images/modal-button-icon-github.svg" alt="modal-icon-git"></button></a>
    </div>

    </div>
  </div> 
  `;


  modal.appendChild(modalContent);
  item.appendChild(content);
  item.appendChild(modal);
  cardsContainer.appendChild(item);


  //popup interaction
  const openModal = item.querySelector('.testButton')
  const closeModal = item.querySelector('.closeBtn');

  console.log(closeModal);

  openModal.addEventListener('click', (event) => {
    modal.classList.add('modal');
    modal.style.display = 'block';
    event.preventDefault();
    console.log('WTF')
  });

  closeModal.addEventListener('click', () => {
    console.log('clicked')
    modal.classList.remove('modal');
    modal.style.display = 'none';
  });


});
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
// const cardsContainer = document.getElementById('cards')
const cardsContainer = document.querySelector('.portfolio-container')
cards.map((cardContent) => {

  const item = document.createElement('work-container-main');

  item.classList.add('work-container');
  item.classList.add('work-container-desktop')
  const content = document.createElement('work-container');

  content.innerHTML = `
  <div class="portfolio-img desktop-img-0">
    <img src="${cardContent.image}" alt="${cardContent.name}">
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

    <p class="tonic-def-modal">${cardContent.desc}</p>
      <ul class="stack stack-desktop">
      <li class="html">html</li>
      <li class="css">css</li>
      <li class="js">javaScript</li>
    </ul>

    <img src="images/Separator-Bottom.png" alt="separator">

    <div class="modal-button">
      <a href="${cardContent.preview}" ><button id="modalBtn-1" type="button">See live <img src="images/modal-button-icon-1.svg" alt="modal-icon"></button></a>
      <a href="${cardContent.preview}" ><button id="modalBtn-1" type="button">See Source <img src="images/modal-button-icon-github.svg" alt="modal-icon-git"></button></a>
    </div>

    </div>
  </div> 
  `;


  modal.appendChild(modalContent);
  item.appendChild(content);
  item.appendChild(modal);
  cardsContainer.appendChild(item);


  //popup interaction
  const openModal = item.querySelector('.testButton')
  const closeModal = item.querySelector('.closeBtn');

  console.log(closeModal);

  openModal.addEventListener('click', (event) => {
    modal.classList.add('modal');
    modal.style.display = 'block';
    event.preventDefault();
    console.log('WTF')
  });

  closeModal.addEventListener('click', () => {
    console.log('clicked')
    modal.classList.remove('modal');
    modal.style.display = 'none';
  });


});
