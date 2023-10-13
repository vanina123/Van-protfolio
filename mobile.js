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
    image: 'images/girl2.png',
    name: 'Child Education',
    preview: 'https://vanina123.github.io/My-capstone/',
    preview1: 'https://github.com/vanina123/My-capstone',
    code: 'A conference to promote girl child education',
    tags: ['html', 'css', 'javascript'],
    desc: "It is a web application that provides educational resources and activities for children. It can be used by parents, teachers, and other caregivers to help children learn and grow.",
  },
  {
    image: 'images/todo.png',
    name: 'ToDo list',
    preview: 'https://vanina123.github.io/Todo/dist/',
    preview1: 'https://github.com/vanina123/Todo',
    code: 'An app built with react and redux which you can add and delete a todo',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "This is a web application that allows users to create and manage to-do lists. It can be used by individuals, teams, and businesses to keep track of tasks and deadlines. The application can include a variety of features, such as:the ability to create and manage multiple to-do lists, the ability to mark tasks as complete, the ability to filter and sort tasks",
  },
  {
    image: 'images/book.png',
    name: 'Books App',
    preview: 'https://vanina123.github.io/Book-Js/',
    preview1: 'https://github.com/vanina123/Book-Js',
    code: 'This is an app that store and manages books',
    tags: ['html', 'React', 'css', 'javascript'],
    desc: "This is a react application that allows users to manage and store books",
  },
  {
    image: 'images/]yacht.png',
    name: 'Yacht Booking App',
    preview: 'https://yacht-booking-app.onrender.com/',
    preview1: 'https://github.com/vanina123/book_appointment_front',
    code: 'An online app that allows a user to reserve, add and delete yacht',
    tags: ['Ruby on rails', 'css', 'React'],
    desc: "This is a Ruby on rails application that a user signup after wish the user views all yacht avaiable in the application as well as he can add, reserver or delete a yacht",
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
          <li class="num"><img src="images/Counter.png" alt="dot"> 2023</li>
        </ul>
        <p class="tonic-def">${cardContent.code}</p>
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
      <li class="num"><img src="images/Counter.png" alt="dot"> 2023</li>
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
      <a href="${cardContent.preview}" target="_blank"><button id="modalBtn-0" type="button">See live <img src="images/modal-button-icon-1.svg" alt="modal-icon"></button></a>
      <a href="${cardContent.preview1}" target="_blank"><button id="modalBtn-1" type="button">See Source <img src="images/modal-button-icon-github.svg" alt="modal-icon-git"></button></a>
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
    const obj = JSON.parse(localStorage.getItem('data'));// parse string data
    if (obj !== 'undefined' || obj !== 'null') { // check if fields are empty or undefined
      document.getElementById('fname').value = obj.name; // to populate input fields use .value
      document.getElementById('femail').value = obj.email;
      document.getElementById('farea').value = obj.text;
    }
  }
};